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


function changeBox(x) {
    if(x == "BoringBetty"){
        document.getElementById("mybox").style.fontWeight = "normal";
        document.getElementById("mybox").style.textDecoration = "none";
        document.getElementById("mybox").style.color = "black";
    }
    if(x == "FancySchmancy"){
        document.getElementById("mybox").style.fontWeight = "bold";
        document.getElementById("mybox").style.textDecoration = "underline";
        document.getElementById("mybox").style.color = "blue";
    }
    
}