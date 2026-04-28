nums = [1, 2, 4, 6]

index = nums[-1]
# print(index)
num = []

for i in range(nums[0], index+1):
    num.append(i)

# print(num)

numm = set(num)
numbs = set(nums)

result = numm - numbs
print(result)


a = [1, 2, 3, 4]
b = [2, 3, 5]
c = [2, 3, 6]

resultt = a & b & c
