function Echanger(arr, i, j) {
  if (i < 0 || i >= arr.length || j < 0 || j >= arr.length || i === j) {
    return arr;
  }
  [arr[i], arr[j]] = [arr[j], arr[i]];
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

function triLignes(M) {
  const rows = [];
  for (let i = 0; i < M.length; i++) {
    const rowCopy = [];
    for (let j = 0; j < M[i].length; j++) {
      rowCopy.push(M[i][j]);
    }
    rows.push(rowCopy);
  }
  
  for (let i = 0; i < rows.length - 1; i++) {
    for (let j = i + 1; j < rows.length; j++) {
      const countI = NombreUn(rows[i]);
      const countJ = NombreUn(rows[j]);
      
      if (countI > countJ) {
        Echanger(rows, i, j);
      }
    }
  }
  return rows;
}

console.log("triLignes:", 
    triLignes([
      [0, 0, 1, 1],
      [0, 0, 0, 1],
      [1, 1, 1, 1],
      [0, 0, 0, 0]
    ])
  );
