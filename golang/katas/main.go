package main

import "fmt"

func main() {
    option := menu()

    for {
        print("\nYou've choose the option " + option + ".\n")
        if option == "0" {
            break
        } else {
            option = menu()
        }
    }

}

func menu() string  {
    fmt.Printf("\nUser Menu:\n")
    fmt.Printf("0 - Exit.\n")
    fmt.Printf("1 - Hello.\n")
    fmt.Printf("2 - Bye.\n")
    fmt.Printf("3 - IDK.\n")

    var option string
    fmt.Printf("\nChoose an option: \n")
    _, err := fmt.Scan(&option)

    if err != nil {
        return "0"
    }

    return option
}
