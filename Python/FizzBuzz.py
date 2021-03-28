for x in range(1, 101):
    fb = ''
    if x % 3 == 0:
        fb = "Fizz"
    if x % 5 == 0:
        fb += "Buzz"
    print(fb or x)
