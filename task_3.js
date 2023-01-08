function argA(a) {
   return function (b) {
       return a + b;
   }
};

const firstArg = argA(8);
const sum = firstArg(37);
//или можно записать const sum = argA(8)(37);
console.log(sum);