// Урок № 4 Арифметичні оператори 

// const a = 1;
// const b = a + 'test';

// const d = 4 ** 5;
// let f = 4 ** 5;
// let s = 10 % 5;

// console.log(f, s);

// f = s++;

// console.log(f, s);

// Урок № 5 Оператори порівняння //

// const personAge = 10;
// const dogAge = 5;

// console.log(5 == 10);

// Урок № 6 Логічні оператори 

// const userRole = 1;
// const adminRole = 2;

// const productStockPrice = 99;
// const defaultProductPrice = 150;
// const adminPrice = 0;

// const productPrice = adminPrice ?? productStockPrice ?? defaultProductPrice ?? 100;

// const defaultUserName = null;
// const ivanName = null;

// const ivanRole = userRole;
// const ivanBalance = 300;

// const result = ivanRole === adminRole || ivanBalance >= productPrice;

// console.log(result);

// const authorName = ivanRole === adminRole && "Admin";

// console.log(authorName)

// ==========

// let productTitle = "Навушники";

// productTitle ||= "Назва товару";

// console.log(productTitle);


// Урок № 7 Побітові оператори

// let a = 11;
// let b = 12;

// console.log(a, a.toString(2));
// console.log(b, b.toString(2));

// let c = a & b;

// console.log(c, c.toString(2));


//  Урок № 8 Умовні розгалуження

// const productName = 'Мікрофон';
// const productDefault= 'Назва товару';

// const newProductName = "Мікрофон 3000";
// const userRole = "admin";

// const updateProductName = userRole === 'admin' ? newProductName : productName;

// console.log(updateProductName);

// Урок № 9 Цикли

// let count = 0;
// let isFast = true;

// while (count < 5) {
//     console.log("hello world", count)

//     if (isFast && count >= 3) {
//         count = 5;
//     } else {
//         count++;
//     } 
// }

// ====================

// const PRODUCT_AMOUNT = 6;
// const DISCOUNT_BALANCE = 2;

// let discountAmount = 0;
// let productCount = 0;

// while (productCount < PRODUCT_AMOUNT) {
//     productCount++;

//     if (productCount <= 0) {
//         break;
//     }

//     if(productCount <= 3) {
//         discountAmount += 1;
//     } else if (productCount > 3 && productCount <= 5) {
//         discountAmount += 1.5;
//     } else if (productCount > 5 && productCount <= 8) {
//         discountAmount += 2;
//     } else if (productCount > 8) {
//         discountAmount += 2.5;
//     }

//     if (DISCOUNT_BALANCE) {
//         discountAmount += DISCOUNT_BALANCE;
//     }

//     console.log(productCount, discountAmount);
// }

// console.log('Знижка:', discountAmount, '%');

//  =====================

// let container = 5;
// let storage = 20;

// let car = 0;

// do {
//     car++;
//     storage -= container;

//     console.log(car, storage);
// } while (car < 3);

// if (car > 3) {
//     console.log('Нам потрібна нова машина');
// }

// ==================

// let start = 0;
// let goal = 100;

// let step = 0;
// let set = 8;
// let rest = 10;

// do {
//     if (step === 0) {
//         console.log('Початок тренування');
//     }

//     start++;
//     step++;

//     if (step === goal || start === goal) {
//         console.log('Кінець тренування');
//         break;
//     }

//     if (step % rest === 0) {
//         console.log(`Зробіть перерву`);
//         continue;
//     }

//     if (step % set === 0) {
//         console.log(`Ви зробили ${step / set} сет(ів)`);
//     }

//     if (step === goal / 2) {
//         console.log(`Ви зробили половину тренувань`);
//     }

//     console.log("Поточний прогрес", step);
// } while (step < goal && start < goal);

//  ==================
// let q = 0;

// for (let i = 1, j = 5; i <= j; i++) {
//     console.log(i, j);

//     if (i === 3) {
//         j++;
//     }

//     for (; ; q++) {
//         console.log(q);

//         if (q >= i) {
//             break;
//         };
//     };
// }

// ================

// let age = 25;
// let hasExp = true;
// let hasEdu = false;
// let JS = true;

// form: {
//     if (age >= 18) {
//         if (hasExp) {
//             console.log(`Ви підходите`);
//             break form;

