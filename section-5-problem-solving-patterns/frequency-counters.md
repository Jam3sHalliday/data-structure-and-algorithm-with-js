## FREQUENCY COUNTERS
- This pattern uses objects or sets to collect values / frequencies of values
- This can often avoid the need for nested loops or O(n^2) operations with arrays / strings 


### normal solution
```
const checkSquare = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; ++i) {
    const index = arr2.indexOf(arr1[i]**2);
    if (index !== -1 ) {
      arr2.slice(index, 1);
    } else {
      return false
    }
  }

  return true;
}
```

### Frequency counter solution
```
function same (arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for (let val of arr2) {
        frequencyCounter2 [val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        if (!(key**2 in frequencyCounter2)) {
            return false;
        }

        if (frequencyCounter2[key**2] !== frequencyCounter1[key]) {
            return false;
        }
    }

    return true;
}
```