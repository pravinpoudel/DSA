let array = [10, 16, 8, 12, 15, 6, 3, 9, 5, 999999];

function partition(l, h) {
  let pivotPoint = array[l];
  let i = l;
  let j = h;
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
  array[l] = array[j];
  array[j] = pivotPoint;
  return j;
}

partition(0, 9);

function quickSearch(l, h) {
  if (l < h) {
    let j = partition(l, h);

    quickSearch(l, j - 1);
    quickSearch(j + 1, h);
  }
}
quickSearch(0, 9);
console.log(array);