//             if (JS) {
//                 console.log(`Ви підходите`);
//             }
//         };
        
//         if (hasEdu) {
//             console.log(`Ви підходите`);
//         };
//     };

//     if (age < 18) {
//         console.log('Ви не підходите. Малий вік');
//     };
// }

// ========================= Табличка множення

// table: for (let i = 2; i < 10; i++) {
//     console.log(`Число ${i} ==================`);
//     for (let j = 2; j < 10; j++) {

//         if (i === 9) {
//             break table;
//         }
//         let result = i * j;
//         console.log(`${i} * ${j} = ${result}`)
//     }
// }

// Урок №10 Функції 

// function calcSpace(amount, unit = 'px') {
//    return `${amount * 4}${unit}`;
// }

// console.log(calcSpace(4, 'px'));

// function playTrackById(trackId) {
//     /// отримати файл пісні і її запустити 
// }

// function stopTrackById(trackId) {
//     /// отримати файл пісні і поставити її на паузу
//     console.log(`Отримати файл пісні з ID ${trackId} і її поставити на паузу`) 
// }

// function play(trackName, trackId) {
//     console.log(`Запускаємо ${trackName}`);

//     playTrackById(trackId);
// }

// function end(oldTrackName, newTrackName) {
//     console.log(`Завершили грати ${oldTrackName}`);
//     console.log(`Наступний трек ${newTrackName}`);
// }

// function pausePlay(currentTrackName) {
//     console.log(`Трек ${currentTrackName} на паузі`);

//     reloadDataTrack();

//     play();
// }

// function reloadDataTrack(amount) {
//     if(amount <= 0) {
//         console.log(`Дані оновлені вказану кількість разів`)
//     } else {
//         console.log('Повторне оновлення');
//         reloadDataTrack(amount - 1); 
//     }
// }

// reloadDataTrack(1);

// function pauseStopByTrack(trackName, trackId) {
//     let isPause = null;

//     return () => {
//         if(isPause == true) {
//             return;
//         }
        
//         stopTrackById(trackId);
//         console.log(`Трек ${trackName} на паузі`);
//         isPause = true;
//     }
// }

// const pauseStop123 = pauseStopByTrack('Rammstein');

// pauseStop123();

// const pauseStop456 = pauseStopByTrack('When the dream falls', 10);

// pauseStop456();


// // const runCommand = function(command, errorFn) {
// //     const result = command();

// //     if(!result) {
// //         return errorFn()
// //     }
// // }

// // runCommand(
// //     () => { 
// //         console.log(`Запуск команди`);

// //         return 1 -1;
// //     },
// //     () => console.log('Помилка')
// // );

// const a = 0.1;
// const b = 0.2;
// const c = 0.3;

// console.log(a + b);

// Урок № 11 Вбудовані глобальні функції

// const code = '(5 + 5) % 5 === 0'

// console.log(eval(code))

// ==========

// function calcScreenRation(w, h) {
//     let result = w / h;

//     return isFinite(result) ? result : 'Error';
// }

// console.log(calcScreenRation(1920, 1080));

// ==============

// const num = parseInt('10');

// console.log(10 + num)

// ===============

// const domain = 'it-brains.com.ua';

// function redirectToPath(path) {
//     const link = encodeURI(`https://${domain}/${path}`);
//     console.log(link)
// } 

// const URI = "https://it-brains.com.ua//product/%D0%BA%D0%BA%D1%83%D0%B8%D1%83%D0%B5%D0%B87/info";

// function getUrl(urlInURI) {
//     urlInURI = decodeURI(urlInURI);
//     console.log(urlInURI)
// }

// redirectToPath("/product/ккуиуеи7/info")

// getUrl(URI);

//  Урок №12 Вбудовані можливості для числових типів

// const a = 0.1;
// const b = 0.2;
// const c = 0.3;
// const d = a + b;

// console.log(d - c < Number.EPSILON);

// =============

// function reviewNumber(num) {
//     if(isNaN(num)) {
//         return console.log('Is NaN');
//     }

//     if(!num && num !== 0) {
//        return console.log('Bad Number', num);
//     }

//     if(!Number.isInteger(num)) {
//        return console.log('Дробове число', num);
//     }
//     return;
// }

