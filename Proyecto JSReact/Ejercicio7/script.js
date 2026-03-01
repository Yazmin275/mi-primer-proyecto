const formulario = document.querySelector("#formulario");
const nombreInput = document.querySelector("#nombre");
const emailInput  = document.querySelector("#email");
const edadInput = document.querySelector("#edad")

const errorNombre = document.querySelector("#errorNombre");
const errorEmail = document.querySelector("#errorEmail");
const errorEdad = document.querySelector("#errorEdad");

const mensaje = document.querySelector("#mensaje");
const jsonOutput = document.querySelector("#jsonOutput");

nombreInput.addEventListener("keyup", () => {
if(nombreInput.value.length<3) 
    {
       errorNombre.textContent= "Minimo tres caracteres.";
       nombreInput.classList.add(invalido);
       nombreInput.classList.remove("valido");
    } else
        {
          errorNombre.textContent= "";
       nombreInput.classList.add("valido");
       nombreInput.classList.remove("invalido");
        }     
});


edadInput.addEventListener(blur,()=>{
  if(edadaInput.value<18) 
    {
       errorEdad. textContent ="Debes ser mayor edad"
       edadInput.classList.add("invalido");
       eadaInput.classList.remove("valido");
    }   
     else
     {
        errorEdad. textContent =""
       edadInput.classList.add("valido");
       eadaInput.classList.remove("invalido");
     }
});


formulario.addEventListener("submit",(e) =>{
    e.preventDefault();

    if(nombreInput.value ==="" ||  emailInput.value ==="" || edadlInput.value ==="") 
        {
           mensaje.texcontent = "Todos los campos son obligatorios"
           mensaje.style.color = "red";
           return;
        }
        let usuario = {
          nombre: nombreInput.value, 
          email: emailInput.value,
          edad: edadInput.value,

        };
        let usuarioJSON = JSON.stringify(usuario);
        jsonOutput.textcontent = usuarioJSON;
        mensaje.textcontent ="registro exitoso";
        mensaje.style.color = "green";
});



