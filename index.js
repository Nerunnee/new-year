// 1. Тэгш тоонуудын квадратын нийлбэр
// [1,2,3,4,5,6] → 2²+4²+6² = 56
const arr1 = [1, 2, 3, 4, 5, 6];
const newArr1 = arr1.filter((num) => num % 2 === 0);
const lastArr1 = newArr1.map((n) => n * n);
const resArr1 = lastArr1.reduce((a, b) => a + b);
console.log("1)", resArr1);

// 2. 5-аас их тоонуудыг 3-аар үржүүлж нийлбэр
// [2,6,4,10] → 63 + 103 = 48
const arr2 = [2, 6, 4, 10];
const newArr2 = arr2.filter((num) => num > 5);
const lastArr2 = newArr2.map((n) => n * 3);
const resArr2 = lastArr2.reduce((a, b) => a + b);
console.log("2)", resArr2);
// 3. 3-аар хуваагдах тоонуудын квадратын нийлбэр
// [3,4,6,7,9] → 3²+6²+9² = 126
const arr3 = [3, 4, 6, 7, 9];
const newArr3 = arr3.filter((num) => num % 3 === 0);
const lastArr3 = newArr3.map((n) => n * n);
const resArr3 = lastArr3.reduce((a, b) => a + b);
console.log("3)", resArr3);

// 4. 10-аас бага тоонуудын кубын нийлбэр
// [2,5,12,7] → 2³+5³+7³ = 476
const arr4 = [2, 5, 12, 7];
const newArr4 = arr4.filter((num) => num < 10);
const lastArr4 = newArr4.map((n) => n * n * n);
const resArr4 = lastArr4.reduce((a, b) => a + b);
console.log("4)", resArr4);

// 5. 0-с их тоонуудыг 2 дахин үржүүлж нийлбэр
// [-2,3,0,5,-1] → (32 + 52) = 16
const arr5 = [-2, 3, 0, 5, -1];
const newArr5 = arr5.filter((num) => num > 0);
const lastArr5 = newArr5.map((n) => n * 2);
const resArr5 = lastArr5.reduce((a, b) => a + b);
console.log("5)", resArr5);
// 6. 2-аар хуваагдах тоонуудын дундаж
// [2,5,8,10] → (2+8+10)/3 = 6.666…
const arr6 = [2, 5, 8, 10];
const newArr6 = arr6.filter((num) => num % 2 === 0);
const lastArr6 = newArr6.reduce((a, b) => a + b);
const resArr6 = lastArr6 / newArr6.length;
console.log("6)", resArr6);

// 7. 3-аар хуваагдах тоонуудын дундаж
// [3,4,6,7,9] → (3+6+9)/3 = 6
const arr7 = [3, 4, 6, 7, 9];
const newArr7 = arr7.filter((num) => num % 3 === 0);
const lastArr7 = newArr7.reduce((a, b) => a + b);
const resArr7 = lastArr7 / newArr7.length;
console.log("7)", resArr7);

// 8. 5-аас их тоонуудыг модуль 2 үр дүнгээр шүүх, нийлбэр олох
// [2,6,4,10,7] → 6+10 = 16
const arr8 = [2, 6, 4, 10, 7];
const newArr8 = arr8.filter((num) => num > 5 && num % 2 === 0);
const resArr8 = newArr8.reduce((a, b) => a + b);
console.log("8)", resArr8);

// 9. 3-аас бага тоонуудын үржвэр
// [1,2,3,4,5] → 1*2 = 2
const arr9 = [1, 2, 3, 4, 5];
const newArr9 = arr9.filter((num) => num < 3);
const resArr9 = newArr9.reduce((a, b) => a * b);
console.log("9)", resArr9);

// 10. 5-аас бага тоонуудын квадратын нийлбэр
// [1,2,3,6,7] → 1²+2²+3² = 14
const arr10 = [1, 2, 3, 6, 7];
const newArr10 = arr10.filter((num) => num < 5);
const lastArr10 = newArr10.map((n) => n * n);
const resArr10 = lastArr10.reduce((a, b) => a + b);
console.log("10)", resArr10);