// reviewNumber(10)

// ===============

// № 13 Вбудовані можливості для рядкових типів 

// const a = 'HelloWorld';

// console.log(a.length)

// console.log(String.fromCodePoint(128514)) // Смайлик

// ========

// const b = "319";

// console.log(b.codePointAt(0))

// console.log(String.raw`www.test.com\home`)

// const a = 'HelloWorld';

// console.log(a.concat(' ', " ", "!"));

// console.log(a.includes('lo'));

// ==============

// Урок № 14 Просунутий тип даних: Масив

// const a = 1;
// const b = 2;
// const c = 3;

// let list = [];

// console.log(list);

// ============

// const testArr = [];

// testArr[0] = "Start";
// testArr[1] = 2;
// testArr[2] = "Test123"
// testArr[3] = "123"

// delete testArr[2];

// console.log(testArr);

// =================

// const big = [[[1], [2, 3, 4, 5], [3]], [[2]], [[3]]]

// console.log(big[0] [1] [2])

//===========================

// const location = [[100, 200], [200, 180], [300, 190]];

// for (const point of location) {
//     console.log(point)
// }

//==============================

// const location = [[100, 200], [200, 180], [300, 190]];

// for (const pointIndex in location) {
//     console.log(location[pointIndex]) 

//     for (const coordIndex in location[pointIndex]) {
//         console.log(location[pointIndex] [coordIndex])
//     }
// }

// =====================================

// const location = [[100, 200], [200, 180], [300, 190]];

// for (let i = 0; i < location.length; i++) {
//     console.log(location[i]);

//     for (let j = 0; j < location[i].length; j++) {
//         console.log(location[i] [j])
//     };
// }

// ==========================

// const l1 = [1, 3, 2];
// const l2 = [1, 2, 3];
// const l3 = l1;

// console.log(l1.toString() === l2.toString());

// console.log(l1, l3)

// ========================

// const location = [[100, 200], [200, 180], [300, 190]];

// const [a, ...b] = location;

// console.log(b)

// ===============================

// Урок № 15 Просунутий тип даних: Обєкт
// const key = "";

// const a = {
//     test: 100,
//     [key]: 200,
// }

// console.log(a[key])

// =====================


// const a = {
//     test: 100,
//     key: 200,

//     info: {
//         name: "Ivan",
//         age: 30,
//     }
// }

// console.log(a.info.name)

// ==================

// const person = {
//     name: "Ivan",
//     age: 24,
//     occupation: "Розробник",

//     address: {
//         city: "Київ",
//         street: "Вул. Шевченка",
//         houseNumber: 10,
//     }
// }

// for (const key in person) {
//     const item = person[key];
//     if(typeof person[key] === "object") {
//         for (const key2 in item) {
//             console.log(item[key2])
//         }
//     } else {
//         console.log(item);
//     }
// }

// =================================

// const person = {
//     name: "Ivan",
//     age: 24,
//     occupation: "Розробник",

//     address: {
//         city: "Київ",
//         street: "Вул.Шевченка",
//         houseNumber: 10,
//     }
// }

// const {name, age, address: {city}} = person;

// console.log(age, name, city)

// function getAddress({address: {city, street, houseNumber}}) {
    
//     return `Ваша адреса: ${city} ${street} ${houseNumber}`
// }

// let test = getAddress(person)
// console.log(test)

// ===========================

// const person = {
//     name: "Ivan",
//     age: 24,
//     occupation: "Розробник",

//     address: {
//         city: "Київ",
//         street: "Вул.Шевченка",
//         houseNumber: 10,
//     },

//     getAddress: function() {
//         return this.address;
//     }
// }
// console.log(person.getAddress())

// ===============================

// Number.prototype.toOwnString = function () {
//     console.log(this)

//     return `Число: ${this}`
// }

// const b = 1;

// const c = b.toOwnString()

// console.log(c)

// ==========================

// Урок № 16 Просунутий тип даних: Символи

// const phoneBook = {
//     me: "+3809348963",
//     name: "Phone book",
// }

// const user = {
//     name: "Olga",
//     id: 2462562354,
//     bookId: null,

//     getPhone(book) {
//         return book[this.bookId];
//     }
// }

// // ====

// function addToPhoneBook(phone, user) {
//     const symId = Symbol.for(user.id);

