// Calcular a tabuada de um numero

let n = 5;

// <= 10 => < 11

for (let i = 0; i < 11; i++) {
    // console.log(`${n} X ${i} = ${i * n}`)
}

// mostrar todos os numeros impares entre 100 e 200

for (let i = 100; i <= 200; i++) {
    if (i % 2 === 1) {
        // console.log(i)
    }
}

// ----
let resultadoSoma = 0

for (let i = 0; i < 500; i++) {
    const n1 = i + 1;
    if (n1 % 2 === 1 && n1 % 3 === 0) {
        resultadoSoma += n1
    }
}

// console.log(soma)

// versao alternativa

resultadoSoma = 0

for (let i = 0; i < 500; i++) { // 3
    const n1 = i + 1; // 4
    if (n1 % 2 === 0) continue
    if (n1 % 3 !== 0) continue
    resultadoSoma += n1
}

// console.log(soma)

// do while -> executa pelo menos uma vez

x = 11
do {

} while (x < 10)

// contar quantas vezes rodou o dado para tirar um valor 
const resultado = 4

let valorDado;
let qtd = 0;
do {
    valorDado = Math.floor(Math.random() * 6) + 1;
    qtd++
    // console.log(valorDado)
} while (valorDado !== resultado)

// console.log(`qtd: ${qtd}`)


// versao alternativa

valorDado;
qtd = 0;
while (true) {
    valorDado = Math.floor(Math.random() * 6) + 1;
    qtd++
    // console.log(valorDado)
    if (valorDado === resultado) break;
}

// console.log(`qtd: ${qtd}`)


// calcular o fatorial de um numero

const num = 5
let fatorial = 1;

for (let i = 2; i <= num; i++) {
    fatorial *= i;
}

// console.log(fatorial)

// funções ================================================

function helloWorld() {
    console.log("Hello World")
    console.log("Lalalalala")
}

// helloWorld()

function rodarDado6lados() {
    const resultado = Math.floor(Math.random() * 6) + 1;
    return resultado;
}

const resultadoDado = rodarDado6lados();

// console.log(resultadoDado)

function somar(a, b) {
    return a + b
}

function subtrair(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}

function dividir(a, b) {
    if (b === 0) return
    return a / b
}

// console.log(somar(2, 3))
// console.log(subtrair(4, 3))
// console.log(multiplicar(2, 3))
// console.log(dividir(6, 0))


// achar o maior numero

function maiorNumero(a, b) {
    if (a > b) return a
    return b
}

console.log(maiorNumero(5, 3))

// versão alternativa

function maiorNumero2(a, b) {
    return a > b ? a : b
}

console.log(maiorNumero2(5, 7))

// calcular media das notas

function mediaAritimetica(a, b, c) {
    return (a + b + c) / 3
}

function mediaPonderada(a, b, c) {
    return (5 * a + 3 * b + 2 * c) / 10
}

function calcularMedia(a, b, c, tipoMedia) {
    switch (tipoMedia) {
        case "A":
            return mediaAritimetica(a, b, c)
        case "P":
            return mediaPonderada(a, b, c)
        default:
            console.log("Erro")
    }
}

console.log(calcularMedia(10, 10, 1, "P"))

// =========================================================

const c = function () {
    return 1;
}

console.log(c())



function soma(a, b, callback) {
    const result = a + b;
    callback(result)
}

soma(1, 2, function (a) {
    console.log(a)
})

// ===================================

console.log("---------------")
// setTimeout(function () {
//     console.log(1)
// }, 3000)
// console.log(2)
// console.log(3)


// =====================

const arrowSum = (a, b) => {
    return a + b
}
// equivalente
// const arrowSum = (a, b) => a+b

// console.log(arrowSum(3, 4))


// ARRAYS =======================================

//           0, 1, 2, 3, 4, 5  ,6, 7
let array = [1, 2, 3, 4, 5, 60, 9, 10]

const a = [1, 2, "tres", 4, true, null, undefined, NaN, "oi"]

console.log(a)

console.log(array.length)
console.log(array[array.length - 1])

array.push(18)
array.pop()
const lastElement = array.pop()

console.log(lastElement)
console.log(array)
console.log(array.length)

console.log("------------")

array.unshift(99)
array.shift()
const firstElement = array.shift()

console.log(firstElement)
console.log(array)
console.log(array.length)

console.log("--------------------")

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

for (let num of array) {
    console.log(num)
}

console.log("-----------")

const calcularMediaArray = (array) => {
    if (!array.length) return 0;
    let soma = 0;
    for (let value of array) {
        soma += value
    }
    return soma / array.length
}

console.log(calcularMediaArray([]))

// contar numeros negativos e somar os numeros positivos

const countNegativesAndSumPositives = (array) => {
    let qtdNeg = 0;
    let sumPosit = 0

    for (let value of array) {
        if (value > 0) sumPosit += value
        else qtdNeg++
    }

    console.log(`Quantidade numeros negativos ${qtdNeg}`)
    console.log(`Soma numeros positivos ${sumPosit}`)
}

countNegativesAndSumPositives([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10])