// 11. 10-аас их тоонуудын квадратын нийлбэр
// [5,12,8,20,3] → 12² + 20² = 544
const arr11 = [5, 12, 8, 20, 3];
const newArr11 = arr11.filter((num) => num > 10);
const lastArr11 = newArr11.map((n) => n * n);
const resArr11 = lastArr11.reduce((a, b) => a + b);
console.log("11)", resArr11);

// 12. Тэгш тоонуудын кубын нийлбэр
// [1,2,3,4,5,6] → 2³+4³+6³ = 288
const arr12 = [1, 2, 3, 4, 5, 6];
const newArr12 = arr12.filter((num) => num % 2 === 0);
const lastArr12 = newArr12.map((n) => n * n * n);
const resArr12 = lastArr12.reduce((a, b) => a + b);
console.log("12)", resArr12);

// 13. 3-аар хуваагдах тоонуудын кубын нийлбэр
// [3,4,6,7,9] → 3³+6³+9³ = 972
const arr13 = [3, 4, 6, 7, 9];
const newArr13 = arr13.filter((num) => num % 3 === 0);
const lastArr13 = newArr13.map((n) => n * n * n);
const resArr13 = lastArr13.reduce((a, b) => a + b);
console.log("13)", resArr13);

// 14. 0-с их тоонуудын квадратын нийлбэр
// [-5,0,4,7,-1] → 4²+7² = 65
const arr14 = [-5, 0, 4, 7, -1];
const newArr14 = arr14.filter((num) => num > 0);
const lastArr14 = newArr14.map((n) => n * n);
const resArr14 = lastArr14.reduce((a, b) => a + b);
console.log("14)", resArr14);

// 15. 10-аас их тоонуудыг 2 дахин үржүүлж нийлбэр
// [8,12,15,5] → 122 + 152 = 54
const arr15 = [8, 12, 15, 5];
const newArr15 = arr15.filter((num) => num > 10);
const lastArr15 = newArr15.map((n) => n * 2);
const resArr15 = lastArr15.reduce((a, b) => a + b);
console.log("15)", resArr15);

// 16. 5-аас их тоонуудын модуль 3 үр дүнг нийлүүлэх
// [2,6,4,10,7] → 6%3 + 10%3 + 7%3 = 0+1+1 = 2
const arr16 = [2, 6, 4, 10, 7];
const newArr16 = arr16.filter((num) => num > 5);
const lastArr16 = newArr16.map((n) => n % 3);
const resArr16 = lastArr16.reduce((a, b) => a + b);
console.log("16)", resArr16);

// 17. 5-аас бага тоонуудын модуль 2 үр дүнг нийлүүлэх
// [1,2,3,6,7] → 1%2 + 2%2 + 3%2 = 1+0+1 = 2
const arr17 = [1, 2, 3, 6, 7];
const newArr17 = arr17.filter((num) => num < 5);
const lastArr17 = newArr17.map((n) => n % 2);
const resArr17 = lastArr17.reduce((a, b) => a + b);
console.log("17)", resArr17);

// 18. 3-аар хуваагдах тоонуудын квадратын нийлбэрийг мод 10
// [3,4,6,7,9] → (3²+6²+9²)%10 = 126%10 = 6
const arr18 = [3, 4, 6, 7, 9];
const newArr18 = arr18.filter((num) => num % 3 === 0);
const lastArr18 = newArr18.map((n) => n * n);
const resArr18 = lastArr18.reduce((a, b) => a + b);
console.log("18)", resArr18 % 10);

// 19. 10-аас их тоонуудын квадратын нийлбэрийг мод 7
// [5,12,8,20,3] → (12² + 20²)%7 = 544%7 = 5
const arr19 = [5, 12, 8, 20, 3];
const newArr19 = arr19.filter((num) => num > 10);
const lastArr19 = newArr19.map((n) => n * n);
const resArr19 = lastArr19.reduce((a, b) => a + b);
console.log("19)", resArr19 % 7);

// 20. String массив: 5 үсгээс урт үгсийг filter → map → reduce ашиглан нийт урт
// ["hi","hello","hey","world","javascript"] → hello+world+javascript = 5+5+10=20
const arr20 = ["hi", "hello", "hey", "world", "javascript"];
const newArr20 = arr20.filter((num) => num.length >= 5);
const lastArr20 = newArr20.map((param) => param.length);
const resArr20 = lastArr20.reduce((a, b) => a + b);
console.log("20)", resArr20);
