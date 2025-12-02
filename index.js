//MAP

// 1. [1,2,3,4,5] массивын тэгш тоонуудыг 2 дахин өсгөж, сондгойг хэвээр үлдээх.
const arr1 = [1, 2, 3, 4, 5];
function solve1(a) {
  if (a % 2 === 0) {
    return a * 2;
  } else {
    return a;
  }
}
const newArr1 = arr1.map(solve1);
console.log(`1 ${newArr1}`);

// 2. ["bat","dorj","suren"] массивын 3 үсгээс урт үгсийг том үсэгтэй болгох.
const arr2 = ["bat", "dorj", "suren"];
function solve2(word) {
  if (word.length > 3) {
    return word.toUpperCase();
  } else {
    return word;
  }
}
const newArr2 = arr2.map(solve2);
console.log(`2 ${newArr2}`);

// 3. [1,2,3,4,5] массивын тэгш тоонуудыг квадрат болгох, сондгойг 0 болгох.
const arr3 = [1, 2, 3, 4, 5];
function solve3(num) {
  if (num % 2 === 0) {
    return num * num;
  } else {
    return 0;
  }
}
const newArr3 = arr3.map(solve3);
console.log(`3 ${newArr3}`);

// 4. [10,15,20,25] массивын тоонуудыг 10-аар хасаж, 0-с бага бол 0 болгох.
const arr4 = [10, 15, 20, 25];
function solve4(num) {
  const result = num - 10;
  if (result < 0) {
    return 0;
  } else {
    return result;
  }
}
const newArr4 = arr4.map(solve4);
console.log(`4 ${newArr4}`);

// 5. [1,2,3,4,5] массивын модуль 2 үр дүнг авах (0 эсвэл 1-ийн массив гаргах).
const arr5 = [1, 2, 3, 4, 5];
function solve5(num) {
  return num % 2;
}
const newArr5 = arr5.map(solve5);
console.log(`5 ${newArr5}`);

// 6. ["hi","hello","hey"] массивын үгийн эхний болон сүүлийн үсгийг нийлүүлж шинэ массив үүсгэх.
const arr6 = ["hi", "hello", "hey"];
function solve6(word) {
  return word[0] + word[word.length - 1];
}
const newArr6 = arr6.map(solve6);
console.log(`6 ${newArr6}`);

// 7. [1,2,3,4] массивын тоонуудыг үнэгүй тэгш тоо → 1, бусад → 0 болгон хувиргах.
const arr7 = [1, 2, 3, 4];
function solve7(num) {
  if (num % 2 === 0) {
    return 1;
  } else {
    return 0;
  }
}
const newArr7 = arr7.map(solve7);
console.log(`7 ${newArr7}`);

// 8. [100,200,300] массивын бүх элементийг 3-аар хуваахад гарсан үлдэгдлийг авах.
const arr8 = [100, 200, 300];
function solve8(num) {
  return num % 3;
}
const newArr8 = arr8.map(solve8);
console.log(`8 ${newArr8}`);

// 9. [1,2,3,4,5,6] массивын 2 дахин үржүүлж, 10-аас их бол 10 болгох.
const arr9 = [1, 2, 3, 4, 5, 6];
function solve9(num) {
  const val = num * 2;
  if (val > 10) {
    return 10;
  } else {
    return val;
  }
}
const newArr9 = arr9.map(solve9);
console.log(`9 ${newArr9}`);

// 10. ["bat","dorj","suren","amaraa"] массивын 5 үсгээс урт үгсийг "LONG", бусдыг "SHORT" болгон хувиргах.
const arr10 = ["bat", "dorj", "suren", "amaraa"];
function solve10(word) {
  if (word.length > 5) {
    return "LONG";
  } else {
    return "SHORT";
  }
}
const newArr10 = arr10.map(solve10);
console.log(`10 ${newArr10}`);

//FOREACH

