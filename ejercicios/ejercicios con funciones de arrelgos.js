/*

Metodo MAP();

Multiplica por 10 todos estos números:

let numeros = [2, 4, 6, 8];
*/

let numeros=[2,4,6,8];

let porDiez= numeros.map(num=>num*10);
console.log(porDiez)

/*
De este arreglo de nombres, agrega "Hola " antes de cada uno:

let nombres = ["Camilo", "Andrea", "Luis"];
*/

let nombres=["Camilo", "Andrea", "Luis"];

let agregarMensaje= nombres.map(nombre=> `Hola ${nombre}`)
console.log(agregarMensaje)

/*
Cambia un arreglo de temperaturas en Celsius a Fahrenheit:
Fórmula: (C * 9/5) + 32

let celsius = [0, 20, 30];
*/
let celsius = [0, 20, 30];

let celciusAfarenheit= celsius.map(C=> (C*9/5)+32);
console.log(celciusAfarenheit)


/*
Metodo Filtrer();

🧪 Retos para practicar .filter()
1. Filtra los números pares

let numeros = [1, 2, 3, 4, 5, 6];
// Resultado esperado: [2, 4, 6]
*/

let numeros1=[1,2,3,4,5,6];

let pares= numeros1.filter(par=> par%2==0);
console.log("Los pares son "+ pares)

/*
2. Filtra las palabras de más de 5 letras

let palabras = ["sol", "estrella", "mar", "universo"];
// Resultado esperado: ["estrella", "universo"]
*/

let palabras = ["sol", "estrella", "mar", "universo"];

let cincoletras= palabras.filter(palabra=> palabra.length>5)
console.log(cincoletras)

/*
3. Filtra solo los que tienen edad ≥ 18

let edades = [12, 25, 17, 30];
// Resultado esperado: [25, 30]
*/
let edades = [12, 25, 17, 30];

let mayores18= edades.filter(edad=>edad>=18)
console.log("Son mayores a 18" + " "+ mayores18)

/*
4. Filtra los productos que empiecen por vocal

let productos = ["arroz", "tomate", "uva", "sal", "aceite"];
// Resultado esperado: ["arroz", "uva", "aceite"]
*/
let productos = ["arroz", "tomate", "uva", "sal", "aceite", "oja"];
let vocales = ["a", "e", "i", "o", "u"];

let empiezaVocal = productos.filter(producto => {
  let primeraLetra = producto[0].toLowerCase();
  return vocales.includes(primeraLetra);
});

console.log("Las palabras que empiezan por vocal son: " + empiezaVocal.join(", "));

/*
✅ 1. Números mayores o iguales a 50
let numeros = [10, 55, 30, 70, 5, 100];
// Resultado esperado: [55, 70, 100]
*/

let numeros2=[10,66,44,34,20,40,50,20,100,79]

let mayoresA50= numeros2.filter(numero=> numero>=50);
console.log(mayoresA50)
/*
✅ 2. Palabras que terminan en vocal
let palabras = ["sol", "tigre", "cielo", "flor", "río"];
// Resultado esperado: ["tigre", "cielo", "río"]
Pista: usa .endsWith() o palabra[palabra.length - 1]
*/
let words = ["sol", "tigre", "cielo", "flor", "río"];
let vocales2 = ["a", "e", "i", "o", "u"];

let endVocal= words.filter(palabra=>{
  let ultimaPalabra= palabra[palabra.length-1].toLowerCase();
  return vocales2.includes(ultimaPalabra);

})
  console.log(endVocal)

/*
✅ 3. Filtrar solo las palabras de exactamente 5 letras
let lista = ["perro", "gato", "casa", "arroz", "luz", "llave"];
// Resultado esperado: ["perro", "arroz", "llave"]
*/
let lista = ["perro", "gato", "casa", "arroz", "luz", "llave"];

let vocal5= lista.filter(palabra=> palabra.length==5)
console.log(vocal5)

