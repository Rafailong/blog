#!/usr/bin/env kscript

fun sortedSquaredArray(array: List<Int>): List<Int> {
    val acc = mutableListOf<Int>()

    for (n in array) {
        val sqr = n * n

        if (acc.isEmpty()) acc.add(sqr)
        else {
            val i = (acc.binarySearch(sqr, 0, acc.size) + 1).absoluteValue
            acc.add(i, sqr)
        }
    }

    return acc
}