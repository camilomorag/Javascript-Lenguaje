/*
Pequeños ejercicios (inténtalos tú)

*/

//Crea un array de 4 animales.
let animales=["perro","gato","caballo","pescado"];

//Imprime el segundo animal.
console.log(animales[1])

//Cámbialo por otro.
animales[1]="Ballena";
console.log(animales)

//Agrega uno nuevo al final.
animales.push("Orca");
console.log(animales)

//Elimina el primero.
animales.shift();
console.log(animales)

//Imprime cuántos hay.
console.log(animales.length);

/*
✅ 1. Crear y mostrar
Crea un arreglo con al menos 5 países de Latinoamérica y:
*/
let paises =["colombia","argentina","bolivia","brasil","costarica"];

//Muestra el primer país
console.log(paises[0]);

//Muestra el último país
console.log(paises[4]);

//Muestra cuántos países hay
console.log(paises.length);



/*✅ 2. Modificar valores
Con un arreglo de 4 colores:
*/
let colores=["azul","verde","rojo"]

//Cambia el segundo color por otro
colores[1]="amarillo";
console.log(colores)

//Agrega un color al final
colores.push("AguaMarina")
console.log(colores)

//Quita el primero
colores.shift();

//Imprime el arreglo actualizado
console.log(colores)

/*
✅ 3. Buscar elementos
Con un arreglo de frutas:
*/
//Verifica si incluye "mango" usando .includes()

//Si está, imprime "Sí hay mango"

//Si no está, imprime "No hay mango"

/*✅ 4. Recorrer el arreglo
Con un arreglo de 5 números:
*/

let numeros=[0,40,300,10]
//Recorre el arreglo usando for
 for(let i=0; i<numeros.length;i++){
    console.log(numeros[i])
 }
//Imprime solo los números mayores a 10

for(let i=0; i<numeros.length;i++){
   if(numeros[i]>10){
      console.log("Los numeros mayores a 10 son"+numeros[i])
   }else{
      console.log("los que no"+numeros[i])
   }
}

/*
 5. Promedio de notas
Crea un arreglo con 4 notas (por ejemplo: [4.5, 3.2, 2.9, 5.0])
Calcula el promedio usando un bucle for.
*/

let notas=[];

let suma=0;
for(let i=0; i<notas.length;i++){
   
    suma=suma+notas[i];
    console.log(`La suma es ${suma}`)
}
let promedio= suma/notas.length;
console.log(promedio);

/*
✅ 1. Doblar los números
Crea un arreglo de 5 números. Recorre el arreglo y crea un nuevo arreglo con el doble de cada número.

🔹 Usa un for


*/

let num=[2,4,6,8,10];
let doble=[];
for(let i=0;i<num.length;i++){

   let resultado= num[i]*2;
   doble.push(resultado)
}
console.log(doble)


/*
✅ 2. Filtrar números pares
Crea un arreglo de 10 números.
Recorre el arreglo y guarda en uno nuevo solo los pares.
Imprímelo.

🔹 Usa if (num % 2 === 0)
*/

let pares=[20,50,100,5,10,4,3,70,35,25];
let soloPares=[];

for(let i =0; i<pares.length;i++){

   if(pares[i]%2==0){
      soloPares.push(pares[i]);
   }
   
}
console.log(soloPares)

/*
✅ 6. Contar cuántas veces aparece un número
Crea un arreglo de números donde algunos se repitan.
Cuenta cuántas veces aparece el número 7, por ejemplo.

🔹 Usa un contador con if (num === 7)


*/
let aparecer=[1,2,7,7,5,7,20,40,7,20];

let cont=0;

for(let i=0; i<aparecer.length;i++){

   if(aparecer[i]==7){
      cont++;
      console.log(`El numero 7 esta en la posicion`+i)
   }
}
console.log(`Esta`+cont)

/*
1. Sumar solo los impares
Dado un arreglo de números, suma solo los impares.

let numeros = [4, 7, 2, 9, 10, 3]; // Resultado: 7 + 9 + 3 = 19
*/

let sumaImpares=0;

let impares=[4,5,6,10,40,3]
for(let i =0; i<impares.length;i++){

   if(impares[i]%2 !=0){
      console.log(impares[i])
      sumaImpares+=impares[i];

   }
}

console.log("La suma de los imapres es:"+ sumaImpares);

/*
✅ 7. Promedio de temperaturas
Dado un arreglo de temperaturas diarias, calcula el promedio y di si estuvo “caluroso” (promedio > 30), “templado” (entre 20 y 30), o “frío” (menos de 20).
*/

let temperaturas=[30,50,80,10,30,70];

let sumaTemp=0;

