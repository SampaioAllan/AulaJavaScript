//parte 1//////////////////////////////////////////////
function confirmarDados(nome){
    var nomeCompleto = nome + ' da Silva';
    var idade = 20;
    function getAnoNascimento(){
        var ano = 2022 - idade;
        return ano;
    }

    console.log('nome completo:', nomeCompleto);
    console.log('ano de nascimento:', getAnoNascimento());
    console.log('idade:', idade);
}
confirmarDados('Marcos')

//parte 2//////////////////////////////////////////////
function confirmarDados(nome){
    let nomeCompleto = nome + ' da Silva';
    let geracao = 'millenium';
    
    function getAnoNascimento(){
        const idade = 40;
        const ano = 2022 - idade;
        return ano;
    }

    let anoDeNascimento = getAnoNascimento();
    if (anoDeNascimento <= 1995) {
        geracao = 'geração x';
    }

    console.log('nome completo:', nomeCompleto);
    console.log('ano de nascimento:', getAnoNascimento());
    console.log('geração:', geracao);
}

confirmarDados('Marcos');

//parte 3//////////////////////////////////////////////
try {
    function confirmarDados(nome){
        var nomeCompleto = nome + ' da Silva';
        
        function getAnoNascimento(){
            var idade = 20;
            var ano = 2022 - idade;

            return ano;
        }
        console.log('nome completo:', nomeCompleto);
        console.log('ano de nascimento:', getAnoNascimento());
        console.log('idade:', idade);
    }
    confirmarDados('Marcos');
} catch (error) {
    console.log('Um erro foi encontrado e não foi possível concluir a operação.')
}

//parte 4//////////////////////////////////////////////
function confirmarDados(nome, idade){
    var nomeCompleto = nome + ' da Silva';
    var geracao = geracaoPertence(idade);
    
    function getAnoNascimento(idadeAtual){
        var ano = 2022 - idadeAtual;
        return ano;
    }

    function geracaoPertence(idadeBase){
        if (getAnoNascimento(idadeBase) <= 1995) {
            return 'geração x';
        }
    }

    console.log('nome completo:', nomeCompleto);
    console.log('ano de nascimento:', getAnoNascimento(idade));
    console.log('geração:', geracao);
}

confirmarDados('Marcos', 40);


