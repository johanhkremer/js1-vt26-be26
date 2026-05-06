/*
Datatyper
--------------------
Boolean true/false
Number 123
String "johan"
Object {} (Array [])
Undefined
Null
-------
BigInt (stora nummer)
symbol


Varibler
--------------------
let (Kan ändras, blockscoped)
const (Kan inte ändras, blockscoped)
---------------------------
var (kan ändras, hoistas)

Logiska operatorer 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators
--------------------
|| ELLER
&& OCH
! INTE (Logical not)
: ? (TRUE : FALSE ?)

Jämförelser
--------------------
1 < 2
2 > 1
3 <= 3
4 >= 5
== (Jämför endast värde)
=== (Jämför både värde och typ)
!=

Matematik
--------------------
+ - / *
++
--
% (12 % 5 returns 2)

+ (konkatenering, aretmetisk operator)

- / * (aretmetiska operatorer)
*/

//Villkor

if (0) {
    console.log("✅ This is true")

} else {
    console.log("🛑 This is false")
}

// Truthy & Falsy
/*
? Falsy
Value	            Type	    Description
-----               ----        -----------
null	            Null	    The keyword null — the absence of any   value.
undefined	        Undefined	undefined — the primitive value.
false	            Boolean	    The keyword false.
NaN	                Number	    Not a Number (represents an invalid or undefined result from a calculation.)
0	                Number	    The Number zero, also including 0.0, 0x0, etc.
-0	                Number	    The Number negative zero, also including -0.0, -0x0, etc.
0n	                BigInt	    The BigInt zero, also including 0x0n, etc. Note that there is no BigInt negative zero
""	                String	    Empty string value, also including '' and ``.
document.all	    Object	    The only falsy object in JavaScript is the built-in document.all.
*/

// Loops

const fruits = ["🍎", "🍊", "🍌"]

for (let i = 0; i <= 5; i++) {
    console.log(i)
}

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

//! Akta er för infinite loop

//functions

function classicalFunction(parametrar) {
    console.log(parametrar)
}

const arrowfunction = (parametrar) => {
    console.log(parametrar)
}

const arrowfunctionShort = (parametrar, parametrar2) => console.log(parametrar, parametrar2)

classicalFunction("argument")
arrowfunction("arrowfunction")
arrowfunctionShort("Short", "short 2")

//array-metoder

//forEach
let fruits2 = ["🍎 Apple", "🍌 Banana", "🍊 Orange", "🍓 Strawberry", "🫐 Blueberry", "🥭 Mango"]

fruits2.forEach(fruit => {
    console.log(fruit + " Jag är frukt!")
})

const mappadFrukt = fruits2.map(fruit => {
    return fruit + " map"
})

console.log(mappadFrukt)

//Pop, .push(), .map(), .slice(0,3), .sort(), .filter(), .at(), .join()

//Destructuring
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring