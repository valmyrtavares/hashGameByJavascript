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


reset();
document.querySelector('.reset').addEventListener('click', reset) //Colocando um evento no botão reset


function reset() {
    warning = "";
    let random = Math.floor(Math.random() * 2) //Criando um número aleatório entre 2 1 e 0
    player = (random===0) ? 'x': 'o'; 

    for (let i in square){
        square[i] = ''; 
    }
    playing = true;
   
    renderSquare();
    renderInfo();
}

function renderSquare(){
    //Teste para ver se está rolando
    // for(let i in square){
    //     console.log("item ", i)
    // }

    for(let i in square){
        let item = document.querySelector(`idv[data-item]=${i}`)//lembrando que aqui o i é a1, a2, a3...
        if(square[i] !== ''){
            item.innerHTML = SQUARE[i];
        }//Aqui o square[i] corresponde ao que está dentro de cada quadrado e se ele tiver algo dentro ele vai colocar dentro de novo
        //não é muito intuitivo não...
    }
}