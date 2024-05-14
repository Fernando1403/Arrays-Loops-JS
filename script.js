const pessoas = ["Magrinho","Magrao","Magreza"]
// // O push adiciona um elemento ao final do array
// pessoas.push("Caio")
// //Remove o ultimo elemento da lista
// pessoas.pop()
// //Adiciona o elemento no inicio da lista
// pessoas.unshift("Primeiroo")
// //Remove o elemento do inicio da lista
// pessoas.shift()
// //Atualizar o valor de um array
// pessoas[1] = "Mudei"


// console.log(pessoas)

// for(i=0;i<=10;i++){
//     console.log(pessoas[i])
// }

// pessoas.forEach(
//      function rodarArray(pessoas){
//         console.log(pessoas + " é gay")
//     }
// );

//pessoas.forEach(pessoa => console.log(pessoa))

// const pessoasModificado = 
// pessoas.map(pessoa => console.log(pessoa + " é gay"))

// function mudarPessoas(){
//     return pessoas.map(pessoa => console.log(pessoa + "!"))
// }

// //Minha Resolução
// function dobrar(numeros){
//     numeros.map(numero => console.log(numero*2))
// }

// dobrar([4,5,8])

//Correção
// function dobrar(array){
//     return array.map(x => x * 2)
// }

// let resultado = dobrar([2,4,6])
// console.log(resultado);

//Minha Resolução
// function mudar(x){
//     x.map(item => console.log(item.toUpperCase()))
// }

// mudar(["bacate","melao","morango"])

// function mudar(array){
//     return array.map(item => item.toUpperCase());
// }

// let resultado = mudar(["bacate","melao","morango"])
// console.log(resultado)

const filmes = [
    {
        nome: "Velozes e Furiosos",
        diretor: "Vin Diesel",
        ano: 2002 
    },
    {
        nome: "Senhor dos anéis",
        diretor: "Gandalf",
        ano: 1997
    },
    {
        nome: "Batman",
        diretor: "Nolan",
        ano: 2023
    }
]

// console.log(filmes[0])
// console.log(filmes.map(filme => filme.nome))
console.log(filmes.filter(filme => filme.ano > 2000))