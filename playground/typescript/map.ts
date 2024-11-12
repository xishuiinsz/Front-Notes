const map = new Map<number, string>([
  [1, "a"],
  [2, "b"],
  [3, "c"],
  [4, "d"],
  [5, "e"],
]);

const values = Array.from(map.values());
console.log(values);
