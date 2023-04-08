console.log("funciona")
const contenedorHTML = document.getElementById("contenedor")

fetch("./Js/database.json")
    .then(response => response.json())
    .then(data => {
        for(producto of data){
            contenedorHTML.innerHTML += `
            <div>
                <img class="imagen" src=${producto.imagen} alt="imagen de notebook HP-15">
            </div>
            <div class="card">
                <h2>${producto.nombre}</h2>
                
            </div>
            `
        }
    })