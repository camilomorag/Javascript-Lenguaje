    /*
 MÓDULO 2: Arreglos (Arrays) y Objetos
 Un arreglo (o array) es una lista de elementos. Se usan para guardar varios datos en una sola variable.


*/

let frutas= ["manzana","mango","pera" ,"sandia"];

console.log(frutas);

//Acceder a un elemento del arreglo
console.log(frutas[0]);
console.log(frutas[1])

//Cambiar un valor del arreglo
frutas[3]="Banano";
console.log(frutas);

//Agregar o eliminar elemetos del arreglo
frutas.push("uva"); //agrega al final
console.log(frutas)

frutas.pop(); // Elimina el ultimo;
console.log(frutas)

frutas.unshift ("Anon") //Agrega al inicio
console.log(frutas); 

frutas.shift();
console.log(frutas); //Elimina el primero

//Cantidad de elementos en el arreglo
console.log(frutas.length);

let numeros=[20,40,50,30,20];

for(let i=0; i<numeros.length;i++){

    if(numeros[i]==30){
        console.log(`Te encontre numero ${numeros[i]} en la posicion ${(i+1)}`)
            break;

    }
}

//FUNCIONES DE LOS ARRELGOS

/*
🔁 1. forEach()
👉 Recorre todos los elementos de un arreglo, uno por uno.

arreglo.forEach(function(elemento, índice) {
  // Código que se ejecuta por cada elemento
});

*/
let frutas = ["manzana", "pera", "uva"];

frutas.forEach(function(fruta, i) {
  console.log(`Fruta #${i + 1}: ${fruta}`);
});

/*
🔍 2. includes()
👉 Verifica si un valor existe dentro de un arreglo.
🔹 Devuelve true o false.

arreglo.includes(valor);

*/
let colores = ["rojo", "verde", "azul"];

console.log(colores.includes("verde")); // true
console.log(colores.includes("amarillo")); // false


// INCLUDE, JOIN, REVERSE CON FOR EACH

/*
🔁 .forEach() + .join()
📌 ¿Qué hace .join()?
Une todos los elementos del arreglo en una sola cadena de texto, separados por lo que tú le digas (espacio, coma, guion...).
*/

let palabras=["Hola" , "JavaScript", "Como estas"]

let unir= palabras.join(" ");
console.log(unir)

/*
🔄 .forEach() + .reverse()
📌 ¿Qué hace .reverse()?
Invierte el orden de los elementos del arreglo.
*/

let reversa=[1,2,3,4];

reversa.reverse();

reversa.forEach((numeros)=>{
  console.log(numeros)
})

/*
🔍 .forEach() + .includes()
📌 ¿Qué hace .includes()?
Verifica si un valor existe dentro del arreglo. Retorna true o false.


*/

let names=["Camilo", "Andres","Maria"]

if(names.includes("Camilo")){
  console.log("Si esta en la lista")
    
  }else{
    console.log("no esta en la lista")
  }

//Funciones 

/*
🔹 2. .map()
✅ Qué hace: Crea un nuevo arreglo con lo que devuelvas en cada vuelta
🛠️ Cuándo usar: Cuando necesitas transformar cada elemento

let nuevoArreglo = arregloOriginal.map((elemento, indice) => {
  // return lo que quieres guardar en el nuevo arreglo
});

*/
let numeros1 = [1, 2, 3];

let alCuadrado = numeros1.map(num => num * num);
console.log(alCuadrado); // [1, 4, 9]

/*
🧠 ¿Qué hace .filter()?
Crea un nuevo arreglo con solo los elementos que cumplan una condición.

let nuevoArreglo = arregloOriginal.filter((elemento, indice) => {
  return condición; // true para conservarlo, false para descartarlo
});

🎯 ¿Cuándo usar .filter()?
Cuando necesitas:

Seleccionar ciertos elementos

Eliminar lo que no cumple

Crear un subconjunto de datos


*/

/*
✅ Ejemplo 1: Filtrar números mayores a 10

*/
let numeros2 = [5, 12, 8, 30];

let mayoresA10 = numeros2.filter(num => num > 10);

console.log(mayoresA10); // [12, 30]

/*
METODO REDUCE();
🧠 ¿Qué hace .reduce()?
.reduce() toma todos los elementos de un arreglo y los reduce a un solo valor (puede ser un número, string, objeto, etc.).

let resultado = arreglo.reduce((acumulador, elementoActual) => {
  return nuevoAcumulador;
}, valorInicial);

✅ ¿Para qué sirve?
Sumar cosas (precios, puntos, edades…)

Contar elementos

Combinar objetos

Crear strings

¡Y mucho más!


*/
