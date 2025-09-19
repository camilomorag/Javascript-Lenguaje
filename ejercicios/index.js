const productos = require('../JSON/productos.json');

console.log(productos);

for(let clave in productos){
    console.log(clave)
}

// ✅ 1. Mostrar todos los productos con su marca, nombre y precio (usa for + forEach)
for(let clave in productos){
    for(let i=0; i<productos[clave].length ;i++){
        console.log(`Marca : ${clave} , Nombre:${productos[clave][i].nombre}, Precio: ${productos[clave][i].precio}`)
    }
}

// ✅ 2. Filtrar todos los productos de la categoría "Maquillaje" sin importar la marca (usa filter)
for(let clave in productos){
    let filtro= productos[clave].filter(p=> p.categoria=="Maquillaje")
    console.log(filtro)
}
// ✅ 3. Mostrar los productos cuyo precio sea mayor a 30.000 (usa filter)
    console.log("\n")
    console.log(`Productos mayor a 30.000 `)
for (let clave in productos){
    let filtroPrecio= productos[clave].filter(p=> p.precio>30000);
    console.log(filtroPrecio)
}

// ✅ 4. Ordenar todos los productos por precio de mayor a menor (usa sort)
console.log("\n")
console.log("Productos de mayor a menor")
let nuevoArreglo=[];
for(let clave in productos){
    nuevoArreglo.push(...productos[clave])
}

let organizar= nuevoArreglo.sort((a,b)=> b.precio-a.precio);
console.log(organizar)

// ✅ 5. Obtener un ranking con los 3 productos más caros (usa sort + slice)
console.log("\n")
console.log("______TOP 3_________")
let top3= nuevoArreglo.slice(0,3);
console.log(top3)

// ✅ 6. Calcular el precio promedio de todos los productos (usa reduce)
let suma=0;
let contador=0;
for(let clave in productos){
    let cantidad= productos[clave].length;
    for(let i =0; i<productos[clave].length;i++){
        suma= suma+productos[clave][i].precio
        contador++
    }

}
let sumaPromedio= suma/contador;
console.log(`Promedio de los productos ${sumaPromedio}`)

// ✅ 7. Mostrar todas las categorías disponibles sin repetir (usa Set)
let categoriasDisponibles= new Set();

for(let clave in productos){
    productos[clave].forEach(p=>{
        categoriasDisponibles.add(p.categoria)
    })
}
console.log(`CATEGORIAS DISPONIBLES`)
console.log(categoriasDisponibles)

// ✅ 8. Mostrar cuántos productos hay por cada marca (usa for + .length)
for(let clave in productos){
    let cantidad=productos[clave].length;

    console.log(`${clave} tiene ${cantidad} disponibles`)
}

// ✅ 9. Mostrar cuántos productos hay en total (usa reduce o for)
let contadorProductos=0;
for(let clave in productos){
    for(let i = 0 ;i<productos[clave].length;i++){
        contadorProductos++
    }
}
console.log(`Hay ${contadorProductos} en total`)

// ✅ 10. Agrupar los productos por categoría (es decir, crear un nuevo objeto donde la clave sea la categoría y el valor, un array con los productos de esa categoría)

// ✅ 11. Mostrar el producto más barato de cada marca (usa for + reduce)
for(let clave in productos){
    let producto= productos[clave];
    let productoBarato= producto[0]

    for(let i  =0; i<producto.length;i++){
        if(producto[i].precio<productoBarato.precio){
            productoBarato=producto[i]
        }
    }
    console.log(`${clave} el producto de mas barato es : ${productoBarato.nombre}`)
}
// ✅ 12. Mostrar los nombres de todos los productos en mayúsculas (usa forEach o map)
for(let clave in productos){
    for(let i = 0; i<productos[clave].length;i++){
        console.log(`${productos[clave][i].nombre.toUpperCase()}`)
    }
}
// ✅ 13. Verificar si hay algún producto con precio menor a 10.000 (usa some)
for(let clave in productos){
   let filtro= productos[clave].some(p=>p.precio<10000);
   if(!filtro){
    console.log("No hay")
   }
}
// ✅ 14. Verificar si todos los productos cuestan menos de 100.000 (usa every)
for( let clave in productos){
    let productosCosto= productos[clave].every(p=> p.precio<100000)
    console.log(productosCosto)
}
// ✅ 15. Crear un nuevo array con solo los nombres y precios de los productos (usa map)
for(let clave in productos){
    const nuevoArreglo= productos[clave].map(p=>({
        nombre:p.nombre,
        precio:p.precio
    }))
    console.log(nuevoArreglo)
};

