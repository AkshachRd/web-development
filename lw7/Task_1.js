function isPrimeNumber(n) {
  let isPrime
  let exit = false
  if (typeof n === 'number') {
    n = [n]
  }
  else {
    for (let k in n) {
      if (typeof n[k] !== 'number') {
        console.log('Error: incorrect type of array\'s element')
        exit = true
      }
    }
  }
  if (!exit) { 
    for (let i in n) {
      isPrime = true
      for (let j = 2; j < n[i]; j++) {
        if (n[i] % j == 0) {
          isPrime = false
          break
        }
      }
      if (isPrime) {
        console.log(n[i] + ' is prime number')
      }
      else {
        console.log(n[i] + ' is not prime number')
      }
    }
  }
}
isPrimeNumber(5)