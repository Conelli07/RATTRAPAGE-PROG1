function Echanger(arr, i, j) {
  if (i < 0 || i >= arr.length || j < 0 || j >= arr.length || i === j) {
    return arr;
  }
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr;
}

function Ranger(arr) {
  let zero = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      Echanger(arr, zero, i);
      zero++;
    }
  }
  return arr;
}

function NombreUn(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count++;
    }
  }
  return count;
}

console.log("Echanger:", Echanger([0, 1, 0], 1, 2));
console.log("Ranger:", Ranger([0, 1, 0, 0, 1, 0]));
console.log("NombreUn:", NombreUn([0, 0, 0, 0, 1, 1]));