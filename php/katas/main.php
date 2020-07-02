<?php

function menu() {
    printf("User Menu:\n");
    printf("0 - Exit.\n");
    printf("1 - Hello.\n");
    printf("2 - Bye.\n");
    printf("3 - IDK.\n");
    printf("Choose an option: ");

    $option = $input = rtrim(fgets(STDIN));

    return $option;

}

function user_interface() {
    $option = menu();

    while ($option != 0) {
        printf("\nYou've choose the option " . $option . ".\n");
        $option = menu();
    }
}

user_interface();