//     phoneBook[symId] = phone;

//     user.bookId = symId;
// }

// addToPhoneBook("+8426555682", user);

// // ==== 

// addToPhoneBook("+5426235682", user);

// // console.log(user.getPhone(phoneBook));

// // console.log(phoneBook);

// // const a = Symbol('1');
// // const b = Symbol('1');

// const id = user.bookId;

// // console.log(Symbol.keyFor(id))

// for(const key of phoneBook) {
//     console.log(key)
// }

// ==================

// let range = {
//     from: 1,
//     to: 5,
//     [Symbol.iterator]() {
//         this.current = this.from;

//         return this;
//     },

//     next() {
//         return this.current <= this.to ? { done: false, value: this.current++ } : { done: true };
//     },
// };

// // for (let num of range) {
// //     console.log(num)
// // }

// const iterator = range[Symbol.iterator]();

// do {
//     console.log(iterator.current);
//     result = iterator.next();
// } while (!result.done);

// ===========================

// Урок № 17 Вбудовані можливості для масивів 1 частина

// const obj = { 0: "hello", 1: "world", 2: "!!!", length: 3, prefix: "():", }

// const arr = Array.from(
//     obj,
//     function (elem, index) {
//         return `${this.prefix}${elem}`
//     },
//     obj
// );

// console.log(Array.isArray(arr));

// const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arr2 = [4, 5, 6];

// console.log(Array.of(...arr1, ...arr2));

// console.log(Array.of(1, 2, 3, 4, 5));

// console.log(arr1.at(1));

// console.log(-(arr1.length - arr1.push(10, 20, 30)))

// console.log(arr1.pop());

// console.log(arr1);

// console.log(arr1.shift());

// console.log(arr1);

// console.log(arr1.unshift(0, 1));

// console.log(arr1);

// console.log(arr2.includes(5));

// console.log(arr2.indexOf(5));

// const arr3 = arr1.concat(...arr2);

// console.log(arr3);

// console.log(arr1);

// arr1.copyWithin(2, 6, 8);

// console.log(arr1);

// arr1.fill(2, 6, 8);

// console.log(arr1);

// arr1.reverse();

// console.log(arr1);

// const filtredArr = arr1.filter((value, index, array) => value % 2 === 0);

// console.log(filtredArr);

// const sortFn = (elem1, elem2) => {
//     if(elem1 % 2 === elem2 % 2) {
//         return 0;
//     } else if (elem1 % 2 !== 0 && elem2 % 2 === 0) {
//         return 1;
//     } else {
//         return -1;
//     }
// };

// const sortedArr = arr1.sort(sortFn);

// console.log(sortedArr);

// =======================

// console.log(["Arabic", "Info", "Zero", "City"].sort());

// console.log(arr2.every((elem, index, array) => elem >= 0));

// console.log(arr2.some((elem, index, array) => elem >= 0));

// ===============================

// Урок № 18 Вбудовані можливості для масивів 2 частина

// const userList = [
//     { id: 1, name: "Dima", age: 19},
//     { id: 54, name: "Ivan", age: 35},
//     { id: 6412, name: "Anton", age: 41},
// ];

// let minAge = 30;

// // const userBigAge = userList.sort((user1, user2) => {
// //     return user2.age - user1.age;
// // })

// // const userBigAge = userList.find(({age }) => age >= 30)

// // const userBigAge = userList.findIndex(({age }) => age >= 30)

// console.log(userBigAge);

// =============================

// const userList = [
//     { id: 1, name: "Dima", age: 19},
//     { id: 54, name: "Ivan", age: 35},
//     { id: 6412, name: "Anton", age: 41},
// ];

// const iter = userList.values();

// console.log(iter);

// const result = iter.next();

// console.log(result);

// for (const elem of iter) {
//     console.log(elem);
// }

// ===================================

// const arr = ["Apple", "Hotdog", "Bread", "Milk"]

// console.log(arr.join(", "))

// =============================

// const arr = ["Apple", "Hotdog", "Bread", "Milk"];

// const arrSmall = [...arr].splice(1, 2, "Tea", "Cheese");

// console.log(arrSmall);

// console.log(arr)

// =================================

