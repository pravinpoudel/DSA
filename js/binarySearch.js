function binarySearch(arr, high = 1, low = 1, data) {
  let mid = Math.floor((low + high) / 2);
  console.log(mid);
  if (arr[mid - 1] === data) {
    console.log("data found");
    return;
  } else if (arr[mid - 1] > data) {
    high = mid + 1;
    mid = Math.floor((low + high) / 2);
    binarySearch(arr, high, low, data);
  } else if (arr[mid - 1] < data) {
    low = mid + 1;
    mid = Math.floor((low + high) / 2);
    binarySearch(arr, high, low, data);
  }
}

binarySearch(
  [3, 6, 8, 12, 14, 17, 25, 29, 31, 36, 42, 47, 53, 55, 62],
  15,
  1,
  12
);
