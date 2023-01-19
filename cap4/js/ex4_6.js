function verificarPrimo(){
    //cria referência aos elementos da página 
    let inNumero = document.getElementById("inNumero");
    let outResposta = document.getElementById("outResposta");
    
    let num = Number(inNumero.value); //obtém o número informado
    
    //verifica se preencheu corretamente o campo inNumero

    if(num == 0 || isNaN(num)){
        alert("Número inválido...");
        inNumero.focus();
        return;
    }

    let numDivisores = 0; //declara e inicializa o contador 

    //percorre todos os possíveis divisores do número 

    for(var i = 1; i <= num; i++){
        //verifica se i(1,2,3...) é divisor do num 
        if(num % i ==0){
            numDivisores++; //se é, incrementa contador
    }
    }

    // se possui apenas 2 divisores, é primo
    if (numDivisores == 2){
        outResposta.textContent = num + " é primo";
    }else{
        outResposta.textContent = num + " não é primo";
    }
}

//referencia elemento e após associa function ao evento click
let btVerificarPrimo = document.getElementById("btVerificarPrimo");
btVerificarPrimo.addEventListener("click", verificarPrimo);
