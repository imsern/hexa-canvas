const canvas1 = document.getElementById("canvas1");
const context = canvas1.getContext("2d");
let hue = 0;

canvas1.width = innerWidth;
canvas1.height = innerHeight;

window.addEventListener("resize", function () {
	canvas1.width = window.innerWidth;
	canvas1.height = window.innerHeight;
});

canvas1.width = 1200;
canvas1.height = 1600;

const mouse = {
	x: undefined,
	y: undefined,
};

function handleGlow() {
	context.fillStyle = "hsl(" + hue + ", 100%, 50%";
	context.beginPath();
	context.arc(mouse.x, mouse.y, 175, 0, Math.PI * 2);
	context.fill();
}

window.addEventListener("mousemove", function (event) {
	mouse.x = event.x;
	mouse.y = event.y;
	handleGlow();
});

function animate() {
	context.clearRect(0, 0, canvas1.width, canvas1.height);
	handleGlow();
	hue++;
	requestAnimationFrame(animate);
}
animate();
