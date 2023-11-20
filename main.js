// Ця дз складається з чотирьох невеликих завдань, за реалізацію кожної з них можна отримати 25 балів:

// 1.Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

// 2.Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

// 3.Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

// 4.Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

// _______________________________________________________________
// 1.Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const array = [
  1,
  2,
  3,
  ["hello", "world", ["df", 89, 3, ["32", 45]]],
  "123",
  4,
  5,
  2,
  10,
];

/**
 *
 * @param {Array} arr - Receives an array of data
 * @returns {Number} - Returns the arithmetic average of all typeof Number elements in an array
 */
function middleValueNumber(arr) {
  let numbersOfArray = arr
    .flat(Infinity)
    .filter((el) => typeof el === "number");

  if (numbersOfArray.length === 0) {
    return "Your array dont have numbers";
  }

  let sum = numbersOfArray.reduce((acc, num) => num + acc, 0);
  let middleValue = sum / numbersOfArray.length;

  return middleValue;
}

// _______________________________________________________________
// 2.Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

/**
 *
 * @param {Number} x - Your first number
 * @param {String} znak - Use an arithmetic operator
 * @param {Number} y - Your second number
 * @returns {Number} - Returns the sum of x and y with the selected arithmetic operator
 */
function doMath(x, znak, y) {
  let result;
  if (x === undefined || znak === undefined || y === undefined) {
    return "Error";
  }
  if (znak == "+") {
    result = x + y;
  } else if (znak == "-") {
    result = x - y;
  } else if (znak == "*") {
    result = x * y;
  } else if (znak == "/") {
    if (y === 0) {
      return "You can't divide by 0";
    } else {
      result = x / y;
    }
  } else if (znak == "%") {
    result = (x * y) / 100;
  } else if (znak == "^") {
    result = Math.pow(x, y);
  } else {
    return "You can't use this operator";
  }
  return result;
}

// _______________________________________________________________
// 3.Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

/**
 *
 * @returns {Array} returns a two-dimensional array filled with client data
 */
function fillArrayOfArray() {
  let lengthArrayGeneral = Number(
    prompt("Enter the length of the general array")
  );
  let lengthArraySecond = Number(
    prompt("Enter the length of the internal array")
  );

  let arrayOfArrays = [];

  if (isNaN(lengthArrayGeneral) || isNaN(lengthArraySecond))
    return "You need use only Number";

  for (let i = 0; i < lengthArrayGeneral; i++) {
    let secondArray = [];

    for (let j = 0; j < lengthArraySecond; j++) {
      let item = prompt(
        `Enter a value for the (Array:${i + 1}, Element:${j + 1})`
      );
      secondArray.push(item);
    }

    arrayOfArrays.push(secondArray);
  }

  return console.log(arrayOfArrays);
}

// _______________________________________________________________
// 4.Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
/**
 *
 * @param {String} string - Enter the line from which you want to remove the letter
 * @param {Array} arrayLetters - Enter an array with the letters you want to delete
 * @returns {String} - Returns a string with letters removed
 */
function removeLetterFromString(string, arrayLetters) {
  if (typeof string !== "string" || !Array.isArray(arrayLetters)) {
    return "Please enter the words and then the letters you want to delete";
  }

  const changedString = string
    .split("")
    .filter((letter) => !arrayLetters.includes(letter))
    .join("");

  return changedString;
}
