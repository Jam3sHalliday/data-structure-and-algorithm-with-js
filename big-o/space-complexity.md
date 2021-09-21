# Space Complexity

> The term **auxiliary space** complexity to refer to space required by the algorithm, not including space taken up by the inputs.

- Most primitives (booleans, numbers, undefined, null) are constant space  
- Strings require O(n) space (where n is the string length)
- Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects);

## Logarithm
> the logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one

## But, who cares?
- Certain searching algorithms have logarithmic time complexity
- Efficient sorting algorithms involve logarithms
- Recursion sometimes involves logarithmic space complexity

## Recap
- To analyze the performance of an algorithm, we use Big O notation
- Big O Notation can give us a high level understanding of the time or space complexity of an algorithm
- Big O Notation doesn't care about precision, only about general trends (linear/ quadratic/ constant)
- The time or space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm 