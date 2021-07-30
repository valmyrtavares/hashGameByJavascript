//dados iniciais


//Todos os 9 quadros do jogo da velha
let square = {
    a1:'', a2:"", a3:"",
    b1:'', b2:"", b3:"",
    c1:'', c2:"",  c3:"",
};

let player = ""; 
let warnig= "";
let playing = false;


//Events 
document.querySelector('.reset').addEventListener('click', reset) //Colocando um evento no botão reset

//Function
function reset() {
    warning = "";
    let random = Math.floor(Math.random() * 2) //Criando um número aleatório entre 2 1 e 0
    player = (random===0) ? 'x': 'o'; 
//Manobra para limpar o meu square
//Lembrando que aqui o square não é um array. Talvez por isso seja for e não foreach
//Ele diz que eu posso acessar tanto square.a1 quanto square['a1']
    for (let i in square){
        square[i] = ''; 
    }
    playing = true;
    //iniciar o jogo

    //Vamos disparar duas outra funções
    renderSquare();
    renderInfo();
}