// const userList = [
//     { id: 1, name: "Dima", age: 19},
//     { id: 54, name: "Ivan", age: 35},
//     { id: 6412, name: "Anton", age: 41},
// ];

// const result = userList.reduce((num, user, userIndex, array) => {
//     console.log(num, user.age);

//     return user.age > num ? user.age : num;
// }, 1);

// ========================================

// const userList = [
//     { id: 1, name: "Dima", age: 19, balance: 300},
//     { id: 54, name: "Ivan", age: 35, balance: 0},
//     { id: 6412, name: "Anton", age: 41, balance: 10200},
// ];

// const totalBalance = userList.reduce((num, user) => num + user.balance, 0)

// console.log(totalBalance);

// ===================================

// const userList = [
//     { id: 1, name: "Dima", age: 19, balance: 300},
//     { id: 54, name: "Ivan", age: 35, balance: 0},
//     { id: 6412, name: "Anton", age: 41, balance: 10200},
// ];

// const result = userList.map((user, index, array) => {
//     return user.name;
// });

// console.log(result.join(", "))

// =============================================

// const flatArray = [[100, 105], [200, 242], [300, 342], [123, 456]];

// console.log(flatArray.map((el) => [...el, el[0] - el[1]]));

// =============================================

// const flatArray = [
//     [
//         [500, 364],
//         [132, 131],
//     ],

//     [
//         [235, 344],
//         [122, 161],
//     ],
// ];

// const result = flatArray.map((el) => {
//     const newArr = el.map((it) => {
//         return it[0] - it[1];
//     });

//     console.log(newArr);

//     return newArr;
// });

// console.log(result);

// ==================================

// Урок № 19 Вбудовані можливості для Обєктів

// const article = {
//     id: 105423,
//     title: "My article",
//     description: "This is info about article",
//     categoryId: 1423,
//     likeAmount: 442,
// };

// articlePhoto = {
//     photoUrl: "...url",
//     photoId: 100,
//     photoType: "big",
// };

// articleCommentList = {
//     list: [{id: 4323, user: "Ivan", message: "Крутий коментар"}],
// };

// Object.assign(article, articlePhoto, articleCommentList);

// console.log(article);

// =========================

// const article = {
//     id: 105423,
//     title: "My article",
//     description: "This is info about article",
//     categoryId: 1423,
//     likeAmount: 442,
// };

// articlePhoto = {
//     photoUrl: "...url",
//     photoId: 100,
//     photoType: "big",
// };

// articleCommentList = {
//     list: [{id: 4323, user: "Ivan", message: "Крутий коментар"}],
// };

// Object.assign(article, articlePhoto, articleCommentList);

// console.log(Object.entries(article))

// =========================

// const objArr = [["id", 100432], ["title", "My title"], ["price", 1203]];

// console.log(Object.fromEntries(objArr))

// ========================================

// const article = {
//     id: 105423,
//     title: "My article",
//     description: "This is info about article",
//     categoryId: 1423,
//     likeAmount: 442,
// };

// console.log(article.hasOwnProperty("id"))

// =========================================

// const article = {
//     id: 105423,
//     title: "My article",
//     description: "This is info about article",
//     categoryId: 1423,
//     likeAmount: 442,
// };

// Object.freeze(article)

// console.log(article)

// =================================

// Урок № 20 Просунутий тип даних Множина

// const userList = new Set([136464, 262144, 543166, 643622])

// console.log(userList);

// for (const value of userList) {
//     console.log(value);
// };

// userList.forEach((value, value2, set) => console.log(value));

// console.log(userList.size);

// userList.add(46263);

// console.log(userList);
// console.log(userList.size);

// ==========

// userList.delete(136464);

// console.log(userList);
// console.log(userList.size);

// ==============================

// console.log(userList.has(136464))

// ============================

// userList.clear();
// console.log(userList);

// ====================================

// const key = userList.keys();

// console.log(key);

// ==============

// const key = userList.entries();

// console.log(key);

// ==========================

// const entry = userList.entries();

// const obj = Object.fromEntries(entry);

// console.log(obj);

// =================================

// const valueList = userList.values();

// const arr = Array.from(valueList);

// console.log(arr);

// =============================

// const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

// const set = new Set(arr);

// const arr2 = Array.from(set);

