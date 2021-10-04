document.getElementById('temas').addEventListener("change",temaSeleccionado);
function temaSeleccionado(){
    document.getElementById("numcaj").value=null;
    document.getElementById("colorcaj").value=null;
    capas=document.getElementsByTagName("article");
    for(i=0; i<capas.length;i++){
        capas[i].style.display="none";
    }
    var articulo=document.getElementById("temas").value;
    if(articulo!=null){
        document.getElementById("bienv").style.display="none";
        document.getElementById("mostrarresultados").style.display="none";
    }
    document.getElementById(articulo).style.display="block";
}
function mostrarCajas(){
    var numcajas=parseInt(document.getElementById("numcaj").value);
    var colorcaj=document.getElementById("colorcaj").value;
    var tipoborde=document.getElementById("tipoborde").value
    for(i=0; i<numcajas; i++){
        var mostrar= document.getElementById("mostrarcajas")
        var caj=document.createElement("div");
        caj.innerHTML="&nbsp&nbsp&nbsp&nbsp&nbsp";
        caj.style.display="inline-block";
        caj.style.margin="8px 8px";
        switch (colorcaj){
            case 'ro': caj.style.backgroundColor='red';
                break;
            case 'az': caj.style.backgroundColor='blue';
                break;
            case 'am': caj.style.backgroundColor='yellow';
                break;
            case 've': caj.style.backgroundColor='green';
                break;   
            case 'vi': caj.style.backgroundColor='violet';
                break;
        }
        switch (tipoborde){
            case 'so': caj.style.border='solid';
                break;
            case 'pu': caj.style.border='dotted';
                break;
            case 'li': caj.style.border='dashed';
                break;
            case 'do': caj.style.border='double';
                break;
        }
        mostrar.appendChild(caj);
    }
}
function mostrarResultados(){
    document.getElementById("preguntas_encuesta").style.display="none";
    document.getElementById("mostrarresultados").style.display="block";
    document.getElementById("titulo_resp").innerHTML="Aquí se muestran tus respuestas<br>";
    var preg_1="1)¿Qué tipo de videojuegos prefiere?";
    var resp_1=document.getElementById("resp_1").value;
    var preg_2="2)¿Cuántas horas a la semana juega videojuegos?";
    var resp_2=document.getElementById("resp_2").value;
    var preg_3="3)¿Qué sistema de videojuegos prefiere?";
    var resp_3=document.getElementById("resp_3").value;
    var preg_4="4)¿Con quién prefiere jugar videojuegos?";
    var resp_4=document.getElementById("resp_4").value;
    var preg_5="5)¿Cuánto dinero gasta al mes en videojuegos?";
    var resp_5=document.getElementById("resp_5").value;
    document.getElementById("pr1").innerHTML=preg_1+"<br>"+resp_1;
    document.getElementById("pr2").innerHTML=preg_2+"<br>"+resp_2;
    document.getElementById("pr3").innerHTML=preg_3+"<br>"+resp_3;
    document.getElementById("pr4").innerHTML=preg_4+"<br>"+resp_4;
    document.getElementById("pr5").innerHTML=preg_5+"<br>"+resp_5;
}

document.getElementById('reservacion').addEventListener("change",function(){mesas();});
document.getElementById('mostrar').addEventListener("click",function(){mostrar();});

let mesas=function(){
    let nm=document.getElementById('reservacion').value;
    let contenido='';
    for(i=0; i<nm; i++){
        contenido+='<h3>mesa: '+(i+1)+'</h3>'+
        '<h4>Número de comensales</h4>'+
        'Adultos: <input type="text" name="adultos" id="adultos'+i+'"/><br>'+
        'Menores: <input type="text" name="menores" id="menores'+i+'"/><br><hr>';
    }
    document.getElementById("mesas").innerHTML=contenido;
}

let mostrar=function(){
    let mesas=document.getElementById("mesas").innerHTML;
    localStorage.setItem('mesa',mesas);
    let cAdultos=document.getElementsByName("adultos");
    let vAdultos=[];
    for (let i=0; i<cAdultos.length; i++){
        vAdultos[i]=cAdultos[i].value;
        localStorage.setItem('vAdultos', vAdultos);
    }
    let cMenores=document.getElementsByName("menores");
    let vMenores=[];
    for (let i=0; i<cMenores.length; i++){
        vMenores[i]=cMenores[i].value;
        localStorage.setItem('vMenores', vMenores);
    }
    window.open("DatosReservacion.html");
}
document.getElementById('tipo_tar').addEventListener("change",tipoTarSeleccionado);
document.getElementById('bcg_col').addEventListener("change",colorFondo);
document.getElementById('mostrar_tarfel').addEventListener("click",function(){mostrarTarjeta();});

function tipoTarSeleccionado(){
    capasImg=document.getElementsByName("tar_img");
    for(i=0; i<capasImg.length;i++){
        capasImg[i].style.display="none";
    }
    var imgtarjeta=document.getElementById("tipo_tar").value;
    document.getElementById(imgtarjeta).style.display="block";
}
var imgTarjeta=function(nombreFoto){
    document.getElementById("Vista_Previa").src="img/"+nombreFoto+".png";
    let img_trj=document.getElementById("Vista_Previa_Img").innerHTML;
    localStorage.setItem('img_trj',img_trj);
}

function colorFondo(){
    var bcg_col=document.getElementById('bcg_col').value;
    document.getElementById('VistaPrevia').style.backgroundColor=bcg_col;
    localStorage.setItem('bcg_color',bcg_col);
}

function nombreEnvia(){
    var nom_e=document.getElementById('nombre_envia').value;
    var nom_e_color=document.getElementById('color_nombre_envía').value;
    document.getElementById('nombre_envia_texto').innerHTML=nom_e;
    document.getElementById('nombre_envia_texto').style.color=nom_e_color;
    document.getElementById('nombre_envia_texto').style.fontSize="40px";
    document.getElementById('nombre_envia_texto').style.fontFamily= "'Brush Script MT', cursive";
    localStorage.setItem('nom_e',nom_e);
    localStorage.setItem('nom_e_color',nom_e_color);
}

function saludoTexto(){
    var sal_tex=document.getElementById('saludo').value;
    var sal_tex_color=document.getElementById('color_saludo').value;
    document.getElementById('saludo_texto').innerHTML=sal_tex;
    document.getElementById('saludo_texto').style.color=sal_tex_color;
    document.getElementById('saludo_texto').style.fontSize="25px";
    document.getElementById('saludo_texto').style.fontStyle="cursive";
    localStorage.setItem('sal_tex',sal_tex);
    localStorage.setItem('sal_tex_color',sal_tex_color);
}
function cuerpoTexto(){
    var cuerpo_tex=document.getElementById('cuerpo_tex').value;
    cuerpo_tex=cuerpo_tex.replace(/\n/g,"<br/>");
    var clr_cuerpo_tex=document.getElementById('color_cuerpo_tex').value;
    document.getElementById('cuerpo_texto').innerHTML=cuerpo_tex;
    document.getElementById('cuerpo_texto').style.color=clr_cuerpo_tex;
    document.getElementById('cuerpo_texto').style.fontSize="23px";
    document.getElementById('cuerpo_texto').style.fontStyle="cursive";
    localStorage.setItem('cuerpo_tex',cuerpo_tex);
    localStorage.setItem('clr_cuerpo_tex',clr_cuerpo_tex);
}
let mostrarTarjeta=function(){
    window.open('TarjetaFelicitacion.html');
}