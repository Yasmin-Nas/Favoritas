

// ELEMENTOS DA 1a CARTA APENAS
let imgFoto       = document.querySelector('#foto')
let nome          = document.querySelector('#nome')
let ingrediente = document.querySelector('#ingrediente')


// section que acomoda todas as cartas
let sectionConteudos = document.querySelector('.conteudos')

// ENDERECO DO ARQUIVO JSON
const url = 'cards.json'

function pegarDados(i) {
  fetch(url)
    .then( response => response.json() )
    .then( dados => {
        if(dados.erro) {
            console.log("Erro ao acessar o JSON")
            return
        }
        // console.log(dados)
        // Quantidade de lutadores
        let qtdFavoritas = (dados.favoritas.length)
        // console.log("Quant. de Lutadores " + qtdLutadores)
        // passe o valor de i no parametro
        atribuirDados2(dados, i)
    })
} // fim pegarDados

// atribuir dados individualmente, ou seja, so para uma carta
// ela so funciona se for chamada dentro da funcao pegarDados
function atribuirDados(dados, i) {

    imgFoto.setAttribute('src', "images/pride/"+dados.favoritas[i].foto)
    nome.textContent          = dados.favoritas[i].nome
    ingrediente.textContent = dados.favoritas[i].ingrediente
   
}

// SELECIONAR TODOS OS CARDS por class
let imgsFoto = document.getElementsByClassName('foto')
let nomesPizzas       = document.getElementsByClassName('nome')
let ingredienteFav = document.getElementsByClassName('ingrediente')



function atribuirDados2(dados, i) {
    imgsFoto[i].setAttribute('src', "images/pride/"+dados.favoritas[i].foto)
    nomesPizzas[i].textContent         = dados.favoritas[i].nome
    ingredienteFav[i].textContent = dados.favoritas[i].ingrediente
   
}


function desenharCarta(id) {
    // CARD
    let carta = document.createElement("article")
    carta.setAttribute('class', 'card')
    
    const containerCards = document.createElement('div')
    
    containerCards.appendChild(carta)   
    sectionConteudos.appendChild(containerCards)


    // IMAGEM DENTRO DO CARD
    let imagem = document.createElement("img")
    carta.appendChild(imagem)
    imagem.setAttribute('class', 'foto')
    imagem.setAttribute('src', 'images/pride/image 2.png')

    
    let nomesPizzas = document.createElement("h2")
    nomesPizzas.setAttribute('class', 'nome')
    carta.appendChild(nomesPizzas)
    nomesPizzas.textContent = "nome"

    
    let ingredienteFav = document.createElement("h3")
    ingredienteFav.setAttribute('class', 'ingrediente')
    carta.appendChild(ingredienteFav)
    ingredienteFav.textContent = "ingrediente"

    

    pegarDados(id)
}

// 1a carta pegamos os dados. Ela ja esta desenhada na tela
pegarDados(0)

// 2a carta em diante desenhamos em tela usando as funcoes
//desenharCarta(0)
desenharCarta(1)
desenharCarta(2)
desenharCarta(3)

const loadCrads = async () => {


}

