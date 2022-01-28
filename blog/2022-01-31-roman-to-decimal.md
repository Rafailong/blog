---
slug: roman-to-decimal
title: roman number to decimal number
authors: [ravila]
tags: [scala, algo]
---

## description

roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.

```
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

for example, 2 is written as `II` in roman numeral, just two one's added together. 12 is written as `XII`, which is simply `X + II`. 
the number 27 is written as `XXVII`, which is `XX + V + II`.

roman numerals are usually written largest to smallest from left to right. however, the numeral for four is not `IIII`. 
instead, the number four is written as `IV`. because the one is before the five we subtract it making four. 
the same principle applies to the number nine, which is written as `IX`. 
there are six instances where subtraction is used:

- `I` can be placed before `V` (5) and `X` (10) to make 4 and 9. 
- `X` can be placed before `L` (50) and `C` (100) to make 40 and 90. 
- `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.

given a roman numeral, convert it to an integer.

### constraints

- `1 <= s.length <= 15`
- `s` contains only the characters (`I`, `V`, `X`, `L`, `C`, `D`, `M`).
- it is guaranteed that s is a valid roman numeral in the range [1, 3999].

## solution


this time we are going to try to solve the challenge in 3 different ways.
but firts, let's define two support `Map`s:

```scala
val symbolAndValue = Map(
    'I' -> 1,
    'V' -> 5,
    'X' -> 10,
    'L' -> 50,
    'C' -> 100,
    'D' -> 500,
    'M' -> 1000
  )

val specialSymbols = Map(
  "IV" -> 4,
  "IX" -> 9,
  "XL" -> 40,
  "XC" -> 90,
  "CD" -> 400,
  "CM" -> 900
)
```

### scala as a better java

let's implement a function using scala as a better java).
so, our function should:

- mutate state
- and, iterate not recurs

```scala
def romanToIntJavaLike(s: String): Int = {
  var sum = 0
  val size = s.length
  var i = 0
  while (i < size) {
    val a = s(i)

    // extracting next char
    val j = i + 1
    if (j < size) {
      val str = s"$a${s(j)}"

      // and finding if the pair of current and next is s special case
      specialSymbols.get(str) match {
        case Some(n) =>
          sum = sum + n
          i = i + 2
        case None =>
          symbolAndValue.get(a).foreach { n =>
            sum = sum + n
            i = i + 1
          }
      }
    } else {
      symbolAndValue.get(a).foreach { n =>
        sum = sum + n
        i = i + 1
      }
    }

  }

  sum
}
```

as you can see, `ronamToIntJavaLike`:

- defines a accumulator `sum` 
- iterate its input string `s` char-by-char
- crusial part is checking if there is a next char from our current char so we can check if the pair is a special case

let's give it a try:

```scala
romanToIntJavaLike("III")     // 3
// res0: Int = 3     // 3
romanToIntJavaLike("LVIII")   // 58
// res1: Int = 58   // 58
romanToIntJavaLike("MCMXCIV") // 1994
// res2: Int = 1994
```

welp, implementation seems to work.

### scala-ish?

the scala-ish solution should:

- be tail recursive
- leverage pattern matching

```scala
def romanToInt(s: String): Int = {
  val valueOfSymbol: Char => Int = symbolAndValue.getOrElse(_, 0)

  @tailrec
  def go(chars: List[Char], sum: Int): Int = {
    chars match {
      case c1 :: c2 :: tail =>
        specialSymbols.get(s"$c1$c2") match {
          case Some(n) => go(tail, sum + n)
          // note that if c1 and c2 pair was not an specil sumbol i.e. IV
          // we only discard c1 and c2 is part of our collection for the next
          // recursive call
          case None    => go(c2 :: tail, valueOfSymbol(c1) + sum)
        }
      case c1 :: tail => go(tail, valueOfSymbol(c1) + sum)
      case Nil        => sum
    }
  }

  go(s.toList, 0)
}
```

let's give it a try:

```scala
romanToInt("III")
// res3: Int = 3
romanToInt("LVIII")
// res4: Int = 58
romanToInt("MCMXCIV")
// res5: Int = 1994
```

welp, this implementation seem to work correctly too! yay!
