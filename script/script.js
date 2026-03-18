/*
----------------------------------------------------------------
? Falsy
----------------------------------------------------------------
Value	        Type	    Description
null	        Null	    The keyword null — the absence of any value.
undefined	    Undefined	undefined — the primitive value.
false	        Boolean	    The keyword false.
NaN	            Number	    Not a Number (represents an invalid or undefined result from a calculation.)
0	            Number	    The Number zero, also including 0.0, 0x0, etc.
-0	            Number	    The Number negative zero, also including -0.0, -0x0, etc.
0n	            BigInt	    The BigInt zero, also including 0x0n, etc. Note that there is no BigInt negative zero — the negation of 0n is 0n.
""	            String	    Empty string value, also including '' and ``.
document.all	Object	    The only falsy object in JavaScript is the built-in document.all.

----------------------------------------------------------------
? Truthy
----------------------------------------------------------------
All values are truthy except false values.
*/

const matte = 1 + "7"

if (matte) {
    console.log(matte)
    console.log(typeof matte)
    console.log("Detta värdet är truthy ✅")
} else {
    console.log(matte)
    console.log(typeof matte)
    console.log("Detta värdet är falsy ❌")
}

/*  && → första falsy, annars sista */

/*  || → första truthy, annars sista */

/*  ?? tar nästa värde bara om vänster sida är null eller undefined */

/*  ! → vänder till motsatt boolean */

/*
? Functions
*/

console.log("Hej Ahmed!")
console.log("Hej Lisa!")
console.log("Hej Stina!")

function basicFunction() {
    console.log("Jag är en funktion 🔥")
}

basicFunction()
basicFunction()
basicFunction()

//Paramenter = tar emot ett argument

function greet(name) {
    console.log(`Hej ${name}!`)
}

greet("Ahmed")
greet("Lisa")
greet("Johan ⚡️")
greet(true)
greet(42)

//arrow-functions (modern)
const arrowFunction = () => console.log("Hej från arrow 🏹")

arrowFunction()

// Block-scope
let globalVariable = "Jag är global 🌏"

function testScope() {
    let localVariable = "Jag är lokal 📦"
    console.log(globalVariable)
    console.log(localVariable)
}

testScope()

console.log(globalVariable)
// console.log(localVarible)

// Hoisting 🏗️

hoisted()

function hoisted() {
    console.log("Jag är hoistad! 🏗️ 🔥")
}

// notHosited()

const notHosited = function () {
    console.log("Jag är inte hoistad! 🏗️ ❌")
}

notHosited()

//RETURN

const arrowReturn = (a, b) => {
    return a + b
}

const answer = arrowReturn(100, 9)

console.log(answer)


// 🏗️ Hoisting const, let, var
const johansConst = "const"

// console.log(johansLet)

let johansLet = "let"

johansVar = "johan hositade var 🏗️"

console.log(johansVar)

var johansVar = "var"

console.log(johansVar)


