//1.masala
let a = 10;
for (let index = 0; index < a; index++) {
  console.log(index);
}
// 2.masala
let b = 1;
for (let i = b; i >= 1; i--) {
  console.log(i);
}
//3.masala
let d = 2;
let sum = 0;
for (let i = 1; i <= d * 1; i++) {
  sum += i ;
}
console.log("jami yig'indi", sum);
// 4.masala
let e = 6;
let f = 0;
let boshArr = [];
for (i = 1; i <= e; i++) {
  if (i % 2 === 0) {
    boshArr.push(i);
    f += i;
  }
}
console.log(boshArr, ` Yig'indisi -> ${f}`);
//5.masala
let g = 8;
let h = 0;
let arr = [];
for (i = 1; i <= g; i++) {
  if (i % 2 === 1) {
    arr.push(i);
    h += i;
  }
}
console.log(arr, ` Yig'indisi -> ${h}`);
//6.masala
let j = 20;
let massiv = [];

for (i = 1; i <= j; i++) {
  if (j % i === 0) {
    massiv.push(i);
  }
}
console.log(massiv);
//7.masala
let k = 20;
let mass = [];

for (i = 1; i <= k; i++) {
  if (j % i === 0) {
    mass.push(i);
    k += i;
  }
}
console.log(mass, k);
// 8.masala
function TubSon(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

let number = 17; 
let isTubSon = TubSon(number);

if (isTubSon) {
  console.log(number + " tub son");
} else {
  console.log(number + " tub emas son");
}
//9.masala
let l = 0; 
let m = 7; 

for (let i = 1; i <= m; i++) {
 console.log(l++);
}
//10.masala
let o = 1; 
let p = 6;
let count = 0; 

for (let i = o; i <= p; i++) {
  console.log(i);
  count++;
}
console.log("Chiqarilgan sonlar soni: " + count);

// 11.masala
let q = 3; 
let r = 8; 
let sanovchi = 0;

for (let i = q + 1; i < r; i++) {
  console.log(i);
  sanovchi++;
}
console.log("Chiqarilgan sonlar soni: " + sanovchi);

//12.masala

let narx = 54000; // 1 kg konfet narxi so'mda

for (let kg = 1; kg <= 10; kg++) {
  let totalNarx = narx * kg;
  console.log(kg + " kg konfet narxi: " + totalNarx.toFixed(2) + " so'm");
}
//13.masala
let bahosi = 25000; // 1 kg konfet narxi so'mda

for (let kg = 0.1; kg <= 1; kg += 0.1) {
  let totalNarx = narx * kg;
  console.log(kg.toFixed(1) + " kg konfet narxi: " + totalNarx.toFixed(2) + " so'm");
}
//14.masala
let senasi = 85000; // 1 kg konfet narxi so'mda

for (let kg = 1.2; kg <= 2; kg += 0.2) {
  let totalNarx = narx * kg;
  console.log(kg.toFixed(1) + " kg konfet narxi: " + totalNarx.toFixed(2) + " so'm");
}
// 15.masala

//7-8-masalar yuqorida ishlangan
let as = 3; 
let bs = 7; // b soni
let sums = 0; // yig'indi

for (let i = as; i <= bs; i++) {
  let square = i * i;
  sums += square;
}

console.log("Kvadratlar yig'indisi: " + sums);