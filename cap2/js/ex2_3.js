function PromocaoVeiculo(){
    //cria referência aos elementos da página
    var inModelo = document.getElementById("inModelo");
    var inPreco = document.getElementById("inPreco");
    var outModelo = document.getElementById("outModelo");
    var outPreco = document.getElementById("outPreco");

    //obtém os elementos do campo de entrada

    var modelo = inModelo.value;
    var preco = Number(inPreco.value);

    //calcula o valor da entrada e divide o restante de 12x

    var entrada = preco * 0.50;
    var saldo = (preco *0.50) / 12;

    outModelo.textContent = "Promoção:" + modelo;
    outPreco.textContent = "Entrada de R$" + entrada.toFixed(2);
    outParcela.textContent = "+ 12X de R$:" + saldo.toFixed(2);
}
//cria uma referência do elemento btPromocao (botão)
var btPromocao = document.getElementById("btPromocao");
//registra um evento associado ao otão, pata carregar uma função
btPromocao.addEventListener("click", PromocaoVeiculo);
