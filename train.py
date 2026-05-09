'''K-TASK (PYTHON)

Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
MASALAN: find_longest("I come from Uzbekistan ") return "Uzbekistan"
'''
b = "I come from Uzbekistan Afghanistan SouthKoreaofNorth"


def find_longest(a):
    c = a.split()
    print(c)
    length = 0
    value = ""
    for word in c:
        if len(word) > length:
            length = len(word)
            value = word

    return value


result = find_longest(b)
print(result)

''' I-TASK (PYTHON)

Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
MASALAN: get_digits("m14i1t") return qiladi "141"
'''
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
'''