// ✅ 16. Mostrar solo los nombres de los productos cuya categoría sea "Fragancias" y ordenarlos alfabéticamente (usa filter + sort)
let alfabeto=["a" , "b" , "c", "d" , "e", "f", "g", "h","i","j","k","L"]
let nuevoArregloFragancias=[];
for(let clave in productos){
    let filtro= productos[clave].filter(p=> p.categoria=="Fragancias");
    nuevoArregloFragancias.push(...filtro)

}

    
    let ordenados = nuevoArregloFragancias
    .sort((a,b)=> a.nombre.localeCompare(b.nombre))
    .map(n=>n.nombre)

    console.log(ordenados)



// ✅ 17. Calcular el precio total de todos los productos de la marca "Yanbal" (usa filter + reduce)
Object.keys(productos).forEach(clave=>{
    if(clave ==="yanbal"){
        console.log(clave, productos[clave]);
        for(let i = 0; i<productos[clave].length;i++){
            let total= productos[clave].reduce((acum,p)=> acum+p.precio,0)
        console.log(`${productos[clave][i].nombre} cuestan $${total}`)
        }
        
    }
})

// ✅ 18. Mostrar las 5 categorías con más productos (usa for + sort + slice)
let arregloCategoria=[]
for(let clave in productos){
    for(let i = 0; i<productos[clave].length;i++){
        let filtro= productos[clave].filter(p=> p.categoria)
        arregloCategoria.push(...filtro)

    }
   
}
console.log("NUEVO ARREGLO CATEGORIA")

    for(let i=0;i<arregloCategoria.length;i++){
        console.log(arregloCategoria[i].categoria)
    }


// ✅ 19. Encontrar el producto más caro y mostrar su nombre y precio (usa reduce)

for(let clave in productos){
    let producto=productos[clave]

    let productoCaro=producto[0]
    
    for(let i = 0 ;i<producto.length;i++){
        if(producto[i].precio>productoCaro.precio){
            productoCaro=producto[i]
        }
    }


    console.log(`EL prodcuto mas caro es ${productoCaro.nombre} - ${productoCaro.precio}`)

}

// ✅ 20. Encontrar el producto más barato y mostrar su nombre y precio (usa reduce)

for(let clave in productos){
    let productoBarato= productos[clave][0]
    for(let  i  =0; i<productos[clave].length;i++){
        if(productos[clave][i].precio<productoBarato.precio){
            productoBarato=productos[clave][i]
        }
    }
    console.log(`${productoBarato.nombre} - Precion: $${productoBarato.precio}`)
}

// ✅ 21. Crear un listado de todas las marcas disponibles sin repetir (usa Set)
let listadoMarcas = new Set();

for(let clave in productos){
    for(let i =0; i<productos[clave].length; i++){
        listadoMarcas.add(productos[clave][i].categoria)
    }
}

console.log(listadoMarcas)
// ✅ 22. Mostrar todos los productos cuyo nombre contenga la palabra "Crema" (usa filter)
let arregloAux=[]
for(let clave in productos){

    let filtro= productos[clave].filter(p=> p.nombre);
    arregloAux.push(...filtro)
}

for(let i =0;i<arregloAux.length;i++){
    let dividir = arregloAux[i].nombre.split(" ")

    for(let i = 0; i<dividir.length;i++){
        if(dividir[i] =="Crema"){
            console.log(dividir.join(" "))
        }
    }
}

//con include +  object.values.flat
    let filtro= Object.values(productos).flat();
    let todos= filtro.filter(p=> p.nombre.includes("Crema"));

    console.log(todos)

// ✅ 23. Calcular cuántos productos superan los 50.000 en precio (usa filter + length)
for(let clave in productos){
    let filtro= productos[clave].filter(p=> p.precio>50000);
    let cantidad= filtro.length;
    if(filtro){
        console.log(`La cantidad de prodcutos que superan los 50.000 son ${cantidad}`)

    }else{
    console.log("NO hay ninguno")
    }
}

