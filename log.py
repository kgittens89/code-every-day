# // Day 1: 02/06/22 12:48pm

# // Today's Progress: Solved a kata 8 in Python!

# // Thoughts: I had a little bit of a hard time figuring out how to work with range and the for loop. Especially to make it count backwards. Ended up using some references from class and voila! Also, syntax is still shaky. Work on it

# Link(s) to work: https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/python

# Reversed sequence

# My Solution
def reverse_seq(n):
    arr = []
    for x in range(n, 0, -1):
        arr.append(x)
    return arr
        
print(reverse_seq(6))

# Some solutions from others 

# def reverseseq(n):
#     return list(range(n, 0, -1))

# def reverseseq(n):
#     return range(n, 0, -1)
