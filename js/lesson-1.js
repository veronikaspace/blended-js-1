// Цикли і функції

// Завдання 1:

// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
// Якщо так  виведіть повідомлення 'Вірно' у alert().
// Якщо ні  виведіть 'Невірно'. 

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою  
// перетворіть значення на число за допомогою Number().

// const number = Number(prompt('Введіть число'));
// if (number === 10) {
//     alert('Вірно')
// } else {
//     alert('Невірно');
// }
// або зробити те саме через тернарний оператор

// Завдання 2:

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);

// if (min < 15) {
//     alert(`${min} входить в першу чверть`);
// } else if (min >= 15 && min < 29) {
//     alert(`${min} входить в другу чверть`);
// } else if (min >= 29 && min < 44) {
//     alert(`${min} входить в третю чверть`);
// } else {
//     alert(`${min} входить в третю чверть`);
// }




// Завдання 3:

// Змінна num може набувати 4 значення: '1', '2', '3' або '4' 
// (запитуй це значення у користувача через prompt). 
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач 
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// const userAnswer = prompt('Виберіть число від 1-4')

// function checkSeason(userAnswer) {
//     let result;
//     switch (userAnswer) {
//         case '1':
//             result = 'зима';
//             break;
//         case '2':
//             result = 'весна';
//             break;
//         case '3':
//             result = 'літо';
//             break;
//         case '4':
//             result = 'осінь';
//             break;
//         default:
//             result=  "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
//     }
//     return result;
// }

// console.log(checkSeason(userAnswer));



// Завдання 4:

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'): 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// const totalMinutes = Number(prompt('Введіть кількість хвилин'));

// console.log(formatTime(totalMinutes));

// function formatTime(totalMinutes) {
//     const hours = Math.floor(totalMinutes / 60);
//     const modifiedHours = String(hours).padStart(2, 0);
//     const minutes = totalMinutes % 60;
//     const modifiedMinutes = String(minutes).padStart(2, 0);
//     return `${modifiedHours}:${modifiedMinutes}`;
// }



// Завдання 5:

// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"


// const login = prompt('Введіть логін');

// if (login === 'Адмін') {
//     const password = prompt('Введіть пароль');
//     if (password === null || password === '') {
//         alert('Скасовано');
//     } else if (password === 'Я головний') {
//         alert('Добрий день!');
//     } else {
//         alert('Невірний пароль!');
//     }
// } else if (login === null || login === '') {
//     alert('Скасовано');
// } else {
//     alert('Я вас не знаю');
// }



// Завдання 6:

// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

// let count = 0;

// while (count <= 20) {
//     console.log(count); // спочатку має бути оголошена початкова змінна, щоб рахунок починався з нуля.
//     count++;
// }


// Завдання 7:

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри - 
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// function getNumbers(min, max) {
//     let total = 0;
//     for (let i = max; i >= min; i--) {
//         console.log(i);
//         if (i % 2 === 0) {
//             total += i;
//         }
//     }
//     return total;
// }

// console.log(getNumbers(30, 50));