for(let i=0; i<temperaturas.length;i++){
   sumaTemp=sumaTemp+temperaturas[i];
 
}

  let promedioTemp= sumaTemp/temperaturas.length;

   if(promedioTemp>30){
      console.log(`La temperatura fue de ${sumaTemp}, el promedio fue de ${promedioTemp} El dia estuvo caluroso`)
   }else if(promedioTemp>=20 && promedio<=30){
      console.log(`La temperatura fue de ${sumaTemp}, el promedio fue de ${promedioTemp} El dia estuvo Templado`)
   }else if(promedioTemp>20){
      console.log(`La temperatura fue de ${sumaTemp}, el promedio fue de ${promedioTemp} EL dia estuvo frio`)
   }

   // FOREACH CON ARREGLOS

   let frutas= ["manzana", "pera", "banano","mango"];

   frutas.forEach((frutas,i)=>{

      console.log(`La fruta numero : ${i+1} es ${frutas}`)
   });

   /*
 1. Multiplicar y mostrar cada número por 10

let numeros = [1, 2, 3, 4, 5];
// Resultado esperado: 10, 20, 30, 40, 50
   */

let numm=[2,4,6,8,10];

numm.forEach((num,i) =>{
   console.log(`El numero ${num} esta en la poscicion ${i+1}`)
   let res=num*10;
   console.log(`EL numero ${num} multiplicado por 10 es ${res}`)
});

/*
 2. Mostrar solo nombres en mayúsculas
let nombres = ["ana", "camilo", "laura"];
// Resultado esperado: ANA, CAMILO, LAURA
*/

let names=["camilo","JUAN","CAMILO ", "ANDREA","andres"];

   names.forEach((nombres,i)=>{

      if(nombres== nombres.toUpperCase()){
         console.log(nombres)
      }
   })

/*
1. Mostrar el doble de cada número

let numeros = [2, 4, 6, 8];
// Resultado esperado: 4, 8, 12, 16
*/

let numeros2=[2,4,6,8];

numeros2.forEach((numero,i)=>{
   let doble =numero*2;
   console.log(`El doble del numero en la posicion ${i+1} , ${numeros2[i]} es ${doble}`)   
})

/*
 2. Imprimir el índice y valor de cada elemento

let nombres = ["Ana", "Luis", "Camilo"];
// Resultado esperado:
// Posición 0: Ana
// Posición 1: Luis
// Posición 2: Camilo
*/

let nombres =["Ana", "Luis", "Camilo"];

nombres.forEach((nombre,i)=>{
   console.log(`Posicion ${i+1}: ${nombres[i]}`)
})

/*
✅ 4. Sumar todos los precios
let precios = [10, 15, 20, 5];
// Resultado esperado: 50
*/

let precios=[10,15,20,5]

let sum=0;

precios.forEach((precio,i)=>{
   sum=sum+precios[i];
   console.log(`La suma en la vuelta ${i+1} es ${sum}`)
   
})

/*
✅ 5. Imprimir si cada número es par o impar
let numeros = [1, 2, 3, 4, 5];
// Resultado esperado:
// 1 es impar
// 2 es par
// ...
*/

let num2=[1,2,4,5];

num2.forEach((numeros,i)=>{
   if(num2[i]%2==0){
      console.log(`Los pares son ${num2[i]}`)
   }else if(num2[i]%2 !=0){
      console.log(`Los impares son: ${num2[i]}`)
   }
})

/*
✅ 6. Mostrar todos los elementos en mayúsculas

let frutas = ["manzana", "pera", "uva"];
// Resultado: MANZANA, PERA, UVA
*/

let palabras=["manzana","pera","uva"];

palabras.forEach((fruta,i)=>{
   let enMasyucula= fruta.toUpperCase();
   console.log(enMasyucula);
})

/*
✅ 7. Imprimir un mensaje según la calificación

let notas = [4.5, 2.8, 3.9, 1.0];
// Si es mayor o igual a 3 → "Aprobado", si no → "Reprobado"
*/

let sumaPromedio=0;

let not=[4.5,2.8,3.9,1.0];

not.forEach((notas,i)=>{
   sumaPromedio=sumaPromedio+not[i];

  
})
   let promedioTotal= sumaPromedio/not.length;

 if(promedioTotal>=3){
      console.log(`Tu promedio ha sido de ${promedioTotal}, Aprobado`)
   }else if(promedioTotal<=3){
      console.log(`Tu promedio ha sido ${promedioTotal}, Reprobado`)
   }


/*
🔁 2. Imprimir al revés usando .reverse()

let letras = ["a", "b", "c", "d"];
// Resultado esperado: d, c, b, a

*/

let letras=["a","b","c","d"]

letras.reverse();

letras.forEach((letra)=>{
   console.log(letra)
})

/*
🔍 3. Buscar si una fruta está en la lista

let frutas = ["manzana", "pera", "uva"];
// Verifica si "sandía" está en el arreglo
*/

