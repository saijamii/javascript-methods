const memoize = (Fun) => {
  let cache = {};
  return (...args) => {
    let num = args[0];
    if (num in cache) {
      console.log("cache");
      return cache[num];
    } else {
      console.log("First Time");
      let result = Fun(num);
      cache[num] = result;
      return result;
    }
  };
};

console.time();
const calc = (num) => {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
};

const effective = memoize(calc);
console.log(effective(5));
console.timeEnd();

console.time();
console.log(effective(5));
console.timeEnd();
