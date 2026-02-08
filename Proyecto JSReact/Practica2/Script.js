var nombre = 
nombre = "yazmin zuñiga";
let edad = 31;
let anioNacimiento;
const ciudad = "San Jose";
let activo = true;

anioNacimiento= 2026 - edad; 

let perfil = `
<p>Nombre: ${nombre}</p>
<p>Edad: ${edad}</p>
<p>Ciudad: ${ciudad}</p>
<p>Activo: ${activo}</p>
<p>Año: ${anioNacimiento}</p>
`;
nombre = "Clase 3"
console.log(nombre);
document.getElementById("perfil").innerHTML = perfil;

