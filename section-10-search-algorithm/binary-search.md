
## Binary Search Pseudocode
- This function accepts a sorted array a value
- Create left pointer at the start and right at the end
- While the left comes before the right:
    Create a pointer in the middle
    If found, return index
    If value is too small, move the left pointer up
    If value is too large, move the right pointer down
    If never find the value, return -1