// console.log(arr2);

// ==================================

// const categoryList = new Set();

// function addCategory(category) {
//     if(categoryList.has(category)) {
//         console.log("Ця категорія вже є")
//         return false;
//     } 

//     categoryList.add(category);
//     return true
// }   

// console.log(addCategory("Спорт"));
// console.log(addCategory("Спорт"));
// console.log(addCategory("Їжа"));

// ==============================

// const students = [
//     { id: 1, name: "John", course: "Math" },
//     { id: 2, name: "Jane", course: "Science" },
//     { id: 3, name: "Adam", course: "Math" },
//     { id: 4, name: "Eve", course: "English" },
//     { id: 5, name: "Kate", course: "Science" },
// ];

// const courseList = new Set(students.map((student) => student.course))

// console.log(courseList)

// ========================

// Урок № 21 Просунутий тип даних Словник

// const button = new Map(
//     [
//         ["color", "red"],
//         ["size", "32px"],
//     ],
// );

// console.log(button);

// const obj = {
//     color: "red",
//     size: "32px",
// };

// const set = new Set(["red", "32px"])

// const button2 = new Map(Object.entries(obj));

// console.log(button2)

// const button3 = new Map(set.entries());

// console.log(button3)

// ===========================

// const button = new Map(
//     [
//         ["color", "red"],
//         ["size", "32px"],
//     ],
// );

// const set2 = new Set(button.keys());

// console.log(set2)

// ===============

// const button = new Map(
//     [
//         ["color", "red"],
//         ["size", "32px"],
//     ],
// );

// for (const [key, value] of button) {
//     console.log(key, value);
// };

// for (const value in Object.fromEntries(button.entries())) {
//     console.log(value);
// };

// button.forEach((key, value, map) => console.log(key, value, map))

// console.log(button.size)

//  =========

// const button = new Map(
//     [
//         ["color", "red"],
//         ["size", "32px"],
//     ],
// );

// button.set("weight", 1000)
// console.log(button)

// console.log(button.get("weight"))

// button.delete("weight");

// console.log(button);

// =============

// const button = new Map(
//     [
//         ["color", "red"],
//         ["size", "32px"],
//     ],
// );

// console.log(button.has("color"))

// button.clear()

// console.log(button)

// ========

// const LANG_LIST = {
//     UA: 'uk-UA',
//     EA: 'ea-US',
// }

// const activeLang = LANG_LIST.EA;

// const product = {
//     price: 100,
//     amount: 3,

//     info: new Map([
//         [LANG_LIST.UA, {
//             title: "Заголовок",
//             info: "Інформація",
//         }
//         ],
//         [LANG_LIST.EA, {
//             title: "Title",
//             info: "Info",
//         }
//         ],
//     ])
// };

// const info = product.info.get(activeLang);
// console.log(info);

// console.log(product.info.has(activeLang))

// ==================

// const user1 = {
//     id: 1323,
//     name: "Ivan",
// };

// const user2 = {
//     id: 4231,
//     name: "Anton",
// };

// const product1 = {
//     id: 5314,
//     title: "Phone",
// };

// const product2 = {
//     id: 3244,
//     title: "Apple",
// };

// const userProduct = new Map();

// userProduct.set(user1, product1).set(user2, product2);

// console.log(userProduct);

// const productClientList = new Map();

// productClientList.set(product1, new Set());

// console.log(productClientList.set(product1, productClientList.get(product1).add(user1)));
// console.log(productClientList.set(product1, productClientList.get(product1).add(user2)));

// const has = productClientList.get(product1).has(user1);

// console.log(has);

// ==================
 
// Урок № 22 Вбудовані можливості: JSON та URL

// const roleField = "roleName";

// const data = {
//     id: 325,
//     login: "user1234",
//     password: "123456",
//     [roleField]: "Admin",
//     go() {
//         console.log("go");
//     },
// };

// const jsonData = JSON.stringify(data, (key, value) => {
//     if(key === roleField) {
//         return null;
//     }

//     if(typeof value === "string") {
//         return value.toUpperCase();
//     }

//     if(typeof value === "number") {
//         return value * 10;
//     }
//     return value;
// }, 1);

// console.log(jsonData);

// ========================
// const roleField = "roleName";

