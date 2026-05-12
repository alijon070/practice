'''L-TASK (NodeJS)

Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";
'''
a = "we like coding!"


def reverseSentence(a):
    c = a.split()
    # d = c[::-1]
    print(c)
    # print(d)
    result = []
    string = ""
    for value in c:
        result.append(value[::-1])
        string = " ".join(result)
    return string


reverseSentence(a)

result = reverseSentence(a)
print(result)


'''K-TASK (PYTHON)

Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
MASALAN: find_longest("I come from Uzbekistan ") return "Uzbekistan"
'''


''' b = "I come from Uzbekistan Afghanistan SouthKoreaofNorth"


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
'''

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
