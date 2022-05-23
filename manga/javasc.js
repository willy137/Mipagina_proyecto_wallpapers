var cambiar=0;
imagenes=new Array
imagenes[0]="muestra/jujutsu-kaisen_3840x2160_xtrafondos.jpg"
imagenes[1]="muestra/bleach.jpg"
imagenes[2]="muestra/Fate.jpg"
imagenes[3]="muestra/hyouka.jpg"
imagenes[4]="muestra/steins gate.jpg"
let tiempo=setInterval(CarruselS,4000);
function CarruselS() {
    if (cambiar<4) {
        cambiar+=1;
    }else if(cambiar==4){
        cambiar=0;
    }
    document.galeria.src=imagenes[cambiar];
    return true;
}
function CarruselA(){
    if (cambiar>0) {
        cambiar-=1;
    }else if(cambiar==0){
        cambiar=4;
    }
    document.galeria.src=imagenes[cambiar];
    return true;
}

