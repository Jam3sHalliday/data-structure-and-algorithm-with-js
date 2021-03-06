## DIVIDE AND CONQUER
- This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data
- This pattern can tremendously decrease time complexity

## Example
- Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1;

My solution
```
function search (arr, val) {
  let middle = Math.floor((arr.length -1 )/2);
  let i = 0;
  let range;

  if (arr[middle] > val) {
    range = middle;
  } else if (arr[middle] < val) {
    i = middle;
    range = arr.length - 1;
  } else {
    return middle;
  }

  for (i; i < range; ++i) {
    if (arr[i] === val) return i;
  }

  return -1;
}

```

Instructor's solution
```
function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) /2);

    let curr = arr[middle];

    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}
```