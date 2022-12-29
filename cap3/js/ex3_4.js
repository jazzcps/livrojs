function calcularFuso(){
    //cria uma referência aos elementos da página
    var inHoraBrasil = document.getElementById("inHoraBrasil");
    var outHoraFranca = document.getElementById("outHoraFranca");

    //obtém e converte o conteúdo do campo inHoraBrasil 

    var horaBrasil = Number(inHoraBrasil.value);

    //se não preencheu ou Not-a-Number (NaN)
    if(inHoraBrasil.value==""|| isNaN(horaBrasil)){
        alert("Informe a hora no Brasil corretamente!"); //exibirá o alerta
        inHoraBrasil.focus(); //posiciona em inHoraBrasil 
        return;
    }

    var horaFranca = horaBrasil + 5; //Calcula o horário na França

    //se passar das 24 horas na Franca...
    if(horaFranca>24){
        horaFranca = horaFranca - 24; //Subtrai 24 
    }

    //Exibe a resposta (altera o conteúdo do elemento outHoraFranca)
    outHoraFranca.textContent = "Hora na França: " + horaFranca.toFixed(2);
}

//Cria uma referência ao elemento btExibir e registra o evento associado a function

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularFuso);