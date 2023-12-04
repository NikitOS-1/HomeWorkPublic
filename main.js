// 1. Створити клас Людина.
// Властивості:
// імʼя;
// стать.
// Методи:
// конструктор, який приймає два параметри: імʼя та стать.

// 2. Створити клас Квартира.
// Властивості:
// конструктор не потрібен;
// масив жителів, який при створенні пустий.
// Методи:
// додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.

// 3. Створити клас Будинок.
// Властивості:
// масив квартир, який при створенні пустий;
// максимальна кількість квартир.
// Методи:
// конструктор, який приймає один параметр: максимальну кількість квартир;
// додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.

// В якості демонстраціїї створити:
// декілька екземплярів класу Людина;
// декілька екземплярів класу Квартира;
// додадити екземпляри класу Людина до екземплярів класу Квартира;
// екземпляр класу Будинок;
// додадити екземпляри класу Квартира до екземплярів класу Будинок.

class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Apartament {
  constructor() {
    this.residents = [];
  }

  addResident(person) {
    this.residents.push(person);
  }
}

class House {
  constructor(maxApartaments) {
    this.apartaments = [];
    this.maxApartaments = maxApartaments;
  }

  addApartament(apartament) {
    if (this.apartaments.length < this.maxApartaments) {
      this.apartaments.push(apartament);
    } else {
      console.log("Warning 'Max lenght apartaments'");
    }
  }
}

// декілька екземплярів класу Людина;
const person1 = new Person("Nikita", "male");
const person2 = new Person("Alexandra", "female");

// декілька екземплярів класу Квартира;
const apartament1 = new Apartament();
const apartament2 = new Apartament();

// додадити екземпляри класу Людина до екземплярів класу Квартира;
apartament1.addResident(person1);
apartament2.addResident(person2);

// екземпляр класу Будинок;
const house = new House(10);

// додадити екземпляри класу Квартира до екземплярів класу Будинок.
house.addApartament(apartament1);
house.addApartament(apartament2);
