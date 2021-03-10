var mouseevent = "empty";
var lst_position_of_x, last_position_of_y;

canvas = document.getElementById("mycanvas");
ctx = canvas.getcontext("2d");

color= "black" ;
width_of_line=1;
canvas.addeventlistener("mousedown", my_mousedown );
function my_mousedown(e) {
    color = documnet.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    mouseevent = "mouseDown" ;
}
canvas.addeventlistener("mousemove", my_mousemove);
function my_mousemov(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft ;
    current_psition_of__mouse_y = e.clientY - canvas.offsetTop ;

    if (mouseevent == "mouseDown") {
        ctx.beginpath();
        ctx.color = color ;
        ctx.linewidth = width_of_line ;

        console.log("last position of x and y cordinates =");
        console.log(" x = "+ last_position_of_x + " y = " + last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x,current_psition_of__mouse_y);
        ctx.stroe();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_psition_of__mouse_y ;
}

canvas.addeventlistener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseevent = "mouseUp" ;
}

canvas.addeventlistener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseevent = "mouseleave" ;
}

function cleararea() {
    ctx.clearRect(0,0,ctx.canvas.width , ctx.canvas.height);
}