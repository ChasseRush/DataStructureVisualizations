export const arrayListBigOInfo = [
  {
    method: "add(Object element)",
    description: "Adds a given element to the end of the list",
    complexity: "O(1) amortized",
  },
  {
    method: "remove(Object element)",
    complexity: "O(n) worst case",
    description: "Remove a given element from the list",
  },
  {
    method: "get(int index)",
    description: "Gets and returns the element at the given index",
    complexity: "O(1)",
  },
  {
    method: "clear()",
    description: "Clears the list",
    complexity: "O(1)",
  },
];

export const linkedListBigOInfo = [
  {
    method: "addToFront(Object element)",
    description: "Adds a given element to the front of the list",
    complexity: "O(1)",
  },
  {
    method: "addToBack(Object element)",
    description: "Adds a given element to the end of the list",
    complexity: "O(1) w/ tail pointer, O(n) without",
  },
  {
    method: "removeFromFront()",
    description: "Removes the first element in the list",
    complexity: "O(1)",
  },
  {
    method: "removeFromBack()",
    description: "Removes the last element in the list",
    complexity: "O(1) w/ a Doubly Linked List, O(n) with a Singly Linked List",
  },
  {
    method: "get(int index)",
    description: "Gets and returns the element at the given index",
    complexity: "O(n)",
  },
  {
    method: "clear()",
    description: "Clears the list",
    complexity: "O(1)",
  },
];

export const stackBigOInfo = [
  {
    method: "push(Object element)",
    description: "Adds a given element to the top of the stack",
    complexity: "w/ LinkedList: O(1) | w/ array: O(1) amortized",
  },
  {
    method: "pop()",
    description: "Removes and returns the element at the top of the stack",
    complexity: "O(1)",
  },
  {
    method: "peek()",
    description: "Simply returns the element at the top of the stack",
    complexity: "O(1)",
  },
];

export const queueBigOInfo = [
  {
    method: "push(Object element)",
    description: "Adds a given element to the end of the queue",
    complexity: "w/ LinkedList: O(1) | w/ array: O(1) amortized",
  },
  {
    method: "pop()",
    description: "Removes and returns the element at the front of the queue",
    complexity: "O(1)",
  },
  {
    method: "peek()",
    description: "Simply returns the element at the front of the queue",
    complexity: "O(1)",
  },
];

export const hashMapBigOInfo = [
  {
    method: "put(K key, V value)",
    description:
      "Maps the given value to the given key, replacing the existing value if the key already exists in the HashMap",
    complexity: "Best case: O(1), Worst case: O(n)",
  },
  {
    method: "get(K key)",
    description:
      "Returns the value of the given key, returning null if it doesn't exist in the HashMap",
    complexity: "Best case: O(1), Worst case: O(n)",
  },
  {
    method: "getOrDefault(K key, V value)",
    description:
      "Returns the value of the given key, returning the given default value if it doesn't exist in the HashMap",
    complexity: "Best case: O(1), Worst case: O(n)",
  },
  {
    method: "remove(K key)",
    description:
      "Removes and returns the value of the given key, returning null if it doesn't exist in the HashMap",
    complexity: "Best case: O(1), Worst case: O(n)",
  },
];
