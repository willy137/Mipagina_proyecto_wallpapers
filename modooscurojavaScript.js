var cant=0;
function modoOscuro(){
    document.body.style.background='#a5ebe8';
    cant+=1;
    if(cant==2){
        document.body.style.background='#3a3535';
        cant=0;
    }
}