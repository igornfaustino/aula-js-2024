const pessoa = {
    name: "Igor",
    numberOfDogs: undefined
}

console.log(pessoa.name)
console.log(pessoa.email)

const { name, email: emailPessoa = "", numberOfDogs = 0 } = pessoa;

console.log(name)
console.log(emailPessoa.toUpperCase())
console.log(numberOfDogs + 1)

const arr = []
const [n1 = 1] = arr;

console.log(n1)

const f = (n1, n2, op = "sum") => {
    console.log(op)
    switch (op) {
        case "sum":
            return n1 + n2;
        case "sub":
            return n1 - n2;
    }
}

console.log(f(3, 2))


const mostrarInformacoes = (obj = {}) => {
    const { name, city } = obj
    console.log(`nome: ${name} e cidade: ${city}`)
}

mostrarInformacoes({
    name: "Igor",
    city: "Campo Mourao"
})

const mostrarInformacoes2 = ({ name, city } = {}) => {
    console.log(`nome: ${name} e cidade: ${city}`)
}

mostrarInformacoes2({
    name: "Igor",
    city: "Campo Mourao"
})

mostrarInformacoes2()

let a = 1;
let b = 2;

[a, b] = [b, a];
console.log({ a, b })

let objeto = { a, b };
objeto = { a: objeto.b, b: objeto.a };

console.log({ a: objeto.a, b: objeto.b });

// ------------------------- PROMISES --------------------


const findUser = (callback) => {
    setTimeout(() => {
        user = { id: 1, name: "igor" }
        callback(user)
    }, 1000) // 1s = 1000 ms -> 3s = 3000 ms
}

const findUserCards = (userId, callback) => {
    setTimeout(() => {
        cards = [{ userId: 1, cardNumber: "1234123412341234" }]
        callback(cards)
    }, 1000) // 1s = 1000 ms -> 3s = 3000 ms
}

const findCardCredit = (cardNumber, callback) => {
    setTimeout(() => {
        callback({ cardNumber, credit: 1000 })
    }, 1000) // 1s = 1000 ms -> 3s = 3000 ms
}



// findUser((user) => {
//     console.log(user)
//     findUserCards(user.id, (cards) => {
//         console.log(cards)
//         findCardCredit(cards[0].cardNumber, (cardCredit) => {
//             console.log(cardCredit)
//             findCardCredit(cards[0].cardNumber, (cardCredit) => {
//                 console.log(cardCredit)
//                 findCardCredit(cards[0].cardNumber, (cardCredit) => {
//                     console.log(cardCredit)
//                 })
//             })
//         })
//     })
// })


const findUserPromise = (userId) => {
    const users = [{ id: 1, name: "igor" }]
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find((user) => user.id === userId)
            if (!user) reject(new Error("user not found")) // erro
            resolve(user) // sucesso
        }, 1000) // 1s = 1000 ms -> 3s = 3000 ms
    })
}

findUserPromise(2).then((user) => {
    console.log(user)
}).catch(err => {
    console.log({ err })
})

new Promise(resolve => {
    resolve({
        nome: "Igor",
        age: 25,
        cpf: "9999999999999"
    })
}).then(pessoa => {
    console.log(pessoa)
})

const delayFunction = (delay) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

delayFunction(1000).then(() => {
    console.log("Pra vc 1 segundos no futuro")
})

const findUserCardsPromise = (userId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            cards = [{ userId: 1, cardNumber: "1234123412341234" }]
            resolve(cards)
        }, 1000) // 1s = 1000 ms -> 3s = 3000 ms
    })
}

const findCardCreditPromise = (cardNumber) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ cardNumber, credit: 1000 })
        }, 1000) // 1s = 1000 ms -> 3s = 3000 ms
    })
}

findUserPromise(3).then(({ id: userId }) => {
    return findUserCardsPromise(userId)
}).then(cards => {
    console.log(cards)
    return cards
}).then(cards => {
    return cards[0]
}).then(card => {
    console.log(card)
    return findCardCreditPromise(card.cardNumber)
}).then(credit => {
    console.log(credit)
}).catch(err => {
    console.log(err)
})