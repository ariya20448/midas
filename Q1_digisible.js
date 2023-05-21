function isDivisible(num) {
  const digits = String(num).split("");

  // different numbers
  const uniqueDigits = new Set(digits);
  if (uniqueDigits.size !== digits.length) {
    return false;
  }

  // None of the digits is zero
  if (digits.includes("0")) {
    return false;
  }

  // divisible by each of its digits
  for (const digit of digits) {
    if (num % parseInt(digit) !== 0) {
      return false;
    }
  }

  return true;
}

console.log(isDivisible(Math.floor(Math.random() * 10_000) + 1));
