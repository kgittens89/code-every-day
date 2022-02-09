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

# // Thoughts: These were suprisingly not terrible to get through. Ran into a little trouble getting the _ to add on for split_string. 

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




# // Day 3: 02/08/22 0800
# // Today's Progress: 

# // Thoughts: 


# Your goal is to create a function that removes the first and last character of a string. You're given one parameter, the original string. All input strings will be two characters or longer.

# Link: https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0


def remove_char(s):
    # your code here! 
    return s[1:-1]

# print(remove_char('eloquent')) # -> 'loquen'
# print(remove_char('country'))  # -> 'ountr'
# print(remove_char('person')) # -> 'erso'
# print(remove_char('place')) # -> 'lac'
# print(remove_char('ok')) # -> ''
# print(remove_char('ooopsss')) # -> 'oopss'



# Find the greatest common divisor of two positive integers without using a Python library. The integers may be large, so after you write a brute force solution, try to find a more efficient solution.

# The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is greater than or equal to 1.


# Link https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd

def mygcd(x, y):
    # your code here!
    gcd = 0
    iterator = min(x, y)

    for i in range(1, iterator, 1):
        if x % i == 0 and y % i == 0:
            gcd = i 

    return gcd


    # while y:
    #     z = x
    #     x = y
    #     y = z % y
    # return x



# the basics
# print(mygcd(30,12)) # -> 6
# print(mygcd(8,9),1) # -> 1
# print(mygcd(1,1),1) # -> 1

# some bigger numbers -- try these after you get the basics to work
# if your solution is Big O(N), how could you improve the time complexity?
# print(mygcd(4805817,7783376)) # -> 227
# print(mygcd(6285978,22959909)) # -> 1593
# print(mygcd(15713250,10063368)) # -> 1722





# Given a string of words, you need to find the highest scoring word. Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

# You need to return the highest scoring word as a string. If two words score the same, return the word that appears first in the original string. All letters will be lowercase and all inputs will be valid.

# Link https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/

def highest(s):
  # your code here!
    highest_score = 0
    highest_word = ''
    split_strings = s.split()

    for word in split_strings:
        letters = list(word)
        # print(letters)
        current = 0
        for x in letters:
            current += (ord(x) - 96)
            print(current)
            if current > highest_score:
                highest_score += current
                highest_word = word

    

    return highest_word

print(highest('man i need a taxi up to ubud')) # -> 'taxi'
print(highest('what time are we climbing up the volcano')) # -> 'volcano'
print(highest('take me to semynak')) # -> 'semynak'

# NEED TO FINISH!!!!

#   split_letters = [char for char in s]
#   highest_word = 0
#   current_count = 0

#   for x in split_letters:    
#     current_count += ord(x) - 96

#     if current_count > highest_word:
#         highest_word = current_count

# for x in split_strings:
#     print(x)
    # for e in range(0, len(x)):
    #     print(e)