function exibirSituacao(){
    //Criar as referências dos campos inseridos no html 
    var inVelocidadePermitida = document.getElementById("inVelocidadePermitida");
    var inVelocidadeCondutor = document.getElementById("inVelocidadeCondutor");
    var outSituacao = document.getElementById("outSituacao");

    //converte o conteúdo do campo 

    var velPermitida = Number(inVelocidadePermitida.value);
    var velCondutor = Number(inVelocidadeCondutor.value);

    //calcula situacao 
    if (velCondutor == velPermitida){
        outSituacao.textContent = "Sem Multa!";
        return;
    }
    if (velCondutor == velPermitida * 1.20){
        outSituacao.textContent = "Multa Leve!";
        return;
    }
    if (velCondutor > velPermitida * 1.20){
        outSituacao.textContent = "Multa Grave!";
        return;
    }
}

//cria a referência do elemento btExibir e associa a function ao evento click
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", exibirSituacao);