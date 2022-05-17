var cambiar=0;
function CarruselS() {
    imagenes=new Array
        imagenes[0]="muestra/jujutsu-kaisen_3840x2160_xtrafondos.jpg"
        imagenes[1]="muestra/bleach.jpg"
        imagenes[2]="muestra/Fate.jpg"
        imagenes[3]="muestra/hyouka.jpg"
        imagenes[4]="muestra/steins gate.jpg"
    if (cambiar==5) {
        cambiar=0;
    }
    cambiar+=1;
    document.galeria.src=imagenes[cambiar];
    return true;
}
function CarruselA(){
    imagene=new Array
    imagene[0]="muestra/jujutsu-kaisen_3840x2160_xtrafondos.jpg"
    imagene[1]="muestra/bleach.jpg"
    imagene[2]="muestra/Fate.jpg"
    imagene[3]="muestra/hyouka.jpg"
    imagene[4]="muestra/steins gate.jpg"
    if (cambiar>0) {
        cambiar-=1;
    }else if(cambiar==0){
        cambiar=4;
    }
    document.galeria.src=imagene[cambiar];
    return true;
}
alert("hola2");