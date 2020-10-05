// Создать массив из чисел в перемешку (не отсортированы). 
// С помощью цикла for найти максимальный и минимальный элементы в массиве

let arrNumber = [1, 6, 35, 35, -8, 0, 123, 0];


    let maxNum = arrNumber[0];
    for (let i = 0; i < arrNumber.length; i++) {
        (maxNum >= arrNumber[i]) ? maxNum = maxNum : maxNum = arrNumber[i];
    }

    console.log(maxNum);


    let minNum = arrNumber[0];
    for (let i = 0; i < arrNumber.length; i++) {
        (minNum <= arrNumber[i]) ? minNum = minNum : minNum = arrNumber[i];
    }

    console.log(minNum);


