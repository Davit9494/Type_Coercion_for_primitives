"use strict";
"" + 1 + 0; // 10
// "" is string. while string + number, number converts to string, and concats.

"" - 1 + 0; //-1
// - sign is not determined for string. That's why string converts to number, Number("") = 0

true + false; // 1
// true is 1,  false is 0 as a number

6 / "3"; // 2
// division is not determined for string, that's why js converts string to number

"2" * "3"; //6
// * is not determined for string

4 + 5 + "px"; //  "9px"
// 4 + 5 = 9,
// 9 + "px" = "9px"

"$" + 4 + 5; //   "$45"
// concats as string

"4" - 2; // 2
// - is not determined for string

"4px" - 2; // NaN
// - is not determined for string, and "4px" as a number is NaN

7 / 0; // infinity

" -9 " + 5; // "-95"
// string + number == string

" -9 " - 5; // "-14"
// string - number = numer

null + 1; // 1
// Number(null)== 0, 0+1 = 1

undefined + 1; //NaN
// Number(undefined) == Nan, NaN + 1 = NaN
