var siguiente=0;
img=new Array
img[0]="pag_info/historia/islatesoro.jpg"
img[1]="pag_info/historia/jungletaitei.jpg"
img[2]="pag_info/historia/astro_boy.jpg"
function cambi(){
    if(siguiente==2){
        siguiente=0;
    }else if(siguiente<2){
        siguiente+=1;
    }
    nombreObras();
    document.muestras.src=img[siguiente];
    return true;
}
let temporizador=setInterval(cambi,3000)
function nombreObras(){
    let li=document.createElement("li");
    let ul=document.querySelector("#creacion");
    let nom;
    ul.innerHTML="";
    switch(siguiente){
        case 0:
            nom="Nueva isla del tesoro";
            break;
        case 1:
            nom="Jungle Taitei";
            break;
        case 2:
            nom="Astroboy";
            break;
    }
    li.innerHTML=nom;
    if(siguiente>0){
        ul.className='nom1'
        ul.appendChild(li);
    }else{
        ul.className='nom'
        ul.appendChild(li);
    }
}