// Завдання 8:

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function min(a, b) { 
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return 'Not a number!';
//     }
//     return a < b ? a : b;
// }

// console.log(min(1, 8));
// console.log(min(7, 4));
// console.log(min("1", "8"));



// Завдання 9:

// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true, 
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm 
// і повертає його результат (true/false).


// function isAdult(age) {
//     if (age >= 18) {
//         return true;
//     } else {
//         return confirm('Ви неповнолітній');
//     }
// }

// let result1 = isAdult(18);
// let result2 = isAdult(11);

// console.log(result1);
// console.log(result2);



// Завдання 10:

// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

// function fizzBuzz(num) { 
//     for (let i = 1; i <= num; i++) {
//         if (num % 3 === 0 && num % 5 === 0) {
//             return 'fizzbuzz';
//         } else if (num % 3 === 0) {
//             return 'fizz';
//         } else if (num % 5 === 0) {
//             return 'buzz';
//         } else {
//             return i;
//         }
//     }
// }

// console.log(fizzBuzz(69));
// console.log(fizzBuzz(121));
// console.log(fizzBuzz(27));
// console.log(fizzBuzz(85));


/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає першим параметром рядок, що складається зі слів, розділених лише пробілами (параметр message) та другим параметром - число, що містить ціну гравірування за одне слово (параметр pricePerWord).

// Доповни тіло функції так, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// function calculateEngravingPrice(message, pricePerWord) {
//     const words = message.split(" ");
//     return words.length * pricePerWord;
//   }
  
//   calculateEngravingPrice("JavaScript is in my blood", 10);
//   calculateEngravingPrice("JavaScript is in my blood", 20);
//   calculateEngravingPrice("Web-development is creative work", 40);
//   calculateEngravingPrice("Web-development is creative work", 20);



// Функція calculateTotalPrice(order) приймає один параметр order - масив чисел. Доповни функцію так, щоб вона повертала загальну суму елементів з масиву order.

// function calculateTotalPrice(order) { 
//     let total = 0;
    
//     for (let i = 0; i < order.length; i += 1) {
//         total += order[i];
//     }
    
//     return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));        // 138
// console.log(calculateTotalPrice([164, 48, 291]));         // 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116


// Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами. Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end. Якщо жодного парного числа немає, то масив має бути пустим. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0). Використовуй цикл for.

// function getEvenNumbers(start, end) {
//     let array = [];
//     for (let i = start; i <= end; i++) {
//         if (i % 2 === 0) {
//             array.push(i);
//         }
//     }

//     return array;
// }

// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));



// Функція checkStorage(storage, item) приймає два параметри:

// storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, наявність якого потрібно перевірити
// Доповни код функції таким чином, щоб вона перевіряла, чи присутній такий товар в масиві storage і повертала:

// рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
// рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
// Зроби так, щоб пошук за ім'ям товару був незалежний від регістру, тобто наприклад "plum" і "pLuM" мають бути знайдені у масиві ["apple", "plum", "pear"].

// function checkStorage(storage, item) {
//   const lowerItem = item.toLowerCase();

//   for (let i = 0; i < storage.length; i++) {
//     if (storage[i].toLowerCase() === lowerItem) {
//       return `${storage[i]} is available to order!`;
//     }
//   }

//   return `Sorry! We are out of stock!`;
// }

// console.log(checkStorage(["apple", "plum", "pear"], "plum"));
// console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));
// console.log(checkStorage(["apple", "plum", "pear"], "pear"));
// console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));
// console.log(checkStorage(["apple", "plum", "pear"], "orange"));
// console.log(checkStorage(["apple", "plum", "pear"], "carrot"));



// Функція getCommonElements(array1, array2), приймає два масиви (array1 та array2) довільної довжини в якості параметрів.

// Доповни код функції:

// Створи порожній масив для зберігання нового масиву.
// Використай цикл for для ітерації кожного елемента у array1.
// У тілі циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
// Якщо він існує, то додай елемент до нового масиву.
// Поверни наповнений масив спільних елементів як результат роботи функції.


// function getCommonElements(array1, array2) {
//     let array = [];
//     for (let i = 0; i < array1.length; i++) {
//         const element = array1[i];
//         if (array2.includes(element)) {
//             array.push(element);
//         }
//     }
//     return array;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));


// Доповни код функції calculateTotalPrice(order) так, щоб вона повертала загальну суму чисел в масиві order. Використай цикл for...of для перебору масиву.

// function calculateTotalPrice(order) {
//     let totalPrice = 0;
//     for (const number of order) {
//       totalPrice += number;
//     }
//     return totalPrice;
//   }
  
//   console.log(calculateTotalPrice([12, 85, 37, 4]));
//   console.log(calculateTotalPrice([164, 48, 291]));
//   console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
//   console.log(calculateTotalPrice([]));



// Функція createReversedArray() може приймати довільну кількість аргументів. Доповни код функції так, щоб вона повертала масив усіх аргументів, але в масиві вони повинні йти у зворотному порядку. Тобто, при виклику createReversedArray(1, 2, 3), функція має повернути масив [3, 2, 1]. Використовуй цикл або метод масиву toReversed(), який застосовується до масиву і результатом роботи повертає новий масив з елементами у зворотньому порядку.
//... - rest-параметр, означає: «збери всі передані значення у вигляді масиву args».

// function createReversedArray(...args) {
//     let reversed = [];
//     for (let i = args.length - 1; i >= 0; i--) {
//         reversed.push(args[i]);
//     }
//     return reversed;
// }

// console.log(createReversedArray(12, 85, 37, 4));
// console.log(createReversedArray(164, 48, 291));
// console.log(createReversedArray(412, 371, 94, 63, 176));
// console.log(createReversedArray());



// Функція calculateTax(amount, taxRate) оголошує два параметри:

// amount - число, сума від якої потрібно обчислити податок. Обов'язковий параметр.
// taxRate - число, податкова ставка. Необов'язковий параметр. За замовчуванням його значення має бути 0.2.
// Доповни код функції так, щоб вона повертала суму податку - результат множення суми на податкову ставку.


// function calculateTax(amount, taxRate = 0.2) {
//     return amount * taxRate;
//   }
  
//   console.log(calculateTax(100, 0.1));
//   console.log(calculateTax(200, 0.1));
//   console.log(calculateTax(100, 0.2));
//   console.log(calculateTax(200, 0.2));
//   console.log(calculateTax(100, 0.3));
//   console.log(calculateTax(200, 0.3));
//   console.log(calculateTax(100));
//   console.log(calculateTax(200));

