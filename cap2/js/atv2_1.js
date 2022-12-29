function valorPromocao() {
    //Cria referência aos elementos da página

    var inMedicamento = document.getElementById("inMedicamento");
    var outMedicamento = document.getElementById("outMedicamento");
    var inPreco = document.getElementById("inPreco");
    var outValor = document.getElementById("outValor");

    //Obtem os valores do campo de entrada

    var medicamento = inMedicamento.value;
    var preco = Number(inPreco.value);

    //Calcula valores
    var valor = Math.floor(preco * 2);
    outMedicamento.textContent = "Promoção de " + medicamento;
    outValor.textContent = "Leve 2 por apenas R$: " + valor.toFixed(2);
}

//Cria referência do botão

var btCalcular = document.getElementById("btCalcular");

btCalcular.addEventListener("click", valorPromocao)