/*
📝 Ejercicio 1: Información de un libro
Crea un objeto llamado libro con la siguiente información:

Título: "Cien años de soledad"

Autor: "Gabriel García Márquez"

Año de publicación: 1967

Género: "Realismo mágico"

🎯 Tareas:
Muestra por consola el título y el autor del libro.

Agrega una nueva propiedad llamada disponible con valor true.

Cambia el año de publicación a 1968.

Recorre el objeto e imprime cada clave y su valor.


*/

let libro={
    Titulo: "Cien años de soledad",
    Autor:"Gabriel Garcia Marquez",
    Año_de_publicacion : 1967,
    Genero: "Realismo Magico"
}

console.log("Titulo" + " " + libro.Titulo + " " +"Autor" + " " + libro.Autor)

libro.Disponible=true;
console.log(libro)

libro.Año_de_publicacion=1968;
console.log(libro)

for(let clave in libro){
    console.log(clave + " " +libro[clave])
}

/*
✅ Ejercicio 3: Inventario de productos
js
Copiar
Editar
let productos = [
  { nombre: "Arroz", precio: 4500 },
  { nombre: "Leche", precio: 3800 },
  { nombre: "Carne", precio: 14500 },
  { nombre: "Pan", precio: 2500 }
];
🎯 Tareas:




*/

let productos = [
  { nombre: "Arroz", precio: 4500 },
  { nombre: "Leche", precio: 3800 },
  { nombre: "Carne", precio: 14500 },
  { nombre: "Pan", precio: 2500 }
];


//Mostrar los productos con precio mayor a 4000.
let prodcutoMayor= productos.filter(producto=> producto.precio>4000)
console.log("Productos mayores a 4000")
console.log(prodcutoMayor)

//Contar cuántos productos cuestan menos de 3000.
let contadorProductos=0;
for(let i=0; i<productos.length;i++){
    if(productos[i].precio<3000){
            console.log(`Nombre ${productos[i].nombre} - precio : ${productos[i].precio}`)
            contadorProductos++
 }
}
console.log("HAY" + " " + contadorProductos + " Productos")

//Sumar el total del inventario.
let sumaInventario= productos.reduce((acumuladoor,num)=> acumuladoor+num.precio,0);
console.log(`EL TOTAL DE INVETARIO ES : ${sumaInventario}`)

/*
Mostrar mensaje personalizado según el precio:

< 3000: barato

entre 3000 y 10000: normal

10000: caro
*/

productos.forEach((producto,i)=>{
    if(producto.precio<3000){
        console.log(`Nombre Producto : ${productos[i].nombre} - Precio : ${producto.precio} - "BARATO`)
    }else if(producto.precio>=3000 && producto.precio<=10000){
        console.log(`Nombre Producto : ${productos[i].nombre} -Precio : ${producto.precio} - "NORMAL"`)
    }else if(producto.precio>10000){
    console.log(`Nombre Producto : ${productos[i].nombre} -Precio : ${producto.precio} - "CARO"`)

    }
})

/*
🧠 Ejercicio: Análisis de estudiantes y notas
js
Copiar
Editar

📌 Tareas:





*/

let estudiantes = [
  { nombre: "Carlos", nota: 2.8 },
  { nombre: "Lucía", nota: 4.5 },
  { nombre: "Esteban", nota: 3.0 },
  { nombre: "Mariana", nota: 5.0 },
  { nombre: "Juan", nota: 1.9 },
  { nombre: "Sara", nota: 3.8 },
  { nombre: "Pedro", nota: 2.5 }
];

//Muestra los estudiantes que reprobaron (nota menor a 3.0).

let reprobados= estudiantes.filter(estudiante=> estudiante.nota<3.0);
console.log(reprobados)

//Calcula el promedio general de notas.
let sumaNotas= estudiantes.reduce((acumuladoor,nota)=>acumuladoor+nota.nota,0);
let promedioNotas= sumaNotas/estudiantes.length
console.log(promedioNotas)

//Verifica si hay una nota perfecta (5.0).
estudiantes.forEach(estudiante=>{
    if(estudiante.nota==5.0){
        console.log(`SI HAY UNA NOTA CON 5 PERFECTA - NOMNRE ESTUDIANTE ${estudiante.nombre}`)
    }
})

//Cuenta cuántos estudiantes obtuvieron más de 4.0.
let contadorEstudiantes=0;

for(let i=0; i<estudiantes.length;i++){
    if(estudiantes[i].nota>4.0){
        contadorEstudiantes++;
        console.log(estudiantes[i].nombre)
    }
}
console.log("LOS ESTUDIANTES QUE TIENE UAN NOTA DE MAS DE 4.0 FUERON" + " " + contadorEstudiantes)

/*
Muestra un mensaje personalizado para cada estudiante:

Si sacó menos de 3.0 → “Reprobado”

Si está entre 3.0 y 4.0 → “Aprobado”

Si es mayor a 4.0 → “Excelente”
*/

estudiantes.forEach(estudiante=>{
    if(estudiante.nota<3.0){
        console.log(`ESTUDIANTE ${estudiante.nombre} - NOTA: ${estudiante.nota} - ESTADO: REPROBADO`)
    }else if(estudiante.nota>=3.0 && estudiante.nota<=4.0){
            console.log(`ESTUDIANTE ${estudiante.nombre} - NOTA: ${estudiante.nota} - ESTADO: APROBADO`)
     }else if(estudiante.nota>4.0){
                console.log(`ESTUDIANTE ${estudiante.nombre} - NOTA: ${estudiante.nota} - ESTADO: EXCELENTE`)

     }
})

/*
🧠 Ejercicio Global: Análisis de empleados
Tienes una lista de empleados de una empresa. Cada empleado tiene un nombre, edad, salario y si está activo o no.

js
Copiar
Editar

🎯 Tareas (hazlas sin que yo te diga los métodos, tú decides cuáles usar):






*/

let empleados = [
  { nombre: "Ana", edad: 28, salario: 3200, activo: true }, // no lo trae
  { nombre: "Luis", edad: 45, salario: 4500, activo: false }, // descartado
  { nombre: "María", edad: 22, salario: 2800, activo: true }, //bien
  { nombre: "Carlos", edad: 35, salario: 5100, activo: true }, //bien
  { nombre: "Elena", edad: 30, salario: 3900, activo: false },// descartado
  { nombre: "Jorge", edad: 25, salario: 3000, activo: true } // no lo trae
];

//Muestra los empleados activos.
let empleadoActivo= empleados.filter(empleado=> empleado.activo==true);
console.log(empleadoActivo)

//Cuenta cuántos empleados tienen menos de 30 años.
let contadorEdad=0;

