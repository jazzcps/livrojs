function verificarLados(){
    // Vincula ID aos conteúdos
    let inLadoA = document.getElementById("inLadoA");
    let inLadoB = document.getElementById("inLadoB");
    let inLadoC = document.getElementById("inLadoC");
    let outResultado = document.getElementById("outResultado");
    let outTipo = document.getElementById("outTipo");

    // cria variável a ser preenchida pelo campo

    let ladoA = Number(inLadoA.value);
    let ladoB = Number(inLadoB.value);
    let ladoC = Number(inLadoC.value);

    //verifica se pode formar um triangulo

    if(ladoA > ladoB + ladoC){
        outResultado.textContent = "Resultado: Não forma um triangulo";
        return;
    } else if(ladoB > ladoA + ladoC){
        outResultado.textContent = "Resultado: Não forma um triangulo";
        return;
    } else if(ladoC > ladoA + ladoC){
        outResultado.textContent = "Resultado: Não forma um triangulo";
        return;
    } else{
        outResultado.textContent = "Resultado: Lados podem formar um triangulo";
    }

    // verifica o tipo de triangulo

    if (ladoA == ladoB && ladoC){
        outTipo.textContent = "Tipo: Equilátero";

    }else if (ladoA == ladoB || ladoB >= ladoC){
        outTipo.textContent = "Tipo:  Isósceles";

    }else if (ladoA == ladoC || ladoC <= ladoB){
        outTipo.textContent = "Tipo:  Isósceles";
    }else{
        outTipo.textContent = "Tipo: Escaleno";
    }
} 
    //cria a referência do elemento btExibir e associa a function ao evento click
let btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", verificarLados);

