print("===== number =====")
# in JAVA, variable is a name storage location!
# in Python, vRIbles is anmed reference!

count = 100
count_type = type(count)
print("count", count, count_type)
print(f"the count: {count} and type: {count_type}")

result1 = count.bit_count()  # method
result2 = count.numerator  # state
print(result1, result2)

print("===== string =====")

course = "AI Python Fullstack"
result = type(course)
print(f"the type of course: {result}")
result = course.title()
print(f"the result:", {result})

result = course.upper()
print(f"the result:", {result})

result11 = count

result11 = 30
print(count)
