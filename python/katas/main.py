def user_interface():
    option = menu()

    while option != 0:
        print(f"You've choose the option {option}.")
        option = menu()

def menu():
    print("User Menu:")
    print("0 - Exit.")
    print("1 - Hello.")
    print("2 - Bye.")
    print("3 - IDK.")

    option = input("Choose an option: ")
    return int(option)


if __name__ == "__main__":
    user_interface()
