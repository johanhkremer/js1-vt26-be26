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

