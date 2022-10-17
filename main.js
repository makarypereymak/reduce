function reduce(array, callback, start) {
  let current = start;

  for (var i = 0; i < array.length; i++) {
    current = callback(current, array[i]);
  }

  return current;
}
  
const arr = [1, 2, 3, 4, 5];
  
function sum (sum, current) {
  return sum + current;
}
  
const res = reduce(arr, sum, 0);
console.log(res);