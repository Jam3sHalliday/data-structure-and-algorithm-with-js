## REFACTORING

### Questions?
- Can you check the result?
- derive the result differently?
- undestand it at a glance?
- use the result or method for some other problem?
- improve the performance of your solution?
- think of other ways to refactor?
- How have other people solved this problem?

### Reactfor part 4 function
```
function charCount(str) {
    const result = {};
    for (let char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            result[char] = ++result[char] || 1;
        }
    }

    return result;
}
```