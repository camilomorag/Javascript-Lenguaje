//Datos primitivos

// Cadena de textos (String)
let name="Juan andres"
let alias="JA"
let email= "juanandres@gmail.com"

// numeros (Number)
let age =20; //Enteros
let height = 1.84; //Decimales

// Boolean (Boolean)
let isTeacher= true;
let isStudent = false;

//Undefined
let undifinedValue;
console.log(undifinedValue);

//Null
let nullVlaue= null;

//Symbol
let mySimbol = Symbol ('mySymbol');

//BingInt
let myBigInt = BigInt (323321313131232132132131231231);

//Mostrar el tipo de dato
console.log(typeof name)
console.log(typeof alias)

//Template String 
let nombre= "camilo";
let edad = 19;

console.log(`Hola soy ${nombre} y tengo ${edad}`); 

let precio= 400;
let descuento= 100;
let preciofinal= precio-descuento;
console.log(`El precio original es ${precio} , el descuento es de ${descuento}, te quedaria en ${preciofinal}`);

// Operadores logicos
let a =10;
let b= 5;

console.log(`La suma es: ${a+b}`);
console.log(`La resta es: ${a-b}`);
console.log(`La multiplicacion es: ${a*b}`);
console.log(`La division es: ${a/b}`);
console.log(`El modulo es : ${a%b}`);


//Logica de acceso
let esMayor=18;

if(esMayor<18){
    console.log(`Lo siento aun no puedes entrar men`)
}else{
    console.log("Ya puedes entrar men");
}

// Logica de acceso con boolean

let edadMayor= true;
let tieneId= false;

if(edadMayor && tieneId){
    console.log("Puedes entrar")
}else{
    console.log("No puedes entrar")
}

//ciclos

// for

for (let i =1 ; i<=10; i++){
    console.log(`Numeros ${i}`);
}

for (let i=5; i>=1; i--){
    console.log(`Numeros ${i}`)
}

let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 3);


//Funciones 
function saludar(){
    console.log("Hola como estan")
}

saludar();

//2. Función con parámetros
// Los parámetros son variables que le pasas a la función para que trabaje con ellas

function saludo(nombre){
    console.log(`Hola ${nombre}`)
}

saludo("Santi");
saludo("Maria")

//3. Función que devuelve un valor (return)
function sumar(a,b){
    return a +b;
}

let resultado= sumar(5,3);
console.log("la suma es"+ resultado);

// 4. Función con múltiples parámetros

function presentar(nombre,edad,carrera){
    console.log(`Hola soy ${nombre}, tengo ${edad} y estudio ${carrera}`);
}

presentar("Camilo", 19, "Ingenieria de software");

function calcularEdad(ano){
let edadActual= 2025-ano;
    return edadActual;
}

console.log(calcularEdad(1989));
