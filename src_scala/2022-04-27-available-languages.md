---
slug: available-languages
title: find available languages
authors: [ravila]
tags: [scala, interview]
---

## description

recentry i have been in interviews to find a new professional opportunity.
i got this code challenge from on of those interviews.

what i liked about this particular interview was that the code challenge had progressions/iterations:
every time i solved it, the interviewer added constraints or scenarios to support.

the code challenge was to implemente the following function:

```scala
/**
 * @param header a comma-separated list of languages preferred by the client (in order) `en-US,fr-CA,de-DE`
 * @param availableLanguages set of available languages in the platform
 * @return the available languages preferred by the client (in order) in the platform
 */
def languages(header: String, availableLanguages: Set[String]): Set[String] = ???
```

<!--truncate-->

### 1 - simple

the first solution was straightforward.
note that in this solution we worked under some assumptions like:

- `header` is always a good (well-formed) value
- `header` is never empty

i decided to iterate over the client's preferred languagues as that what we are interested in.

```scala mdoc
def languages1(header: String, availableLanguages: Set[String]): Set[String] =
  header
    .split(",")
    .toSet // working with set to prevent duplicates
    .flatMap(l => availableLanguages.filter(_ == l))

languages1(
  header             = "en-US,fr-CA",
  availableLanguages = Set("fr-FR", "de-DE", "en-CA", "en-US", "fr-CA")
).mkString(", ")
```

### 2 - support locale-only

then, the interviewer added an new use-case:

- `header` might include locale only values i.e. `hearder = "en-US,fr"`

so i decided to use regex to validate the values after splitting `header`

```scala mdoc
def languages2(header: String, availableLanguages: Set[String]): Set[String] =
  header
    .split(",")
    .toSet
    .filter(_.matches("""([a-z]{2}\-[A-Z]{2})|([a-z]{2})"""))
    .flatMap { l =>
      availableLanguages.filter(_ startsWith l)
    }

languages2(
  header             = "en-US,fr",
  availableLanguages = Set("fr-FR", "de-DE", "en-CA", "en-US", "fr-CA")
).mkString(", ")
```

### 3 - support wildcard (at the end of the header value)

third time's the charm!

a new use-case was added:

- to suppport wild-card `*` at the end of the `header` value i.e. `en-US,de-DE,*`

as you migh notice i changed the signature of the code-challenge' function to return
a `ListSet` instead of a `Set`. i did that becuase:

- i needed the elements to be in the order that they were inserted, and
- i also needed `Set` operations to prevent duplicates and use `Set::diff` feature

```scala mdoc
import scala.collection.immutable.ListSet

def languages3(
  header: String,
  availableLanguages: Set[String]
): ListSet[String] = {
  val clientlanguages = header
    .split(",")
    .filter(_.matches("""([a-z]{2}\-[A-Z]{2})|([a-z]{2})|(\*)"""))
    .distinct

  val tmpResult = ListSet.from {
    clientlanguages.flatMap { l =>
      availableLanguages.filter(_ startsWith l)
    }
  }

  if !clientlanguages.contains("*") then tmpResult
  else tmpResult ++ availableLanguages.diff(tmpResult)
}

languages3(
  header             = "en-US,fr,*",
  availableLanguages = Set("fr-FR", "de-DE", "en-CA", "en-US", "fr-CA")
).mkString(", ")
```

### 4 - support wildcard in any position of header

the last use-cased that the interviewed added was to support wild-card `*` in any position in the `header` value.

again, `ListSet` saved the day because if we get the wild-card in the middle (like in the example bellow)
we need to make sure that the langugages after it (requested by the client) are at the end
of our return value.

```scala mdoc
def languages4(
  header: String,
  availableLanguages: Set[String]
): ListSet[String] =
  header
    .split(",")
    .filter(_.matches("""([a-z]{2}\-[A-Z]{2})|([a-z]{2})|(\*)"""))
    .distinct
    .foldLeft(ListSet.empty[String]) {
      case (acc, l) if l == "*" => acc ++ availableLanguages.diff(acc)
      case (acc, l) =>
        val news = availableLanguages.filter(_.startsWith(l))
        (acc -- news.toSet) ++ news
    }

languages4(
  header             = "en-US,*,fr",
  availableLanguages = Set("fr-FR", "de-DE", "en-CA", "en-US", "fr-CA")
).mkString(", ")
```

[`ListSet` docs](https://www.scala-lang.org/api/3.1.2/scala/collection/immutable/ListSet.html)