// const data = {
//     id: 325,
//     login: "user1234",
//     password: "123456",
//     [roleField]: "Admin",
//     go() {
//         console.log("go");
//     },
// };

// const jsonData = JSON.stringify(data, (key, value) => {
//     if(key === roleField) {
//         return null;
//     }

//     if(typeof value === "string") {
//         return value.toUpperCase();
//     }

//     if(typeof value === "number") {
//         return value * 10;
//     }
//     return value;
// }, 1);

// const parseData = JSON.parse(jsonData, (key, value) => {
//     if(key === roleField) {
//         return "Admin";
//     }

//     if(typeof value === "string") {
//         return value.toLowerCase();
//     }

//     if(typeof value === "number") {
//         return value / 10;
//     }
//     return value;
// }, 1);

// console.log(parseData);

// =============

// const url = new URL('https://www.example.com/path');

// console.log(url.href)

// ===========

// Урок № 23 Дата

// const date = new Date()

// const dateString = date.toISOString();

// console.log(dateString)

// const date2 = Date.parse(dateString) + 1000 * 60 * 5;

// console.log(date2);

// console.log(date.toString());

// console.log(date.toDateString());

// console.log(date.toTimeString());

// ===================

// const date = new Date()

// const zone = date.getTimezoneOffset() / -60;

// console.log(zone);

// ===================

// const user = -3;

// function getUserTimeZone(timeZone) {
    // let date = Date.now();
    // let date = new Date(Date.UTC(2023, 5, 26, 12, 30, 0, 0));

    // console.log(date.getHours());

    // console.log(date.toString());
    // console.log(date.toUTCString());

    // const myTimeZone = date.getTimezoneOffset() / -60;

    // date.setTime(date.getTime() - 1000 * 60 * 60 * myTimeZone);

    // date.setTime(date.getTime() + 1000 * 60 * 60 * timeZone);

    // return date;
// }

// const userDate = getUserTimeZone(user);

// console.log(userDate.toString());
// console.log(userDate.toUTCString());
// console.log(new Date(getUserTimeZone(user)).toString());

// ====================

// Урок № 24 Вбудовані можливості: Математика

// const a = 5;
// const b = 10;
// const c = -5;

// const arr = [10, 20, 30, 40]
// console.log(Math.max(a, b, c, ...arr))

// ====================

// const a = 5;

// console.log(Math.sign(a));

// ==================

// const a = 5;

// console.log(Math.pow(a, 2)) 

// ===============

// const a = 5;

// console.log(Math.sqrt(a))

// ===============

// console.log(Math.floor(1.1), Math.floor(1.5), Math.floor(1.9))

// console.log(Math.ceil(1.1), Math.ceil(1.5), Math.ceil(1.9))

// console.log(Math.round(1.1), Math.round(1.5), Math.round(1.9))

// console.log(Math.trunc(1.1), Math.trunc(1.5), Math.trunc(1.9))

// =================

// const random = Math.trunc(Math.random() * 100) + 1;

// console.log(random)

// ==============

// console.log(Math.fround(0.1 + 0.2) === Math.fround(0.3))

//==============

// Урок № 25 Вбудовані можливості: Консоль 

// const timer = "Timer";

// console.time(timer);

// console.group("Group 1");
// console.log('Test');
// console.groupEnd()

// console.timeEnd(timer)

// ==================

// const test1 = () => console.trace("Hello");

// const test2 = () => test1();

// const test3 = () => test2();

// test3()

// ===================

// const data = [
//     { name: "John", age: 25, city: "New York" },
//     { name: "Alice", age: 30, city: "London" },
// ]

// console.table(data)

// ===============

// const a = 5;
// const b = 10;

// const result = a > b;

// console.assert(result, "info")

// ================

// console.log("%cHello World", "color: blue, font-size: 50px")

// ===============

// Урок № 26 Регулярні вирази

// Урок № 27 Вбудовані регулярні вирази

// const reg = /test/g;

// // const reg1 = RegExp("test", "g")
// // console.log(reg.flags)

// const result = reg.exec("This is test")

// console.log(result)

// ==========

// const reg = /test/g;

// const test = "This is test and est";

// const result = test.matchAll(reg)

// console.log(result.next());

// console.log(result.next());

// ==============