/*
✅ 4. Filtrar nombres que contengan la letra "a"
let nombres = ["Luis", "Camilo", "Felipe", "Ana", "Sofía"];
// Resultado esperado: ["Camilo", "Ana", "Sofía"]
Pista: usa .includes("a")
*/
let names = ["Luis", "Camilo", "Felipe", "Ana", "Sofía"];
let aux= ["a"]
let vocalA= names.filter(nombre=>nombre.toLowerCase().includes("a"))
 
console.log(vocalA)
/*
✅ 5. Filtrar productos con precio mayor a 10.000

let productos = [
  { nombre: "shampoo", precio: 8500 },
  { nombre: "crema", precio: 12000 },
  { nombre: "jabon", precio: 9500 },
  { nombre: "mascarilla", precio: 15000 },
];
// Resultado esperado: [{nombre: "crema"...}, {nombre: "mascarilla"...}]
*/
let products = [
  { nombre: "shampoo", precio: 8500 },
  { nombre: "crema", precio: 12000 },
  { nombre: "jabon", precio: 9500 },
  { nombre: "mascarilla", precio: 15000 },
];

let precioMayor10= products.filter(producto=> producto.precio>10000)
console.log(precioMayor10)
/*
✅ 6. De un arreglo de edades, guardar solo las de menores de edad
let edades = [12, 17, 20, 15, 22, 8];
// Resultado esperado: [12, 17, 15, 8]
*/

let olders = [12, 17, 20, 15, 22, 8];

let mayores= olders.filter(edad=> edad >18)

console.log("Las edades son " + " " +mayores + "Son mayores de edad")



/*
let notas = [3.5, 4.0, 2.8, 5.0];
// Resultado esperado: 3.825
*/

let notas = [3.5, 4.0, 2.8, 5.0];

let suma=0;

//FOR
for(let i=0; i<notas.length;i++){
  suma=suma+notas[i];
  
}
let promedio= suma/notas.length;
  console.log(promedio)
console.log("la suma es "+ suma)

//FOR EACH
notas.forEach(nota=>{
  suma=suma+nota;
})
let promedio1= suma/notas.length;
console.log(promedio1)

//REDUCE();

let sumas = notas.reduce((acumulador, num)=>acumulador+num,0)
console.log(sumas)

/*
✅ 2. Multiplicación de todos los elementos

let valores = [2, 3, 4];
// Resultado esperado: 24
*/

let valores = [2, 3, 4];

let multiplicar=1;

//FOR
for(let i=0; i<valores.length;i++){
  multiplicar=multiplicar*valores[i];
}

console.log(multiplicar)

//FOREACH

valores.forEach((valor=>{

  multiplicar=multiplicar*valor;
}))

cosnoel.log(multiplicar)

//REDUCE

let multi= valores.reduce((acumulador,numero)=>acumulador*numero,1);
console.log(multi)

/*
✅ 3. Calcular el promedio

let notas = [3.5, 4.0, 2.8, 5.0];
// Resultado esperado: 3.825
*/

let notes = [3.5, 4.0, 2.8, 5.0];



//REDUCE

let sumax= notes.reduce((acumulador,numero)=>{
})
  let promed= sumax/notes.length;

console.log(promed)


/*
✅ 4. Concatenar palabras en una sola frase
let palabras = ["Hola", "soy", "Camilo"];
// Resultado esperado: "Hola soy Camilo"
*/

let wordss = ["Hola", "soy", "Camilo"];

let frase = wordss.join(" ")
console.log(frase)

for(let i=0; i<wordss.length;i++){
  let frase= wordss.join( " ")
  console.log(frase)
}

/*
✅ 5. Sumar solo los números pares

let nums = [1, 4, 6, 7, 3, 8];
// Resultado esperado: 4 + 6 + 8 = 18
*/
let nums = [1, 4, 6, 7, 3, 8];

let sumaPar=0;

