function calcularRaiz(){
    //cria uma referência aos elementos da página
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");
    var numero = Number(inNumero.value); //obtem conteúdo do campo InNumero

    //se não preencheu ou Not-a-Number(NaN)
    if(numero == 0 || isNaN(numero)){
        alert("Informe um número válido...");
        //exibe alerta 
        inNumero.focus(); //posiciona no campo inNumero
        return; //retorna
    }

    var raiz = Math.sqrt(numero); //calcula raiz quadrada do número

    //se valor da variável raiz igual a este valor arredondado para baixo...
    if (raiz == Math.floor(raiz)){
        outResposta.textContent = "Raiz: " + raiz; //mostra a raiz
    }else{
        //senão, exibe mensagem indicando que não há raiz exata
        outResposta.textContent="Não há raiz exata para " + numero;
    }
}

//cria a referência ao elemento btExibir e registra evento que irá carregar function
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularRaiz);