for(let i=0; i<empleados.length;i++){
    if(empleados[i].edad<30){
        console.log(`Los empelados menores a 30 años son : ${empleados[i].nombre} - Edad: ${empleados[i].edad}`)
        contadorEdad++;
    }
}
console.log("EN TOTAL SON" + " " + contadorEdad)

//Calcula el salario total de la empresa (de todos los empleados).

let salarioTotal= empleados.reduce((acumuladoor,empleado)=> acumuladoor+empleado.salario,0);
console.log("EL salario total de los empleados son :" +  " " + salarioTotal)

//Verifica si alguien gana exactamente 3000.
empleados.forEach((empleado)=>{
    if(empleado.salario==3000){
        console.log(`SI HAY EMPLEADOS CON SALARIO DE 3000 - Nombre ${empleado.nombre} - Salario $${empleado.salario}`)
    }
})

/*
Por cada empleado, muestra un mensaje así:

“Ana (28 años): salario bajo” si gana menos de 3000

“Luis (45 años): salario medio” si gana entre 3000 y 4000

“Carlos (35 años): salario alto” si gana más de 4000


*/
empleados.forEach(empleado=>{
    if(empleado.salario<3000 && empleado.activo==true){
        console.log(`${empleado.nombre} (${empleado.edad}) : Salaraio bajo`)
    }else if(empleado.salario>=3000 && empleado.salario<=4000 && empleado.activo==true){
                console.log(`${empleado.nombre} (${empleado.edad}) : Salaraio Medio`)
            }else if(empleado.salario > 4000 && empleado.activo==true){
                        console.log(`${empleado.nombre} (${empleado.edad}) : Salaraio Alto`)

            }
})

//Muestra los nombres de los empleados inactivos que ganan más de 3500.
let inactivos=[];
for(let i = 0; i<empleados.length; i++){
    if(empleados[i].activo==false){
        inactivos.push(empleados[i])
    }
}
    console.log(inactivos)

    for(let i = 0; i<inactivos.length; i++){
        console.log(`${inactivos[i].nombre} (${inactivos[i].edad}) : Salario de mas de 3500 `)
    }

    /*
🧠 Desafío Final: Análisis de productos en inventario
js
Copiar
Editar

📌 Tareas (elige qué método usar):








    */

let inventario = [
  { nombre: "Laptop", precio: 3500, stock: 5 },
  { nombre: "Mouse", precio: 800, stock: 25 },
  { nombre: "Teclado", precio: 1200, stock: 18 },
  { nombre: "Monitor", precio: 4200, stock: 3 },
  { nombre: "Impresora", precio: 3100, stock: 0 },
  { nombre: "Cámara Web", precio: 2900, stock: 10 },
  { nombre: "Parlantes", precio: 1800, stock: 0 }
];

//Muestra los productos que tienen stock mayor a 0 (disponibles).
let filtroStock= inventario.filter(producto=> producto.stock>0);
console.log("__________________PRODUCTOS CON STOCK DISPONIBLE_______")
console.log(filtroStock)

//Muestra el precio total del inventario disponible (precio × stock de cada producto).
let sumaTotal=0;
for(let i= 0 ;i<inventario.length; i++){
    if(inventario[i].stock>0){
        let stockProducto= inventario[i].precio* inventario[i].stock;
        console.log(stockProducto)
       sumaTotal= sumaTotal+stockProducto;
    }
}
console.log(sumaTotal)

//Cuenta cuántos productos tienen precio mayor a 3000.
let contadorPrecio=0;

for(let i = 0 ; i<inventario.length;i++){
    if(inventario[i].precio>3000){
        contadorPrecio++;
    }
}
console.log("HAY " + " " + contadorPrecio + " Mayores a 3000")

//Verifica si algún producto cuesta exactamente 4200.

inventario.forEach(p=>{
    if(p.precio==4200){
        console.log(`Si hay un producto exacatmente con costo de 4200 - ${p.nombre} - ${p.precio}`)
    }
})

/*
Por cada producto, muestra un mensaje como:

“Laptop ($3500): producto caro”

“Mouse ($800): producto económico”

Criterio:

Precio < 1500 → “económico”

Entre 1500 y 3000 → “normal”

Mayor a 3000 → “caro”
*/

for(let i = 0 ;i<inventario.length;i++){
    if(inventario[i].precio<1500){
        console.log(`${inventario[i].nombre} (${inventario[i].precio}) - Producto Economico`)
    }else if(inventario[i].precio>=1500 && inventario[i].precio<=3000){
        console.log(`${inventario[i].nombre} (${inventario[i].precio}) - Producto Normal`)
 }else if(inventario[i].precio>3000){
            console.log(`${inventario[i].nombre} (${inventario[i].precio}) - Producto Caro`)

 }
}

//Muestra el nombre de los productos que no están disponibles (stock 0).
let noDisponible= inventario.filter(p=> p.stock==0);
console.log(noDisponible)


/*

🎯 Tareas:







*/


let pedidos = [
  { cliente: "Laura", producto: "Zapatos", precio: 120000, entregado: true },
  { cliente: "Mateo", producto: "Camisa", precio: 45000, entregado: false },
  { cliente: "Sofía", producto: "Bolso", precio: 98000, entregado: true },
  { cliente: "Andrés", producto: "Pantalón", precio: 65000, entregado: true },
  { cliente: "Lucía", producto: "Bufanda", precio: 30000, entregado: false },
  { cliente: "Carlos", producto: "Chaqueta", precio: 150000, entregado: true }
];

//Muestra solo los pedidos que ya fueron entregados.

let entregados= pedidos.filter(p=> p.entregado==true);
console.log(entregados)

//Calcula el valor total de los pedidos entregados.
let totalProductos= pedidos.reduce((acumuladoor,pre)=> acumuladoor+pre.precio,0)
console.log(totalProductos)


//Muestra cuántos pedidos tienen un precio menor a 50.000.

let contadorPedidos=0; 

for(let i = 0 ; i<pedidos.length; i++){
    if(pedidos[i].precio<50000){
        console.log(`PRODUCTO - ${pedidos[i].producto} - PRECIO : ${pedidos[i].precio}`)
        contadorPedidos++
    }
}
console.log("HAY EN TOTAL " + " " + contadorPedidos + " " + "Productos")

//Verifica si hay algún pedido de exactamente 150.000.
pedidos.forEach(pre=>{
    if(pre.precio==150000){
        console.log(`SI HAY UN PEDIDO CON PRECIO DE 150.00 ES : - ${pre.producto} - Precio: ${pre.precio}` )
    }
})

/*
Por cada pedido, imprime un mensaje así:

"Laura pidió Zapatos por $120000 - "

"Mateo pidió Camisa por $45000 - "

*/

