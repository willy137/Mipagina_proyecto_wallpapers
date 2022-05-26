var cant=0;
function modoOscuro(){
    let bo=document.body;
    bo.className='modo_oscuro';
    cant+=1;
    if(cant==2){
        bo.className='modo_normal';
        cant=0;
    }
}