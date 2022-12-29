function valorConsumo() {

    //cria referência aos elementos da página;

    var inQuilo = document.getElementById("inQuilo");
    var inConsumo = document.getElementById("inConsumo");
    var outValor = document.getElementById("outValor");

    //obtém os elementos do campo de entrada

    var quilo = Number(inQuilo.value);
    var consumo = Number(inConsumo.value);

    //calcula o valor da entrada

    var valor = (quilo / 1000) * consumo;

    outValor.textContent = "Valor a pagar R$:" + valor.toFixed(2);
}
// cria referência ao elemento btCalcular
var btCalcular = document.getElementById("btCalcular");
// registra um evento associado ao botão, para carregar uma função
btCalcular.addEventListener("click", valorConsumo);