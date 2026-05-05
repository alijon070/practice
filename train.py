''' I-TASK (PYTHON)

Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
MASALAN: get_digits("m14i1t") return qiladi "141"
'''

nums = []


def get_digits(a):
    digit = ""
    for letter in a:
        if letter.isdigit():
            digit += letter
    return digit


result = get_digits("m14i1t")
print(result)
