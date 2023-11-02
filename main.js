// ___________________________varian with check value__________________________
let arrTotalNum = [];
let sum = 0;

alert("Hi ;) I can calculate the average of your three numbers");

let getNumFirst = Number(prompt("Enter the first number Please"));
checkValue(getNumFirst);
let getNumSecond = Number(prompt("Enter the second number!"));
checkValue(getNumSecond);
let getNumThird = Number(prompt("Enter the third number!"));
checkValue(getNumThird);

function checkValue(num) {
  if (!isNaN(num)) {
    if (num == 0) {
      alert("You must enter only the number Please!");
      num = Number(prompt("Enter your number Please!"));
      checkValue(num);
    } else {
      arrTotalNum.push(num);
    }
  } else {
    alert("You must enter only the number Please!");
    num = Number(prompt("Enter your number Please!"));
    checkValue(num);
  }
}

for (let i = 0; i < arrTotalNum.length; i++) {
  sum += arrTotalNum[i];
}

let middleValue = sum / arrTotalNum.length;

alert(
  `Your middle the value equal ${middleValue}. From the numbers you entered ${arrTotalNum[0]}, ${arrTotalNum[1]}, ${arrTotalNum[2]}.`
);

// ___________________________simpler varian __________________________

// let getNumFirst = Number(prompt("Enter first number"));
// let getNumSecond = Number(prompt("Enter second number"));
// let getNumThird = Number(prompt("Enter third number"));

// let sum = getNumFirst + getNumSecond + getNumThird;

// let middleValue = sum / 3;

// alert(`middle value = ${middleValue}`);
