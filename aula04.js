const arr = [1, 2, 3, 4, 5, 6]

const text = "hello world"

console.log(text.split(" "))
console.log(text.length)

for (let i = 0; i < text.length; i++) {
    console.log(text[i])
}


console.log(typeof text)
console.log(typeof 'c')
console.log(typeof arr)

console.log("============================")

console.log(text.includes("o w"))
console.log(arr.includes(12))
console.log(text.split(" ")
    .includes("hello"));

const words = text.split(" ")
words.includes("hello")

const n1 = 123456000000
const n1String = n1.toString()

for (let i = 0; i < n1String.length; i++) {
    console.log(parseInt(n1String[i]))
}

console.log("==================")

// encontre um elemento dentro do array

const arr1 = [1, 9, 2, 8, -4, 5, -1]

const findIndex = (arr, value) => {
    for (let i = 0; i < arr1.length; i++) {
        if (arr[i] === value) return i;
    }
}

console.log(findIndex(arr1, 8))

console.log("======================")

console.log(arr1.findIndex((n) => n === 109))

const findIndexCb = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) return i;
    }
    return -1
}

console.log(findIndexCb(arr1, (n) => {
    return false
}))

console.log(arr1.find((n) => {
    return n < 0
}))

console.log("==============")

// verificar se string é um palindromo

const ehPalindromo1 = (str) => {
    let i = 0
    let j = str.length - 1

    const upperCaseStr = str.toUpperCase();
    while (i < j) {
        if (upperCaseStr[i] === " ") {
            i++
            continue
        }
        if (upperCaseStr[j] === " ") {
            j--
            continue
        }
        if (upperCaseStr[i] !== upperCaseStr[j]) return false
        i++
        j--
    }

    return true
}

const ehPalindromo2 = (str) => {
    const upperCaseStr = str.toUpperCase().replace(/ /g, "");
    let i = 0
    let j = upperCaseStr.length - 1

    while (i < j) {
        if (upperCaseStr[i] !== upperCaseStr[j]) return false
        i++
        j--
    }

    return true
}

const ehPalindromo3 = (str) => {
    const upperCaseStr = str.toUpperCase().replace(/ /g, "");
    const reverseStr = upperCaseStr.split("").reverse().join("");
    return upperCaseStr === reverseStr;
}

console.log(ehPalindromo1("arara") === true)
console.log(ehPalindromo1("luZ azUl") === true)
console.log(ehPalindromo1("pedro") === false)
console.log(ehPalindromo1("Ame o poema") === true)
console.log("-")
console.log(ehPalindromo2("arara") === true)
console.log(ehPalindromo2("luZ azUl") === true)
console.log(ehPalindromo2("pedro") === false)
console.log(ehPalindromo2("Ame o poema") === true)

console.log("-")
console.log("should return if a word is a palindrome")
console.log(ehPalindromo3("arara") === true)
console.log(ehPalindromo3("luZ azUl") === true)
console.log(ehPalindromo3("pedro") === false)
console.log(ehPalindromo3("Ame o poema") === true)

console.log("===============")

arr1.forEach((n, idx) => {
    console.log(idx, n)
})

const forEach = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i], i)
    }
}

console.log("-")

forEach(arr1, (n, idx) => {
    console.log(idx, n)
})

let sum = 0
const notas = [10, 5, 7]
notas.forEach((nota) => {
    sum += nota
})
console.log(sum / notas.length)


console.log("=======")

// ["a", "b", "c", "d"] -> ["A", "B", "C", "D"]
// [-1, -2 , -3] -> [1, 2, 3]

const negativeNumbers = [-1, -2, -3, -4, -5, -6];

const transformToPositive = (n, idx) => {
    if (idx % 2 === 0) return n
    return n * -1
}

const positiveNumbers = negativeNumbers.map(transformToPositive)
console.log(negativeNumbers)
console.log(positiveNumbers)

const map = (arr, cb) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const newElement = cb(arr[i], i)
        newArr.push(newElement)
    }
    return newArr
}

