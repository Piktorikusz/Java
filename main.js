'use strict';
//1 es
const numericArray = [2, 3, 6, 8,9,25,46,88,123,343];
let minValue = numericArray[0];
for (let i = 1; i < numericArray.length; i++) {
  if (minValue > numericArray[i]) {
  minValue = numericArray[i];
    }
};
console.log(minValue);

//2es
const numericArray2 = [2, 3, 6, 8,9,25,46,88,123,343];
let biggest = numericArray2 [0];
for (let i=0; i<numericArray2.length; i++) {
    if (numericArray2 [i]> biggest) {
    biggest= numericArray2[i];
    }
};
console.log (biggest);

//3as
const numericArray3 = [4,6,5,8,13,15,68];
let sum = 0;
for (let i = 0; i < numericArray3.length; i++) {
  sum = sum + numericArray3[i];
};
console.log (sum / numericArray.length);

//4es
const numericArray4 = [4,6,5,8,13,15,68];
let sum2 = 0;
for (let i = 0; i < numericArray4.length; i++) {
  sum2 = sum2 + numericArray4[i];
}
console.log (sum2);

//5ös
const numericArray5 = [4,6,23,35,46,12,7,46];
let numberOfEvenElements = 0;
for (let i = 0; i < numericArray5.length; i++) {
  if (numericArray5[i] % 2 == 0) {
    numberOfEvenElements = numberOfEvenElements + 1;
  } else {
  }
}
console.log(numberOfEvenElements);

//6os
const numericArray6 = [18,1,13,35,345,152,245,15,34];
let minValueArray6 = numericArray6[0];
let indexMinValue = 0;
for (let i = 1; i < numericArray6.length; i ++) {
  if (minValueArray6 > numericArray6[i]) {
    minValueArray6 = numericArray6[i];
    indexMinValue = i;
  }
};

let minSecondValueArray6 = numericArray6[0];
for (let i = 0; i < numericArray6.length; i++) {
  if ((minSecondValueArray6 > numericArray6[i]) && (i != indexMinValue)) {
    minSecondValueArray6 = numericArray6[i];
  }
};
console.log(minSecondValueArray6);

//7es Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb harmadik legnagyobb elemét!

const numericArray7 = [18,1,13,35,345,152,245,15,34];
let maxValue7 = numericArray7[0];
let indexMaxValue7 = 0;
for (let i = 1; i < numericArray7.length; i++) {
  if (maxValue7 < numericArray7[i]) {
      maxValue7 = numericArray7[i];
      indexMaxValue7 = i;      }
};
let maxSecondValue = numericArray7[0];
let indexMaxSecondValue = 0;
for (let i = 0; i < numericArray7.length; i++) {
  if ((maxSecondValue < numericArray7[i]) && (i != indexMaxValue7)) {
    maxSecondValue = numericArray7[i];
    indexMaxSecondValue = i;
    }
};
let maxThirdValue = numericArray7[0];
for (let i = 0; i < numericArray7.length; i++) {
  if ((maxThirdValue < numericArray7[i]) && (i != indexMaxValue7) && (i != indexMaxSecondValue)) {
      maxThirdValue = numericArray7[i];
   }
};
console.log(maxThirdValue);

//8as Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, bármilyen típusú elemeket tartalmazó tömb
// (feltételezzük, hogy beágyazott tömböt, objektumot,egyéb iterálható elemet nem tartalmaz)
// tartalmazza-e a 23-as számot! Használj lineáris keresést!

const numericArray8 = [2,5,'Béla','Feri',23,'bmw'];
let contains23 = 'nem';
for (let i = 0; i < numericArray8.length; i++) {
  if (numericArray8[i] === 23) {
    contains23 = 'igen';
    break;
  } else {
  }
};
console.log(contains23);

//9es Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, csak egész számokat tartalmazó tömb tartalmazza-e a 23-as számot!
const numericArray9 = [12,23,25,23,21];
console.log(numericArray9.includes(23));

[1,2,23].includes(23);

//10es
const numericArray10 = [1,23 ,2,23,'dave',8321,23,23,'John'];
let contains231 = 0;
for (let i = 0; i < numericArray10.length; i++) {
  if (numericArray10[i] === 23) {
    contains231 = contains231 + 1;
  } else {
  }
};
console.log(contains231);

//11
//12
//13
//14
//15
//16