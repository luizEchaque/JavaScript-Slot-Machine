const prompt = require("prompt-sync")();

const LINHAS = 3;
const COLUNAS = 3;

const SIMBOLOS_CONTAGEM = {
    A: 2,
    B: 4,
    C: 6, 
    D: 8
}

const SIMBOLOS_VALORES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2
}

const depositar = () => {
    while(true){
        const quantiaDepositada = prompt("Digite a quantia a ser depositada: ");
        const numeroDeposito = parseFloat(quantiaDepositada);

        if(isNaN(numeroDeposito) || numeroDeposito <= 0){
            console.log("Deposito invalido. Tente novamente.");
        } else{
            return numeroDeposito;
        }    
    }
};

const verificarNumeroFileiras = () => {
    while(true){
        const fileiras = prompt("Em quantas fileiras deseja apostar (1-3): ");
        const numeroFileiras = parseFloat(fileiras);

        if(isNaN(numeroFileiras) || numeroFileiras <= 0 || numeroFileiras > 3){
            console.log("Numero inválido. Tente novamente.");
        } else{
            return numeroFileiras;
        }    
    }
};

const apostar = (carteira, fileiras) =>{
    while(true){
        const aposta = prompt("Quanto deseja apostar por fileira: ");
        const numeroAposta = parseFloat(aposta);

        if (isNaN(numeroAposta) || numeroAposta <= 0 || numeroAposta > (carteira / fileiras)) {
            console.log("Saldo inválido. Tente novamente.");
        } else{
            return numeroAposta;
        }    
    }
}

const girar = () => {
    const simbolos = [];
    for (const [simbolo, contagem] of Object.entries(SIMBOLOS_CONTAGEM)){
        for(let i = 0; i < contagem; i++){
            simbolos.push(simbolo)
        }
    }

    const carretel = [];
    for(let i = 0; i < COLUNAS ;i++) {
        carretel.push([]);
        const carretelSimbolos = [...simbolos];
        for(let j = 0; j < LINHAS ; j++ ){  
            const aleatorio = Math.floor(Math.random() * carretelSimbolos.length);
            const simboloEscolhido = carretelSimbolos[aleatorio];
            carretel[i].push(simboloEscolhido);
            carretelSimbolos.splice(aleatorio, 1);
        }
    }

    return carretel;
};

const transpor = (carretel) =>{
    const linhas = [];

    for (let i = 0; i < LINHAS; i++){
        linhas.push([]);
        for (let j = 0; j < COLUNAS; j++){
            linhas[i].push(carretel[j][i]);
        }
    }
    
    return linhas;
}

const printLinhas = (linhas) =>{
    for(const linha of linhas){
        let linhaString = "";
        for (const [i, simbolo] of linha.entries()){
            linhaString += simbolo
            if (i != linha.length - 1){
                linhaString += " | "
            }
        }
        console.log(linhaString);
    }
}

const recolherGanhos = (linhas, aposta, numeroFileiras) => {  
    let ganhos = 0;

    for (let linha = 0; linha < numeroFileiras; linha++){  
        const simbolos = linhas[linha];
        let todosIguais = true;

        for (const simbolo of simbolos){
            if (simbolo != simbolos[0]){
                todosIguais = false;
                break;
            }
        }

        if (todosIguais){
            ganhos += aposta * SIMBOLOS_VALORES[simbolos[0]]
        }
    }

    return ganhos;
}

const jogar = () =>{
    let carteira = depositar();

    while(true){
        console.log("Você tem R$: " + carteira, "na carteira");
        const numeroFileiras = verificarNumeroFileiras();  
        const aposta = apostar(carteira, numeroFileiras);  
        carteira -= aposta * numeroFileiras;
        const carretel = girar();
        const linhas = transpor(carretel);
        printLinhas(linhas);
        const ganhos = recolherGanhos(linhas, aposta, numeroFileiras); 
        carteira += ganhos; 
        console.log("Você Ganhou R$: " + ganhos.toString());

        if (carteira <= 0 ){
            console.log("Você está sem dinheiro...");
            break;
        }

        const jogarNovamente = prompt("Você quer jogar novamente? (s/n)")

        if (jogarNovamente != "s"){
            break;
        }
    }
}


jogar();