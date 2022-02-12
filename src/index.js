/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
 var vreproductor = document.getElementById("reproductor");
 var origen = vreproductor.getElementsByTagName("source")[0];
 var vbtnReproducir = document.getElementById("btnReproducir");
 var vbtnPausa = document.getElementById("btnPausar");
console.log('Happy hacking :)')

vreproductor.load();
vbtnReproducir.addEventListener("click",reproducir);
vbtnPausa.addEventListener("click",pausa);

function reproducir(){
    vreproductor.play();
}
function pausa(){
    vreproductor.pause();
} 
