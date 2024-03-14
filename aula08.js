let teste = 10;
teste = 11

const str = "1234"
// str = "234" -> não posso fazer

function funcTest() {
    if (true) {
        var t = 1
        let i = 1
    }
    console.log(t) // 1
    // console.log(i) // undefined
}

funcTest()

// Operação

1 + 1 // soma
2 - 1 // sub
2 * (2 + 1) * 3 // multi
2 / 3 // div
5 % 2 // 1 -> resto
3 ** 2 // 3^2 -> exponencial

Math.trunc(5.2) // 5

// Comparação

2 == 2 // true
2 == "2" // true

2 === 2 // true
2 === "2" // false

2 != 2 // false
2 != "2" // false
2 != 1 // true

2 !== 2 // false
2 !== "2" // true
2 !== 1 // true

2 < 5 // true
4 < 2 // false
2 < 2 // false

2 <= 5 // true
4 <= 2 // false
2 <= 2 // true

2 > 5 // false
4 > 2 // true
2 > 2 // false

2 >= 5 // false
4 >= 2 // true
2 >= 2 // true

// Logicos

// and (e)
true && true // true
true && false // false
false && true // false
false && false // false

// or (ou)
true || true // true
true || false // true
false || true // true
false || false // false

// not (negação)
!true // false
!false // true

!!!true // false
console.log(!!!!!!!!!!!!!false) // true

// Condicionais

// if

let n1 = 5
if (n1 % 2 === 0) {
    console.log("é par")
}

// if else

if (n1 % 2 === 0) {
    console.log("é par")
} else {
    console.log("é impar")
}

if (n1 > 5)
    console.log("Entrei")
else
    for (let i = 0; i < 10; i++) {
        console.log(i)
    }

n1 = 10
if (n1 > 5)
    console.log("Maior que 5")
else if (n1 === 5) {
    console.log("Igual a 5")
} else {
    console.log("Menor que 5")
}


// switch case

let code = 1

switch (code) {
    case 1:
        console.log("tv Samsung")
    case 1001:
    case 10:
        console.log("Ligar/Desligar tv")
        break
    case 11:
        console.log("Aumentar volume")
        break
    case 12:
        console.log("Diminuir volume")
        break
    default:
        console.log("Não sei tratar.. ignorar codigo")
}

const t = () => {
    switch (code) {
        case 1:
            console.log("tv Samsung")
        case 1001:
        case 10:
            return console.log("Ligar/Desligar tv")
        case 11:
            return console.log("Aumentar volume")
        case 12:
            return console.log("Diminuir volume")
        default:
            console.log("Não sei tratar.. ignorar codigo")
    }
}

// Loops

n1 = 100

while (n1 < 100) { // executa de 0 a N vezes
    console.log(n1, "ainda é menor do que 100")
    n1 += 1;
}
console.log(n1, "não é mais menor do que 100")

do { // executa de 1 a N vezes (executa pelo menos 1 vez)
    console.log(n1, "ainda é menor do que 100 [DO WHILE]")
} while (n1 < 100)

// i++ -> i += 1 -> i = i + 1
// i-- -> i -= 1 -> i = i - 1
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) continue
    console.log(i)
}

function t2() {
    for (let i = 0; i < 100; i++) {
        if (i % 2 === 0) return i
    }
}

// Arrays

const arr = [1, 2, 3, 4, 5, 6, 7, 8]

arr.push(10) // [1, 2, 3, 4, 5, 6, 7, 8, 10]
arr.pop() // [1, 2, 3, 4, 5, 6, 7, 8]
arr.unshift(10) // [10, 1, 2, 3, 4, 5, 6, 7, 8]
arr.shift() // [1, 2, 3, 4, 5, 6, 7, 8]

// --------------------

arr.length // tamanho do array -> 8
// arr[0] -> arr[7]

arr[10] // -> undefined

arr.forEach((value) => {
    console.log(value)
})

const newArray = arr.map((value) => {
    return value * 2
})

console.log(newArray)

console.log(arr.findIndex((value) => value === 3))

const newArray2 = arr.filter((value) => value % 2 === 1)

console.log(newArray2)
console.log(arr)

const soma = arr.reduce((soma, value) => {
    return soma + value
}, 0)

console.log(soma)

const arr2 = [3, 2, 10, 9, 1, 29];
const orderedArray = arr2.sort((a, b) => a - b)

// a = 3
// b = 2
// a - b => 3 - 2 -> + -> troco
// a = 2
// b = 10 => 2 - 10 -> -8 -> - -> não troca

console.log(orderedArray)

// objetos

const pessoa = {
    name: "John Doo",
    age: 10,
    job: "Programmer",
    phones: ["9999999999", "888888888888"],
    address: [
        {
            street: "1",
            city: "avadsa"
        },
        {
            street: "1",
            city: "avadsa"
        },
        {
            street: "1",
            city: "avadsa"
        }
    ]
}

console.log(JSON.stringify(pessoa))

console.log(JSON.parse(`{
    "name": "John Doo",
    "age": 10,
    "job": "Programmer",
    "phones": [
        "9999999999",
        "888888888888"
    ],
    "address": [
        {
            "street": "1",
            "city": "avadsa"
        },
        {
            "street": "1",
            "city": "avadsa"
        },
        {
            "street": "1",
            "city": "avadsa"
        }
    ]
}`))

pessoa["name"] // pessoa.name

console.log(pessoa.blabla?.address[10]?.city)

if (pessoa.blabla && pessoa.blablab.address[10]) {
    pessoa.blabla.address[10].city
}


const cache = [{ id: 1, name: "Igor" }]
const database = [{ id: 1, name: "Igor" }, { id: 2, name: "John Doo" }]

const findOnCache = (personId) => {
    return new Promise((resolve, reject) => {
        const user = cache.find(user => user.id === personId);
        if (user) return resolve(user)
        reject("user not found")
    })
}

const findOnDatabase = (personId) => {
    return new Promise((resolve, reject) => {
        const user = database.find(user => user.id === personId);
        if (user) return resolve(user)
        reject("user not found")
    })
}


const findUser = (userId) => {
    findOnCache(userId).catch(() => {
        return findOnDatabase(userId)
    }).then(user => {
        console.log(user)
    }).catch(exception => {
        console.log(exception)
    })
}
findUser(2)

const findUser2 = async (userId) => {
    try {
        let user;
        try {
            user = await findOnCache(userId);
        } catch (error) {
            user = await findOnDatabase(userId)
        }
        console.log(user)
    } catch (err) {
        console.log(err)
    }
}
