const findUser = (id, callback) => {
    setTimeout(() => {
        if (id === 2) return callback("User not found")
        callback(null, {
            id,
            name: "Igor"
        })
    }, 2000)
}

// findUser(2, (err, user) => {
//     if (err) return console.log(err);
//     console.log(user)
// })

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({
//             name: "Igor",
//             age: 10
//         })
//     }, 1000)
// }).then(value => {
//     console.log({ value })
// }).catch(err => {
//     console.log({ err })
// })


const simularRequisicao = ({ success = true } = {}) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!success) return reject("Erro na requisição")
            resolve("Requisição bem-sucedida")
        }, 1000)
    })
}

// simularRequisicao().then(value => {
//     console.log({ value })
// }).catch(err => {
//     console.log({ err })
// })



const obterUsuario = (userId) => {
    const users = [
        { id: 1, name: "Igor" }
    ]

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(user => user.id === userId);
            if (!user) return reject("User not found with id " + userId)
            resolve(user)
        }, 1000)
    })
}

const obterComentarios = (userId) => {
    const comentarios = {
        1: ["Muito legal", "First", "Não gostei"]
    }

    return new Promise((resolve) => {
        setTimeout(() => {
            const userComments = comentarios[userId] || []
            resolve(userComments)
        }, 2000)
    })
}

const exibirDetalhes = (userId) => {
    let foundedUser;
    obterUsuario(userId).then(user => {
        foundedUser = user;
        return obterComentarios(user.id)
    }).then(comentarios => {
        foundedUser.comments = comentarios;
        console.log(foundedUser)
    })
}

// exibirDetalhes(1)

const obterComentariosUpperCase = (userId) => {
    return obterComentarios(userId).then(comments => {
        return comments.map(comment => comment.toUpperCase())
    })
}

const exibirDetalhes2 = (userId) => {
    let foundedUser;
    obterUsuario(userId).then(user => {
        foundedUser = user;
        return obterComentariosUpperCase(user.id)
    }).then(comentarios => {
        foundedUser.comments = comentarios;
        console.log(foundedUser)
    })
}

// exibirDetalhes2(1)


const delayFunction = (maxDelayInSec) => {
    const delayInSec = Math.floor(Math.random() * (maxDelayInSec + 1))
    const delayInMs = delayInSec * 1000
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(delayInMs)
        }, delayInMs)
    })
}

// delayFunction(2).then((delay) => {
//     console.log("Olaa", delay)
// })

const calcMedia = (arr) => {
    return new Promise((resolve, reject) => {
        delayFunction(2).then(() => {
            if (arr.length === 0) return reject(new Error("Nenhuma nota"))
            const soma = arr.reduce((acc, valor) => acc + valor, 0);
            resolve(soma / arr.length)
        })
    })
}

// calcMedia([10, 5]).catch(() => {
//     return 0
// }).then(value => {
//     console.log(value)
// })

// new Promise((resolve) => {
//     console.log("1")
//     resolve()
// }).then(() => {
//     console.log(2)
//     throw new Error();
// }).then(() => {
//     console.log(3)
// }).catch(() => {
//     console.log("erro 1")
// }).then(() => {
//     console.log(4)
// }).catch(() => {
//     console.log("erro 2")
// }).finally(() => {
//     console.log("Finally")
// })

// new Promise((resolve, reject) => {
//     reject(1)
// }).then(() => {
//     console.log(1)
// }).catch(() => {
//     console.log(2)
// }).finally(() => {
//     console.log(3)
// })

const cache = {
    1: { id: 1, name: "Igor" }
}

const dados = [
    { id: 1, name: "Igor" },
    { id: 2, name: "Lucas" }
]

const buscarDoCache = (userId) => {
    return new Promise((resolve, reject) => {
        delayFunction(1).then(() => {
            const data = cache[userId]
            if (!data) return reject(new Error("Data not in cache"))
            resolve(data)
        })
    })
}


const buscarDado = (userId) => {
    return new Promise((resolve, reject) => {
        delayFunction(2).then(() => {
            const user = dados.find(user => user.id === userId);
            if (!user) return reject(new Error("User Not Found"))
            resolve(user)
        })
    })
}

const buscarUsuario = (userId) => {
    return buscarDoCache(userId)
        .catch(err => {
            console.log(err)
            return buscarDado(userId).then(user => {
                cache[user.id] = user
                return user
            })
        }).then(user => {
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
}

// buscarUsuario(2).then(() => {
//     buscarUsuario(2)
//     console.log(cache)
// })


// buscarUsuario(20)

new Promise(resolve => resolve(10)) // -> igual a Promise.resolve(10)

// Promise.all([obterComentarios(1), obterUsuario(1)]).then((results) => {
//     const [comentarios, usuario, value] = results;

//     console.log("--->", {
//         ...usuario,
//         comments: comentarios,
//         value
//     })
// }).catch((err) => {
//     console.log({ err })
// })

// Promise.allSettled([obterComentarios(1), obterUsuario(1), Promise.reject(10)]).then((results) => {
//     console.log(results)
// }).catch((err) => {
//     console.log({ err })
// })


async function blabla() {

}

const blabla2 = async function () {

}

const exibirDetalhes3 = async () => {
    const user = await obterUsuario(1);
    const comments = await obterComentarios(1)
    console.log({ ...user, comments })
}

// exibirDetalhes3()

const exibirDetalhes4 = async () => {
    const [user, comments] = await Promise.all([obterUsuario(1), obterComentarios(1)]);
    console.log("Promise.all ->", { ...user, comments })
}

// exibirDetalhes4()

const testeError = async () => {
    try {
        console.log("Trying...")
        await Promise.resolve(10)
        console.log("Success!!! \\\\o//")
    } catch (err) {
        console.log(err)
    } finally {
        console.log("finally")
    }
}

// testeError()

const buscarDadosUsuario = async (userId) => {
    try {
        console.log("Buscando dados no cache")
        return await buscarDoCache(userId)
    } catch (err) {
        console.log("Não achei no cache... buscando no banco de dados")
        const user = await buscarDado(userId);
        cache[user.id] = user
        return user
    }
}

const buscarUsuario2 = async (userId) => {
    try {
        let user = await buscarDadosUsuario(userId)
        console.log(user)
    } catch (error) {
        console.log("Algo de errado não está certo")
        console.log(error)
    }
}
// buscarUsuario2(2).then(() => {
//     console.log("Segunda tentativa")
//     buscarUsuario2(2)
// })


const doubleNumber = async () => {
    const numbers = [1, 2, 3]
    const newArray = []
    for (let number of numbers) {
        const doubledValue = await Promise.resolve(number * 2);
        newArray.push(doubledValue)
    }
    return newArray
}

doubleNumber().then((arr) => {
    console.log(arr)
})