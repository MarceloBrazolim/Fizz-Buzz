for (x = 1; x < 101; x++) {
  var fb = "";
  if (x % 3 == 0) fb = "Fizz";
  if (x % 5 == 0) fb += "Buzz";
  if (!fb) {
    console.log(x);
  } else console.log(fb);
}
