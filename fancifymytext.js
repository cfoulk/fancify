const btn = document.querySelector('button');
const btn2 = document.querySelector('button 2');

btn.onclick = function() {
    //alert("Hello, world!");
    document.getElementById("mybox").style.fontSize = "24px";
}

btn2.onclick = function() {
    alert("Radio button");
}