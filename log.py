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
        
# print(reverse_seq(6))

# Some solutions from others 

# def reverseseq(n):
#     return list(range(n, 0, -1))

# def reverseseq(n):
#     return range(n, 0, -1)







# // Day 2: 02/07/22 0800
# // Today's Progress: 

# // Thoughts: 

# Simple: given a string of words, return the length of the shortest word(s). String will never be empty, and you do not need to account for different data types.

# Link to work: https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/python

def shortest_word(string): 
    # your lovely code here!
    words = string.split(' ')
    shortest = words[0]

    for word in words:
        if len(word) < len(shortest):
            shortest = word

    return len(shortest)

print(shortest_word("I don't think that word means what you think it means"))
    # should return: 1


# Given a 2D list of size m * n, your task is to find the sum of the minimum value in each row.

# Link to work: https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/python

def sum_of_minimums(list):
    # your lovely code goes here!
    sum = 0
    for x in list:
        sum += min(x)
    return sum

my_list = [
    [1,2,3,4,5], # minimum value of row is 1
    [5,6,7,8,9], # minimum value of row is 5
    [20,21,34,56,100] # minimum value of row is 20
    ]

# print(sum_of_minimums(my_list))
    # should return 26


# Given a string, complete the function so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore('_').

# Link to work: https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/python

def split_strings(s):
    # your lovely code goes here!
    split_string = []

    for x in range(0, len(s), 2):
        split_string.append(s[x : x + 2])
        
    for x in range(0, len(split_string)):
        if len(split_string[x]) < 2:
            split_string[x] = f'{split_string[x]}_'

    return split_string
    

# print(split_strings('abc'))
# # should return ['ab', 'c_']

# print(split_strings('abcdef'))
# # should return ['ab', 'cd', 'ef']