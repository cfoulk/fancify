const btn = document.querySelector('button');
const btn2 = document.getElementById("button 2");

const slt = document.getElementById("slt");


btn.onclick = function() {
    //alert("Hello, world!");
    document.getElementById("mybox").style.fontSize = "24px";
}

btn2.onclick = function() {
    alert("Radio button");
}


function changeBox() {
    document.getElementById("mybox").style.fontWeight = "bold";
    document.getElementById("mybox").style.textDecoration = "underline";
    document.getElementById("mybox").style.color = "blue";
}