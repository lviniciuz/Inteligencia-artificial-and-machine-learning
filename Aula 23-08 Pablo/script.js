var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext ("2d");
//Quadrado completo
ctx.fillStyle = "#000";
ctx.fillRect (50, 50, 100, 100);
//Quadrado sem preenchimento
ctx.beginPath();
ctx.rect(50, 200, 100, 100);
ctx.strokeStyle = "#000000";
ctx.stroke();
ctx.closePath();
//Circulo completo
ctx.beginPath();
ctx.arc(250, 100, 50, 0, 2 * Math.PI)
ctx.fillStyle = "#000000";
ctx.fill();
ctx.closePath();
//Circulo sem preenchimento
ctx.beginPath();
ctx.arc(250, 250, 50, 0, 2 * Math.PI)
ctx.strokeStyle = "#000000";
ctx.stroke();
ctx.closePath();
//Circulo pela metade
ctx.beginPath();
ctx.arc(250, 400, 50, 0, 1 * Math.PI)
ctx.fillStyle = "#000000";
ctx.fill();
ctx.closePath();
//Triangulo Completo
ctx.beginPath();
ctx.moveTo(400, 50);
ctx.lineTo(350, 150);
ctx.lineTo(450, 150);
ctx.fillStyle = "#000000";
ctx.fill();
ctx.closePath();
//Triangulo Só a borda
ctx.beginPath();
ctx.moveTo(400, 200);
ctx.lineTo(350, 300);
ctx.lineTo(450, 300);
ctx.lineTo(400, 200);
ctx.strokeStyle = "#000000";
ctx.stroke();
ctx.closePath();