for(let i =0; i<nums.length;i++){
  if(nums[i]%2==0){
    sumaPar=sumaPar+nums[i]
  }
}
console.log("La suma es " + sumaPar)

/*
let notas = [2.5, 3.0, 4.7, 1.9, 3.6, 5.0, 4.0, 2.8, 3.3, 4.5];
🎯 Objetivo global:
Hacer un análisis matemático completo de esas notas.

🔧 Tareas encadenadas:
Filtrar solo las notas que son aprobadas (mayores o iguales a 3.0).

Contar cuántos estudiantes aprobaron (usando for).

Calcular el promedio general de todas las notas (reduce).

Verificar si al menos una nota fue perfecta (5.0) usando .includes().

Mostrar cada nota con forEach, diciendo si fue “Baja” (menos de 3), “Media” (entre 3 y 4), o “Alta” (más de 4).


*/
let notasPeriodo = [2.5, 3.0, 4.7, 1.9, 3.6, 5.0, 4.0, 2.8, 3.3, 4.5];

let aprobadas= notasPeriodo.filter(notas => notas>=3.0)
console.log(aprobadas)

contadorAprovador=0;

for(let i=0; i<notasPeriodo.length;i++){
  if(notasPeriodo[i]>=3){
    contadorAprovador++
  }
}
console.log("Los estudiantes que aprobaron fueron "+ contadorAprovador)

let sumaPromedioGeneral= notasPeriodo.reduce((acumulador,nota)=>acumulador+nota)
let promedioGeneral= sumaPromedioGeneral/notasPeriodo.length
console.log("El promedio general de todas las notas es " + promedioGeneral)

if(notasPeriodo.includes(5.0)){
  console.log("Si hubo nota perfecta")
}else{
  console.log("NO hubo nota perfecta")
}
let reprobados=[];

notasPeriodo.forEach((nota)=>{
  if(nota<3){
    console.log("Baja" )
    reprobados.push(nota)
  }else if(nota>=3 && nota <=4){
    console.log("Media")
  }else if(nota>4){
    console.log("ALTA")
  }
})
console.log("GURADADOS LOS REPROBADOS"+ " " +reprobados)
/*
✨ Bonus:
Calcular cuántos puntos faltaron en total entre todos los reprobados para llegar a 3.0 (¡ejercicio de lógica!).
*/

reprobados.forEach((nota)=>{
  let notaReprobado= 3.0-nota;
  console.log("Te falto" + notaReprobado)
})

/*
✅ 1. Análisis de ventas diarias

let ventas = [120.000, 95.000, 150.000, 50.000, 175.000, 200.000, 30.000];
📌 Tareas:

Filtra las ventas mayores a 100.000.

Cuenta cuántas fueron menores a 80.000.

Calcula el total de ventas con reduce().

Clasifica cada venta: “Baja” (< 80.000), “Media” (80k-150k), “Alta” (>150k).

Calcula cuánto faltó a las bajas para llegar a 80.000.
*/

let ventas = [120000, 95000, 150000, 50000, 175000, 200000, 30000];

let ventasMayores= ventas.filter(venta=>venta>100.000)
console.log("Las ventas mayores a 100.000 son :" + " " + ventasMayores);

let cont=0;
for(let i =0; i<ventas.length;i++){
  if(ventas[i]<80000){
    cont++;
  }
}
console.log("Las ventas mayores a 80.000 son:" + " " + cont)

let totalVentas = ventas.reduce((acumulador,venta)=> acumulador+venta);
console.log("El total de las ventas es de : " + " " + totalVentas)

let ventasBajas= [];
for(let i = 0; i<ventas.length;i++){
  if(ventas[i]<80000){
    console.log(`LA VENTA ${i+1} ES BAJA`)
    ventasBajas.push(ventas[i])
  }else if(ventas[i]>80000 && ventas[i]<=150000){
    console.log(`LA VENTA ${i+1} ES MEDIA`)
  }else if(ventas[i]>150000){
    console.log(`LA VENTA ${i+1} ES ALTA`)
  }
}
console.log("LAS VENTAS BAJAS SON : " + " "+ ventasBajas)

