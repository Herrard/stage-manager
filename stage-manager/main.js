var dragValue;

function move(id){
    var element = document.getElementById("amp");
    element.style.position = "absolute";
    element.onmousedown = function (){
        dragValue = element;
    }
}

document.onmouseup = function(e){
    dragValue = null;
}

document.onmousemove = function(e){
    var x = e.pageX;
    var y = e.pageY;

    dragValue.style.left = x + "px";
    dragValue.style.top = y + "px";
}

function leaveScreen() = document.onmouseleave()
