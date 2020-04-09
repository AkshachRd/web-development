function calc(str) {
  let l = 0;
  let n = str.length;
  console.log( answ(n, l) );
}
function findNum(n, l) {
  let num = '';
  //
  while (l < n) {
    if (
      n[l] === '0' ||
      n[l] === '1' ||
      n[l] === '2' ||
      n[l] === '3' ||
      n[l] === '4' ||
      n[l] === '5' ||
      n[l] === '6' ||
      n[l] === '7' ||
      n[l] === '8' ||
      n[l] === '9'
    ) {
      num = num + n[l];
    } else if (num !== '') {
      break;
    }
    l++;
  }
  console.log(Number(num));
  return Number(num);
}
function findBrackets(n, l) {
  while (l < n) {
    answ(n, l);
    if (n[l] === ')') {
      break;
    }
    l++;
  }
}
function findSigh(n, l) {
  let sigh;
  //
  while (l < n) {
    if (
      n[l] === '*' ||
      n[l] === '/' ||
      n[l] === '+' ||
      n[l] === '-' 
    ) {
      sigh = n[l];
    }
    l++;
  }
  return sigh;
}
function answ(n, l) {
  let a;
  let sigh;
  //
  while (l < n) {
    sigh = findSigh(n, l);
    //*********************************************************
    if (sigh === '*') {
      while (l < n) {
        if (n[l] === '('){
          a = findBrackets(n, l);
        } else if (
          n[l] === '0' ||
          n[l] === '1' ||
          n[l] === '2' ||
          n[l] === '3' ||
          n[l] === '4' ||
          n[l] === '5' ||
          n[l] === '6' ||
          n[l] === '7' ||
          n[l] === '8' ||
          n[l] === '9'
        ) {
          a = findNum(n, l);
        }
        l++;
      }
      a = a * findNum(n, l);
    }
    ///////////////////////////////////////////////////////////
    if (sigh === '/') {
      while (l < n) {
        if (n[l] === '('){
          a = findBrackets(n, l);
        } else if (
          n[l] === '0' ||
          n[l] === '1' ||
          n[l] === '2' ||
          n[l] === '3' ||
          n[l] === '4' ||
          n[l] === '5' ||
          n[l] === '6' ||
          n[l] === '7' ||
          n[l] === '8' ||
          n[l] === '9'
        ) {
          a = findNum(n, l);
        }
        l++;
      }
      a = a / findNum(n, l);    
    }
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    if (sigh === '+') {
      while (l < n) {
        if (n[l] === '('){
          a = findBrackets(n, l);
        } else if (
          n[l] === '0' ||
          n[l] === '1' ||
          n[l] === '2' ||
          n[l] === '3' ||
          n[l] === '4' ||
          n[l] === '5' ||
          n[l] === '6' ||
          n[l] === '7' ||
          n[l] === '8' ||
          n[l] === '9'
        ) {
          a = findNum(n, l);
        }
        l++;
      }
      a = a + findNum(n, l);    
    }
    //---------------------------------------------------------
    if (sigh === '-') {
      while (l < n) {
        if (n[l] === '('){
          a = findBrackets(n, l);
        } else if (
          n[l] === '0' ||
          n[l] === '1' ||
          n[l] === '2' ||
          n[l] === '3' ||
          n[l] === '4' ||
          n[l] === '5' ||
          n[l] === '6' ||
          n[l] === '7' ||
          n[l] === '8' ||
          n[l] === '9'
        ) {
          a = findNum(n, l);
        }
        l++;
      }
      a = a - findNum(n, l);    
    }
    l++;
  }
  return a;
}
calc("* 1 7")