ventasBajas.forEach((venta)=>{
  let alcanzarMeta= 80000-venta
  console.log("Las ventas para alcanzar la meta de 80000 les falta:" + " " + alcanzarMeta)
})

/*
let edades = [17, 22, 15, 30, 18, 19, 40, 13, 28, 21];
📌 Tareas:

Filtra mayores de edad (>=18).

Cuenta cuántos son menores de edad.

Calcula la edad promedio.

Verifica si alguien tiene 40 años exactos.

Usa forEach para imprimir: "Edad: 30 - Adulto" o "Edad: 15 - Menor".


*/

let older = [17, 22, 15, 30, 18, 19, 40, 13, 28, 21];

let mayorEdad= older.filter(edad=>edad>=18);
console.log(`Los mayores de edad son ${mayorEdad}`)

let contadorMenoresEdad=0;
for(let i=0; i<older.length;i++){
  if(older[i]<18){
    contadorMenoresEdad++
  }
}
console.log(`Hay ${contadorMenoresEdad} menores de edad`)

let sumaEdad= older.reduce((acumulador,edad)=>acumulador+edad);
let promedioEdad= sumaEdad/older.length;
console.log(`La edad promedio es ${promedioEdad}`)

if(older.includes(40)){
  console.log(`Si hay alguien con 40 años exacto`)
}else{
  console.log("No hay nadie con 40 años exactos")
}

older.forEach((edad)=>{
  if(edad>=18){
    console.log(`Edad ${edad} ADULTO`)
  }else if(edad<18){
    console.log(`Edad ${edad} MENOR`)
  }
})

/*
✅ 4. Comparación de dos listas de números

let listaA = [1, 2, 3, 4, 5];
let listaB = [3, 4, 5, 6, 7];
📌 Tareas:

Encuentra los números que están en ambas listas (intersección).

Filtra los que están solo en listaA.

Suma los valores de listaB con reduce.

Verifica si algún número del 1 al 10 no aparece en ninguna.
*/
let listaA = [1, 2, 3, 4, 5];
let listaB = [3, 4, 5, 6, 7];
let nuevos=[];
let listac= listaA.concat(listaB)
console.log(listac)

for(let i=0; i<listaA.length;i++){
  for(let j=0; j<listaB.length;j++){
    if(listaA[i]== listaB[j]){
      nuevos.push(listaA[i])
    }
  }
}
console.log(nuevos)

//Filtrar todos los elementos de la lsita A pero que no esten en B
let filtrados = listaA.filter(elemento=> !listaB.includes(elemento))
console.log(filtrados)

let sumalistaB= listaB.reduce((acumulador,elemento)=> acumulador+elemento)
console.log(`La suma es ${sumalistaB}`)


if(listaA.includes(10)){
  console.log("TODOS LOS NUMEROS ESTAN PRESENTES")
}else{
  console.log("No todos estan presentes")

}

let faltantes = [];

for (let i = 1; i <= 10; i++) {
  if (!listaA.includes(i) && !listaB.includes(i)) {
    faltantes.push(i);
  }
}

if (faltantes.length === 0) {
  console.log("Todos los números del 1 al 10 están presentes en alguna de las listas.");
} else {
  console.log("Faltan estos números del 1 al 10:", faltantes);
}

/*
🔹 1. Intersección de listas
Objetivo: Mostrar los números que aparecen en ambas listas.

js
Copiar
Editar
let lista1 = [2, 4, 6, 8, 10];
let lista2 = [1, 2, 3, 6, 9];
🔸 Resultado esperado: [2, 6]
✅ Usa .filter() + .includes()
*/
let lista1 = [2, 4, 6, 8, 10];
let lista2 = [1, 2, 3, 6, 9];

let nuevaLista= lista1.filter(elemento=>lista2.includes(elemento));
console.log(nuevaLista)


