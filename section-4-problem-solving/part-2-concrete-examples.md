## Part 2: Concrete Examples

### Explore examples
- Start with simple examples
- Progress to more complex examples
- Explore examples with empty inputs
- Explore examples with invalid inputs

### Write a function which takes in a string and returns counts of each character in the string
```
const countCharacter = (str) => {
    if (!str) return 0;
    str.split(" ").reduce((acc, cur) => {
        acc.push(cur.length)
        return acc;
    }, [])
}
```