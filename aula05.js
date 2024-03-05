[1, 2, 3, 4].filter(function (value) {
    console.log(value)
})

//               0, 1, 2, 3, 4, 5
const numeros = [1, 2, 3, 4, 5, 6]
numeros.push(7)

const pessoa = {
    name: "Igor",
    job: "Programador",
    age: 25,
    teste: true
}

console.log(pessoa.name)

const key = "teste"
console.log(pessoa[key])

console.log(pessoa) // mostra todo o obj
console.log(Object.keys(pessoa)) // mostra todas as chaves (como um array)
console.log(Object.values(pessoa)) // mostra todos os valores (como um array)
console.log(Object.entries(pessoa)) // mostra a chave e o valor (como um array)

console.log("name" in pessoa) // checa se a chave existe dentro do obj

const carro = {
    modelo: "carro 1",
    year: 2020,
    fabricante: {
        name: "X",
        mecanicos: [
            {
                name: "Pedro",
                especialidade: "motor"
            },
            {
                name: "Carlos",
                especialidade: "Carburador"
            }
        ]
    }
}

console.log(carro.fabricante.mecanicos[0].name)

carro.fabricante.mecanicos.forEach(mecanico => {
    console.log(mecanico.name)
})

const igor = {}

console.log(igor.name)
igor.name = "Igor"
igor.age = 30
console.log(igor.name)
console.log(igor.age)

console.log("===============")

// criar obj pessoa e atribuir nome, idade e profissao

const p = {
    name: "Igor",
    age: 25,
    job: "Programador",
}

console.log(p)

const name = "Igor"
const name2 = "Igor"

console.log({ name }) // { name: name }
console.log({ name2 }) // { name: name }

// p.address = {
//     street: "street 1",
//     number: 1,
//     city: "campo mourao",
//     state: "PR"
// }
// p.job = "Carteiro"

p.address = {}
p.address.city = "Maringa"
p.address.state = "PR"
p.address.street = "street a"
p.job = "Carteiro"

p.job2 = "programador"
delete p.job // p.job = undefined

console.log(p)


const p2 = {
    name: "Rogerio",
    lastname: "Gomes",
    fullName: () => p2.name + " " + p2.lastname
}

console.log(p2.fullName())

const p3 = {
    name: "Rogerio",
    lastname: "Gomes",
    fullName: function () {
        return `${this.name} ${this.lastname}`
    }
}

console.log(p3.fullName())

console.log("========")

const carro2 = {
    marca: "fiat",
    modelo: "uno com escada",
    ano: 1993,
    descricao: () => `${carro2.modelo} ${carro2.marca} ${carro2.ano}`
}

console.log(carro2.descricao())

const student = {
    student1: {
        name: 'Gabriel',
        grade: 7,
        approved: true
    },
    student2: {
        name: 'Lucas',
        grade: 3,
        approved: false
    },
    student3: {
        name: 'Leticia',
        grade: 10,
        approved: true
    },
}

const students = Object.values(student)

console.log(students.reduce((acc, student) => acc + student.grade, 0) / students.length)

// ---------

const aluno = {
    name: "Fabio",
    idade: 15,
    notas: [10, 9, 4],
    calcularMedia: function () {
        const somaDasNotas = this.notas
            .reduce((soma, nota) => soma + nota, 0) // 0 é o valor inicial da soma
        return somaDasNotas / this.notas.length
    }
}

console.log(aluno.calcularMedia())

console.log(aluno.notas)

let soma = 0;
aluno.notas.forEach(nota => soma += nota)
console.log(soma / aluno.notas.length)


console.log("=================")

const biblioteca = {
    livros: [
        {
            title: "clean code",
            author: "Uncle bob",
            year: 2001
        },
        {
            title: "Narnia",
            author: "C S Louis",
            year: 1940
        },
        {
            title: "Sherlock Holmes",
            author: "Sir Arthur Conan Doyle",
            year: 1830
        }
    ]
}

const titles = biblioteca.livros.map(livro => livro.title)
console.log(titles)

console.log("===========")

const agenda = {
    contatos: [],
    add: function (nome, telefone, email) {
        const contato = {
            nome,
            telefone,
            email
        }
        this.contatos.push(contato)
    },
    list: function () {
        return this.contatos;
    },
    findByName: function (name) {
        return this.contatos
            .find((contato) =>
                contato.nome.toLowerCase() === name.toLowerCase())
    }
}

agenda.add("igor", "9999999999", "teste@mail.com")
agenda.add("pedro", "9999999999", "teste@mail.com")
agenda.add("carlos", "9999999999", "teste@mail.com")
agenda.add("Lucas", "9999999999", "teste@mail.com")
console.log(agenda.list())
console.log(agenda.findByName("lucas"))

let a = 1
let b = a
b += 1

console.log({ a, b })

const obj = {}
ob2 = obj;

ob2.name = "teste"

console.log({ obj, ob2 })


const arr = []

function processPayment(arr) {
    const newArray = arr.map(value => value)
    newArray.push(1)
    console.log({ newArray })
}

processPayment(arr)

console.log({ arr })


const str = "hello"

function processStr(str) {
    str += " world"

    console.log(str)
}

processStr(str)

console.log(str)

console.log("=================")

const jogo = {
    name: "Super Mario",
    videogame: "Nintendo",
    ano: "1993"
}

// const nameJogo = jogo.name
// const ano = jogo.ano
// const videogame = jogo.videogame

// isso é igual ao codigo a cima
const { name: nameJogo, ano, videogame } = jogo

console.log(nameJogo)
console.log(ano)
console.log(videogame)


const arr1 = [1, 2, 3, 4]

const [n1, ...resto] = arr1

console.log(n1)
console.log(resto)

const novoArray = [...arr1]

const novoObj = { ...ob2 }


const user = {
    password: "password",
    email: "teste@email.com",
    token: "asdfasdfasdfasd"
}

const { password, ...userWithoutPassword } = user;

console.log(userWithoutPassword)


const newUser = {
    ...user,
    password: undefined
}

console.log(newUser)

