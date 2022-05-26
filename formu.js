function comprobar(){
    if(validar()){
    }
    return false;
}

 
function validar(){
    let nom=document.querySelector("#nombre");
    let corr=document.querySelector("#Correo");
    let asu=document.querySelector("#asunto");
    let men=document.querySelector("#mensaje");
    let mg=document.getElementsByName("meg");
    let la=document.getElementsByName("cam");
    let res=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let lis=[];
    let errorlist=document.querySelector("#residuo");
    let inp=document.querySelectorAll("input");
    for(i=0;i<inp.length;i++){
        inp[i].className="normal";
    }
    men.className="normal";
    la[0].className="nomal";
    la[1].className="nomal";
    if(nom.value.trim()==''){
        lis.push("Nombre obligatorio");
        nombre.className='incorrecto';
    }
    if(!res.test(corr.value)){
        lis.push("Correo obligatorio");
        corr.className='incorrecto';
    }
    if(asu.value.trim()==''){
        lis.push("Asunto obligaorio");
        asu.className='incorrecto';
    }
    if(men.value==''){
        lis.push("Mensaje obligatorio");
        men.className='incorrecto';
    }
    if(!mg[0].checked && !mg[1].checked){
        lis.push("Debe indicar si le gusta");
        la[0].className='formg';
        la[1].className='formg';
    }
    errorlist.innerHTML="";
    for(i=0;i<lis.length;i++){
        let li=document.createElement("li");
        li.innerHTML=lis[i];
        errorlist.appendChild(li);
    }
    return false;
}