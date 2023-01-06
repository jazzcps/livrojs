function listarNumeros(){
    //cria a referência aos elementos que a function irá manipular
    let inNumero = document.getElementById("inNumero");
    let outResposta = document.getElementById("outResposta");

    let numero = Number(inNumero.value); //obtem o número informado.

    //verifica validade do número

    if(numero == 0 || isNaN(numero)) {
        alert("Informe um número válido...");
        inNumero.focus();
        return;
    }

    //inicializa variável resposta
    let resposta ="Entre " + numero + " e 1: ";

    //cria um for decrescente
    for (let i= numero - 1; i>0; i--){
        //resposta vai acumulando números (e vírgulas)
        resposta = resposta + "," + i;
    }
        //altera o conteúdo de outResposta
    outResposta.textContent = resposta;
}

//referência elemento e após associa function ao evento click

let btDecrescer = document.getElementById("btDecrescer");
btDecrescer.addEventListener("click", listarNumeros);