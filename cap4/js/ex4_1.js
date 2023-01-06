function mostraTabuada(){
    //Cria referência dos elementos da página 
    let inNumero= document.getElementById("inNumero");
    let outTabuada = document.getElementById("outTabuada");
    
    //converte conteúdo do campo inNumero
    let numero = Number(inNumero.value);
    //valida o número
    if (numero == 0 || isNaN(numero)){
        alert("informe um número válido...");
        inNumero.focus();
        return;
    }

    //cria uma variável do tipo String, que irá concatenar a resposta
    let resposta ="";

    //cria uma laço de repetição
    for(let i=1;i<=10;i++){
        //a variável rsposta vai acumulando os novos conteúdos...
        resposta =resposta + numero + "x"+i+"="+numero * i + "\n";
    }

    //o conteúdo da tag pre é alterado para exibir a tabuada do num 
    outTabuada.textContent = resposta;
}

//cria referência ao botão e após associa function ao evento click
let btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", mostraTabuada);