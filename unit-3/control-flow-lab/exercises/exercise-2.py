# exercise-02 Length of Phrase

# Write the code that:
# 1. Prompts the user to enter a phrase:
#      Please enter a word or phrase: 
# 2. Print the following message:
#      - What you entered is xx characters long
# 3. Return to step 1, unless the word 'quit' was entered.

while(True):
    print("Please enter a word or phrase:")

    userInput = input()

    if(userInput == "quit"):
        print("Goodbye")
        break

    print(f"Your phrase: {userInput}\n is {len(userInput)} characters long!")