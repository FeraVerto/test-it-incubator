// Создать 2 переменные a и b… присвоить им любые значения. 
// Потом программно поменять эти значения местами, не используя значения напрямую

let a = 10;
let b = 11;

let c = a;
a = b;
b = c;

console.log('a равно' + ' ' + a); 
console.log('b равно' + ' ' + b);