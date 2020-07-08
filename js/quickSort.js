let array = [6, 5, 8, 9, 3, 10, 15, 12, 16];
array.push(999999);

function partition(l, h) {
  let pivotPoint = array[l];
  let i = l;
  let j = h - 1;
  while (i < j) {
    do {
      i++;
    } while (array[i] < pivotPoint);
    do {
      j--;
    } while (array[j] > pivotPoint);
    if (i < j) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  array.splice(j + 1, 0, pivotPoint);
  array.splice(l, 1);
  return j;
}

let position = partition(0, 9);
console.log(array);
