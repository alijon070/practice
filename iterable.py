print("===== Iterable objects & RANGE =====")
# Iterable objects > string dict tuple list range map filter

range_obj = range(3)
print("range_obj:", range_obj)

text = "MIT"
for letter in text:
    print(f"the letter: {letter}")
for ele in range_obj:
    print(f"the letter: {letter}")

print("===== DICTIONARY =====")
# Dictionary is JSON object!
person = {"name": "Justin", "age": 25, "single": True}
person_obj = dict(name="Justin", age=25, single=True)
print(f"the person: {person}")
print(f"the person: {person_obj}")

# method: get()
# name = person_obj["name"]
name = person_obj.get("name")
hobby = person_obj.get("hobby")
balance = person_obj.get("balance", 0)
print(f"the name: {name}, hobby: {hobby} and balance: {balance}")
# print("name:", name)

# name2 = person_obj["hobby"]
# print("name2:", name2)

del person_obj["single"]
for key in person_obj:
    print(f"the key: {key} > value {person_obj.get(key)}")
