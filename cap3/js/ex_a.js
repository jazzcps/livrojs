function exibirResposta(){
    //Cria referência dos ID
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    //converte o conteúdo do campo inNumero

    var numero = Number(inNumero.value);

    //verifica se o número é par

    if (numero / 2 || numero == 0){
        outResposta.textContent = "O número " + numero + " é par!";
    }else{
        outResposta.textContent ="O número " + numero + " é ímpar!";
    }
}

//cria a referência do elemento btExibire associa a function ao evento click
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", exibirResposta);