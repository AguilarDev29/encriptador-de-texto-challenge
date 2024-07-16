let mediaqueryTablet = window.matchMedia("(width <= 768px)");
let mediaquerymedium = window.matchMedia("(width > 425px) and (width <= 768px)");
let mediaqueryphone = window.matchMedia("(width <= 425px)");

function encriptarTexto() {
    let mensajeEncriptado = "";
    let imagen = document.querySelector(".img-gato");
    let parrafo = document.querySelector(".parrafo");
    let btnCopiar = document.querySelector(".btn-copiar");
    let campoTextoEncriptado = document.querySelector(".mensaje-encriptado");
    let texto = document.querySelector("#texto").value;    
    let contenedorMensajeEncriptado = document.querySelector(".contenedor__mensaje-encriptado");
    if(texto == ""){
        if(mediaqueryphone.matches || mediaquerymedium.matches || mediaqueryphone.matches){
            imagen.style.display = "none";
            return;
        }
        imagen.style.display = "flex";
        parrafo.style.display = "flex";
        campoTextoEncriptado.innerHTML = "Ningún mensaje fue encontrado";
        return;
    }
    else {
        for(let i = 0; i < texto.length; i++){
            if ((texto[i] >= "\x61" && texto[i] <= "\x7A") || (texto[i] >= "\x20" && texto[i] <= "\x21")){

                switch(texto[i]){

                    case "a":
                        mensajeEncriptado += "ai";
                        break;
                    case "e":
                        mensajeEncriptado += "enter";
                        break;
                    case "i":
                        mensajeEncriptado += "imes";
                        break;
                    case "o":
                        mensajeEncriptado += "ober";
                        break;
                    case "u":
                        mensajeEncriptado += "ufat";
                        break;
                    default:
                        mensajeEncriptado += texto[i];
                        break;
                }
            }
            else {
                alert("El texto solo puede contener letras en minúsculas.");
                return;
            }
        } 

        if(mediaqueryTablet.matches){
            contenedorMensajeEncriptado.style.marginTop = "28rem";
            
        }else if(mediaquerymedium.matches){
            contenedorMensajeEncriptado.style.marginTop = "20rem";
        }
        else if(mediaqueryphone.matches)
            contenedorMensajeEncriptado.style.marginTop = "20rem";

        document.querySelector("#texto").value = "";
        imagen.style.display = "none";
        parrafo.style.display = "none";
        campoTextoEncriptado.style.fontSize = "1.5rem";
        campoTextoEncriptado.innerHTML = mensajeEncriptado;
        btnCopiar.style.display = "flex";
    }
}



function desencriptarTexto() {
    let texto = document.querySelector("#texto").value;
    let imagen = document.querySelector(".img-gato");
    let parrafo = document.querySelector(".parrafo");
    let btnCopiar = document.querySelector(".btn-copiar");
    let campoTextoEncriptado = document.querySelector(".mensaje-encriptado");
    let contenedorMensajeEncriptado = document.querySelector(".contenedor__mensaje-encriptado");

    if(texto == ""){
        if(mediaqueryphone.matches || mediaquerymedium.matches || mediaqueryphone.matches){
            imagen.style.display = "none";
            return;
        }
        imagen.style.display = "flex";
        parrafo.style.display = "flex";
        campoTextoEncriptado.innerHTML = "Ningún mensaje fue encontrado";
        return;
    }else {
        let imagen = document.querySelector(".img-gato");
        let parrafo = document.querySelector(".parrafo");
        let campoTextoEncriptado = document.querySelector(".mensaje-encriptado");
        let texto = document.querySelector("#texto").value;
        texto = texto.replaceAll("ai", 'a');
        texto = texto.replaceAll("enter", 'e');
        texto = texto.replaceAll("imes", 'i');
        texto = texto.replaceAll("ober", 'o');
        texto = texto.replaceAll("ufat", 'u');


        if(mediaqueryTablet.matches)
            contenedorMensajeEncriptado.style.marginTop = "28rem";
        else if(mediaquerymedium.matches)
            contenedorMensajeEncriptado.style.marginTop = "20rem";
        else if(mediaqueryphone.matches)
            contenedorMensajeEncriptado.style.marginTop = "20rem";
        
            imagen.style.display = "none";
            parrafo.style.display = "none";
            document.querySelector("#texto").value = "";
            campoTextoEncriptado.style.fontSize = "1.5rem";
            campoTextoEncriptado.innerHTML = texto;
            btnCopiar.style.display = "flex";
        
        
    }
    
}


function copiarTexto() {
    let contenedorMensajeEncriptado = document.querySelector(".contenedor__mensaje-encriptado");
    let btnCopiar = document.querySelector(".btn-copiar");
    let texto = document.querySelector(".mensaje-encriptado").innerHTML;

    if(texto.value == "Ningún mensaje fue encontrado")
        return;
    else{
        navigator.clipboard.writeText(texto).then(() => {
            console.log('Texto copiado al portapapeles')
        }).catch(err => {console.error('Error al copiar al portapapeles:', err)})
        document.querySelector(".mensaje-encriptado").innerHTML = "";
        btnCopiar.style.display = "none";
        if(mediaqueryTablet.matches || mediaquerymedium.matches){
            contenedorMensajeEncriptado.style.padding = "0 5rem";
            contenedorMensajeEncriptado.style.marginTop = "20rem";
        }
            else if(mediaqueryphone.matches)
                contenedorMensajeEncriptado.style.marginTop = "15rem";
            else return;
    }
}