for(let i = 0 ;i<pedidos.length;i++){
    if(pedidos[i].entregado==true){
        console.log(`${pedidos[i].cliente} pidio ${pedidos[i].producto} por ${pedidos[i].precio} - ${pedidos[i].entregado} - Entregado ✅`)
    }else{
                console.log(`${pedidos[i].cliente} pidio ${pedidos[i].producto} por ${pedidos[i].precio} - ${pedidos[i].entregado} - Pendiente ❌`)

    }
}

//Muestra los nombres de los clientes que aún no han recibido su pedido.
console.log("\n")
console.log("__PRODUCTOS NO ENTREGADOS___")
pedidos.forEach(c=>{
    if(c.entregado==false){
        console.log(`${c.cliente} pidio ${c.producto} por ${c.precio} - ${c.entregado} - - Pendiente ❌`)
    }
})

//CON FUNCIONES

console.log("\n")
console.log("___________EJERCICOS MISMO UTILIZANDO FUNCIONES_____________")
//Muestra solo los pedidos que ya fueron entregados.
function obtenerProductos(lista){
    return lista.filter(producto=>producto.entregado==true)
    
}
console.log(obtenerProductos(pedidos))

//Calcula el valor total de los pedidos entregados.
function totalPedidos(lista){
    return lista.reduce((acumuladoor,pre)=>acumuladoor+pre.precio,0)
}

console.log(totalPedidos(pedidos))

//Muestra cuántos pedidos tienen un precio menor a 50.000.

function contarPedidos(lista){
    let contador=0;
    for(let i = 0 ; i<lista.length; i++){
        if(lista[i].precio<50000){
            contador++;
        }
    }
        return contador;

}

console.log(`Hay ${contarPedidos(pedidos)} prodcutos`)


//Verifica si hay algún pedido de exactamente 150.000.
function verificador(lista){
    return lista.forEach(p=>{
        if(p.precio==150000){
            console.log("SI HAY PRODCUTO")
        }
        
    })
}
verificador(pedidos)

/*
Por cada pedido, imprime un mensaje así:

"Laura pidió Zapatos por $120000 - "

"Mateo pidió Camisa por $45000 - "

*/

function mensajePedido(lista){
    for(i=0; i<lista.length;i++){
        if(lista[i].entregado==true){
            console.log(`${lista[i].cliente} pidio ${lista[i].producto} por ${lista[i].precio} - Entregado ✅`)
        }else{
            console.log(`${lista[i].cliente} pidio ${lista[i].producto} por ${lista[i].precio} - Pendinte ❌ `)

        }
    }
}

mensajePedido(pedidos)


//Muestra los nombres de los clientes que aún no han recibido su pedido.
function noRecibidoPedido(lista){
    lista.forEach(p=>{
        if(p.entregado==false){
                console.log(`${p.cliente} pidio ${p.producto} por ${p.precio} - Pendinte ❌ `)
  
        }
    })
}

noRecibidoPedido(pedidos)




/*
🧪 Ejercicio: Gestión de compras de clientes
Tienes el siguiente arreglo de objetos:

js
Copiar
Editar

🎯 Tareas (hazlas primero sin funciones y luego conviértelas en funciones):



*/

let compras = [
  { cliente: "Natalia", producto: "Celular", precio: 1200000, cantidad: 1, entregado: true },
  { cliente: "Diego", producto: "Audífonos", precio: 200000, cantidad: 2, entregado: false },
  { cliente: "Juliana", producto: "Portátil", precio: 2800000, cantidad: 1, entregado: true },
  { cliente: "Camilo", producto: "Mouse", precio: 70000, cantidad: 3, entregado: true },
  { cliente: "Laura", producto: "Tablet", precio: 1500000, cantidad: 1, entregado: false }
];

//Muestra los productos que sí fueron entregados.
let siFueronEntregados= compras.filter(e=> e.entregado==true);
console.log(siFueronEntregados)

//Muestra el valor total por cliente (precio × cantidad).
let sumaNum= [];
let sumaTotalP=0;
for(let i = 0; i<compras.length;i++){

     let sumTot= compras[i].precio* compras[i].cantidad
    console.log(sumTot)
sumaTotalP= sumaTotalP+ sumTot
    sumaNum.push(sumTot)
}
console.log(sumaTotalP)
console.log("NUEVO ARREGLO" + " " + sumaNum)

let sumaNuevoarreglo=0;
for(let i = 0; i<sumaNum.length;i++){
    sumaNuevoarreglo= sumaNuevoarreglo+sumaNum[i];
}
console.log("La suma total es :" + " " + sumaNuevoarreglo)

//Muestra el valor total de todas las compras entregadas.
let contadorSumaEntregadas=0;
compras.forEach(e=>{
    if(e.entregado==true){
        contadorSumaEntregadas=contadorSumaEntregadas+e.precio
        console.log(`PRODUCTO ${e.producto} - VALOR: ${e.precio}`)
    }
})

console.log(contadorSumaEntregadas)


//Muestra los nombres de los clientes que no han recibido sus productos.
for(let i=0; i<compras.length;i++){
    if(compras[i].entregado==false){
        console.log(`Nombres de los prodcutos no entregados ${compras[i].cliente}`)
    }
}


/*


Por cada compra, muestra un mensaje así:

"Natalia compró 1 Celular por $1200000 - Entregado ✅"
"Diego compró 2 Audífonos por $200000 - Pendiente ❌"
*/

compras.forEach(e=>{
    if(e.entregado==true){
        console.log(`${e.cliente} compro ${e.cantidad} ${e.producto} por ${e.precio} - Entregado ✅`)
    }else{ 
                console.log(`${e.cliente} compro ${e.cantidad} ${e.producto} por ${e.precio} - Pendiente ❌`)

    }
}) 

console.log("\n")
console.log("__________________________Mismo oEJercicio con funciones__________________________________________")


let comprasF = [
  { cliente: "Natalia", producto: "Celular", precio: 1200000, cantidad: 1, entregado: true },
  { cliente: "Diego", producto: "Audífonos", precio: 200000, cantidad: 2, entregado: false },
  { cliente: "Juliana", producto: "Portátil", precio: 2800000, cantidad: 1, entregado: true },
  { cliente: "Camilo", producto: "Mouse", precio: 70000, cantidad: 3, entregado: true },
  { cliente: "Laura", producto: "Tablet", precio: 1500000, cantidad: 1, entregado: false }
];


//Muestra los productos que sí fueron entregados.
function mostrarProducto(lista){
    return lista.filter(p=> p.entregado==true)
}
console.log(mostrarProducto(comprasF))


//Muestra el valor total por cliente (precio × cantidad).
function mostrarTotalCliente(lista){
    let valorTotalAcumulador=0;
    for(let i=0; i<lista.length;i++ ){
        let prePorCantidad= lista[i].precio* lista[i].cantidad
        console.log(prePorCantidad)

     valorTotalAcumulador= valorTotalAcumulador+prePorCantidad
    }
    console.log("El valor total de los productos es :" + " " + valorTotalAcumulador);

}
mostrarTotalCliente(comprasF)

