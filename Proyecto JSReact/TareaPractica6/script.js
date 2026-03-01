
const inputProducto = document.getElementById("producto");
const btnAgregar = document.getElementById("btnAgregar");
const inputBuscador = document.getElementById("buscador");
const btnBuscar = document.getElementById("btnBuscar");
const btnLimpiar = document.getElementById("btnLimpiar");
const listaUl = document.getElementById("lista");

let listaDeCompras = [];


const mostrarEnPantalla = (arreglo) => {
    listaUl.innerHTML = ""; 
    

    arreglo.map(item => {
        const li = document.createElement("li");
        li.textContent = item;
        listaUl.appendChild(li);
    });
};


btnAgregar.addEventListener("click", () => {
    const nuevo = inputProducto.value.trim();

    if (nuevo === "") return;

    
    const existe = listaDeCompras.find(p => p.toLowerCase() === nuevo.toLowerCase());

    if (existe) {
        alert("Este producto ya está en la lista.");
    } else {
        listaDeCompras.push(nuevo);
        inputProducto.value = "";
        mostrarEnPantalla(listaDeCompras);
    }
});

btnBuscar.addEventListener("click", () => {
    const termino = inputBuscador.value.toLowerCase();
    
    
    const resultados = listaDeCompras.filter(p => 
        p.toLowerCase().includes(termino)
    );

    mostrarEnPantalla(resultados);
});


btnLimpiar.addEventListener("click", () => {
    inputBuscador.value = "";
    mostrarEnPantalla(listaDeCompras);
});