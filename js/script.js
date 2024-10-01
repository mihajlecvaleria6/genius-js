// Lesson one

// let name = 'Іван';
// let city = 'kyiv';
// city = name;
// console.log(city);

// let name = 'Olga';
// console.log(`Привіт ${1}`);
// console.log(`Привіт ${'name'}`);
// console.log(`привіт ${name}`);

// let a = '5';
// let b = '13cvd';
// let c = '12.9sxdcfgv';
// console.log(typeof Number(a));
// console.log(typeof parseInt(b));
// console.log(typeof parseFloat(c));

// console.log((0.1 * 10 + 0.2 * 10) / 10);

// console.log(Math.max(20, 10, 50, 40));

// console.log(Math.random() * (4 - 2) + 2);

// const message = 'Welcome to Bahamas';
// console.log(message.length); //19

// console.log(message.toUpperCase());

// let user = {};
// user.name = 'Olga';
// user.age = 23;
// user.city = 'Kyiv';
// console.log(user);
// delete user.city;
// user['like flowers'] = true;
// console.log(user);

// for (key in user) {
//   console.log(key);
//   console.log(user[key]);
// }

// let hello = 'Hello world';

// let message;

// message = hello;

// console.log(hello);

// console.log(message);

//----------------------------//
//----------------------------//
// Lesson two
//----------------------------//
//----------------------------//

// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0, -3.

// if (0 <= 1) {
//   console.log(true);
// } else {
//   console.log(false);
// }
//if (0 <= 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// if (0 <= -3) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test', "qwerty", true

// const value = prompt('Введіть зміну', '');

// if (value === 'test') {
//   alert('true');
// } else {
//   alert('false');
// }

// Якщо змінна більше 10 - відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах 1, 10, 13.

// if (1 + 5 === 6) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// console.log(1 + 5);

// if (10 - 5 === 5) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// console.log(10 - 5);

// if (13 - 5 === 8) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// console.log(13 - 5);

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const value = prompt('Введіть місяць');

// let month;

// switch (value) {
//   case '1':
//     month = 'January';
//     alert(`${value} ${month}`);
//     break;
//   case '2':
//     month = 'February';
//     alert(`${value} ${month}`);
//     break;
//   case '3':
//     month = 'March';
//     alert(`${value} ${month}`);
//     break;
//   case '4':
//     month = 'April';
//     alert(`${value} ${month}`);
//     break;
//   case '5':
//     month = 'May';
//     alert(`${value} ${month}`);
//     break;
//   case '6':
//     month = 'June';
//     alert(`${value} ${month}`);
//     break;
//   case '7':
//     month = 'July';
//     alert(`${value} ${month}`);
//     break;
//   case '8':
//     month = 'August';
//     alert(`${value} ${month}`);
//     break;
//   case '9':
//     month = 'September';
//     alert(`${value} ${month}`);
//     break;
//   case '10':
//     month = 'October';
//     alert(`${value} ${month}`);
//     break;
//   case '11':
//     month = 'November';
//     alert(`${value} ${month}`);
//     break;
//   case '12':
//     month = 'December';
//     alert(`${value} ${month}`);
//     break;
//   default:
//     alert(`${value} місяць не существується `);
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// let num1 = +prompt('Введіть перше число');
// let num2 = +prompt('Введіть друге число');
// let num3 = +prompt('Введіть третє число');

// alert(num1 + num2 + num3);

//----------------------------//
//----------------------------//
// Lesson three
//----------------------------//
//----------------------------//

// -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruts = ['Apple', 'Tomat', 'Cherry', 'Orange'];

// console.log(fruts[0]);
// console.log(fruts[1]);
// console.log(fruts[2]);
// console.log(fruts[3]);

// -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

// for (let i = 1; i < 12; i++) {
//   if (i % 2 == 1) continue;

//   console.log(i);
// }

// -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
// console.lpg( `цифра ${i}!` );
// }

// let i = 0;

// while (i < 5) {
//   console.log(`цифра ${i}!`);
//   i++;
// }

// -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// let num;

// do {
//   num = prompt('Введіть число більше за 100');
// } while (num <= 100 && num);

// -- 5 --
// Вирахуйте середній вік
// const girls = [
// { age: 23, name: "Оля" },
// { age: 29, name: "Аня" },
// { age: 10, name: "Юля" },
// { age: 20, name: "Катя" },
// ];

// function getAverageAge(users) {
//   return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }

// let oil = { name: 'Оля', age: 23 };
// let anya = { name: 'Аня', age: 29 };
// let julia = { name: 'Юля', age: 10 };
// let katya = { name: 'Катя', age: 20 };

// let arr = [oil, anya, julia, katya];

// console.log(getAverageAge(arr));