//Muestra el valor total de todas las compras entregadas.
function comprasEntregadas(lista){
    let acumuladorComprasEntregadas=0;
    for(let i = 0; i<lista.length; i++){
        if(lista[i].entregado==true){
            acumuladorComprasEntregadas= acumuladorComprasEntregadas+lista[i].precio
        }
    }
    console.log("El valor total de las compras entregadas es de " + " " + acumuladorComprasEntregadas)
}
comprasEntregadas(comprasF)

//Muestra los nombres de los clientes que no han recibido sus productos.
function noRecibidoPedidos(lista){
    lista.forEach(e=>{
        if(e.entregado==false){
            console.log(`Nombres de los pedidos no entregados ${e.cliente}`)
        }
    })
    }

    noRecibidoPedidos(comprasF)
/*


Por cada compra, muestra un mensaje así:

"Natalia compró 1 Celular por $1200000 - Entregado ✅"
"Diego compró 2 Audífonos por $200000 - Pendiente ❌"
*/


function mensajeCompra(lista){
    for(let i = 0; i<lista.length;i++){
        if(lista[i].entregado==true){
            console.log(`${lista[i].cliente} compro ${lista[i].producto} por ${lista[i].precio} - Entregado ✅`)
        }else{
                        console.log(`${lista[i].cliente} compro ${lista[i].producto} por ${lista[i].precio} - Pendiente ❌`)

        }
    }
}
mensajeCompra(comprasF)




/*
🧾 Ejercicio: Plataforma de Contenido por Suscripción
Tienes dos arreglos:

1. Clientes
js
Copiar
Editar
let clientes = [
  { nombre: "Valentina", plan: "Premium", activo: true },
  { nombre: "Andrés", plan: "Básico", activo: true },
  { nombre: "Lucía", plan: "Básico", activo: false },
  { nombre: "Carlos", plan: "Premium", activo: false },
  { nombre: "Sofía", plan: "Estándar", activo: true },
  { nombre: "Mateo", plan: "Estándar", activo: true }
];
2. Contenidos (productos)

let contenidos = [
  { titulo: "Documental Naturaleza", categoria: "Cultura", disponible: true },
  { titulo: "Serie de Acción", categoria: "Entretenimiento", disponible: true },
  { titulo: "Podcast de Historia", categoria: "Cultura", disponible: false },
  { titulo: "Película Romántica", categoria: "Entretenimiento", disponible: true },
  { titulo: "Tutorial de JavaScript", categoria: "Educación", disponible: true },
  { titulo: "Conferencia de Ciencia", categoria: "Educación", disponible: false }
];
🎯 Tareas (hazlas primero sin funciones, luego con funciones si quieres):

*/

let clientes = [
  { nombre: "Valentina", plan: "Premium", activo: true },
  { nombre: "Andrés", plan: "Básico", activo: true },
  { nombre: "Lucía", plan: "Básico", activo: false },
  { nombre: "Carlos", plan: "Premium", activo: false },
  { nombre: "Sofía", plan: "Estándar", activo: true },
  { nombre: "Mateo", plan: "Estándar", activo: true }
];

let contenidos = [
  { titulo: "Documental Naturaleza", categoria: "Cultura", disponible: true },
  { titulo: "Serie de Acción", categoria: "Entretenimiento", disponible: true },
  { titulo: "Podcast de Historia", categoria: "Cultura", disponible: false },
  { titulo: "Película Romántica", categoria: "Entretenimiento", disponible: true },
  { titulo: "Tutorial de JavaScript", categoria: "Educación", disponible: true },
  { titulo: "Conferencia de Ciencia", categoria: "Educación", disponible: false }
];


/*
Clientes activos:
Muestra solo los nombres de los clientes que tienen el plan activo.
*/

let clientesActivos= clientes.filter(c=> c.activo==true);
console.log(clientesActivos)

/*
Clientes Premium:
Muestra cuántos clientes tienen el plan "Premium" y están activos.
*/
let contadorPremium=0;

for(let i=0; i<clientes.length;i++ ){
    if(clientes[i].plan=="Premium"){
        contadorPremium++
    }
}
console.log("HAY" + " " + contadorPremium+ " " + "Premium")

/*
Contenidos disponibles:
Muestra todos los títulos de contenidos que están disponibles.
*/
for(let i = 0; i<contenidos.length;i++){
    if(contenidos[i].disponible==true){
        console.log(`TITULOS DISPONIBLES ${contenidos[i].titulo}`)
    }
}

/*

Contenidos por categoría:
Cuenta cuántos contenidos hay por categoría (Educación, Cultura, Entretenimiento).
*/
let contadorEducacion=0;
let contadorCultura=0;
let contadorEntretenimiento=0;

for(let i = 0; i<contenidos.length;i++){
    if(contenidos[i].categoria=="Educación"){
        contadorEducacion++;
    }else if(contenidos[i].categoria=="Cultura"){
        contadorCultura++;
    }else if(contenidos[i].categoria=="Entretenimiento"){
        contadorEntretenimiento++;
    }
}
console.log(`HAY ${contadorEducacion} contenidos de Educacion`)
console.log(`HAY ${contadorCultura} contenidos de Cultura `)
console.log(`HAY ${contadorEntretenimiento} contenidos de Entretenimiento `)

/*
Resumen personalizado:
Por cada cliente, imprime un mensaje así:

"Valentina tiene un plan Premium y está activa ✅"

"Carlos tiene un plan Premium y está inactivo ❌"
*/

clientes.forEach(c=>{
    if(c.activo==true){
        console.log(`${c.nombre} tiene un plan ${c.nombre} y estaactiva ✅`)
    }else{
    console.log(`${c.nombre} tiene un plan ${c.nombre} y está inactivo ❌`)
    }
})

/*

Bonus (opcional):
Muestra los títulos de los contenidos NO disponibles.
*/
for(let i =0; i<contenidos.length; i++){
    if(contenidos[i].disponible==false){
        console.log(`TITULOS NO DISPONIBLES ${contenidos[i].titulo}`)
    }
}

console.log("\n")
console.log("_______________-MISMO EJERCICIO OCN FUCNCIONES______________")

let clientesF = [
  { nombre: "Valentina", plan: "Premium", activo: true },
  { nombre: "Andrés", plan: "Básico", activo: true },
  { nombre: "Lucía", plan: "Básico", activo: false },
  { nombre: "Carlos", plan: "Premium", activo: false },
  { nombre: "Sofía", plan: "Estándar", activo: true },
  { nombre: "Mateo", plan: "Estándar", activo: true }
];

