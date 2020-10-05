// Создать функцию superSum, которая будет в алерте показывать сумму ЛЮБЫХ двух чисел, 
// переданных этой функции через параметры 

let superSum = (num1, num2) => {
    num1 = prompt('Введите первое число');
    num2 = prompt('Введите второе число');
    alert(parseInt(num1) + parseInt(num2));
}

superSum();