# Python functions lab

# --- Part 1 ---
# Q1
from re import sub
from shutil import ExecError


part_no = 1
exercise_no = 1
print(f"\n --- Part {part_no} Exercise {exercise_no} --- \n")
exercise_no = exercise_no + 1

def pokemon_contains(incoming_letter):
    if incoming_letter in "pokemon":
        return True
    return False

res1 = pokemon_contains("k")
res2 = pokemon_contains("o")

print(f"case k: {res1}")
print(f"case o: {res2}")

# Q2
print(f"\n --- Part {part_no} Exercise {exercise_no} --- \n")
exercise_no = exercise_no + 1

def sum_two(a,b):
    answer = a + b
    return answer

# res3 = sum_two(a , b)
# The error above is that there are no bindings that are viable arguments for sum_two, instead using the variable names in the functions
res3 = sum_two(4,5)
res4 = sum_two(5,6)

print(f"sum_two(4,5) = {res3}")
print(f"sum_two(5,6) = {res4}")

# Q3
print(f"\n --- Part {part_no} Exercise {exercise_no} --- \n")
exercise_no = exercise_no + 1

def multiply(num1,num2):
    answer = num1 * num2
    return answer

# The error above is the lack of return statement for multiply and the incorrect name for arguments

result5 = multiply(10,10)
print(result5)
result6 = multiply(5,6)
print(result6)

# Q4
print(f"\n --- Part {part_no} Exercise {exercise_no} --- \n")
exercise_no = exercise_no + 1

def multiplication(a,b):
    my_answer = a*b
    print("Calculating...")
    return my_answer

print("Let's Multiply stuff...")
answer = multiplication(5,6)
answer = str(answer)
print("The answer is..." + answer)

# Q5
print(f"\n --- Part {part_no} Exercise {exercise_no} --- \n")
exercise_no = exercise_no + 1

def subtract(a,b):
    return a - b

res7 = subtract(10,5)
res8 = subtract(1024, 512)

print(f"subtract(10,5) = {res7}")
print(f"subtract(1024,512) = {res8}")

# Q6
print(f"\n --- Part {part_no} Exercise {exercise_no} --- \n")
exercise_no = exercise_no + 1

def greater_than_5(arg):
    return arg > 5

res9 = greater_than_5(3)
res10 = greater_than_5(10)

print(f"greater_than5(3) {res9}")
print(f"greater_than5(10) {res10}")

# --- Part 2 ---
part_no = 2
exercise_no = 1

# Q1
print(f"\n --- Part {part_no} Exercise {exercise_no} --- \n")
exercise_no = exercise_no + 1

def sum_to(n):
    res = 0

    for i in range(n + 1):
        res += i
    
    return res

res1 = sum_to(6)
res2 = sum_to(10)

print(f"sum_to(6) {res1}")
print(f"sum_to(10) {res2}")


# Q2
print(f"\n --- Part {part_no} Exercise {exercise_no} --- \n")
exercise_no = exercise_no + 1

def largest(numbers):
    rsf = numbers[0]

    for i in range(len(numbers)):
        if numbers[i] > rsf:
            rsf = numbers[i]
    
    return rsf
res1 = largest([1, 2, 3, 4, 0])  # returns 4
res2 = largest([10, 4, 2, 231, 91, 54])  # returns 231

print(f"largest([1, 2, 3, 4, 0]) = {res1}")
print(f"largest([10, 4, 2, 231, 91, 54]) = {res2}")

# Q3
print(f"\n --- Part {part_no} Exercise {exercise_no} --- \n")
exercise_no = exercise_no + 1

def occurances(string1, string2):
    counter = 0
    delta = len(string2)
    idx = string1.find(string2);

    while(idx != -1):
        counter += 1

        string1 = string1[idx + delta :]
        idx = string1.find(string2)

    return counter

res1 = occurances("AAAA", "A")
res2 = occurances('fleep floop', 'ee')

print(f"occurances('AAAA', 'A') = {res1}")
print(f"occurances('fleep floop', 'ee') = {res2}")

# Q4
print(f"\n --- Part {part_no} Exercise {exercise_no} --- \n")
exercise_no = exercise_no + 1

def product(*args):
    ans = 1
    
    for arg in args:
        ans *= arg
    
    return ans

res1 = product(-1, 4) # returns -4
res2 = product(2, 5, 5) # returns 50
res3 = product(4, 0.5, 5) # returns 10.0

print(f"product(-1, 4) = {res1}")
print(f"product(2, 5, 5) = {res2}")
print(f"product(4, 0.5, 5) = {res3}")
