# exercise-05 Fibonacci sequence for first 50 terms

# Write the code that:
# 1. Calculates and prints the first 50 terms of the fibonacci sequence.
# 2. Print each term and number as follows:
#      term: 0 / number: 0
#      term: 1 / number: 1
#      term: 2 / number: 1
#      term: 3 / number: 2
#      term: 4 / number: 3
#      term: 5 / number: 5
#      etc.

# Hint: The next number is found by adding the two numbers before it

def genFib(n):
    prev, curr, temp = 0, 0, 0
    counter = 0

    while(n > 0):
        if counter < 1:
            prev = curr
            curr = curr + 1
        else:
            temp = curr
            curr = prev + curr
            prev = temp

        counter = counter + 1
        n = n -1

        print(f"term: {counter} / number: {curr}")
    
    return

genFib(50)
            