let contenidosF = [
  { titulo: "Documental Naturaleza", categoria: "Cultura", disponible: true },
  { titulo: "Serie de Acción", categoria: "Entretenimiento", disponible: true },
  { titulo: "Podcast de Historia", categoria: "Cultura", disponible: false },
  { titulo: "Película Romántica", categoria: "Entretenimiento", disponible: true },
  { titulo: "Tutorial de JavaScript", categoria: "Educación", disponible: true },
  { titulo: "Conferencia de Ciencia", categoria: "Educación", disponible: false }
];
/*
Clientes Premium:
Muestra cuántos clientes tienen el plan "Premium" y están activos.
*/
function premium(lista){
    let contadorPremium=0;
    lista.forEach(pl=>{
        if(pl.plan=="Premium" && pl.activo==true){
            contadorPremium++;
        }
    })
    return contadorPremium;
}
console.log("HAY " + " "+ premium(clientesF) + " Clientes Premium " + " " + "Y estan/a activos")

/*
Contenidos disponibles:
Muestra todos los títulos de contenidos que están disponibles.
*/
function disponibles(lista){
    for(let i = 0; i<lista.length;i++){
        if(lista[i].disponible==true){
            console.log(`Titulos Disponibles ${lista[i].titulo}`)
        }
    }
}
disponibles(contenidosF)


/*
Contenidos por categoría:
Cuenta cuántos contenidos hay por categoría (Educación, Cultura, Entretenimiento).
*/
function porCategoria(lista){
    let contadorEducacion=0;
    let contadorCultura=0;
    let contadorEntretenimiento=0;

    for(let i = 0 ; i<lista.length;i++){
        if(lista[i].categoria=="Educación"){
            contadorEducacion++;
        }else if(lista[i].categoria=="Cultura"){
            contadorCultura++
       }else if(lista[i].categoria=="Entretenimiento"){
            contadorEntretenimiento++;
        
        }
    }
                console.log("DE EDUCACION HAY" + " " + contadorEducacion)
                            console.log("DE CULTURA HAY" + " " + contadorCultura)
                                        console.log("DE ENTRETENIMIENTO HAY" + " " + contadorEntretenimiento)



    return{
         contadorEducacion,
         contadorCultura,
         contadorEntretenimiento}
    
}
porCategoria(contenidosF)

/*
Resumen personalizado:
Por cada cliente, imprime un mensaje así:

"Valentina tiene un plan Premium y está activa ✅"

"Carlos tiene un plan Premium y está inactivo ❌"
*/
function imprimirMensaje(lista){
    for(let i = 0; i<lista.length;i++){
        if(lista[i].activo==true){
            console.log(`${lista[i].nombre} tiene un plan ${lista[i].plan} y esta activa ✅ `)
        }else{
        console.log(`${lista[i].nombre} tiene un plan ${lista[i].plan} y esta inactivo ❌ `)

        }
    }
}
imprimirMensaje(clientesF)
/*
Bonus (opcional):
Muestra los títulos de los contenidos NO disponibles.
*/
function noDisponibles(lista){
    lista.forEach(dis=>{
        if(dis.disponible==false){
            console.log(`${dis.titulo} no esta disponible`)
        }
    })
}
noDisponibles(contenidosF)



/*
🧾 EJERCICIO: Clientes y Compras (Relacionados)
js
Copiar
Editar

🎯 TAREAS:






*/


let clientes2 = [
  { id: 1, nombre: "Valentina", activo: true },
  { id: 2, nombre: "Andrés", activo: false },
  { id: 3, nombre: "Lucía", activo: true },
  { id: 4, nombre: "Carlos", activo: true }
];

let compras2 = [
  { clienteId: 1, producto: "Laptop", precio: 3500000, cantidad: 1 },
  { clienteId: 3, producto: "Tablet", precio: 1500000, cantidad: 2 },
  { clienteId: 4, producto: "Teclado", precio: 150000, cantidad: 1 },
  { clienteId: 2, producto: "Mouse", precio: 80000, cantidad: 3 },
  { clienteId: 1, producto: "Audífonos", precio: 250000, cantidad: 1 }
];

//Mostrar solo las compras realizadas por clientes activos.
for(let i =0; i<clientes2.length; i++){
    for(let j=0; j<compras2.length;j++){
 if(clientes2[i].id==compras2[j].clienteId && clientes2[i].activo==true){
        console.log(`Compras por clientes activos ${compras2[j].producto} - ${clientes2[i].nombre}`)
    }
    }
   
}

//Calcular el total gastado por cada cliente (precio × cantidad).
for(let i= 0; i<compras2.length;i++){
    for(let j= 0; j<clientes2.length;j++){
    
        let cantidadCliente= compras2[i].precio*compras2[i].cantidad
         if(compras2[i].clienteId==clientes2[j].id){
            console.log(`${clientes2[j].nombre} gasto ${cantidadCliente}`)
        }
    }
}

//Mostrar cuántas compras ha hecho cada cliente.
compras2.forEach(compra=>{
    clientes2.forEach(cliente=>{
        if(compra.clienteId==cliente.id){
            console.log(`Cliente ${cliente.nombre} , compro ${compra.producto} , precio: ${compra.precio}`)
        }
    })
})

//Listar los clientes que no han hecho ninguna compra.
let noCompra= compras2.filter(c=> c.cantidad==0);

if(noCompra==0){
console.log("NO HAY LSITA DE CLIENTES QUE NO HAYAN COMPRADO")
console.log(noCompra)

}else{
    console.log("LISTA DE CLIENTES QUE NO HAN COMPRAdo")
    console.log(noCompra)
}

/*
Mostrar un resumen por cliente como:

Valentina (Activa ✅) hizo 2 compras y gastó $3.750.000
Carlos (Activo ✅) hizo 1 compra y gastó $150.000
Andrés (Inactivo ❌) hizo 1 compra y gastó $240.000
Lucía (Activa ✅) hizo 1 compra y gastó $3.000.000
*/

for (let i = 0; i < clientes2.length; i++) {
  let cliente = clientes2[i];

  // Filtramos las compras hechas por este cliente
  let comprasDelCliente = compras2.filter(c => c.clienteId === cliente.id);

  // Contamos cuántas compras hizo (la cantidad de elementos del array filtrado)
  let cantidadCompras = comprasDelCliente.length;

  // Calculamos el total gastado sumando precio * cantidad por cada compra
  let totalGastado = comprasDelCliente.reduce((suma, compra) => {
    return suma + (compra.precio * compra.cantidad);
  }, 0);

  // Creamos el texto del estado (activo o no)
  let estado = cliente.activo ? "Activa ✅" : "Inactivo ❌";

  // Mostramos el resumen
  console.log(`${cliente.nombre} (${estado}) hizo ${cantidadCompras} compra(s) y gastó $${totalGastado.toLocaleString()}`);
}









