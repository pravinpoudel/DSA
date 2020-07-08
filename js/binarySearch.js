function binarySearch(arr, data) {
  let high = arr.length;
  let low = 1;
  function search(high, low) {
    let mid = Math.floor((low + high) / 2);
    console.log(arr[mid - 1]);
    if (arr[mid - 1] === data) {
      return mid - 1;
    } else if (arr[mid - 1] > data) {
      high = mid - 1;
      return search(high, low);
    } else if (arr[mid - 1] < data) {
      low = mid + 1;
      return search(high, low);
    }
  }
  return search(high, low);
}

let array = [3, 6, 8, 12, 14, 17, 25, 29, 31, 36, 42, 47, 53, 55, 62];
let data = 17;
let index = binarySearch(
  [3, 6, 8, 12, 14, 17, 25, 29, 31, 36, 42, 47, 53, 55, 62],
  data
);
console.log("data you searched for is at " + index);
