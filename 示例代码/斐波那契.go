package main

import (
    "fmt"
    "strconv"
)

func 斐波那契(n int) int {
    if n <= 1 {
        return n
    }
    return 斐波那契(n-1) + 斐波那契(n-2)
}

func main() {
    fmt.Printf(strconv.Itoa(斐波那契(16)))
}