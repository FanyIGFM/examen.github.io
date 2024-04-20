window.onscroll = function(){

    var posicion = window.pageYOffset || document.documentElement.scrollTop;

    var elemento1 = document.getElementById("vid");
    var elemento2 = document.getElementById("electricidad");

    elemento1.style.bottom = posicion * 0.2 + "px";
    elemento2.style.top = posicion * 0.1 + "px";
    
}
