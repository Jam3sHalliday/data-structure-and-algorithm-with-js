## Multiple Pointers
- The idea is that we create pointers or values that correcspond to an index or position and then move towards the beginning / the end or towards the middle based on a certain condition
- Very efficient for solving problems with minimal space complexity as well


### Problem
Find pair number sum = 0 in a sorted array;

### Code
```
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right];]
        } else if (sum > 0) {
            right --;            
        } else {
            left ++
        }
    }
}
```