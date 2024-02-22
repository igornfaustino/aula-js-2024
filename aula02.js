// const teste = 5;
// console.log(teste == 2) // compara valores
// console.log(teste === 2) // compara valores e tipo

// console.log(teste != '2'); // compara valores
// console.log(teste !== '2'); // compara valores e tipo

// console.log(teste < 3);
// console.log(teste > 3);
// console.log(teste <= 5);
// console.log(teste >= 5);

// // verificar se é maior de 18 anos
// const idade = 20
// const ehMaiorDeIdade = idade >= 18
// console.log(`é maior de idade? ${ehMaiorDeIdade}`)

// // null é igual a undefined??
// console.log(null === undefined)

// // E and -> &&
// console.log(false && false)
// console.log(false && true)
// console.log(true && false)
// console.log(true && true)

// // ou or -> ||
// console.log(false || false)
// console.log(false || true)
// console.log(true || false)
// console.log(true || true)

// // negação not -> !
// console.log(!true)
// console.log(!false)
// console.log(!!true)
// console.log(!!false)


// // idade entre 18 e 70 anos
// const idade = 70
// console.log(idade >= 18 && idade <= 70)

// // numero entre 10 e 20 ou entre 40 e 50
// const n = 45
// const entre10e20 = (10 <= n && n <= 20)
// const entre40e50 = (40 <= n && n <= 50)
// console.log(entre10e20 || entre40e50)

// // if
// const n = 10
// if (n < 10) {
//     console.log("é menor do que 10")
// }

// if (n < 10) console.log("teste 1 linha só")
// console.log("segunda")

// if (n < 10) {
//     console.log("menor do que 10")
// } else {
//     console.log("maior do que 10")
// }


// if (n < 10) {
//     console.log("menor do que 10")
// } else if (n === 10) {
//     console.log("igual a 10")
// } else {
//     console.log("maior do que 10")
// }

// // falsy
// null
// undefined
// 0
// ""
// NaN

// // truthy
// // tudo que não for falsy

// const teste = 0
// if (teste) {
//     console.log("truthy")
// }

// // Pega o valor de teste caso ele exista (!= undefined e != null).. se não usa o valor 10
// let t = teste ?? 10
// console.log(t)

// // numero par ou impar
// const n1 = 4

// if (n1 % 2 === 0) {
//     console.log("Par")
// } else {
//     console.log("impar")
// }


// // informe se um aluno esta aprovado (maior que 7), recuperação (entre 4 e 7) ou reprovado (< 4)

// const nota = 3

// if (nota >= 7) {
//     console.log("Aprovado")
// } else if (nota >= 4) {
//     console.log("recuperação")
// } else {
//     console.log("reprovado")
// }

// // ternário

// let a;
// let n = 0
// // if (n === 10) a = "oi"
// // else a = "tchau"

// // condição ? caso_verdadeiro : caso_falso

// a = n === 10 ? "oi" : "tchau"
// console.log(a)

// let b = n === 10 && "oi"
// console.log(b)

// let c = (n === 10) || "oi"
// console.log(c)


// let d = n || "tchau"
// console.log(d)

// let e = n ?? "tchau"
// console.log(e)

// // switch case
// const code = 1

// switch (code) {
//     case 1:
//         console.log("code")
//         break
//     case 2:
//         console.log("desligar")
//         break
//     case 3:
//         console.log("abaixar volume")
//         break
//     case 11:
//     case 12:
//         console.log("aumentar volume")
//         break
//     default:
//         console.log("Não sei o que fazer")
// }


// mostrar dias da semana

// const dia = 23

// switch (dia) {
//     case 1:
//         console.log("Domingo")
//         break
//     case 2:
//         console.log("Segunda")
//         break
//     case 3:
//         console.log("Terça")
//         break
//     case 4:
//         console.log("Quarta")
//         break
//     case 5:
//         console.log("Quinta")
//         break
//     case 6:
//         console.log("Sexta")
//         break
//     case 7:
//         console.log("Sabado")
//         break
//     default:
//         console.log("Não conheço")
// }

// // var ou let

// if (1 < 10) {
//     let x = 10

//     if (2) {
//         console.log(x)
//     }
// }

// console.log(x)


// // while

// let x = 0;

// while (x < 10) {
//     console.log("Oi");
//     x = x + 2;
// }

// console.log("saiu do loop")

// // dobrar um valor enquanto for menor que 1000

// let valor = 500;

// while (valor < 1000) {
//     valor *= 2; // valor = valor * 2;
//     console.log(valor)
// }

// for

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// // equivalente a isso:
// let i = 0
// while(i < 10) {
//     console.log(i)
//     i++
// }

// somar numeros de 1 a 10

let soma = 0

for (let i = 0; i < 10; i++) {
    soma += i + 1
}

console.log(soma)