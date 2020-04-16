function findNum(l, n, s) {
  let num = '';
  
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
  return [l, num];
}

function findBrackets(l, n, s) {
  let brackestResult;
  let lAndVar;
  
  while (l < n) {
    lAndVar = answ(l, n, s);
    l = lAndVar[0];
    brackestResult = lAndVar[1];
    if (s[l] === ')') {
      break;
    }
    l++;
  }
  if (l === n) {
    console.log('Error: closing bracket wasn\'t found');
  }
  return [l, brackestResult];
}

function findSigh(l, n, s) {
  let sigh;
  let lAndVar;
  
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
  return [l, sigh];
}

function answ(l, n, s) {
  let a, b;
  let sigh;
  let lAndVar;
  
  while (l < n) {
    lAndVar = findSigh(l, n, s);
    l = lAndVar[0];
    sigh = lAndVar[1];
    //*********************************************************
    if (sigh === '*') {
      while (l < n) {
        if (s[l] === '('){
          lAndVar = findBrackets(l, n, s);
          l = lAndVar[0];
          a = lAndVar[1];
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
          lAndVar = findNum(l, n, s);
          l = lAndVar[0];
          a = lAndVar[1];
          break;
        }
        l++;
      }
      lAndVar = findNum(l, n, s);
      l = lAndVar[0];
      b = lAndVar[1];
      a = b * a;
    }
    ///////////////////////////////////////////////////////////
    if (sigh === '/') {
      while (l < n) {
        if (s[l] === '('){
          lAndVar = findBrackets(l, n, s);
          l = lAndVar[0];
          a = lAndVar[1];
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
          lAndVar = findNum(l, n, s);
          l = lAndVar[0];
          a = lAndVar[1];
          break;
        }
        l++;
      }
      lAndVar = findNum(l, n, s);
      l = lAndVar[0];
      b = lAndVar[1];
      a = a / b;    
    }
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    if (sigh === '+') {
      while (l < n) {
        if (s[l] === '('){
          lAndVar = findBrackets(l, n, s);
          l = lAndVar[0];
          a = lAndVar[1];
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
          lAndVar = findNum(l, n, s);
          l = lAndVar[0];
          a = lAndVar[1];
          break;
        }
        l++;
      }
      lAndVar = findNum(l, n, s);
      l = lAndVar[0];
      b = lAndVar[1];
      a = Number(b) + Number(a);     
    }
    //---------------------------------------------------------
    if (sigh === '-') {
      while (l < n) {
        if (s[l] === '('){
          lAndVar = findBrackets(l, n, s);
          l = lAndVar[0];
          a = lAndVar[1];
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
          lAndVar = findNum(l, n, s);
          l = lAndVar[0];
          a = lAndVar[1];
          break;
        }
        l++;
      }
      lAndVar = findNum(l, n, s);
      l = lAndVar[0];
      b = lAndVar[1];
      a = a - b;    
    } else if (a !== undefined) {
      break;
    }
    l++;
  }
  return [l, a];
}

function calc(str) {
  let n = str.length;
  let l = 0;
  
  console.log( answ(l, n, str)[1] );
  return null;
}