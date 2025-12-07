const c = document.getElementById("life");
const ctx = c.getContext("2d");

function resize(){
    c.width = innerWidth;
    c.height = innerHeight;
}
resize();
addEventListener("resize", resize);

function draw(){
    ctx.fillStyle = "lime";
    ctx.fillRect(Math.random()*c.width, Math.random()*c.height, 6, 6);
    requestAnimationFrame(draw);
}
draw();