/*
🔹 2. Elementos únicos de cada lista
Objetivo: Mostrar los elementos que solo están en una lista, pero no en ambas.

js
Copiar
Editar
listaA = [1, 3, 5, 7];
listaB = [3, 4, 5, 8];
🔸 Resultado esperado: [1, 7, 4, 8]
✅ Puedes usar dos .filter() y luego unir con .concat().
*/

let listaAA = [1, 3, 5, 7];
let listaBB = [3, 4, 5, 8];

let listaNueva= listaAA.filter(elemento=> !listaBB.includes(elemento))
console.log(listaNueva)

let listaNueva2= listaBB.filter(elemento=> !listaAA.includes(elemento))
console.log(listaNueva2)

let listaCC= listaNueva.concat(listaNueva2)
console.log(listaCC)

/*
🔹 3. ¿Cuántos elementos comparten las dos listas?
Objetivo: Contar cuántos elementos coinciden entre ambas listas.

js
Copiar
Editar
listaX = [10, 20, 30, 40];
listaY = [15, 20, 35, 40, 60];
🔸 Resultado esperado: 2 (porque coinciden 20 y 40)

✅ Usa un contador con .forEach() y .includes().
*/

listaX = [10, 20, 30, 40];
listaY = [15, 20, 35, 40, 60];

let contadorElelementos=0;

listaX.forEach(elemento=>{
  listaY.forEach(elemento2=>{
    if(elemento==elemento2)
      contadorElelementos++;
  })
})
console.log(contadorElelementos)

/*
🔹 4. Suma combinada
Objetivo: Sumar todos los números de ambas listas usando .reduce().

js
Copiar
Editar
let precios1 = [1000, 2500, 800];
let precios2 = [300, 1200, 700];
🔸 Resultado esperado: Total: 6500
*/

let precios1 = [1000, 2500, 800];
let precios2 = [300, 1200, 700];

let sumaPrecioLista1= precios1.reduce((acumulador,precio)=>acumulador+precio);
console.log(sumaPrecioLista1)

let sumaPrecioLista2= precios2.reduce((acumulador,precio)=>acumulador+precio)
console.log(sumaPrecioLista2)

let sumaTotal= sumaPrecioLista1+sumaPrecioLista2
console.log("La suma de las dos lsitas es " + " " +sumaTotal)

/*
🔹 5. Filtrar valores mayores a 5, pero solo si están en ambas listas
js
Copiar
Editar
a = [2, 4, 6, 8, 10];
b = [1, 6, 8, 12];
🔸 Resultado esperado: [6, 8]
✅ Primero haz la intersección, luego filtra los mayores a 5.
*/

let a = [2, 4, 6, 8, 10];
let b = [1, 6, 8, 12];


let filtro= a.filter(valor=>  b.includes(valor));
console.log(filtro);

/*
✅ Ejercicio integral con dos listas

let productosA = ["arroz", "pan", "leche", "huevos", "tomate", "carne"];
let productosB = ["queso", "pan", "pollo", "leche", "arroz", "aceite"];
📌 Enunciado completo:
Una tienda está comparando dos listas de productos vendidos por dos sucursales (productosA y productosB). Realiza el siguiente análisis:

Mostrar los productos que ambas sucursales vendieron. (intersección)
👉 Usa .filter() + .includes()

Mostrar los productos que vendió cada sucursal pero no la otra.
👉 Usa .filter() + .concat()

Unir todas las ventas en una sola lista (sin importar repetidos) y mostrarlas como una cadena separada por comas.
👉 Usa .concat() + .join()

Verificar si se vendió el producto “café”.
👉 Usa .includes()

Recorrer todos los productos y mostrar: "Producto: arroz - Sucursal: A" o "Producto: queso - Sucursal: B"
👉 Usa .forEach()

Crear una nueva lista donde cada producto de productosA esté en mayúscula.
👉 Usa .map()

Invertir el orden de productosB.
👉 Usa .reverse()
*/

