function fizzBuzz(n: number): string {
  let result = '';
  if (n % 3 === 0) {
    result += 'Fizz';
  }
  if (n % 5 === 0) {
    result += 'Buzz';
  }
  return result || n.toString();
}

// Exemple d'utilisation
for (let i = 1; i <= 20; i++) {
  console.log(fizzBuzz(i));
}