let fruits=["manzana","pera","uva"]

if(fruits.includes("manzana")){
   console.log("Si esta la palabra en la lista")
}else{
   console.log("No esta en la lista")
}

/*
🎯 4. Recorre nombres y di si uno existe (con includes)

let nombres = ["Laura", "David", "Camilo"];
let buscar = "Camilo";

// Usa includes y forEach para mostrar:
// - "Camilo está en la lista" si lo encuentra
// - y mostrar todos los nombres con forEach
*/

let namess=["Laura","Camilo","David"];

let buscar="Camilo"

if(namess.includes("Camilo")){
   console.log(`El nombre ${buscar} esta en la lista`)
}else{
   console.log(`El nombre ${buscar} no esta en la lista`)

}
namess.forEach((nombres,i)=>{
  console.log(namess[i])
})

/*
 1. Unir una frase con .join()

let saludo = ["Hola", "Camilo", "¿cómo", "estás?"];
// Resultado esperado: "Hola Camilo ¿cómo estás?"

*/

let saludo = ["Hola", "Camilo", "¿cómo", "estás?"];

let frase= saludo.join(" ");
console.log("TU saludo fue"+ " " + frase)


// EJERCIOS DE FOR Y FOREACH

/*
✅ 1. Mostrar el doble de cada número

let numeros = [1, 2, 3, 4, 5];
// Resultado esperado: 2, 4, 6, 8, 10
*/

let numeros3=[1,2,3,4,5];

console.log("USANDO EL CICLO FOR")
for(let i=0; i<numeros3.length;i++){
   let doble= numeros3[i]*2;
   console.log(`El doble de ${numeros3[i]} es ${doble}`)
}

console.log("Usando el ciclo Foreach")
numeros3.forEach((numero,i)=>{
   let doble=numero*2;
   console.log(`El doble de ${numeros3[i]} es ${doble}`)
})

/*
 2. Sumar todos los elementos del arreglo

let precios = [100, 250, 50];
// Resultado esperado: 400
*/

let precioss=[100,250,50];

console.log("Unsando el ciclo for");

let sumaElementos=0;
for(let i =0; i<precioss.length;i++){
   sumaElementos=sumaElementos+precioss[i];
}
console.log(sumaElementos)

console.log("Usando ciclo ForEach");

precioss.forEach((precio)=>{
   sumaElementos=sumaElementos+precio;
   
})
console.log(sumaElementos)

/*
✅ 3. Imprimir solo los números mayores a 10

let valores = [5, 12, 8, 30, 2];
// Resultado esperado: 12, 30
*/

let valores=[5,12,8,30,2];

for(let i=0; i<valores.length;i++){
   if(valores[i]>10){
      console.log(`Los numeros mayores a 10 son ${valores[i]}`)
   }
}

valores.forEach((valor)=>{
   if(valor>10){
      console.log(`Los valores mayores a 10 son ${valor}`)
   }
})

/*
✅ 4. Mostrar los índices y los valores

let letras = ["a", "b", "c"];
// Resultado esperado:
// Índice 0: a
// Índice 1: b
// Índice 2: c
*/
let letters=["a","b","c","d"];

console.log("Usando el ciclo for");

for(let i =0; i<letters.length;i++){
   console.log(`Indice ${i+1} : ${letters[i]}`)
}

letters.forEach((letra,i)=>{
   console.log(`Indice ${i+1}: ${letra}`)
})


/*
✅ 5. Contar cuántos números son pares

let numeros = [2, 3, 4, 7, 10, 11];
// Resultado esperado: 3 pares
*/

let numbers=[2,3,4,7,10,11];

let contador=0;

console.log("Usando el ciclo For")
for(let i=0; i<numbers.length;i++){
   if(numbers[i]%2==0){
      contador++
   }
}

console.log(`Los numeros pares son ${contador}`)

console.log("Usando el ciclo ForEach")
numbers.forEach((numero)=>{
   if(numero%2==0){
      contador++;
   }
})

console.log(`Los numeros pares son ${contador}`)

/*
✅ 6. Imprimir nombres en mayúsculas

let nombres = ["camilo", "luis", "diana"];
// Resultado esperado: CAMILO, LUIS, DIANA
*/

let nam=["camilo","andrea","luis"];

console.log("Usando el ciclo for")
for(let i=0; i<nam.length;i++){
   let esMayuscula= nam[i].toUpperCase();
   console.log(`Los nombres en mayuscula son ${esMayuscula}`)
}


console.log("Usando el ciclo ForEACH")
nam.forEach((nombre)=>{
   let esMayuscula=nombre.toUpperCase();

   console.log(`Los nombres en mayusucula son ${esMayuscula}`)
})

