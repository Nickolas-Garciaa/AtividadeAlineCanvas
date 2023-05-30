const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
 
// Pe esquerdo 

ctx.beginPath();
ctx.fillStyle = "#FF0000";
ctx.arc(230, 570, 100, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();

// Pe direito
 
ctx.beginPath();
ctx.fillStyle = "#FF0000";
ctx.arc(510, 600, 80, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();

  // Corpo do Kirby
  ctx.beginPath();
  ctx.fillStyle = "#FFD1E8";
  ctx.arc(400, 400, 210, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
  
  ctx.beginPath();
  ctx.fillStyle = "#FFD1E8";
  ctx.arc(240, 210, 100, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "#FFD1E8";
  ctx.arc(600, 420, 100, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
  
  // Olhos
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(330, 330, 40, 0, 2 * Math.PI);
  ctx.arc(460, 330, 40, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();

 // Brilho dos olhos 
 ctx.beginPath();
 ctx.fillStyle = "blue";
 ctx.arc(330, 350, 12, 0, 2 * Math.PI);
 ctx.arc(460, 350, 12, 0, 2 * Math.PI);
 ctx.fill();
 ctx.closePath();

  // Pupila esquerda
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(330, 312, 20, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();

  // Pupila direita
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(460, 312, 20, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();

  // Bochechas rosadas
  ctx.beginPath();
  ctx.fillStyle = "#FFB6C1";
  ctx.arc(495, 412, 30, 0, 2 * Math.PI);
  ctx.arc(290, 412, 30, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();

  // Sorriso
  ctx.lineWidth='8';
  ctx.beginPath();
  ctx.arc(400, 412, 25, Math.PI* 0.9, Math.PI * 0.1, true);
  ctx.stroke();

 var h1 = document.getElementById("tex");
  var colors = ["red", "pink", "#DFFF00", "blue", "#DE3163"];
  var currentIndex = 0;
  
  function changeColor(){
      h1.style.backgroundColor = colors[currentIndex];
      currentIndex = (currentIndex + 1) % colors.length;
  }
  
  setInterval(changeColor, 1000)
  
