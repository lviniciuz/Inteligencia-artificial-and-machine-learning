// Carregar a pagina e depois o Js nesse comando window onload = function(){}
// window.onload = function() {
// const canvas = document.getElementById('gameCanvas');
// const ctx = canvas.getContext("2d");



//----------------------------------
//Aula passada⭐⭐⭐
// Criar quadrado 
//ctx.fillStyle = "green";
//ctx.fillRect(10, 10, 50, 50);


// começo comentário

// // Criar uma função
// function geraQuadrado(x, y, largura, cor){
//     ctx.fillStyle = cor;
//     ctx.fillRect(x, y, largura, largura);
// }
// //
// //let cor = "#934399";
// //let x = 100;
// //let y = 200;
// //let largura = 50;
// //geraQuadrado(x, y, largura, cor)

// //função para criar e reproduzir quadrados
// function desenharQuadrados() {
//     const tamanhoQuadrado = 50;
//     const distancia = 5;
//     const larguraCanvas = canvas.width;
//     let x = 0;
//     while (x + tamanhoQuadrado <= larguraCanvas){
//         geraQuadrado(x, 0, tamanhoQuadrado, '#000') ;
//         x += tamanhoQuadrado + distancia;
//     }
//     }
// desenharQuadrados();



// //---------------------------------

// function geraCirculos(){
// ctx.beginPath();
// ctx.arc(250,100,50,0,2 * Math.PI);
// ctx.fillStyle = "#00FF00";
// ctx.fill();
// ctx.closePath();
// }

// function desenharCirculos() {
//     const tamanhoCirculo = 50;
//     const distancia = 5;
//     const larguraCanvas = canvas.width;
//     let x = 0;
//     while (x + tamanhoCirculo <= larguraCanvas){
//         geraQuadrado(x, 0, tamanhoCirculo, '#000') ;
//         x += tamanhoCirculo + distancia;
//     }
    
// desenharCirculos();

// }

// }

// final comentário
//Aula passada final
//----------------------------------

//Aula 13-09 ⭐⭐⭐

//let x = 0;
//let y = 0;
//const squareSize = 50;
//const speed = 50;

//function drawSquare() {
//Limpa o canvas
 //   ctx.clearRect(0, 0, canvas.width, canvas.height) ;

//Desenha o quadrado
  //  ctx.fillStyle = '#ff0000';
  //  ctx.fillRect(x, y, squareSize, squareSize);
  //  }   


 //   function updatePosition() {
    //    x += speed;
        //Se atingir as bordas, reseta a posição
    //    if (x + squareSize > canvas.width) {
   //         x = 0;
   //     }


//         function gameLoop() {
//             updatePosition();
//             drawSquare();
//             requestAnimationFrame(gameLoop);
//         }

//         // Inicia o loop de animação
//         gameLoop()

//     }
// //----------------------------------
// tipos de variáveis
// let
// const
// var
//----------------------------------

//}

function insertSquare(){
    const canvas = document.getElementById('myCanvas') ;
    const ctx = canvas.getContext('2d');

    const squareSize = 50;

    const x = Math.random() * (canvas.width - squareSize);
    const y = Math.random () * (canvas.height - squareSize);

    ctx.fillStyle = 'random'; //Cor do quadro
    ctx.fillRect(x, y, squareSize, squareSize);
}