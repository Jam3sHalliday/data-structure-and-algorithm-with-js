# Array - Ordered lists

## When to use Array
- When need order
- when need fast access / insertion and removal (sort of ...)

## Big O of Array
- Insertion - It depends
- Removal - It depends
- Searching - O(n)
- Access - O(1)

## Access data with index
- For example I have a array with 1000 elements and I want to get the 900th element, Javascript isn't going through every single element and couting all the way upto 900. There is a "direct shortcut", if I have a valid index of the array, I can jump right in => IT'S CONSTANT TIME ( O(1) )

- Insert or Remove item at last position is O(1)
- Insert or Remove item at first place will re-index all the element, it's not trivial task ( O(n) )