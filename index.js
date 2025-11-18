//14
const number14 = -10;
if (number14 > 100) {
  console.log(`14) The number is greater than 100.`);
} else if (number14 < 0) {
  console.log(`14) The number is negative.`);
} else {
  console.log(`14) The number is greater than 0 but lesser than 100.`);
}
//15
const number15 = 1738;
const number15_10 = number15 / 10;
const number15_20 = number15_10 * 2;
const number15_30 = number15_10 * 3;
console.log(`15) The 10 percent of your number is ${number15_10}`);
console.log(`15) The 20 percent of your number is ${number15_20}`);
console.log(`15) The 30 percent of your number is ${number15_30}`);
//16
let number16 = -2;
if (number16 > 100) {
  number16 = 100;
  console.log(`16) ${number16}`);
} else {
  console.log(`16) ${number16}`);
}
//17
const str17_1 = "mongolia";
const str17_2 = "mongolia";
console.log(`17) ${str17_1 === str17_2}`);
//18
const number18 = 98;
const number18_2 = (number18 % 10) * 10;
const number18_3 = (number18 - (number18 % 10)) / 10;
const number18_4 = number18_3 + number18_2;
if (number18 > 9 && number18 < 100) {
  console.log(`18) The reverted number is ${number18_4}`);
} else {
  console.log(`18) Whoops!!! Only enter number with 2 digits.`);
}
//19
let number19 = 0;
if (number19 < 0) {
  number19 = number19 * -1;
  console.log(`19) ${number19}`);
} else if (number19 === 0) {
  console.log(`19) Your number is zero.`);
} else {
  console.log(`19) ${number19}`);
}
//20 Zalhuu hursen. Buren oilgoogui
//21 buren hiigeegui.
const number21 = 7894;
const numberOddEven = number21 % 2;
if (numberOddEven === 0) {
  console.log(`20) You are allowed to go in tuesday, thursday, saturday`);
} else {
  console.log(`20) You are allowed to go in monday, wednesday, friday`);
}
