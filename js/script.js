// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

const array = ['Giulia', 'Claudio', 'Saruman' ,'Porthos' , 'Penny', 'Shiro', 'Gandalf', 'Bilbo'];
var num1 = parseInt(prompt('inserisci numero min-1, max-' + array.length));
var num2 = parseInt(prompt('inserisci numero grande max-' + array.length));
let numeriRange = [];

// console.log(compreso(array, num1, num2)); 

// function compreso(ar, a, b){
//    var newAr = []; 
//    for (var i = a - 1; i < b; i++){
//       newAr.push(ar[i]);
//    }
//    return newAr;
// }


const newarray = (numeriRange,num1, num2) => {
   numeriRange = array.filter((parametro,i) => i >= num1 && i <= num2);
   console.log(numeriRange);
}

newarray(numeriRange,num1,num2)



    