// 11. [1,2,3,4,5,6] массивын бүх элементийг тэгш эсвэл сондгой гэдгийг console-д хэвлэх.
const arr11 = [1, 2, 3, 4, 5, 6];
function solve11(num) {
  if (num % 2 === 0) {
    console.log(`11: ${num} is even`);
  } else {
    console.log(`11: ${num} is odd`);
  }
}
arr11.forEach(solve11);

// 12. [10,15,20,25,30] массивын тэгш тоонуудын нийлбэрийг олох.
const arr12 = [10, 15, 20, 25, 30];
let sum12 = 0;
function solve12(num) {
  if (num % 2 === 0) {
    sum12 = sum12 + num;
  }
}
arr12.forEach(solve12);
console.log(`12 Sum: ${sum12}`);

// 13. [1,2,3,4,5] массивын 2-аар хуваагдаж байгаа эсэхийг шалгаж, boolean массив руу push хийх.
const arr13 = [1, 2, 3, 4, 5];
const boolArr13 = [];
function solve13(num) {
  if (num % 2 === 0) {
    boolArr13.push(true);
  } else {
    boolArr13.push(false);
  }
}
arr13.forEach(solve13);
console.log(`13 ${boolArr13}`);

// 14. [3,6,9,12] массивын 3-аар хуваагдах тоог count хийх.
const arr14 = [3, 6, 9, 12];
let count14 = 0;
function solve14(num) {
  if (num % 3 === 0) {
    count14 = count14 + 1;
  }
}
arr14.forEach(solve14);
console.log(`14 Count: ${count14}`);

// 15. ["hi","hello","hey","hola"] массивын 5 үсгээс урт үгийг console-д хэвлэх.
const arr15 = ["hi", "hello", "hey", "hola"];
function solve15(word) {
  if (word.length > 5) {
    console.log(`15: ${word}`);
  }
}
arr15.forEach(solve15);
// Note: Энэ массив дотор 5-аас урт үг байхгүй тул юу ч хэвлэхгүй.

// 16. [1,2,3,4,5] массивын бүх элементийг 2 дахин үржүүлж, 5-аас их бол "BIG", бусад бол "SMALL" гэж console-д хэвлэх.
const arr16 = [1, 2, 3, 4, 5];
function solve16(num) {
  const val = num * 2;
  if (val > 5) {
    console.log(`16: ${val} is BIG`);
  } else {
    console.log(`16: ${val} is SMALL`);
  }
}
arr16.forEach(solve16);

// 17. [100,50,200,25] массивын 50-аас их утгуудыг шинэ массив руу push хийх.
const arr17 = [100, 50, 200, 25];
const newArr17 = [];
function solve17(num) {
  if (num > 50) {
    newArr17.push(num);
  }
}
arr17.forEach(solve17);
console.log(`17 ${newArr17}`);

// 18. [1,2,3,4,5,6] массивын бүх элементийг тэгш тоо → "even", сондгой → "odd" гэж console-д хэвлэх.
const arr18 = [1, 2, 3, 4, 5, 6];
function solve18(num) {
  if (num % 2 === 0) {
    console.log(`18: even`);
  } else {
    console.log(`18: odd`);
  }
}
arr18.forEach(solve18);

// 19. [2,3,5,7,11] массивын prime эсэхийг шалгаж console-д хэвлэх.
const arr19 = [2, 3, 5, 7, 11];
function solve19(num) {
  let isPrime = true;
  if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
      }
    }
  } else {
    isPrime = false;
  }

  if (isPrime) {
    console.log(`19: ${num} is Prime`);
  } else {
    console.log(`19: ${num} is Not Prime`);
  }
}
arr19.forEach(solve19);

// 20. [1,2,3,4,5,6,7,8,9] массивын 3-ын үржвэрийг console-д хэвлэх.
const arr20 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function solve20(num) {
  if (num % 3 === 0) {
    console.log(`20: ${num}`);
  }
}
arr20.forEach(solve20);
