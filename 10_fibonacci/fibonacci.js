const fibonacci = function (number) {
  number = parseInt(number);
  if (number < 0) {
    return "OOPS";
  }
  let first = 1;
  let second = 1;
  let nthnumber = 2;
  while (nthnumber < number) {
    let buf = second;
    second = first + second;
    first = buf;
    nthnumber++;
  }
  return second;
};

// Do not edit below this line
module.exports = fibonacci;