let productosA = ["arroz", "pan", "leche", "huevos", "tomate", "carne"];
let productosB = ["queso", "pan", "pollo", "leche", "arroz", "aceite"];

let productosVendidosA= productosA.filter(producto=> !productosB.includes(producto))
console.log("Los productos vendidos fueron " + " " + productosVendidosA)

let productosVendidosB= productosB.filter(producto=> !productosA.includes(producto))
console.log("Los productos vendidos fueron " + " " + productosVendidosB)

let productosVendidosC= productosA.filter(producto=> productosB.includes(producto))
console.log("Los productos vendidos fueron " + " " + productosVendidosC)

let productosVendidosD= productosB.filter(producto=> productosA.includes(producto))
console.log("Los productos vendidos fueron " + " " + productosVendidosD)

let productosVendidos= productosVendidosA.concat(productosVendidosB)
let productosVendidos2= productosVendidosC.concat(productosVendidosD)

console.log("LOS PRODUCTOS VENDIDOS SON :"+ " " + productosVendidos)
console.log("LOS PRODUCTOS VENDIDOS SON :"+ " " + productosVendidos2)

let productosTotalmenteVendidos= productosVendidos.concat(productosVendidos2)
console.log("LOS PRODUCTOS VENDIDOS SON :"+ " " + productosTotalmenteVendidos)


let c = productosA.concat(productosB)
c.join(",")
console.log(c)

if(c.includes("cafe")){
  console.log("El producto cafe  esta ");
}else{
  console.log("Cafe no esta")
}

productosA.forEach(productoA=>{
      console.log(`Producto ${productoA} sucursal A`)

 
})
 productosB.forEach(productoB=>{
    console.log(`Producto ${productoB} sucrusal B`)
  })


let mayusculaA= productosA.map(productos=>productos.toUpperCase())
console.log(mayusculaA)

let productosReversos= productosB.reverse();
console.log(productosReversos)

/*
🧠 Ejercicio global de lógica (sin mencionar métodos):
Tienes dos listas de precios de productos vendidos en dos tiendas diferentes:


let tiendaA = [5000, 12000, 8000, 15000, 9000, 4000];
let tiendaB = [4000, 9000, 20000, 15000, 3000, 10000];
🎯 Tareas:
Encuentra los precios que se repiten en ambas tiendas.

Muestra solo los precios de la tienda A que no aparecen en la tienda B.

Cuenta cuántos productos en la tienda B valen menos de 10.000.

Calcula el total de ingresos de cada tienda (por separado).

Muestra si hay algún producto que cueste exactamente 20.000.

Por cada precio de tienda A, muestra si es “barato” (< 7000), “medio” (entre 7000 y 14000), o “caro” (> 14000).


*/

let tiendaA = [5000, 12000, 8000, 15000, 9000, 4000];
let tiendaB = [4000, 9000, 20000, 15000, 3000, 10000];

let precioRepitentes= tiendaA.filter(precio=> tiendaB.includes(precio))
console.log(`Los productos que se repiten son : ${precioRepitentes}`)

let diferentesPrecios= tiendaA.filter(precio=> !tiendaB.includes(precio));
console.log(`Los precios que aparecen en A pero no en B son : ${diferentesPrecios}`)

let contadordePrecios=0;
for(let i =0; i<tiendaB.length;i++){
  if(tiendaB[i]<10000){
    contadordePrecios++;
  }
}
console.log(`Los productos que valen menos de 10.000 son : ${contadordePrecios}`)

let totalIngresosA= tiendaA.reduce((acumulador,precio)=>acumulador+precio);
console.log(`El ingreso de la tienda A es : $ ${totalIngresosA}`)

let totalIngresosB= tiendaB.reduce((acumulador,precio)=>acumulador+precio)
console.log(`El ingreso total de la tienda B es : $ ${totalIngresosB}`)

