"Use strict";
Number("0x77") === 0x77; // false, conv to hexadecimal number
Number("077") === 077;
Number(" 12"); // =12 // removes spaces from  start and from end, and returns number or NaN

isNaN(" "); // =false
// at first converts " " to number,  " " =0 , and 0 isn't NaN

+""; // converts  "" to number, " " is 0

0.1 + 0.2 == 0.3; // false // .1 + .2 == .3 is 0.300...004, due to floating point
9007199254740992 + 1 == 9007199254740992; // false // 2**53 is not safe integer
9007199254740992 + 2 == 9007199254740992; // false,


0 === +0 // true, 0 is equal to -0, they show difference only in Object.is() and in division with infinities
+0 === -0  // true


1 / "2"; // 0.5, division is not defined for strings
1 / 0; // Infinity  
1 / -0; // -Infinity  

Infinity / 6; // infinity, infinity is positive num, + / + is + number
Infinity / -256; // -infinity, + / - is - number
Infinity / Infinity;


0 / 0  // NaN  
+true  // 1 true as a number is 1
+false  // 0, false as a number is 0
+null   // 0, null as a number is 0
+undefined // undefined and NaN as a number are NaN


parseInt(".2");
console.log(parseInt("077a")); // 77
parseInt("0x77a"); // is hex. number
parseInt("I’m the best value - said Infinity."); // NaN, i'm is not a number
parseFloat("I’m the best value - said Infinity."); // NaN i'm is not a number
parseInt("Infinity is the best value!"); // NaN, there is not a number
parseFloat("Infinity is the best value!"); // NaN i'm is not a number
parseFloat("12.78ff"); // 12.78, converts 12.78 into number, meet strign f, and breaks