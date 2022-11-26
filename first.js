const num1 = 4
const num2 = 2

function defaultCount(number1, number2){

let result1 = number1 + number2
let result2 = number1 - number2
let result3 = number1 * number2
let result4 = number1 / number2

console.log("Prvý parameter"+ " "+  number1 + " "+  "Druhý parameter" + " "  + number2)
console.log("Vykonávam matematické operácie")
console.log(number1 +  " + " + number2 + " = " + result1)
console.log(number1 +  " - " + number2 + " = " + result2)
console.log(number1 +  " * " + number2 + " = " + result3)
console.log(number1 +  " / " + number2 + " = " + result4)
return arguments.length

}
defaultCount(5,10)
defaultCount(num1, num2)
defaultCount()


