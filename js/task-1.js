// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"
/*
const min = Math.floor(Math.random() * (59 - 0) + 0);

if (min <= 15) {
  alert(`${min}входить в першу чверть`);
} else if (min <= 30) {
  alert(`${min}входить в другу чверть`);
} else if (min <= 45) {
  alert(`${min}входить в третю чверть`);
} else if (min <= 60) {
  alert(`${min}входить в четверту чверть`);
}
*/

// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.
/*
let num = prompt("enter num");

switch (num) {
  case "1":
    console.log("зима");
    break;
  case "2":
    console.log("весна");
    break;
  case "3":
    console.log("літо");
    break;
  case "4":
    console.log("осінь");
    break;
  default:
    console.log("Вибачте, але ви маєте ввести значення від 1 до 4 включно");
}
*/
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
/*
let i = prompt("Login");
console.log(i);
if (i === "Адмін") {
  let p = prompt("password");
  if (p === "Я головний") {
    alert("Добрий день!");
  } else {
    alert("Невірний пароль!");
  }
} else if (i === "" || i === null) {
  alert("Скасовано");
} else {
  alert("Я вас не знаю");
}
*/

// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.
/*
function getNumbers(min, max) {
  let sumEven = 0;
  for (let i = max; i >= min; i--) {
    console.log(i);
    if (i % 2 === 0) {
      sumEven += i;
    }
  }
  return sumEven;
}

console.log(getNumbers(0, 50));
*/

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.
/*
function min(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Not a number!";
  }
  if (a < b) {
    return a;
  } else if (a > b) {
    return b;
  }
  return "Not a number!";
}
*/
// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.
/*
let i = 0;

while (i <= 20) {
  console.log(i);
  i++;
}
*/

// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.
/*
function fizzBuzz(num) {
  let i = 1;
  while (i <= num) {
    console.log(i);
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i);
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log(i);
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log(i);
      console.log("buzz");
    }
    i++;
  }
}

fizzBuzz(20);
fizzBuzz(30);
*/

// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().
/*
let num = Number(prompt("enter number"));
if (num === 10) {
  alert("Вірно");
} else {
  alert("Невірно");
}
*/
// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

/*
let minutes = Number(prompt("Введіть кількість хвилин:"));
let hours = Math.floor(minutes / 60);
let remainingMinutes = minutes % 60;

// Форматуємо години та хвилини, додаючи нуль, якщо потрібно
let formattedHours = String(hours).padStart(2, "0");
let formattedMinutes = String(remainingMinutes).padStart(2, "0");

console.log(`${formattedHours}:${formattedMinutes}`);
*/
/*
function filterEvenNumbers(arr) {
  let i = arr.length - 1;
  while (i >= 0) {
    if (i % 2 === 0) {
      console.log(arr[i]);
    }
    i--;
  }
}
*/
/*
function filterEvenNumbers(arr) {
  let evenNumbers = [];
  let i = arr.length - 1;

  while (i >= 0) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
    i--;
  }

  return evenNumbers.reverse(); // Повертаємо у вихідному порядку
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(filterEvenNumbers([10, 15, 20, 25, 30])); // [10, 20, 30]
console.log(filterEvenNumbers([7, 9, 11, 13])); // []
*/
/*
function processNumbers(numbers, minValue) {
  let mas = numbers.filter((num) => num > minValue);
  return mas.map((num) => num * 2);
}

console.log(processNumbers([10, 20, 30, 5, 3], 10)); // [40, 60]
console.log(processNumbers([2, 4, 6, 8], 4)); // [12, 16]
console.log(processNumbers([100, 200, 50], 150)); // [400]
*/
/*
function formatStrings(strings) {
  return strings.map((num) => num.toLowerCase().trim().replace(/\s+/g, "-"));
}
/*Напиши функцію formatStrings(strings), яка приймає масив рядків (strings) і повертає новий масив, де:
- Всі рядки перетворені в нижній регістр.
- Зайві пробіли на початку та в кінці видалені.
- Всі пробіли замінені на тире (-).
*/ /*
console.log(
  formatStrings(["  Hello World  ", "JavaScript  Functions", "Array Methods"])
);
*/
// ["hello-world", "javascript-functions", "array-methods"]
/*Задача:
Напиши функцію sanitizeText(text), яка приймає рядок text і повертає очищений текст, де:
1️⃣ Видалені всі цифри (0-9).
2️⃣ Перетворені всі літери в нижній регістр.
3️⃣ Замінені всі знаки пунктуації (.,!?) на пробіл*/
/*
function sanitizeText(text) {
  return text
    .replace(/\d+|%/g, "")
    .toLowerCase()
    .replace(/[.,!?]/g, " ");
}

console.log(sanitizeText("Привіт, як справи? У мене 100% добре!"));
// "привіт як справи у мене  добре"
*/

//Напиши функцію extractEmails(text), яка приймає рядок text і повертає масив усіх email-адрес із цього рядка.
/*
function extractEmails(text) {
  let arr = text.split(",");
  let arrEmail = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("@")) {
      arrEmail = arrEmail.push(arr[i]);
      continue;
    }
  }
  return arrEmail;
}

console.log(
  extractEmails("Мій email: test@example.com. Або пишіть на support@site.org.")
);*/
// ["test@example.com", "support@site.org"]
/*
Задача:
Напиши функцію filterByLength(words, minLength, maxLength), яка приймає:
1️⃣ words – масив рядків
2️⃣ minLength – мінімальну довжину слова
3️⃣ maxLength – максимальну довжину слова
Функція повинна повернути новий масив, що містить лише ті слова, довжина яких відповідає заданим обмеженням.
*/
/*
function filterByLength(words, minLength, maxLength) {
  let newWords = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= minLength && words[i].length <= maxLength) {
      newWords.push(words[i]);
    }
  }
  return newWords;
}

console.log(
  filterByLength(["apple", "banana", "kiwi", "pineapple", "grape"], 4, 6)
);
// ["apple", "kiwi", "grape"]
*/
/*
Задача:
Напиши функцію reverseWords(sentence), яка приймає рядок sentence, розбиває його на слова, змінює порядок слів на зворотний і повертає перетворений рядок.
*/
function reverseWords(sentence) {
  return sentence.split(" ").reverse().join(" ");
}
console.log(reverseWords("JavaScript is awesome"));
// "awesome is JavaScript"

console.log(reverseWords("Keep pushing forward"));
// "forward pushing Keep"
