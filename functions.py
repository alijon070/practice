''' FUNCTIOND
(1) DEFINE vs CALL
(2) PARAMETR vs ARGUMENT
(3) KEYWORD & DEFAULT ARGUMENTS
(4) SCOPE
'''

print("=====   DEFINE(parametr) vs CALL(argument)  =====")
# built in function > print( ) type()
# Fuction - reusable block f code!
# Instead of block {} in JAVA, Python uses indentation!


# DEFINE - built
def greet(a):
    print(f"How do you do, {a}")


def greeting(b):
    print(f"greeting is executed")
    return f"Hi {b}"


# CALL - execute
result1 = greet("MARTIN")
print("result1:", result1)

result2 = greeting("Justin")
print("result2", result2)
