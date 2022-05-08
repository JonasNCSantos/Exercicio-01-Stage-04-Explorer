/*
 Deve solicitar ao usuário que ele insira dois Numeros
 
 Faça as seguintes operações
 -- Somar
 -- Subtração
 -- Multiplicação
 -- Divição
 -- Resto da Divição
 
 Verifique
 -- Se a soma é par ou im par
 -- Verifique se os dois numeros inseridos são iguais

 */

let numberOne = prompt("Digite o primeiro número: ")
let numberTwo = prompt("Digite o segundo número: ")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo
const pairSum = (sum)%2

//Mostra os resuldados
alert("A soma dos dois números: " + sum)
alert("A subtração dos dois números: " + sub)
alert("A multiplicação dos dois números: " + multi)
alert("A divisão dos dois números: " + div)
alert("O resto da divisão dos dois números: " + restDiv)


//Verificas se a soma dos dois numeros são par ou impar
if (pairSum == 0){
    alert("A soma dos dois números é par: " + sum)
} else {
    alert("A soma dos dois números é impar: "+ sum)
}

//Verica se os dois numeros são iguais
if (numberOne == numberTwo){
    alert("Os dois números inseridos são iguais")
} else {
    alert("Os dois números inseridos são diferentes")
}
