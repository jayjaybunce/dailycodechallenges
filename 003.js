
// Input : a = 10, b = 3
// Output : 3

// Input : a = 43, b = -8
// Output :  -5

// Implement division of two positive integers without using the division, multiplication, or modulus operators. Return the quotient as an integer, ignoring the remainder.

const hardDivide = (a,b) => {
    let inc = 0
    while (a >= b){
        a -= b
        inc++
    }
    console.log(inc)
}
