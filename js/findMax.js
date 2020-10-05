// Оформить алгоритм поиска максимального числа в массиве как функцию findMax 
// (чтобы можно было передавать в неё любой массив чисел, а на выходе она возвращала 
// нам максимальное число из массива)

let arrNum = [1, -2, 10, 154, -2000, 0, 14, 54];

let findMax = (arr) => {
    let maxNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        (maxNum >= arr[i]) ? maxNum = maxNum : maxNum = arr[i];
    }
    return maxNum;
}

setTimeout(() => alert(findMax(arrNum)), 3000);