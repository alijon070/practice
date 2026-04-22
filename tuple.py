'''Tuple
(1) What is tuple: tuple vs list
(2) Unpacking arguments
(3) zip
'''

print("===== What is tuple: tuple vs list =====")
# Java/PHP/NodeJS array => Python list

# literal
numbs = [3, 5, 1, 2]
print(numbs)
# car_dict = {"brand": "Ferrari", "year": 1995}

# constructors
letter = list("Hello World")
# person_dict = dict(name="Martin", age=35)
print(letter)

fruits = ["apple", "lemon", "banana", "kiwi"]
print("before fruits:", fruits)

fruits[2] = "melon"
print("after fruits:", fruits)

# tuple
animals = ("dog", "cat", "fish", "lion")
tuplr_obj = ("MIT", 100, True, None)

print(animals[0])
animal[0] = "bird"
