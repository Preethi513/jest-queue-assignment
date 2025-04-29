# Jest Queue Assignment

This project is a JavaScript Queue implementation with comprehensive test coverage using the JEST testing framework. The goal is to achieve 100% statement and branch coverage while identifying and fixing a known bug in the "dequeue()" method.

# Project Structure
jest-queue-assignment/
 ├── src/Queue.js # Queue class implementation 
 ├── tests/Queue.test.js # Jest test cases 
 ├── .gitignore # Ignores node_modules and coverage ├── package.json # NPM project config with Jest 
 └── README.md # This file 
 # Tasks Completed

Task 1: Created passing test cases covering:
- `constructor`
- `enqueue()`
- `dequeue()`
- `peek()`
- `length()`
- `isEmpty()`
- `removeAll()`

Achieved 100% statement and branch coverage using: npm test -- --coverage

# Task 2:
Created a failing test for `dequeue()` on an empty queue to expose the bug:
```js
expect(() => queue.dequeue()).toThrow('Queue is empty');

Confirmed it fails initially, and passes after fixing the bug in Queue.js.

How to Run
 Install dependencies: npm install

 Run tests: npm test

 Run with coverage: npm test -- --coverage

 # Screenshots:
![alt text](<Task1 coverage pass.png>)

![alt text](<Coverage fail-1.png>)

![alt text](<bug fix.png>)


[GitHub Profile](https://github.com/Preethi513)