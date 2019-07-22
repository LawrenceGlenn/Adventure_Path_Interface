
document.addEventListener("DOMContentLoaded", (event) => {

// Make the DIV element draggable:
var elements = document.getElementsByClassName("drag");
for(var i=0; i<elements.length; i++) {
    console.log(i);
    console.log(elements[i]);
    dragElement(elements[i]);
}

function dragElement(elmnt) {
    console.log(elmnt);
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "spot")) {
    console.log(elmnt.id + "spot");
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "spot").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}  
    var txtFile = new XMLHttpRequest();
    var allText = "file not found";
    txtFile.open("GET", '/text/A1a.txt', true);
    txtFile.send(null);

    txtFile.onreadystatechange = function () {
            allText = txtFile.responseText;
            allText = allText.split("\n").join("<br>");
        
console.log(txtFile);
        document.getElementById('sidebar').innerHTML = allText;
    }
  function loadFile(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
  return result;
}

});