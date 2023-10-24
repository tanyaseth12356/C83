var mouseEvent="empty";
var last_postision_of_x, last_postision_of_y;
var current_positsion_of_touch_x, current_positsion_of_touch_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="Purple";
width_of_the_line=2;
var width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 100;

if(width < 992)
{
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart",my_touchstart);

function my_touchstart(e){
console.log("my_touchstart");
last_postision_of_x = e.touches[0].clientX - canvas.offsetLeft;
last_postision_of_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove",my_touchmove);

function my_touchmove(e){
current_positsion_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
current_positsion_of_touch_y = e.touches[0].clientY - canvas.offsetTop;



ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_the_line;

console.log("Last positsion of x and y coordinates = ");
console.log("x = " + last_postision_of_x +"y = " +last_postision_of_y);
ctx.moveTo(last_postision_of_x, last_postision_of_y);

console.log("Current positsion of x and y coordinates = ");
console.log("x = " + current_positsion_of_touch_x +"y = " + current_positsion_of_touch_y);
ctx.lineTo(current_positsion_of_touch_x, current_positsion_of_touch_y);
ctx.stroke();

last_postision_of_x = current_positsion_of_touch_x;
last_postision_of_y = current_positsion_of_touch_y;
}