# exercise-06 What's the  Season?

# Write the code that:
# 1. Prompts the user to enter the month (as three characters):
#      Enter the month of the year (Jan - Dec):
# 2. Then prompts the user to enter the day of the month: 
#      Enter the day of the month:
# 3. Calculate what season it is based upon this chart:
#      Dec 21 - Mar 19: Winter
#      Mar 20 - Jun 20: Spring
#      Jun 21 - Sep 21: Summer
#      Sep 22 - Dec 20: Fall
# 4. Print the result as follows:
#      <Mmm> <dd> is in <season> 

# Hints:
# Consider using the in operator to check if a string is in a particular list/tuple like this:
# if input_month in ('Jan', 'Feb', 'Mar'):
#
# After setting the likely season, you can use another if...elif...else statement to "adjust" if
# the day number falls within a certain range.

def calcDayNum(month, day):
    monthDict = {
        "Jan" : 1,
        "Feb" : 2,
        "Mar" : 3,
        "Apr" : 4,
        "May" : 5,
        "Jun" : 6,
        "Jul" : 7,
        "Aug" : 8,
        "Sep" : 9,
        "Oct" : 10,
        "Nov" : 11,
        "Dec" : 12
    }

    return monthDict[month] * 100 + int(day)

def getSeason(month, day):
    startWinter = calcDayNum("Dec" , 21)
    startSpring = calcDayNum("Mar", 19)
    startSummer = calcDayNum("Jun", 21)
    startFall = calcDayNum("Sep", 21)
    
    dayNum = calcDayNum(month, day)
    season = ""
    
    if startSpring <= dayNum < startSummer:
        season = "Spring"
    elif startSummer <= dayNum < startFall:
        season = "Summer"
    elif startFall <= dayNum < startWinter:
        season = "Fall"
    else:
        season = "Winter"

    return season

print("Enter the month of the year (Jan - Dec):")
month = input()

print("Enter the day of the month:")
day = input()

season = getSeason(month, day)

print(f"{month} {day} is in {season}")