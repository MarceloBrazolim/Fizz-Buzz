for (x = 1; x < 101; x++) {
  let fb = "";
  if (x % 3 == 0) fb = "Fizz";
  if (x % 5 == 0) fb += "Buzz";
  console.log(fb || x);
}
