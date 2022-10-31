# Python Containers Lab
Exercise = 1;
# Exercise 1
print(f"\n --- Exercise {Exercise} --- \n")
Exercise += 1

students = ["Sally", "Sara", "Saad"]

print(f"{students[1]}")
print(f"{students[2]}")

# Exercise 2
print(f"\n --- Exercise {Exercise} --- \n")
Exercise += 1

foods = ("apple", "banana", "mango")

for food in foods:
    print(f"{food} is good food")

# Exercise 3
print(f"\n --- Exercise {Exercise} --- \n")
Exercise += 1

for i, food in enumerate(foods):
    if (i == 0):
        continue
    print(food)

# Exercise 4
print(f"\n --- Exercise {Exercise} --- \n")
Exercise += 1

home_town = {
    "city": "Mardan",
    "state": "KP",
    "population": 350000,
}

print(f"I was born in {home_town['city']}, {home_town['state']}- population of {home_town['population']}")

# Exercise 5
print(f"\n Exercise {Exercise} \n")
Exercise += 1

for key,val in home_town.items():
    print(f"{key} = {val}")

# Exercise 6
print(f"\n --- Exercise {Exercise} --- \n")
Exercise += 1

cohort = []

for i,student in enumerate(students):
    studentDict = {
        "student" : student,
        "fav_food" : foods[i]
    }

    cohort.append(studentDict)

for student in cohort:
    print(f"{student}")

# Exercise 7
print(f"\n --- Exercise {Exercise} --- \n")
Exercise += 1

awesome_students = [f"{student} is awesome!" for student in students]

for student in awesome_students:
    print(f"{student}")
# Exercise 8