//----------------------------//
//----------------------------//
// Lesson four
//----------------------------//
//----------------------------//
// ---1---
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
// if (age > 18) {
// return true;
// } else {
// return confirm('Батьки дозволили?');
// }
// }

// '||'

// function checkAge(age) {
//   return age > 18 || confirm('Батьки дозволили?');
// }

// '?'

// function checkAge(age) {
//   return age > 18 ? true : confirm('Батьки дозволили?');
// }

// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// function min(a, b) {
//   return a < b ? a : b;
// }

// ---3---
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
// if (confirm(question)) yes();
// else no();
// }
// ask(
// "Ви згодні?"
// ,
// function() { alert("Ви погодились."); },
// function() { alert("Ви скасували виконання."); }
// );

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask(
//   'Ви згодні?',
//   () => alert('Ви погодились.'),
//   () => alert('Ви скасували виконання.')
// );

//==========================

// let calculator = {
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
//   read() {
//     this.a = +prompt('a?', '');
//     this.b = +prompt('b', '0');
//   },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

//----------------------------//
//----------------------------//
// Lesson five
//----------------------------//
//----------------------------//

// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const user = {
//   name: 'Ivan',
//   job: 'doctor',
//   info: function (point) {
//     console.log(`Name is ${this.name}`);
//     console.log(`Job is ${this.job}`);
//     console.log(`Point is ${point}`);
//   },
// };

// const Katya = {
//   name: 'Katya',
//   job: 'teacher',
// };

// const Anna = {
//   name: 'Anna',
//   job: 'desigher',
// };

// user.info.bind(user)('75');
// user.info.bind(Katya)('89');
// user.info.bind(Anna)('99');

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// const showButton = {
//   showItems() {
//     console.log('Функція: ', this.items);
//   },
// };

// const html = {
//   items: ['Ісполузується для текстового документа'],
// };

// const css = {
//   items: ['Ісполузується для стилів'],
// };

// document
//   .querySelector('#html')
//   .addEventListener('click', showButton.showItems.bind(html));

// document
//   .querySelector('#css')
//   .addEventListener('click', showButton.showItems.bind(css));

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

// const shop = prompt('Введіть товар');

// let cost;

// let goods;

// switch (shop) {
//   case 'banana':
//     cost = 30;
//     goods = 4.5;
//     alert(`Товар коштує ${cost} гривень за кг, залишилося товару ${goods}`);
//     break;
//   case 'cherry':
//     cost = 58;
//     goods = 1.3;
//     alert(`Товар коштує ${cost} гривень за кг, залишилося товару ${goods}`);
//     break;
//   case 'jrange':
//     cost = 89.3;
//     goods = 3.4;
//     alert(`Товар коштує ${cost} гривень за кг, залишилося товару ${goods}`);
//     break;

//   default:
//     console.log('Немає в наявності');
// }

//------------------------------------//
//------------------------------------//
//------------------------------------//
// Lesson six
//------------------------------------//
//------------------------------------//
//------------------------------------//

// Створити телефонну книгу
// створити початковий клас Abonent, де зберігатимуться ім*я і номер
// створити set який прийматиме телефон і номер
// створити get який виводитиме данні про абонента
// створити три різних юзери
// вивести данні

// class Abonet {
//   constructor(options) {
//     this.phone = options.phone;
//     this.number = options.number;
//   }

//   phone = '';
//   number = '';

//   set name(newName) {
//     const nameRow = newName.split(' ');
//     this.phone = nameRow[0];
//     this.number = nameRow[1];
//   }

//   get name() {
//     return `phone ${this.phone} number ${this.number}`;
//   }
// }

// const Danya = new Abonet({
//   phone: 'Apple',
//   number: 380432228754,
// });

// const Ivan = new Abonet({
//   phone: 'nokio',
//   number: 345678909876,
// });

// const Vlad = new Abonet({
//   phone: 'Samsung',
//   number: 234567899876543,
// });

// console.log(Danya);
// console.log(Ivan);
// console.log(Vlad);

//------------------------------------//
//------------------------------------//
//------------------------------------//
// Lesson seven
//------------------------------------//
//------------------------------------//
//------------------------------------//

// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома
// методами:
// read() запитує два значення за допомогою prompt і запам’ятовує їх у
// властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей.

// function Calculator() {
//   this.read = function () {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   };

//   this.sum = function () {
//     return this.a + this.b;
//   };

//   this.mul = function () {
//     return this.a * this.b;
//   };
// }

// let calculator = new Calculator();
// calculator.read();

// alert('sum=' + calculator.sum());
// alert('mul=' + calculator.mul());

// ---------------

// let div = document.createElement('div');

// div.className = 'alert';

// div.innerHTML = '<strong> hello all </strong>';
