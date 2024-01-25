function* idGenerator() {
  let count = 0;

  while (true) {
    yield "id" + count;
    count++;
  }
}

const generateId = idGenerator();

console.log(generateId.next().value);
console.log(generateId.next().value);
console.log(generateId.next().value);
