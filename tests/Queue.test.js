const Queue = require('../src/Queue');

let queue;

beforeEach(() => {
  queue = new Queue();
});

describe('Queue operations', () => {
  test('constructor initializes empty queue', () => {
    expect(queue.length()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
  });

  test('enqueue adds item', () => {
    queue.enqueue(5);
    expect(queue.peek()).toBe(5);
    expect(queue.length()).toBe(1);
  });

  test('dequeue removes and returns item', () => {
    queue.enqueue(10);
    expect(queue.dequeue()).toBe(10);
    expect(queue.length()).toBe(0);
  });

  test('peek returns front item', () => {
    queue.enqueue(20);
    queue.enqueue(30);
    expect(queue.peek()).toBe(20);
  });

  test('length returns correct number', () => {
    queue.enqueue('a');
    queue.enqueue('b');
    expect(queue.length()).toBe(2);
  });

  test('isEmpty returns false when not empty', () => {
    queue.enqueue('x');
    expect(queue.isEmpty()).toBe(false);
  });

  test('removeAll clears the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.removeAll();
    expect(queue.length()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
  });
  test('dequeue should throw an error when queue is empty', () => {
    expect(() => queue.dequeue()).toThrow('Queue is empty');
  });
  
});
