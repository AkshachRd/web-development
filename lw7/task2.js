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

function findBrackets(l, n, s, error) {
  let brackestResult;
  let lAndVar;
  
  while (l < n) {
    lAndVar = answ(l, n, s, error);
    l = lAndVar[0];
    brackestResult = lAndVar[1];
    error = lAndVar[2];
    if (s[l] === ')') {
      break;
    }
    l++;
  }
  if (l > n) {
    console.log('Error: closing bracket wasn\'t found');
    error = true;
  }
  return [l, brackestResult, error];
}

function findSigh(l, n, s) {
  let sigh;
  
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

function findBracketsOrNum(l, n, s, error) {
  let lAndVar;

  while (l < n) {
    if (s[l] === '('){
      lAndVar = findBrackets(l, n, s, error);
      l = lAndVar[0];
      a = lAndVar[1];
      error = lAndVar[2];
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
  return [l, a, error];
}

function answ(l, n, s, error) {
  let a, b;
  let sigh;
  let lAndVar;
  
  while (l < n) {
    lAndVar = findSigh(l, n, s);
    l = lAndVar[0];
    sigh = lAndVar[1];
    //*********************************************************
    if (sigh === '*') {
      lAndVar = findBracketsOrNum(l, n, s, error);
      l = lAndVar[0];
      a = lAndVar[1];
      error = lAndVar[2];
      lAndVar = findBracketsOrNum(l, n, s, error);
      l = lAndVar[0];
      b = lAndVar[1];
      error = lAndVar[2];
      a = b * a;
    }
    ///////////////////////////////////////////////////////////
    if (sigh === '/') {
      lAndVar = findBracketsOrNum(l, n, s, error);
      l = lAndVar[0];
      a = lAndVar[1];
      error = lAndVar[2];
      lAndVar = findBracketsOrNum(l, n, s, error);
      l = lAndVar[0];
      b = lAndVar[1];
      error = lAndVar[2];
      a = a / b;
    }
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    if (sigh === '+') {
      lAndVar = findBracketsOrNum(l, n, s, error);
      l = lAndVar[0];
      a = lAndVar[1];
      error = lAndVar[2];
      lAndVar = findBracketsOrNum(l, n, s, error);
      l = lAndVar[0];
      b = lAndVar[1];
      error = lAndVar[2];
      a = Number(b) + Number(a);     
    }
    //---------------------------------------------------------
    if (sigh === '-') {
      lAndVar = findBracketsOrNum(l, n, s, error);
      l = lAndVar[0];
      a = lAndVar[1];
      error = lAndVar[2];
      lAndVar = findBracketsOrNum(l, n, s, error);
      l = lAndVar[0];
      b = lAndVar[1];
      error = lAndVar[2];
      a = a - b;    
    } else if (a !== undefined) {
      break;
    }
    l++;
  }
  return [l, a, error];
}

function calc(str) {
  let n = str.length;
  let l = 0;
  let lAndVar;
  let error = false;
  
  //console.log( answ(l, n, str)[1] );
  lAndVar = answ(l, n, str, error);
  error = lAndVar[2];
  if (!error) {
    return lAndVar[1];;
  }
}