let clientes3 = [
  { id: 1, nombre: "Ana", activo: true },
  { id: 2, nombre: "Luis", activo: false },
  { id: 3, nombre: "María", activo: true },
  { id: 4, nombre: "Pedro", activo: true }
];

let suscripciones = [
  { clienteId: 1, revista: "Ciencia Hoy", precio: 25000, meses: 6 },
  { clienteId: 3, revista: "Salud y Vida", precio: 18000, meses: 12 },
  { clienteId: 1, revista: "Viajes del Mundo", precio: 22000, meses: 3 },
  { clienteId: 4, revista: "Historia Viva", precio: 30000, meses: 1 },
  { clienteId: 2, revista: "Cocina Fácil", precio: 20000, meses: 2 }
];

// ✅ 1. Mostrar solo las suscripciones de clientes activos.
for(let i=0; i<clientes3.length; i++){
    for(let j=0; j<suscripciones.length;j++){
        if(clientes3[i].id== suscripciones[j].clienteId && clientes3[i].activo==true){
            console.log(`Nombre - ${clientes3[i].nombre} tiene una suscripcion de ${suscripciones[j].revista} - precio $${suscripciones[j].precio} - tiempo de ${suscripciones[j].meses} meses`)
        }
    }
}

// 💰 2. Calcular cuánto ha pagado cada cliente en total (precio × meses).

for (let i = 0; i<clientes3.length; i++){
let cliente = clientes3[i]
let filtroPago= suscripciones.filter(s=> s.clienteId== cliente.id);
let cantidadPago= filtroPago.length;

let totalPago = filtroPago.reduce((suma,compra)=>{
    return suma+ (compra.precio* compra.meses)
},0)
console.log(`${clientes3[i].nombre} - gasto ${totalPago}`)
}

//// 🔢 3. Mostrar cuántas revistas ha suscrito cada cliente.

for(let i = 0; i<clientes3.length; i++){
    let cliente= clientes3[i];

    let filtrarRevistas= suscripciones.filter(s=> s.clienteId==cliente.id)
    let cantidadRevistas = filtrarRevistas.length;
    console.log(cantidadRevistas)
}

//// 📭 4. Listar los clientes que no tienen ninguna suscripción.
clientes3.forEach(cliente=>{
    let suscipcion= suscripciones.some(s=> s.clienteId== cliente.id);
    if(!suscipcion){
        console.log("NO TIENE SUSCIPCIONE")
    }
})

// 🧾 5. Mostrar un resumen como este:
// Ana (Activa ✅) tiene 2 suscripciones y ha pagado $216.000
// Luis (Inactivo ❌) tiene 1 suscripción y ha pagado $40.000
// María (Activa ✅) tiene 1 suscripción y ha pagado $216.000
// Pedro (Activa ✅) tiene 1 suscripción y ha pagado $30.000

for(let i= 0; i<clientes3.length;i++){
        let cliente= clientes3[i]
    let filtroSuscripcion= suscripciones.filter(s=> s.clienteId==cliente.id)
    let cantidadCompras= filtroSuscripcion.length;

    let totalSuscipciones= filtroSuscripcion.reduce((suma,suscripcion)=>{
        return suma+ (suscripcion.precio* suscripcion.meses)
    }, 0);

    let estado= cliente.activo ?  "Activa ✅" : "Inactivo ❌"

    console.log(`${cliente.nombre} (${estado}) tiene ${cantidadCompras} suscripciones y ha pagado $${totalSuscipciones}`)
}

//Objetos Anidados


for(let i =0; i<100;i++){
    console.log(i)
}



// 🧾 DATOS DE EJEMPLO:


// 🎯 TAREAS:







let clientes4 = [
  { id: 1, nombre: "Valentina", activo: true },
  { id: 2, nombre: "Carlos", activo: true },
  { id: 3, nombre: "Andrés", activo: false },
  { id: 4, nombre: "Lucía", activo: true },
  { id: 5, nombre: "Miguel", activo: false }
];

let compras4 = [
  { clienteId: 1, precio: 1250000, cantidad: 3 },
  { clienteId: 2, precio: 150000, cantidad: 1 },
  { clienteId: 3, precio: 240000, cantidad: 1 },
  { clienteId: 4, precio: 3000000, cantidad: 1 }
];
// ✅ Mostrar solo las compras realizadas por clientes activos.
for(let i=0; i<clientes4.length;i++){
   for(let j=0; j<compras4.length;j++){

    if(clientes4[i].id== compras4[j].clienteId && clientes4[i].activo==true){
            console.log(`${clientes4[i].nombre} esta activo`)
    }
   }
  
}
// ✅ Calcular el total gastado por cada cliente (precio × cantidad).
let comprasPorCliente=[]
for(let i=0; i<clientes4.length;i++){
    let cliente=clientes4[i];
    let filtrarCliente = compras4.filter(c=> c.clienteId == cliente.id);
    let cantidadDeCompras= filtrarCliente.length;
 
    let  totalCliente = filtrarCliente.reduce((suma,compra)=>{
        return suma+(compra.precio* compra.cantidad)
    },0)
    //guardamos en el nuevo arreglo 
   comprasPorCliente.push({
        nombre:cliente.nombre,
        cantidadDeCompras: cantidadDeCompras,
        totalCliente:totalCliente
    })
    console.log(`${cliente.nombre} gasto ${totalCliente} y hizo ${cantidadDeCompras} compras`)
}

// ✅ Mostrar cuántas compras ha hecho cada cliente.
comprasPorCliente.forEach(compra=>{
    console.log(`${compra.nombre} gasto ${compra.totalCliente} y hizo ${compra.cantidadDeCompras} compras`)
})

// ✅ Listar los clientes que no han hecho ninguna compra.

// con el arrelgo nevo creado
comprasPorCliente.forEach(compra=>{
    if(!compra.cantidadDeCompras){
        console.log(compra.nombre)
    }
})

// si no tubieramos el nuevo arreglo 
clientes4.forEach(cliente=>{
    let filtro = compras4.some(c=> c.clienteId ==  cliente.id)

    if(!filtro){
        console.log(cliente.nombre +"No tiene compras")
    }
})


// ✅ Mostrar un resumen por cliente como:
// Valentina (Activa ✅) hizo 2 compras y gastó $3.750.000
// Carlos (Activo ✅) hizo 1 compra y gastó $150.000
// Andrés (Inactivo ❌) hizo 1 compra y gastó $240.000
// Lucía (Activa ✅) hizo 1 compra y gastó $3.000.000
// Miguel (Inactivo ❌) hizo 0 compras y gastó $0