if(tiendaA.includes(20000) || tiendaB.includes(20000)){
  console.log("SI HAY UN PRECIO DE 20000")
}else{
  console.log("No hay un valor igual de 20000")
}

tiendaA.forEach(precio=>{
  if(precio<7000){
    console.log(`Precio ${precio} esta barato`)
  }else if(precio>=7000 && precio<=14000){
    console.log(`Precio ${precio} esta medio`)
  }else if(precio>14000){
    console.log(`Precio ${precio} esta caro`)
  }
})

/*
let productos = ["Arroz", "Papa", "Carne", "Huevos", "Leche", "Café", "Pan", "Queso"];
let precios = [4500, 3200, 12500, 9800, 4100, 15000, 2700, 8900];
🎯 Tareas:





BONUS: Crea un nuevo arreglo de objetos, donde cada objeto tenga el nombre y el precio del producto.


*/

let productoss = ["Arroz", "Papa", "Carne", "Huevos", "Leche", "Café", "Pan", "Queso"];
let precios = [4500, 3200, 12500, 9800, 4100, 15000, 2700, 8900];

//Muestra los productos cuyo precio sea mayor o igual a 10.000.

for(let i = 0 ;i<precios.length; i++){
  if(precios[i]>=10000){
    console.log(`Producto : ${productoss[i]}El precio es $${precios[i]}`)
  }
}



//Calcula el precio total del inventario.
let precioTotalInventario= precios.reduce((acumulador,precio)=> acumulador+precio)
console.log(`El precio total del inventario es de $${precioTotalInventario} pesos`)

//Cuenta cuántos productos tienen un precio menor a 5.000.
let contadorProductos=0;

for(let i =0; i<precios.length;i++){
  if(precios[i]<5000){
    contadorProductos++
  }
}
console.log("Hay"+ " " + contadorProductos)

//Verifica si hay un producto que cueste exactamente 15.000.

if(precios.includes(15000)){
  console.log("SI HAY PRODCUTO CON VALOR DE 15OOO")
}else{
  console.log("No hay prodcuto con valor de 15000")
}

/*

Muestra un mensaje para cada producto:
"Café cuesta 15000 - Producto caro"
"Papa cuesta 3200 - Producto barato"
Usa los siguientes criterios:

Menor a 5000 → “barato”

Entre 5000 y 10.000 → “normal”

Mayor a 10.000 → “caro”
*/


for(let i = 0; i<precios.length; i++){
  if(precios[i] <5000){
    console.log(`${productoss[i]} cuesta $${precios[i]} pesos - Producto barato`)
  }else if(precios[i]>=5000 && precios[i]<=10000){
  console.log(`${productoss[i]} cuesta $${precios[i]} pesos - Producto normal`)
 }else if(precios[i]>10000){
  console.log(`${productoss[i]} cuesta $${precios[i]} pesos - Producto caro`) 
  
 }
}


/*
🎯 Tareas (no se mencionan métodos, tú decides cuáles usar):





*/

let equipos = ["Tigres", "Leones", "Águilas", "Pumas", "Toros", "Cóndores", "Panteras", "Tiburones"];
let puntajes = [15, 12, 18, 7, 22, 19, 5, 10];

//Muestra los equipos que obtuvieron más de 15 puntos.
for(let i =0; i<puntajes.length; i++){
  if(puntajes[i]>15){
    console.log(`Los equipos que obtuvieron mas de 15 puntos fueron ${equipos[i]} con ${puntajes[i]}`)

  }
}

//Cuenta cuántos equipos tuvieron 10 puntos o menos.
let contadorDeEquipos=0;

for( let i = 0 ; i<puntajes.length;i++){
  if(puntajes[i]<=10){
    contadorDeEquipos++;
  }
}
console.log("Los equipos que sacaron menos o igual a 10 puntos fueron  " + "  "+ contadorDeEquipos)

