''' List
(1) Working with lists
(2) List methods
(3) Lambda function
(4) enumarate, map and filter
'''

print("===== Working with lists =====")
# Java/PHP/NodeJS array => Python list

# literal
person = {"name": "Justin", "age": 25}  # dictionary
people = ("Andrew", "John", "Michael")  # tuple
groups = ["MIT", "FLEXY", "DEVEX", "MG"]  # list
for team in groups:
    print(f"the team: {team}")


# construtor
letters = list("Hello World")
print(f"the letters: {letters} and size: {len(letters)}")

print("-------")
fruits = ["apple", "orange", "lemon", "kiwi"]

a = fruits[0]
b = fruits[0:2]
c = fruits[::3]
d = fruits[::-1]

print("a:", a)
print("b:", b)
print("c:", c)
print("d:", d)


print("===== List methods =====")
# methods > append() insert() pop() remove() clear() sort() index()

letters = ["a", "d", "b"]

letters.append("c")  # add behind
print(f"the append result: {letters}")

letters.insert(0, "z")  # add front
print(f"the insert result: {letters}")

size = len(letters) - 1
result = letters.pop(size)  # pop behind
print(f"the pop result: {letters}")

result = letters.pop(0)  # pop front
print(f"the pop result: {letters}")


print("-----------")
animals = ["dog", "cat", "capybara", "fish", "lion"]
print("animals:", animals)

animals.remove("lion")
print("remove:", animals)

del animals[2:3]
print("remove:", animals)

exist = animals.index("cat")
print("exist:", exist)
animals.clear()
print("animals clear:", animals)

if "cat" in animals:
    print("index of cats", animals.index("cat"))
else:
    print("cat does not exist")

print("----------")
numbers = [2, 20, 12, 8, 57]
numbers.sort()
print("sort default:", numbers)
numbers.sort(reverse=True)
print("sort reverse:", numbers)

# immutable sorted
numbs = [2, 20, 12, 100]
new_numbs = sorted(numbs)
print(f"the sorted numbs: {numbs} and new_numbs: {new_numbs}")