for(let i = 0; i<clientes4.length ; i++){
    let cliente = clientes4[i]
    let filtroId= compras4.filter(c=> c.clienteId == cliente.id );
    let cantidadCompras= filtroId.length;

    let totalGastado= filtroId.reduce((suma,compra)=>{
        return suma+(compra.precio*compra.cantidad)
    },0)

    let estado = cliente.activo? "Activa ✅" : "Inactivo ❌"

    console.log(`${cliente.nombre} (${estado}) hizo ${cantidadCompras} compras y gasto ${totalGastado}`)
}










let productos2 = [
  { id: 1, nombre: "Laptop", categoria: "Tecnología", precio: 3500000 },
  { id: 2, nombre: "Celular", categoria: "Tecnología", precio: 2200000 },
  { id: 3, nombre: "Escritorio", categoria: "Muebles", precio: 500000 },
  { id: 4, nombre: "Silla", categoria: "Muebles", precio: 250000 },
  { id: 5, nombre: "Audífonos", categoria: "Tecnología", precio: 350000 },
];

let ventas = [
  { id: 1, productoId: 1, cantidad: 2 },
  { id: 2, productoId: 2, cantidad: 1 },
  { id: 3, productoId: 3, cantidad: 1 },
  { id: 4, productoId: 4, cantidad: 4 },
  { id: 5, productoId: 5, cantidad: 5 },
  { id: 6, productoId: 2, cantidad: 3 },
];

// 🔍 Mostrar solo las ventas de productos de categoría "Tecnología"

for(let i=0; i<ventas.length;i++){
    for(let j = 0; j<productos2.length; j++){
        if(ventas[i].id== productos2[j].id && productos2[j].categoria=="Tecnología" ){
            console.log(ventas[i])
        }
    }
}
// 💰 Calcular el total generado por cada producto (precio * cantidad vendida)
for(let i = 0; i<productos2.length;i++){
    for(let j =0; j<ventas.length;j++){
        let producto= productos2[i];
        let venta = ventas[j];
let filtro= ventas.filter(v=> v.id== producto.id);
let cantidadVentas = filtro.length;

let totalGenerado= filtro.reduce((suma,producto)=>{
    return suma+ (producto.cantidad *producto.precio)
})
console.log(totalGenerado)
    }
}

// 🧮 Mostrar cuántas veces se vendió cada producto
for(let i = 0 ;i<productos2.length;i++){
    let producto= productos2[i];
    let filtroId = ventas.filter(v=> v.productoId== producto.id);
    let cantidadVecesVendidas = filtroId.length;

    console.log(`El producto ${producto.nombre} se vendio ${cantidadVecesVendidas}`) 

}

// ❌ Listar los productos que no han tenido ninguna venta
productos2.forEach(producto => {
    let filtro = ventas.filter(v => v.productoId == producto.id);

    if (filtro.length === 0) {
        console.log(`❌ ${producto.nombre} no tiene ventas`);
    }
});




// 📊 Mostrar un resumen por producto como:
// Laptop (Tecnología): 2 ventas, $7.000.000
// Celular (Tecnología): 4 ventas, $8.800.000
// Escritorio (Muebles): 1 venta, $500.000
// ...

for(let i = 0 ; i<productos2.length; i++){
    let producto=productos2[i]
    let filtroId = ventas.filter(v=> v.productoId==producto.id);
    let cantidadVentas= filtroId.length;

    let totalGastado= filtroId.reduce((suma,venta)=>{
        return suma+(venta.cantidad* producto.precio);
    },0);

    console.log(`${producto.nombre} (${producto.categoria}) : ${cantidadVentas} ventas, $${totalGastado}`)
}






/*
🎯 Tareas:


Verifica si tiene alguna nota perfecta (5.0).
*/
let estudiante = {
  nombre: "Sofía",
  edad: 20,
  contacto: {
    email: "sofia@example.com",
    telefono: "3124567890"
  },
  notas: [4.2, 3.8, 5.0, 4.6]
};

//Muestra por consola el nombre del estudiante y su correo electrónico.
console.log(estudiante.nombre + estudiante.contacto.email)


//Muestra el promedio de sus notas.
let sum=0;
let totalNotas=0;
for(let i = 0; i<estudiante.length;i++){
    for(let j= 0; j<estudiante[i].notas.length; j++){
sum= sum+estudiante[i].notas[j];
totalNotas++;

    }
}

let promedio= sum/totalNotas;
console.log(promedio);

//


const consmeticos = {
    esika: [
      { nombre: "Perfume Encanto", precio: 45000, descuento: true, categoria: "Fragancia" },
      { nombre: "Crema Facial Hidratante", precio: 28000, descuento: false, categoria: "Cuidado Facial" }
    ],
    yanbal: [
      { nombre: "Labial Brillo Intenso", precio: 35000, descuento: true, categoria: "Maquillaje" },
      { nombre: "Sombra de Ojos", precio: 22000, descuento: false, categoria: "Maquillaje" }
    ],
    avon: [
      { nombre: "Shampoo Herbal", precio: 18000, descuento: false, categoria: "Cuidado Capilar" },
      { nombre: "Base Líquida", precio: 30000, descuento: true, categoria: "Maquillaje" }
    ]
  };

  for(let clave in consmeticos){
    console.log(`${clave.toUpperCase()}`) //accdemos a la propiedad esika,avon,yanbal
  
  consmeticos[clave].forEach(producto=>{ // accedemos a el arrelog de cada propeidad y accdemos al nombre y precio
    console.log(`${producto.nombre} - ${producto.precio}`)
  })

  // cuantos prodcutos tienen descuento
    let conDescuento = consmeticos[clave].filter(p=> p.descuento==true);
    console.log(conDescuento.length)

let total = consmeticos[clave].reduce((suma,p)=> suma+p.precio,0);
console.log(total)
  }
  

  let categorias = new Set();

  for(let clave in consmeticos){
    consmeticos[clave].forEach(producto=>{
        categorias.add(producto.categoria)
    })
  }
  console.log(categorias)

  console.log("\n📂 Categorías únicas encontradas:");

  categorias.forEach(categoria=>{
    console.log(categoria)
  })



  // EJERCICIO 
  // 🧴 BASE DE DATOS:
// Tienes un objeto llamado "productosBelleza" que contiene diferentes marcas (Ésika, Yanbal, Avon, Natura, L'Bel).
// Cada marca tiene un arreglo de productos. Cada producto tiene:
// - nombre
// - categoria (por ejemplo: "Fragancia", "Maquillaje", "Cuidado Facial")
// - precio
// - disponible (true o false)