/*
✅ 7. Verificar si el número 7 está en el arreglo

let numeros = [1, 3, 7, 9];
// Resultado esperado: "Sí está el 7"
Puedes usar .includes() o comparar uno por uno con for o forEach.
*/

let numeros4=[1,3,4,5,7,10];
let search =7;

console.log("Usando el ciclo for")

for(let i=0; i<numeros4.length;i++){
   if(numeros4[i]==search){
      console.log("el numero 7 si esta en el arreglo y esta en la posicion"+ " "+(i+1));
         

   }
}


console.log("Usando el ciclo ForEACH")
numeros4.forEach((numero,i)=>{
   if(numero==search){
      console.log(`El numero 7 si esta en el arrelgo y se encuentra en la posicion numero : ${i+1}`)
   }
})

if(numeros4.includes(20)){
   console.log("si esta en el arrelgo")
}else{
   console.log("No esta en el arrelgo")
}


/*
2. Crear un arreglo con los números multiplicados por 3

let numeros = [2, 4, 6];
// Resultado esperado: [6, 12, 18]
*/

let multi=[2,4,6];
let por3=[];

for(let i=0; i<multi.length;i++){
   let res=multi[i]*3;
   por3.push(res);
}

console.log("Multplicados por 3"+ " " + por3)

multi.forEach((numero)=>{
   let res= numero*3;
   por3.push(res);
})

console.log("Los numeros multiplicados por 3 añadidos al nuevo arreglo"+ por3)

/*
3. Crear un arreglo con las notas aprobadas (mayores o iguales a 3)

let notas = [2.5, 3.0, 4.2, 1.8, 5.0];
// Resultado esperado: [3.0, 4.2, 5.0]
*/

let nott=[2.5,3.0,4.2,1.8,5.0];
let nuevo=[];

console.log("Usando el ciclo for")
for(let i =0 ; i<nott.length;i++){
   if(nott[i]>=3){
      nuevo.push(nott[i]);
   }
}

console.log(`Las notas aporbadas son [${nuevo }]`)

console.log("Usando el ciclo ForEACH")
nott.forEach((notas)=>{
   if(notas>=3){
      nuevo.push(notas)
   }
})
console.log(`Las notas aporbadas son [${nuevo }]`)

/*
4. Crear un arreglo nuevo con las palabras que empiecen por vocal

let palabras = ["oso", "perro", "agua", "sol", "idea"];
// Resultado esperado: ["oso", "agua", "idea"]
*/

let todas=["oso", "perro", "agua", "sol", "idea"];
let vocales=["a", "e", "i", "o", "u"]
let nueva=[];

for(let i=0;i<todas.length;i++){
   let contieneVocal= todas[i][0].toLocaleLowerCase();
   if(vocales.includes(contieneVocal)){
      nueva.push(todas[i]);
   }
}
console.log("contiene vocal"+nueva)

todas.forEach((palabra)=>{
   let contieneVocal=palabra[0].toLowerCase();
   if(vocales.includes(contieneVocal)){
      console.log("las vocales obetendias de las palabras fueron" + " " + contieneVocal)
      nueva.push(palabra)
   }
})

console.log("contiene vocal " + " " + nueva)

/*
✅ 1. Palabras con más de 6 letras

let palabras = ["elefante", "sol", "maravilla", "luz", "televisor"];
// Crea un nuevo arreglo con las palabras que tengan más de 6 letras
*/

let words=["elefante","sol","maravilla","luz","telvisor"];
let newWords=[];

for(let i=0; i<words.length;i++){
   if(words[i].length>6){
      newWords.push(words[i])
   }
}

console.log(newWords)

words.forEach((palabra)=>{
   if(palabra.length>6){
      newWords.push(palabras)
   }
})
console.log(newWords)

/*
✅ 2. Invertir los números e imprimirlos uno por uno

let numeros = [10, 20, 30, 40];
// Resultado esperado: 40, 30, 20, 10
*/

let numeros5=[10,20,30,40]

numeros5.reverse();

console.log(numeros5)

/*
✅ 3. Verifica si un arreglo tiene el número 100

let datos = [20, 35, 100, 45];
// Usa .includes() y muestra “Sí está” o “No está”
*/

let datos = [20, 35, 100, 45];

if(datos.includes(10)){
   console.log("SI esta el numero 10")
}else{
   console.log("No esta el numero 10")
}

/*
✅ 4. Convertir nombres a mayúsculas con forEach

let nombres = ["camilo", "ana", "juliana"];
// Resultado esperado: CAMILO, ANA, JULIANA
*/

let nombres1 = ["camilo", "ana", "juliana"];

nombres1.forEach((nombre)=>{
   let conMayuscula= nombre.toUpperCase();
   console.log(conMayuscula)
})

for(let i =0; i<nombres1.length;i++){
   let esMayuscula=nombres1[i].toUpperCase();
   console.log(esMayuscula)
}