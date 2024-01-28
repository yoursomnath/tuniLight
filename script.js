let c = document.getElementById("canvas");
let ctx = c.getContext('2d');

h = c.height = window.innerHeight;
w = c.width = window.innerWidth;
c.style.background = "black";

function ranColor(){
  let r = Math.floor(Math.random()*255);
  let g = Math.floor(Math.random()*255);
  let b = Math.floor(Math.random()*255);

  return `rgb(${r},${g},${b})`;
}



function creat() {

  for(let i = 10; i<= w; i+=30) {
    for(let j = 10; j<=h; j+=30) {
      let clr = ranColor()
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 5;
      ctx.shadowColor = clr;
      snowSize = Math.floor(Math.random()*5);
      ctx.beginPath();
      ctx.fillStyle = clr;
      ctx.arc(i,j,snowSize,0,Math.PI*2);
      ctx.fill()
    }
  }
}

let i = 0;
function draw(){
  setInterval(()=>{
    ctx.clearRect(0,0,w,h);
    creat();
  },100)
}

draw();