''' CLASS deep dive
(1) ENCAPSULATION
(2) INHERITENCE
(3) POLIMORPHISM
'''

print("===== INHERITENCE ======")
# PARENT > CHILD
# Parent can provide only private and protected properties(states 7 methods) to child


class Animal(object):
    # state
    description = 'The class creates animals'

    # constructor
    def __init__(self, voice, status):
        self._status = "animal is alive"
        self.voice = voice

    # method
    def make_voice(self):
        print(f"the animal can make voice: {self.voice}")


class Dog(Animal):  # Child
    # state

    # constructor
    def __init__(self, name, sound, voice, status):
        self.name = name
        self.sound = sound
        super().__init__(voice, status)
    # self.voice = voice

    # method
    def introduce(self):
        print(f"{self.name} says: {self.sound}-{self.sound}")

    def protect(self):
        print("Yes, I can protect you")

    def make_voice(self):
        print(f"{self.name} says: {self.sound}")


class Cat(Animal):  # Child
    # state

    # constructor
    def __init__(self, name, sound, voice, status):
        self.name = name
        self.sound = sound
        super().__init__(voice, status)

    # method
    def introduce(self):
        print(f"{self.name} says: {self.sound}-{self.sound}")

    def play(self):
        print("Yes, I can play")


class Fish(Animal):  # Child

    # state

    # constructor
    def __init__(self, name, sound, voice, status):
        self.name = name
        self.sound = sound
        super().__init__(voice, status)

    # method
    def introduce(self):
        print(f"{self.name} says: {self.sound}-{self.sound}")

    def swim(self):
        print("Yes, I can swim")


dog = Dog("Rex", "wow", True, True)
cat = Cat("Tom", "myeow", True, True)
fish = Fish("Nemo", "Zzz", False, True)

dog.introduce()
cat.introduce()
fish.introduce()

dog.make_voice()
cat.make_voice()
fish.make_voice()

print("------")
print(Animal.description)
print(dog.description)

print(dog.voice, fish.voice)
print("status:",  dog._status)
print("status:",  cat._status)

print("===== POLIMORPHISM ======")

dog.make_voice()

# fish > Fish > Animal > object
a = isinstance(fish, Fish)
b = isinstance(fish, Animal)
c = isinstance(fish, object)
d = isinstance("MIT", object)


result = a and b and c and d
print(f"result:", result)

# Fish > Animal > object
data = issubclass(Fish, Animal)
data2 = issubclass(Animal, object)
print("data:", data, data2)