console.log(map(negativeNumbers, transformToPositive))

// multiplicar todos os elementos por 2

const numbers = [1, 2, 3, 4, 5, 6]

const doubledNumbers = numbers.map((n) => n * 2)

console.log(doubledNumbers)

// -------

console.log(numbers.map((n) => n ** 2))

// encontrar primeiro numero par

const arr2 = [1, 3, 5, 2, 7, 1];

console.log(arr2.find((n) => n % 2 === 0))

// filter

const fullName = ["Igor", "", "faustino"]

const names = fullName.filter((str, idx) => str)



console.log(fullName)
console.log(names)

const filter = (arr, cb) => {
    const filteredArr = []
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i)) filteredArr.push(arr[i])
    }
    return filteredArr
}

console.log("ata sd".split("").filter(c => c !== " ").join(""))

console.log(filter(fullName, (str) => str))

// remover numeros pares do array

const arr3 = [1, 2, 3, 4, 5, 6]

console.log(arr3.filter(n => n % 2 !== 0))

// verificar se todos os numeros são positivos

const isAllNumbersPositives1 = (arr) => {
    for (let number of arr) {
        if (number < 0) return false
    }
    return true
}

const isAllNumbersPositives2 = (arr) => {
    return !arr.filter((n) => n < 0).length
}

const isAllNumbersPositives3 = (arr) => {
    return !arr.find((n) => n < 0)
}

console.log(isAllNumbersPositives1([1, 2, 3, 4]) === true)
console.log(isAllNumbersPositives1([1, -2, 3, -4]) === false)
console.log(isAllNumbersPositives1([]) === true)
console.log(isAllNumbersPositives1([0]) === true)
console.log(isAllNumbersPositives1([-1]) === false)

console.log("-")

console.log(isAllNumbersPositives2([1, 2, 3, 4]) === true)
console.log(isAllNumbersPositives2([1, -2, 3, -4]) === false)
console.log(isAllNumbersPositives2([]) === true)
console.log(isAllNumbersPositives2([0]) === true)
console.log(isAllNumbersPositives2([-1]) === false)

console.log("-")

console.log(isAllNumbersPositives3([1, 2, 3, 4]) === true)
console.log(isAllNumbersPositives3([1, -2, 3, -4]) === false)
console.log(isAllNumbersPositives3([]) === true)
console.log(isAllNumbersPositives3([0]) === true)
console.log(isAllNumbersPositives3([-1]) === false)

console.log("-")
const t = [1, 2, -3, 4]
console.log(t.every((n) => n >= 0))

const every = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        if (!cb(arr[i], i)) return false
    }
    return true
}

console.log(every(t, (n) => n >= 0))

console.log(t.some(n => n < 0))

const some = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i)) return true
    }
    return false
}

console.log(some(t, n => n < 0))

console.log([1, 2, 3, 4, 5, 6, 7].fill(0))

console.log(t.indexOf(19))

console.log(Object.entries(t))

for (let arr of Object.entries(t)) {
    console.log(arr[0], "->", arr[1])
}

// soma todos os valores do array
const result = [10, 7, 9].reduce((acc, value) => acc + value, 0)

console.log(result)

// tem o mesmo comportamento do filter.... filtra todos os valores pares
console.log([1, 2, 3, 4, 5].reduce((acc, value) => {
    if (value % 2 === 0) return [...acc, value]
    return acc
}, []))

const reduce = (arr, cb, initialAcc) => {
    let acc = initialAcc;
    for (let i = 0; i < arr.length; i++) {
        acc = cb(acc, arr[i], i)
    }
    return acc;
}
const somaArr = (arr, cb, initial) => {
    let resultadoParcial = initial
    for (let i = 0; i < arr.length; i++) {
        resultadoParcial = cb(resultadoParcial, arr[i])
    }
    return resultadoParcial
}
somaArr([10, 9, 7], (acc, n) => acc * n, 1)


console.log(reduce([10, 7, 9], (acc, value) => acc + value, 0))