console.log('it works');
const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#bada55';
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.lineWidth = 50;

let isDrawing = false;
let lastX = false;
let lastY =  false;
let hue = 0;


function draw(e){
    if(!isDrawing) return;
    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
}

function changeSize(){
    ctx.lineWidth = document.getElementById('size').value;
}

function changeColor(){
    ctx.strokeStyle = document.getElementById('color').value;
}

function changeHue(){
    ctx.strokeStyle = `hsl(${hue}, 100% ,  50%)`;
    hue++
    hue++
    hue++
    if(hue >= 360){
        hue = 0
    }    
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

