// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:

// sum(3) = 3
// sum(5) = 8
// sum(20) = 28

/**
 *
 * @returns - returns the number added to the number
 */
function getSum() {
  let result = 0;

  function increaseSum(num) {
    result += num;
    return result;
  }

  return increaseSum;
}

const sum = getSum();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
