// JS: кликаем по кнопке - видим в alert-е то, что введено в поле поиска.
//  Не использовать onclick атрибут в разметке кода.


// Если ввести в поиск слово google и нажать кнопку НАЙТИ, то нужно 
// показать в алерте “Yandex круче. Но это не точно”


// Создать массив объектов. 3-4 объекта, каждый имеет свойства name и age. 
// При нажатии на кнопку НАЙТИ также вывести ещё и св-во name первого объекта в массиве


let alertText = () => {
    let inputValue = document.getElementById('input').value;
    let cleanedSearchString = inputValue.toLowerCase().trim();
    //Слово google можно писать в любом регистре
    ( cleanedSearchString === 'google') ? alert(inputValue = 'Yandex круче. Но это не точно')
        : alert(inputValue);
}


// Создать массив объектов. 3-4 объекта, каждый имеет свойства name и age. При нажатии на кнопку 
// НАЙТИ также вывести ещё и св-во name первого объекта в массиве

let arr = [
    {
        name: 'Mary',
        age: 18
    },

    {
        name: 'Sveta',
        age: 10
    },

    {
        name: 'Anna',
        age: 54
    }
]

button.onclick = () => alertText() + alert(arr[0].name);
