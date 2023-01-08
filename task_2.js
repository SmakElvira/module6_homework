function getNumber() {
  let num = prompt('Введите число');
    if (num < 2 || num > 1000){
      console.log ('Введите другое число');
      } else {
              if (num == 2) {
                 console.log ('Простое число');
               } else {
                       let i = 2;
                       while (i < num) {
                           if (num % i === 0) {
                               return console.log (num + ' - составное число');
                            } 
                         i++;
                       } 
                       return console.log (num + ' - простое число')
               }
       }
 }

getNumber()