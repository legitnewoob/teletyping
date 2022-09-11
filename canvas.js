const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.style.position = 'absolute';

let painting = false;

canvas.width = 500;
canvas.height = 500;

function animate(e) {
   if (!painting) return;

   context.lineWidth = 10;
   context.lineCap = 'round';

   context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
   context.stroke();
}

window.addEventListener('mousedown', () => {
   painting = true;
})

window.addEventListener('mouseup', () => {
   painting = false;
   context.beginPath();
})

window.addEventListener('mousemove', animate);
