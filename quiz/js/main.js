let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// AUDIO
let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let imgQuestao = document.querySelector('.imagemDaQuestao img')  // ADICIONE
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')


const q0 = {
    numQuestao   : 0,
    imagem       : '0.png',  //tem q mudar a imagem
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}
const q1 = {
    numQuestao   : 1,
    imagem       : '1.jpg',
    pergunta     : "Quais os tipos sanguíneos existentes?",
    alternativaA : "A, B, AB e O",
    alternativaB : "A, B, AO, BO e O",
    alternativaC : "A, B e O",
    alternativaD : "A, AB, B, BA e O",
    correta      : "A, B, AB e O",
}
const q2 = {
    numQuestao   : 2,
    imagem       : '2.jpg', 
    pergunta     : "Qual tipo sanguíneo é considerado doador universal?",
    alternativaA : "A+",
    alternativaB : "AB-",
    alternativaC : "O-",
    alternativaD : "O+",
    correta      : "O-",
}
const q3 = {
    numQuestao   : 3,
    imagem       : '3.jpg', 
    pergunta     : "Em que ano o sistema ABO foi descoberto?",
    alternativaA : "1908",
    alternativaB : "1901",
    alternativaC : "1905",
    alternativaD : "1906",
    correta      : "1901",
}
const q4 = {
    numQuestao   : 4,
    imagem       : '4.jpg', 
    pergunta     : "Qual aglutinina o tipo sanguíneo AB tem?",
    alternativaA : "Anti-B",
    alternativaB : "Anti-A",
    alternativaC : "Anti-A e Anti-B",
    alternativaD : "Não possui",
    correta      : "Não possui",
}
const q5 = {
    numQuestao   : 5,
    imagem       : '5.jpg',
    pergunta     : "Qual aglutinogênio o sangue tipo B possui?",
    alternativaA : "B",
    alternativaB : "A",
    alternativaC : "A e B",
    alternativaD : "Não possui",
    correta      : "B",
}
const q6 = {
    numQuestao   : 6,
    imagem       : '6.jpg',
    pergunta     : "Caso uma pessoa do tipo sanguíneo O- precisar de uma doação de sangue, qual será o tipo de sangue que ela deverá receber?",
    alternativaA : "O- e O+",
    alternativaB : "O-, O+, A-, A+, B-, B+, AB- e AB+",
    alternativaC : "O-, O+, A-, B- e AB-",
    alternativaD : "O-",
    correta      : "O-",
}
const q7 = {
    numQuestao   : 7,
    imagem       : '7.jpg',
    pergunta     : "Existem quatro tipos sanguíneos na espécie humana: A, B, AB e O. Eles são codificados graças a três alelos, o que representa um caso de:",
    alternativaA : "Epistasia",
    alternativaB : "Mutação",
    alternativaC : "Alelos múltiplos",
    alternativaD : "Pleiotropia",
    correta      : "Alelos múltiplos",
}
const q8 = {
    numQuestao   : 8,
    imagem       : '8.jpg',
    pergunta     : "Quais os dois principais tipos sanguíneos predominante na população brasileira atualmente?",
    alternativaA : "A+ e B-",
    alternativaB : "A+ e O+",
    alternativaC : "A+ e B+",
    alternativaD : "B- e O+",
    correta      : "A+ e O+",
}
const q9 = {
    numQuestao   : 9,
    imagem       : '9.jpg',
    pergunta     : "Sou do tipo Sanguíneo AB e a minha esposa do tipo sanguíneo A com alelos homozigotos. Quais as possíveis genótipos do nosso filho?",
    alternativaA : "IBIB, IB i",
    alternativaB : "IAIA, IAIB",
    alternativaC : "IAIB",
    alternativaD : "ii",
    correta      : "IAIA, IAIB",
}
const q10 = {
    numQuestao   : 10,
    imagem       : '10.jpg',
    pergunta     : "Na minha família (eu, pai, mãe e meus três irmãos) somos todos do tipo sanguíneo O. Qual é o meu genótipo?",
    alternativaA : "ii",
    alternativaB : "IAIB",
    alternativaC : "IAIA",
    alternativaD : "IA i",
    correta      : "ii",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
imgQuestao.setAttribute('src', 'images/'+q1.imagem)  // ADICIONE
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    imgQuestao.setAttribute('src', 'images/'+questoes[nQuestao].imagem) // ADICIONE
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1
    //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
    //console.log('Duplo clique')
    pontos -= 10 // tirar 10 pontos em caso de duplo click
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10 // pontos = pontos + 10
        if(nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 500);
    
    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 500)
    desbloquearAlternativas()
}

function fimDoJogo() {

    somAplausos.play()

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto"+ s

    instrucoes.classList.add('placar')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        window.location.href = "../index.html";
    }, 6000)

}
