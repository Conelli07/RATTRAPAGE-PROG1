function NegatifPositif(arr) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    if (arr[left] <= 0 && arr[right] > 0) {
      left++;
      right--;
    } else if (arr[left] > 0 && arr[right] <= 0) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    } else if (arr[left] > 0 && arr[right] > 0) {
      right--;
    } else if (arr[left] <= 0 && arr[right] <= 0) {
      left++;
    }
  }
  return arr;
}

console.log("Résultat:", NegatifPositif([3, -1, 0, 4, -2, 5, -3]));