//Calcula la suma total de los puntajes.
let sumaTotalPuntajes= puntajes.reduce((acumulador,puntaje)=> acumulador+puntaje);
console.log(`La suma total de los puntajes es de : ${sumaTotalPuntajes}`)

//Verifica si algún equipo obtuvo exactamente 20 puntos.
if(puntajes.includes(20)){
  console.log("Si, un equipo tuvo exactamente 20 puntos")
}else{
  console.log("No hubo un equipo con 20 puntos")
}

/*
Por cada equipo, muestra un mensaje según su puntaje:

"Alto" si tiene más de 15 puntos.

"Medio" si tiene entre 10 y 15 puntos.

"Bajo" si tiene menos de 10 puntos.
*/


puntajes.forEach(puntaje=>{
  if(puntaje>15){
    console.log("ALTO")
  }else if (puntaje>=10 && puntaje<=15){
    console.log("MEDIO")
  }else if(puntaje <10){
    console.log("BAJO")
  }
})

//Muestra los nombres de los equipos que NO obtuvieron más de 15 puntos.

for( let i =0; i<puntajes.length;i++){
  if(puntajes[i]<15){
    console.log(`Los equipos que no obtuviero mas de 15 puntos fueron : Equipo - ${equipos[i]} - ${puntajes[i]}`)
  }
}

puntajes.forEach((puntaje,i)=>{
  if(puntaje<15){
    console.log(`Los equipos que no obtuvieron mas da 15 puntos fueron : Pumtaje ${puntaje} - Equipo ${equipos[i]}`)
  }
})

/*
🧠 Ejercicio Final - Análisis de estudiantes


🎯 Tareas (usa solo tu análisis para elegir métodos):






Muestra los nombres de los estudiantes que no aprobaron.


*/

let estudiantes = ["Laura", "Mateo", "Sofía", "Juan", "Valentina", "Andrés", "Camila", "Carlos"];
let notasFinales = [4.8, 2.9, 3.5, 1.8, 5.0, 3.0, 2.5, 4.2];

//Muestra los estudiantes que aprobaron (nota mayor o igual a 3.0).
console.log("_____ ESTUDIANTES APROBADOS________")

for(let i =0 ; i<notasFinales.length;i++){
  if(notasFinales[i]>=3.0){
    console.log(`Los estudiantes aprobados fueron - ${estudiantes[i]} - Nota: ${notasFinales[i]}`)
  }
}
console.log("\n")
console.log("_____ ESTUDIANTES REPROBADOS_______")
//Cuenta cuántos reprobaron.
notasFinales.forEach((nota,i)=>{
  if(nota<3.0){
    console.log(`Los estudiantes reprobados fueron - ${estudiantes[i]} - Nota: ${nota}`)
  }
})

console.log("\n")
console.log("_____ Promedio de las notas_____")
//Calcula el promedio general de las notas.
let sumaNotas= notasFinales.reduce((acumulador,nota)=>acumulador+nota);
let promedioNotas= sumaNotas/ notasFinales.length;

console.log("El promedio de las notas son : " + " " + promedioNotas)


//Verifica si alguien sacó 5.0 exacto.
if(notasFinales.includes(5.0)){
  console.log("SI HAY UN 5 EXACTO")
}else{
  console.log("NO HAY 5 EXACTO")
}

/*
Muestra un mensaje por cada estudiante según su nota:

Menor a 3.0: “Reprobado”

Entre 3.0 y 4.0: “Aprobado”

Mayor a 4.0: “Excelente”
*/

notasFinales.forEach((nota,i)=>{
  if(nota<3.0){
    console.log(`Estudiante ${estudiantes[i]} - NOTA: ${nota} - REPROBADO`)
  }else if(nota>=3.0 && nota<=4.0){
    console.log(`Estudiante ${estudiantes[i]} - NOTA: ${nota} - APROBADO`) 
  }else if(nota>4.0){
   console.log(`Estudiante ${estudiantes[i]} - NOTA: ${nota} - EXCELENTE`) 

  }
})