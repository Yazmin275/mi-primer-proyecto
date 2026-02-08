const boton = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function()
{
    
    const nota = Number(document.getElementById("nota").value);

    
    resultado.innerHTML = "";


    if (nota >= 60) 
    {
        resultado.innerHTML = `
            <p>Promedio: ${nota}</p>
            <p>Estado: <strong>Aprueba</strong></p>
        `;
    } 
    else 
    {
        resultado.innerHTML = `
            <p>Promedio: ${nota}</p>
            <p>Estado: <strong>Reprueba</strong></p>
        `;
    }
});
