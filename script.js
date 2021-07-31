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
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', itemClick)
})

function itemClick(event){
    
    //console.log(event.target) Ele printa a div que foi clicada
    
    let item = event.target.getAttribute('data-item');
    //console.log("Clicou em " + item);
    if(square[item]===''){
        square[item]=player;
      renderSquare();
      togglePlayer()
    }
}


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
   // Teste para ver se está rolando
    // for(let i in square){
    //     console.log("item ", i)
    // }

    for(let i in square){
      
            let item = document.querySelector(`div[data-item=${i}]`)//lembrando que aqui o i é a1, a2, a3...
            item.innerHTML = square[i];
        }//Aqui o square[i] corresponde ao que está dentro de cada quadrado e se ele tiver algo dentro ele vai colocar dentro de novo
        //não é muito intuitivo não...

        checkWinnerFor();//Troquei a função por checkWinner só para ir direto para a função sem passar pela checkGame
    
}

function renderInfo(){
    document.querySelector('.vez').innerHTML = player;
    document.querySelector('.resultado').innerHTML = warning;
}

function togglePlayer(){
   player =  (player==='x' )? 'o':'x';
   renderInfo();
}

function checkGame(){
    if(checkWinnerFor('x')){
        warning = 'O "x" venceu!!'
        playing = false;
    }else if(checkWinnerFor('o')){
        warning = 'O "o" venceu!!'
        playing = false;
    }else if(isFull()){
        warning = 'Deu empate!'
        playing = false;
    }
}

function checkWinnerFor(){
    let pos = [
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',

        'a1,b1,c1',
        'a2,b2,c2',
        'a3,b3,c3',

        'a1,b2,c3',
        'c1,b2,a3',
        
    ];  

    for(let w in pos){
        let pArray = pos[w].split(',');
        console.log(pArray)  
    }
    /* w é o indice, pos é o array para ver o array pos com os indices
    console.log(pos[w]) pArray vai ser cada indice do pos e a cada rodada
    ele vai ser subscrito. Ele é uma ferramenta de comparação. A primeira rodada
    ele vai ser [a1, a2, a3] que é diferente de 'a1,a2,a2'
    */

}
function isFull(){

}