//parte 1//////////////////////////////////////////////
let nome
let senha
function CadastrarLogin(){
    nome = prompt("Digite seu Nome:")
    senha = prompt("Escreva sua senha:")
}

//parte 2//////////////////////////////////////////////
function VerificarLogin(nomeRequest, senhaRequest){
    let nomeComparacao = prompt("Digite seu Nome:")
    let senhaComparacao = prompt("Escreva sua senha:")
    return nomeRequest === nomeComparacao && senhaRequest === senhaComparacao ? true : false;
}

//parte 3//////////////////////////////////////////////
CadastrarLogin()
VerificarLogin(nome, senha);