const productosBelleza = {
    esika: [
      { nombre: "Perfume Ilimitada", categoria: "Fragancia", precio: 42000, disponible: true },
      { nombre: "Crema Nutritiva Día", categoria: "Cuidado Facial", precio: 35000, disponible: false },
      { nombre: "Labial Hidratante", categoria: "Maquillaje", precio: 18000, disponible: true }
    ],
    yanbal: [
      { nombre: "Agua de Perfume Essenza", categoria: "Fragancia", precio: 55000, disponible: true },
      { nombre: "Mascarilla Facial Detox", categoria: "Cuidado Facial", precio: 32000, disponible: false },
      { nombre: "Rubor Compacto", categoria: "Maquillaje", precio: 27000, disponible: true },
      { nombre: "Base Líquida", categoria: "Maquillaje", precio: 33000, disponible: true }
    ],
    avon: [
      { nombre: "Colonia Wild", categoria: "Fragancia", precio: 39000, disponible: true },
      { nombre: "Crema Reafirmante", categoria: "Cuidado Facial", precio: 28000, disponible: true },
      { nombre: "Delineador Retráctil", categoria: "Maquillaje", precio: 15000, disponible: false }
    ],
    natura: [
      { nombre: "Perfume Kaiak", categoria: "Fragancia", precio: 60000, disponible: true },
      { nombre: "Sérum Regenerador", categoria: "Cuidado Facial", precio: 45000, disponible: true },
      { nombre: "Corrector de Ojeras", categoria: "Maquillaje", precio: 25000, disponible: true }
    ],
    lbel: [
      { nombre: "Perfume Bleu Intense", categoria: "Fragancia", precio: 65000, disponible: false },
      { nombre: "Contorno de Ojos", categoria: "Cuidado Facial", precio: 37000, disponible: true },
      { nombre: "Maquillaje 24H", categoria: "Maquillaje", precio: 46000, disponible: true }
    ]
  };
  
// 🎯 TAREAS:

// ✅ 1. Mostrar todos los productos disponibles por marca.
for (let clave in productosBelleza){
    console.log(clave.toUpperCase())

    let disponibleMarca = productosBelleza[clave].filter(p=> p.disponible==true)
    console.log(disponibleMarca)
}

// ✅ 2. Listar los productos de la categoría "Cuidado Facial" sin importar la marca.
console.log("\n", " ", "Listar los productos de la categoría Cuidado Facial sin importar la marca" )

for(let clave in productosBelleza){ 
    let porCategoria= productosBelleza[clave].filter(c=> c.categoria=="Cuidado Facial");
    console.log(clave.toUpperCase())
    console.log(porCategoria)
}

console.log("\n", " ", "Calcular cuánto costarían todos los productos de la categoría Fragancias si se compraran todos." )

let suma = 0; 
// ✅ 3. Calcular cuánto costarían todos los productos de la categoría "Fragancias" si se compraran todos.
for ( let clave in productosBelleza){
    let filtro = productosBelleza[clave].filter(c=> c.categoria=="Fragancia")
    
    for(let  i = 0; i<filtro.length; i++){
        suma= suma+filtro[i].precio
    }
}
    console.log(`Precio que Costarian todos los productos de la categoria "Fragancia" si llegaran a comprar todos $${suma}`)



// ✅ 4. Contar cuántos productos tiene cada marca en total.
for(let clave in productosBelleza){
    let cantidad= productosBelleza[clave].length
    console.log(`La marca ${clave} Tiene ${cantidad} productos`)
}
// ✅ 5. Mostrar un resumen general como:

for(let clave in productosBelleza){
    let cantidadProductos= productosBelleza[clave].length;

    for(let i = 0; i<productosBelleza[clave].length;i++){
        let estado = productosBelleza[clave][i].disponible? "Disponible" : "No Disponible"
        console.log(`${clave} tiene ${cantidadProductos} productos ,${productosBelleza[clave][i].nombre} esta ${estado}`)

    }
 

}

// Ésika tiene 3 productos, 2 disponibles.
// Yanbal tiene 4 productos, 3 disponibles.
// ...
// ✅ 6. Crear una lista única (sin repetir) de todas las categorías que hay entre todos los productos.
let categoriasNuevas= new Set();

for(let clave in productosBelleza){
    productosBelleza[clave].forEach(p=>{
        categoriasNuevas.add(p.categoria)
    })
}

console.log("\n Categorias de los productos");
console.log(categoriasNuevas)

// ✅ 7. Listar los productos que no están disponibles y a qué marca pertenecen.
for(let clave in productosBelleza){
for(let i = 0; i<productosBelleza[clave].length;i++){
    if(productosBelleza[clave][i].disponible==false){
        console.log(`${productosBelleza[clave][i].nombre} no esta disponible`)
    }
}
}
// ✅ 8. Mostrar cuál es el producto más caro de cada marca.
for(let clave in productosBelleza){
    let producto = productosBelleza[clave]
    let productoMasCaro= producto[0];

    for(let i = 0; i<producto.length;i++){
        if(producto[i].precio>productoMasCaro.precio){
            productoMasCaro=producto[i]
        }

    }
    console.log(`El producto mas caro de cada marca :${clave} es ${productoMasCaro.nombre} , ${productoMasCaro.precio}`)
}
// ✅ 9. Mostrar los nombres de los productos cuyo precio sea mayor a $40.000.
for (let clave in productosBelleza){
    let producto= productosBelleza[clave];

    for(let i = 0; i<producto.length;i++){
        if(producto[i].precio>40000){
            console.log(`${clave} : ${producto[i].nombre} ${producto[i].precio}`)
        }
    }

}
// ✅ 10. Mostrar un ranking con los 3 productos más caros, sin importar la marca.
let nuevoArreglo=[];
for(let clave in productosBelleza){ 
    
    nuevoArreglo.push(...productosBelleza[clave])

}


let mayoramenor = nuevoArreglo.sort((a,b)=> b.precio-a.precio);
console.log(mayoramenor)

console.log("\n")
console.log("TOP 3 DE LOS MAS COSTOSOS")
let top3= nuevoArreglo.slice(0,3);
console.log(top3)

// BONUS 🔥
// ✅ 11. ¿Cuál es la marca que tiene más productos en la categoría "Maquillaje"?
for(let clave in productosBelleza){
    let filtro= productosBelleza[clave].filter(p=> p.categoria=="Maquillaje");
    let cantidadPorMaquillaje= filtro.length;

    console.log(`${clave} tiene ${cantidadPorMaquillaje} productos por la categoria maquillje`)
}
// ✅ 12. Mostrar cuántos productos hay por categoría (aunque estén en marcas distintas).
for(let clave in productosBelleza){
    
  let filtro = productosBelleza[clave].filter(p=> p.categoria)
    let cantidadProductos= filtro.length;
        console.log(`${clave} tiene ${cantidadProductos} por categoria}`)


}
// Puedes usar todos los métodos que has aprendido: for, forEach, filter, reduce, Set, etc.

