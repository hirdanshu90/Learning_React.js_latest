const arr = [2, 4, 6, 8, 10];

// Find, iterates only once
arr.find((value, index) => {
  if (value > 3) {
    console.log(value);
  }
});

// Filter, This return the whole array just like MAP
const result = arr.filter((value, index) => {
  if (value >= 4) {
    return value;
  }
});

console.log(result);

// every,boolean all should be either this or that
const everyy = arr.every((value, index) => {
  return value > 4;
});

console.log(everyy);

// for off loop
for (const value of arr) {
  console.log(value);
}

// MAP function. This returns a new arr itself along with the changes made.
// Other functions don't return a new array.

const mapp = arr.map((value, index) => {
  value += 20;
  return value;
});

console.log(mapp);
console.log(arr);

// Reduce method.

const reducee = arr.reduce((previousvalue, value, index) => {
  console.log(previousvalue, value, index);
  return previousvalue + value;
});

console.log(reducee);
