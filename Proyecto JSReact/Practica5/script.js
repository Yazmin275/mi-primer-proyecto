const input = document.getElementById("tarea");
const btnAgregar = document.getElementById("agregar");
const btnFiltrar = document.getElementById("filtrar");
const lista = document.getElementById("lista");

let tareas = [];
const mostrarTareas = (listaDeTareas) => {
    lista.innerHTML="";
    listaDeTareas.map(tarea=>{
            lista.innerHTML +=`<li>${tarea}</li>`;    
    });
}

function mostrarTareas2(tareas)
{
    lista.innerHTML="";
    tareas.map(tarea =>
        {
            lista.innerHTML +=`<li<${tarea}>/li>` 
    
    });
}

btnAgregar.addEventListener("click",() => {
       let nuevaTarea = input.value;
       tareas.push(nuevaTarea);
       mostrarTareas(tareas);
});


btnFiltrar.addEventListener("click",() => { 
    let tareasLargas = tareas.filter(tarea => tarea.length > 8);
    mostrarTareas(tareasLargas);
});


