## How recursive functions work
Invoke the same function with a different input until you reach the base case  
Base case is the condition when the recursive ends  
Two essential parts of a recursive function are: base case and different input

## Factorial function recursively 
```
function factorial (num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}
```
## What makes it wrong?
## Helper function
Helper function is a function has another function inside and it's recursive
```
function collectOdds (arr) {
    let result = [];

    function helper (helperInput) {
        if (helperInput.length === 0) return;
        if (helperInput[0] % 2 === 0) result.push(helperInput[0]);
        helper(helperInput.slice(1))
    };

    helper(arr);

    return result;
}
```