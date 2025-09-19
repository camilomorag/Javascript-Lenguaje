const productos = [
    { nombre: "Perfume", precio: 100, categoria: "Fragancias" },
    { nombre: "Crema", precio: 80, categoria: "Cuidado Facial" },
    { nombre: "Labial", precio: 40, categoria: "Maquillaje" },
    { nombre: "Sombras", precio: 60, categoria: "Maquillaje" }
];
const contenedor = document.getElementById("productos-container")


for(const producto of productos){
    const div= document.createElement("div")
    div.classList.add("producto")

    div.innerHTML=`
<h2> Producto ${producto.nombre}</h2>
<p> Categoria: ${producto.categoria}</p>
  <p class="precio">$${producto.precio}</p>
`;

contenedor.appendChild(div)
}

