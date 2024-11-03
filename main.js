console.log("#1. Приклад домашнього завдання з JavaScript");

// #1
document.write("<h2>Завдання №1 створення змінних</h2>");

let myNumber = 10;
console.log(myNumber);
document.write("<h3>Змінна myNumber: " + myNumber + "</h3>");

let myStr = "some string";
console.log(myStr);
document.write("<h3>Змінна myStr: " + myStr + "</h3>");

let myBool = true;
console.log(myBool);
document.write("<h3>Змінна myBool: " + myBool + "</h3>");

let myArr = [1, 2, 3, 4, 5];
console.log(myArr);
document.write("<h3>Змінна myArr: " + myArr + "</h3>");

let myObj = {
    first: "First Name",
    last: "Last Name",
}
console.log(myObj);
document.write("<h3>Змінна myObj: " + myObj + "</h3>" + "<br>");


// #2
document.write("<h2>Завдання №2 форматування цілого числа</h2>");
let decimal2 = parseFloat(myNumber).toFixed(2);
document.write("<h3>Змінна: decimal2 = " + decimal2 + "</h3>" + "<br>");
console.log(decimal2);


// #3
document.write("<h2>Завдвння №3 створення префіксних та поствіксних інкрементів та декрементів</h2>");

let i = 1;
console.log(i);
document.write("<h3>Змінна i = " + i + "</h3>");

let c = i++;
console.log(i);
document.write("<h3>Префіксний інкремент = " + i + "</h3>");

let d = ++i;
console.log(i);
document.write("<h3>Постфіксний інкремент = " + i + "</h3>");

let e = i--;
console.log(i);
document.write("<h3>Префіксний декремент = " + i + "</h3>");

let s = --i;
console.log(i);
document.write("<h3>Постфіксний декремент = " + i + "</h3>" + "<br>");


// #4
document.write("<h2>Завдання №4 використання операцій присвоєння</h2>");

let myTest = 20;
console.log(myTest);

document.write("<h3>Змінна myTest = " + myTest + "</h3>");
myTest += myNumber;
console.log(myTest);

document.write("<h3>Змінна myTest з присвоєнням += = " + myTest + "</h3>");
myTest -= 5;

console.log(myTest);
document.write("<h3>Змінна myTest з присвоєнням -= = " + myTest + "</h3>");
myTest *= 15

console.log(myTest);
document.write("<h3>Змінна myTest з присвоєнням *= = " + myTest + "</h3>");
myTest /= myNumber;

console.log(myTest);
document.write("<h3>Змінна myTest з присвоєнням /= = " + myTest + "</h3>");
myTest %= 38;

console.log(myTest);
document.write("<h3>Змінна myTest з присвоєнням %= = " + myTest + "</h3>" + "<br>");


// #5
document.write("<h2>Завдання №5 використання бібліотеки Math</h2>");

let myPi = Math.PI;
console.log(myPi);
document.write("<h3>Змінна myPi =" + myPi + "</h3>");

let myRound = Math.round(89.279)
console.log(myRound);
document.write("<h3>Змінна myRound =" + myRound + "</h3>");

let myRandom = Math.random() * 10;
console.log(myRandom);
document.write("<h3>Змінна myRandom =" + myRandom + "</h3>");

let myPow = Math.pow(3, 5);
console.log(myPow);
document.write("<h3>Змінна myPow =" + myPow + "</h3>" + "<br>");


// #6
document.write("<h2>Завдання №6 створення об'єктів</h2>");

let str1 = "Мама мыла раму, рама мыла маму";
let strObj = {
    'str1': str1,
    'length': str1.length,
};

document.write(`<h3>Виводимо змінні: <br> strObj.str = ${strObj.str1}, <br> strObj.length = ${strObj.length} </h3> <br>`);


// #7
document.write(`<h2>Завдання №7 перевірка тексту та його належність</h2>`);

let isRamaPos = strObj.str1.indexOf('рама');
console.log(isRamaPos);
document.write(`<h3>Змінна isRamaPos = ${isRamaPos} </h3>`);

let isRama = str1.includes('рама') ? 'true' : 'false';
console.log(isRama);
document.write(`<h3>Змінна isRama = ${isRama} </h3> <br>`);


// #8
document.write("<h2>Завдання №8 перейменування підрядка у рядку</h2>")
document.write("<h3>Змінна str1 = " + str1 + "</h3>");
let strReplace = strObj.str1.replace('рама', 'Рама');
document.write("<h3>Змінна strReplace = " + strReplace + "</h3>" + "<br>");

/*
 * #9
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */
document.write(`<h2>Завдання №9 преобразування тексту в верхній та нижній регістр</h2>`);

let someStr = 'some STRING';
document.write(`<h3>Текст:  ${someStr}</h3>`);
let upperStr = someStr.toUpperCase();
document.write(`<h3>У верхнему регістрі:  ${upperStr}</h3>`);
let lowerStr = someStr.toLowerCase();
document.write(`<h3>У нижнему регістрі:  ${lowerStr}</h3>`);
