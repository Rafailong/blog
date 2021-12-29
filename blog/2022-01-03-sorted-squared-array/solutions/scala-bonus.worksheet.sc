/**
 * scala 3.1.0
 */

// binary-search based (not stack-safe)
final def add(list: List[Int], n: Int): List[Int] =
   list match
     case Nil => List(n)
     case x :: Nil if n >= x => list :+ n
     case x :: Nil if n < x  => n +: list
     case _ =>
       val size = list.size
       val middleIndex: Int = size  / 2
       val middleValue: Int = list(middleIndex)
       val (l, g) = list.splitAt(middleIndex)
       if n > middleValue then
         l ++ add(list.slice(middleIndex, size), n)
       else
         add(list.slice(0, middleIndex), n) ++ g

def sortedSquaredArray(list: List[Int]): List[Int] =
  list.foldLeft(List.empty) { (acc, n) =>
    add(acc, n * n)
  }

val result =sortedSquaredArray(List(-3, -2, 1))
assert(result == List(1, 4, 9))
