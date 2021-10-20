## OBJECTIVES
- Define what recursion is and how it can be used
- Understand the two essential components of a recursive function
- Visualize the call stack to better debug and understand recursive functions
- Use helper method recursion and pure recursion to solve more difficult problems

## Why use recursion?
- Recursion is a process call itself

## The Call Stack
- it's a stack data structure
- any time a function is invoked it is placed (pushed) on the top of the call stack
- When Javascript sees the return keyword or when the function ends, the compiler will remove (pop)

## Why do I care?
- You're used to functins being pushed ont he call stack and popped off when they are done
- When we write recursive functions, we keep pushing new functions onto the call stack!
