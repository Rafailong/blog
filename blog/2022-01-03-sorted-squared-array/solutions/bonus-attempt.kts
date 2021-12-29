#!/urs/bin/env kscript

fun sortedSquaredArray(array: List<Int>): List<Int> {

    fun add(n: Int, list: List<Int>): List<Int> {
        val (l, g) = list.partition { x -> x <= n }
        return l.plus(n).plus(g)
    }

    return array.fold(listOf()) { acc, n ->
        add(n * n, acc)
    }
}