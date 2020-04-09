let l = 0;
function findNum(n, s) {
  let num = '';
  //
  while (l < n) {
    if (
      s[l] === '0' ||
      s[l] === '1' ||
      s[l] === '2' ||
      s[l] === '3' ||
      s[l] === '4' ||
      s[l] === '5' ||
      s[l] === '6' ||
      s[l] === '7' ||
      s[l] === '8' ||
      s[l] === '9'
    ) {
      num = num + s[l];
    } else if (num !== '') {
      break;
    }
    l++;
  }
  return num;
}
function findBrackets(n, s) {
  let brackestResult;
  //
  while (l < n) {
    brackestResult = answ(n, s);
    if (s[l] === ')') {
      break;
    }
    l++;
  }
  return brackestResult;
}
function findSigh(n, s) {
  let sigh;
  //
  while (l < n) {
    if (
      s[l] === '*' ||
      s[l] === '/' ||
      s[l] === '+' ||
      s[l] === '-' 
    ) {
      sigh = s[l];
    } else if (sigh !== undefined) {
      break;
    }
    l++;
  }
  return sigh;
}
function answ(n, s) {
  let a, b;
  let sigh;
  //
  while (l < n) {
    sigh = findSigh(n, s);
    //*********************************************************
    if (sigh === '*') {
      while (l < n) {
        if (s[l] === '('){
          a = findBrackets(n, s);
          break;
        } else if (
          s[l] === '0' ||
          s[l] === '1' ||
          s[l] === '2' ||
          s[l] === '3' ||
          s[l] === '4' ||
          s[l] === '5' ||
          s[l] === '6' ||
          s[l] === '7' ||
          s[l] === '8' ||
          s[l] === '9'
        ) {
          a = findNum(n, s);
          break;
        }
        l++;
      }
      b = findNum(n, s);
      a = b * a; 
    }
    ///////////////////////////////////////////////////////////
    if (sigh === '/') {
      while (l < n) {
        if (s[l] === '('){
          a = findBrackets(n, s);
          break;
        } else if (
          s[l] === '0' ||
          s[l] === '1' ||
          s[l] === '2' ||
          s[l] === '3' ||
          s[l] === '4' ||
          s[l] === '5' ||
          s[l] === '6' ||
          s[l] === '7' ||
          s[l] === '8' ||
          s[l] === '9'
        ) {
          a = findNum(n, s);
          break;
        }
        l++;
      }
      b = findNum(n, s);
      a = b / a;    
    }
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    if (sigh === '+') {
      while (l < n) {
        if (s[l] === '('){
          a = findBrackets(n, s);
          break;
        } else if (
          s[l] === '0' ||
          s[l] === '1' ||
          s[l] === '2' ||
          s[l] === '3' ||
          s[l] === '4' ||
          s[l] === '5' ||
          s[l] === '6' ||
          s[l] === '7' ||
          s[l] === '8' ||
          s[l] === '9'
        ) {
          a = findNum(n, s);
          break;
        }
        l++;
      }
      b = findNum(n, s);
      a = Number(b) + Number(a);     
    }
    //---------------------------------------------------------
    if (sigh === '-') {
      while (l < n) {
        if (s[l] === '('){
          a = findBrackets(n, s);
          break;
        } else if (
          s[l] === '0' ||
          s[l] === '1' ||
          s[l] === '2' ||
          s[l] === '3' ||
          s[l] === '4' ||
          s[l] === '5' ||
          s[l] === '6' ||
          s[l] === '7' ||
          s[l] === '8' ||
          s[l] === '9'
        ) {
          a = findNum(n, s);
          break;
        }
        l++;
      }
      b = findNum(n, s);
      a = b - a;    
    } else if (a !== undefined) {
      break;
    }
    l++;
  }
  return a;
}
function calc(str) {
  let n = str.length;
  console.log( answ(n, str) );
}
calc("- (* 2 3) 8")