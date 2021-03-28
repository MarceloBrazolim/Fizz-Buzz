for x = 1, 100 do
    if (x % 3 == 0 and x % 5 == 0) then
        print("FizzBuzz")
    elseif (x % 3 == 0) then
        print("Fizz");
    elseif (x % 5 == 0) then
        print("Buzz");
    else
        print(x or fb)
    end
end
