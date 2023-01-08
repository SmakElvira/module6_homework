let arr = [1,'a',2,'s',3,'d',4,'f',5,'g',0];
let evenNumbers = 0;
let oddNumbers = 0;
let otherNumbers = 0;

function getAllElem(allItems) {
  for (let i = 0; i < allItems.length; i++) {
    if (allItems[i] === 0 || (typeof (allItems[i]) !== "number")){
            otherNumbers++;
         } else {
             if (allItems[i] % 2 === 0) {
                 evenNumbers++;
             } else {
                 oddNumbers++;
             }
         }
    }
}
getAllElem(arr);
console.log("Четных чисел: " + evenNumbers, "Нечетных чисел: " + oddNumbers, "Других типов данных: " + otherNumbers)