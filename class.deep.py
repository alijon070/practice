''' CLASS deep dive
(1) ENCAPSULATION
(2) INHERITENCE
(3) POLIMORPHISM
'''

# print("===== ENCAPSULATION =====")
'''
C++ JAVA > public private protected
PYTHON   > public __private _protected
'''


class Account():
    # state
    description = "The class makes bank accounts"
    # constructor

    def __init__(self, owner, amount):
        self.__owner = owner
        self.__amount = amount

    # method
    def get_balance(self):
        print(f"the owner {self.__owner} has {self.__amount} usd")

    def deposit(self, amount):
        print("* deposit executed")
        self.__amount += amount

    def withdraw(self, amount):
        print("* withdraw executed")
        self.__amount -= amount

    @property
    def holder(self):
        return self.__owner

    @holder.setter
    def holder(self, new_owner):
        print(":change_ownership", new_owner)
        self.__owner = new_owner

    def change_ownership(self, new_owner):
        print(":change_ownership", new_owner)
        self.__owner = new_owner


my_account = Account("Shawn", 1000)
my_account.get_balance()
print("------")
my_account.deposit(3500)
my_account.withdraw(400)
my_account.get_balance()

print("------")
my_account.amount = 1000000
my_account.owner = "MARTIN"
my_account.amount = 100000000
my_account.get_balance()


try:
    result = my_account.__amount
    print("result:", result)
except Exception as err:
    print("No target state found:", err)

account_owner = my_account.holder
print("account_owner", account_owner)

print("owner before:", my_account.holder)  # state

my_account.change_ownership("Martin")
my_account.holder = "Martin"
print("owner after:", my_account.holder)
