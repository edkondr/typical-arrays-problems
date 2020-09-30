
function min (array) {
  if (!array || array.length == 0)
  return 0;
  else{
        return Math.min.apply(Math, array);
  }
}

function max (array) {
  if (!array || array.length == 0)
  return 0;
  else{
    return Math.max.apply(Math, array);
  }
}

function avg (array) {
  if (!array || array.length == 0)
  return 0;
  else{
    let a;
    let b;
        return array.reduce((a, b) => (a + b)) / array.length;
  }
  
}
