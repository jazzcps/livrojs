function calcularMinutos(){
     
    //Cria referência aos valores da página
    var inPreco = document.getElementById("inPreco");
    var inMinutos = document.getElementById("inMinutos");
    var outPreco = document.getElementById("outPreco");

    //Obtem os valores do campo de entrada

    var valor = Number(inPreco.value);
    var minutos = Number(inMinutos.value);

    //Calcula valores

    var total = Math.ceil(minutos / 15) * valor;
    outPreco.textContent = "Valor a Pagar R$: " + total.toFixed(2);

}

var btCalcular = document.getElementById("btCalcular");

btCalcular.addEventListener("click", calcularMinutos); 
