// Мережа фастфудів пропонує кілька видів гамбургерів:

// маленький (50 тугриків, 20 калорій);
// великий (100 тугриків, 40 калорій).
// Гамбургер може бути з одним із декількох видів начинок:

// сиром (+ 10 тугриків, + 20 калорій);
// салатом (+ 20 тугриків, + 5 калорій);
// картоплею (+ 15 тугриків, + 10 калорій).
// Можна додати добавки:

// посипати приправою (+15 тугриків, 0 калорій) - полити майонезом (+ 20 тугриків, +5 калорій).
// Напишіть програму, яка розраховує вартість та калорійність гамбургера. Використовуйте ООП підхід.

// (підказка: потрібен клас Гамбургер, константи, методи для вибору опцій та розрахунку потрібних величин)

// Приклад роботи коду:

// // маленький гамбургер з начинкою з сиру
// var hamburger = new Hamburger(Hamburger .SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// // добавка з майонезу
// hamburger.addTopping(Hamburger.TOPPING_MAYO);

// // запитаємо скільки там калорій
// console.log(“Calories: “ + hamburger.calculate ());

// // скільки коштує
// console.log("Price: “ + hamburger.calculatePrice());

// // я тут передумав і вирішив додати ще приправу
// hamburger.addTopping(Hamburger .TOPPING_SAUCE);

// // А скільки тепер коштує?
// console.log("Price with sauce: “ + hamburger.calculatePrice());

const STUFFING_CHEESE = { price: 10, calories: 20, name: "cheese" };
const STUFFING_SALAD = { price: 20, calories: 5, name: "salad" };
const STUFFING_POTATO = { price: 15, calories: 10, name: "potato" };

const TOPPING_SPICE = { price: 15, calories: 0, name: "spice" };
const TOPPING_MAYO = { price: 20, calories: 5, name: "mayo" };

class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calculate() {
    const totalCalories =
      this.size.calories +
      this.stuffing.calories +
      this.toppings.reduce((acc, topping) => acc + topping.calories, 0);

    return totalCalories;
  }

  calculatePrice() {
    const totalPrice =
      this.size.price +
      this.stuffing.price +
      this.toppings.reduce((acc, topping) => acc + topping.price, 0);

    return totalPrice;
  }
}

// Приклад роботи коду:

const hamburger = new Hamburger(SIZE_SMALL, STUFFING_CHEESE);

hamburger.addTopping(TOPPING_MAYO);
console.log("Calories: " + hamburger.calculate());
console.log("Price: " + hamburger.calculatePrice());

hamburger.addTopping(TOPPING_SPICE);
console.log("Price with spice: " + hamburger.calculatePrice());