// ✅ 24. Mostrar el nombre y precio de todos los productos, pero con el precio convertido a dólares (usa map)  
//       (Puedes suponer que 1 dólar = 4000 pesos)
for (let clave in productos){
    let dolar = 4.04900;

    let conversion =productos[clave].map(p=> p.precio*dolar);
    console.log(`Precio en dolares USD$${conversion}`)
}

// ✅ 25. Encontrar la suma total de precios de todos los productos de todas las marcas (usa reduce)


let filt= Object.values(productos).flat();
console.log(filt)

let total= filt.reduce((acum,p)=>acum+p.precio,0);
console.log(`TOTAL DE LOS PRODUCTOS $${total}`)

// ✅ 26. Mostrar la marca que tenga el producto más barato (usa for + reduce)
for(let clave in productos){
    let producto= productos[clave];
    let masBarato= producto[0];

    for(let i =0; i<producto.length;i++){
        if(producto[i].precio<masBarato.precio){
            productoBarato= producto[i];
           
        }
    }
    console.log(`Producto mas barato ${masBarato.nombre}`)
}
// ✅ 27. Mostrar la marca que tenga el producto más caro (usa for + reduce)

console.log("\n")
let arrelgo= []
for(let clave in productos){
    let producto= productos[clave]
    let productoCaroAux= producto[0];

    for(let i = 0; i<producto.length;i++){
        if(producto[i].precio> productoCaroAux.precio){
           productoCaroAux= producto[i]
            arrelgo.push(productoCaroAux)
      
        }
    }
    
}

      let organizar2 = arrelgo
    .sort((a,b)=> b.precio - a.precio)
    .slice(0,1)

    console.log(organizar2)

// ✅ 28. Mostrar todos los productos de la categoría "Cuidado Facial" ordenados del más barato al más caro (usa filter + sort)
for(let clave in productos){
    let filtro= productos[clave].filter(p=> p.categoria=="Cuidado Facial")

    let ordenados= filtro.sort((a,b)=> a.precio-b.precio);
    console.log(ordenados)
}

// ✅ 29. Contar cuántos productos hay por categoría (usa for o reduce)

for(let clave in productos){
    let cantidad= productos[clave].length;
    console.log(`Por la categoria ${clave} hay  ${cantidad} productos`)
}

// ✅ 30. Listar las categorías que tengan al menos un producto con precio mayor a 60.000 (usa for + some)
for(let clave in productos){

for(let i=0;i<productos[clave].lengh;i++){
    let filtro= productos[clave][i].filter(p=>p.precio<60000)
    if(!filtro){
        console.log("No hay prodcutos")
    }else{
        console.log("SI HAY")
    }
}
}

// ✅ 31. Crear un nuevo array que contenga solo objetos con { marca, nombre, categoria } sin el precio (usa map)
for(let clave in productos){
    for(let i = 0;i<productos[clave].length;i++){
      const nuevoArreglo = productos[clave].map(p=>({
        marca:clave,
        nombre:p.nombre,
        categoria:p.categoria
    }))
    console.log(nuevoArreglo)
    }
    
}

// ✅ 32. Verificar si existe algún producto con precio exactamente igual a 25.000 (usa some)
for(let clave in productos){
    for(let i =0 ;i<productos[clave].length;i++){
        let filtro= productos[clave].some(p=> p.precio===25000)
        if(!filtro){
            console.log("No hay")
        }else{
            console.log(`${productos[clave][i].nombre} --- Precio: ${productos[clave][i].precio}`)
        }
    }
}

// ✅ 33. Mostrar el promedio de precios por marca (usa for + reduce)
let sumaAr=0 ;
let arrelgoAyuda=[];
for(let clave in productos){
     arrelgoAyuda.push(...productos[clave])
    
}
let promedio;
for(let i =0; i<arrelgoAyuda.length;i++){
    sumaAr= sumaAr+arrelgoAyuda[i].precio;
    promedio= sumaAr/arrelgoAyuda.length;
}
console.log("La suma de los producto es " + " ", sumaAr)
console.log("El promedio de los productos es : ", " " , promedio)



// ✅ 35. Encontrar la categoría que tenga el producto más caro (usa for + reduce)

for(let clave in productos){
    let producto= productos[clave]
    let productoCaro= producto[0];

    for(let i  = 0;i<producto.length;i++){
        if(producto[i].precio>productoCaro.precio){
            productoCaro=producto[i]
        }
    }
            console.log(`${productoCaro.nombre} - Precio : ${productoCaro.precio}`)

}


