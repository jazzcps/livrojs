function mostrarPermanencia(){
    //cria referência aos elementos 
    var inMoedas = document.getElementById("inMoedas");
    var outPermanencia = document.getElementById("outPermanencia");
    var outTroco = document.getElementById("outTroco");

    //cria a variável a ser preenchida no campo 

    var moedas = Number(inMoedas.value);

    //calcula o resto para ver se tem troco 

    if (moedas < 1){
        outPermanencia.textContent="Valor insuficiente";
        return;
    }
    if (moedas >= 1){
        outPermanencia.textContent = "Você tem 30 minutos e Seu troco é " + (moedas - 1);
        return;
    }
    if (moedas >= 1.75){
        outPermanencia.textContent = "Você tem 60 minutos e seu troco é " + (moedas - 1.75);
        return;
    }
    if (moedas == 3){
        outPermanencia.textContent = "Você tem 120 minutos!"
        return;
    }
    if (moedas > 3){
        outPermanencia.textContent = "O tempo máximo é de 120 minutos e seu troco é" + (moedas - 3);
    }
//cria a referência do elemento btExibir e associa a function ao evento click
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", mostrarPermanencia);

}