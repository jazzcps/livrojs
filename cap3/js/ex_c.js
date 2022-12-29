function mostrarPermanencia(){
    //cria referência aos elementos 
    var inMoedas = document.getElementById("inMoedas");
    var outPermanencia = document.getElementById("outPermanencia");
    var outTroco = document.getElementById("outTroco");

    //cria a variável a ser preenchida no campo 

    var moedas = Number(inMoedas.value);
    var trocoDe30 = moedas - 1;
    var trocoDe60 = moedas - 1.75;
    var trocoDe120 = moedas - 3;

    //calcula o resto para ver se tem troco 

    if (moedas >= 1 && moedas < 1.75){
        outPermanencia.textContent= "30 minutos";
        outTroco.textContent = "Seu troco é " + trocoDe30;
    }
    else if (moedas >= 1.75 && moedas < 3){
        outPermanencia.textContent = "60 minutos";
        outTroco.textContent = "Seu troco é " + trocoDe60;
    } else {
        outPermanencia.textContent = "120 minutos é o máximo!";
        outTroco.textContent = "Seu troco é " + trocoDe120;
    }
}
//cria a referência do elemento btExibir e associa a function ao evento click
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", mostrarPermanencia);

