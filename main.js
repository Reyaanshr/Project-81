canvas = document.getElementById("OlympicCanvas");
ctx = canvas.getContext("2d");

ctx.beginpath();
ctx.strokestyle = "grey";
ctx.lineWidth = 3;
ctx.rect(150 , 143 , 430 , 200);
ctx.stoke();

ctx.beginpath();
ctx.strokestyle = "blue";
ctx.lineWidth = 5;
ctx.arc(200, 200, 40 , 0 , 2*Math.PI);
ctx.stoke();

ctx.beginpath();
ctx.strokestyle = "black";
ctx.lineWidth = 5;
ctx.arc(200, 200, 40 , 0 , 2 * Math.PI);
ctx.stoke();

ctx.beginpath();
ctx.strokestyle = "red";
ctx.lineWidth = 5;
ctx.arc(200, 200, 40 , 0 , 2 * Math.PI);
ctx.stoke();

ctx.beginpath();
ctx.strokestyle = "yellow";
ctx.lineWidth = 5;
ctx.arc(200, 200, 40 , 0 , 2 * Math.PI);
ctx.stoke();

ctx.beginpath();
ctx.strokestyle = "green";
ctx.lineWidth = 5;
ctx.arc(200, 200, 40 , 0 , 2 * Math.PI);
ctx.stoke();