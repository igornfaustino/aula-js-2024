// Declare uma variável chamada nome e atribua seu nome a ela.
// Declare uma variável chamada anoNascimento e atribua o ano em que você nasceu.

const name = "Pedro"
const anoNascimento = 1990

// -----------

//Declare duas variáveis `a` e `b`, atribua dois valores quaisquer e troque o conteúdo das duas variaveis
// Ex:
// A: 5, B: "Edu" -> A: "Edu", B: 5

let a = 5;
let b = "Edu"

let aux = a
a = b
b = aux

// ----------

//Defina um número fracionado (ex 3.5) e obtenha apenas a parte inteira desse numero
// Ex: 3.5 -> 3

const num = 3.5
console.log(parseInt(num))

// --------

// Crie uma variável idade e incremente 1

let idade = 17
idade++
console.log(idade)

// -------
//1. Declare duas variáveis, num1 e num2, e atribua a elas valores numéricos.
// 2. Crie uma variável soma e calcule a soma de num1 e num2.
// 3. Crie uma variável produto e calcule o produto de num1 e num2.

const num1 = 10;
const num2 = 20;

const soma = num1 + num2;
console.log(soma);

const produto = num1 * num2;
console.log(produto);


// --------
//Dado um valor decimal, remova a parte decimal mantendo apenas a parte fracionada
// Ex: 2, 50 -> 0, 50

const value = 2.5;
const int = parseInt(value);

console.log(value - int);


