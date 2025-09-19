//Crea una función que reciba un número y diga si es “Par” o “Impar”.

function esPar(numero){
    if (numero %2==0){
        console.log("El numero es par");
    }else{
        console.log("NO ES PAR");
    }
}

esPar(5);
esPar(6)

//🔸 Crea una función que reciba un precio y devuelva el valor del IVA (19%).

function calcularIva(precio){
    let precioconIva= precio*19/100;
return precioconIva;
}

console.log(calcularIva(50000))

/*
Crea una función que reciba una hora (de 0 a 23) y devuelva un saludo:

“Buenos días” si es de 6 a 11

“Buenas tardes” si es de 12 a 18

“Buenas noches” si es de 19 a 23 o 0 a 5
*/

function saludoHora(hora){

    if(hora>=6 && hora <=11){
        return console.log("Buenos dias");
    } else if (hora>=12 && hora <=18){
    return console.log("Buebas tardes");
    }else if(hora>=19 && hora <=23){
        return console.log("Buenas noches")
    }else{
        console.log("No coincide la hora");
    }

}

console.log(saludoHora(6))
console.log(saludoHora(20))

//🔸 Crea una función que reciba el radio de un círculo y devuelva su área (usa pi * r^2)
function areaCirculo(radio){
   const pi=3.141516;
    let calculoArea=pi*radio*radio;
    return calculoArea;
}

console.log("El area del circulo es:"+areaCirculo(3));

/*1. calcularDescuento(precio, porcentaje)
🔹 Crea una función que reciba un precio y un porcentaje de descuento
🔹 Devuelve el precio con el descuento aplicado.
*/

function calculoDescuento(precio,descuento){

    let precioDescuento= precio * (descuento/100);
    let totalPrecio= precio-precioDescuento;
    return totalPrecio;

}

console.log(calculoDescuento(1000000,20))

/*
esMultiplo(a, b)
🔹 Recibe dos números.
🔹 Retorna true si a es múltiplo de b, si no, false.
*/

function esMultiplo(a,b){

    if(a%b==0){
        return true;
    }else{
        return false;
    }
}

console.log(esMultiplo(4,2));
console.log(esMultiplo(7,2));

/*
calcularPromedio(n1, n2, n3)
🔹 Devuelve el promedio de tres notas.
🔹 Retorna también si es “Aprobado” (mayor o igual a 3.0) o “Reprobado”.

console.log(calcularPromedio(3.0, 2.8, 3.5)); // Promedio: 3.1 - Aprobado
*/

function calcularPromedio(n1,n2,n3){

    let promedio=(n1+n2+n3)/3;
    if(promedio>=3){
        return console.log(`Tu promedio es de ${promedio},Estas aprobado`);
    }else{
        return console.log(`Tu promedio es de ${promedio}, Estas reprobado`)
    }
}

calcularPromedio(3.0,2.8,3.5);

/*
 4. convertirAMayusculas(texto)
🔹 Recibe un texto y lo devuelve todo en mayúsculas.
console.log(convertirAMayusculas("hola mundo")); // HOLA MUNDO
*/

function convertirAMayusculas(texto){
    let convertiMayusculas= texto.toUpperCase();
    return convertiMayusculas;
}

console.log(convertirAMayusculas("Hola mundo"));

/*
5. repetirTexto(texto, veces)
🔹 Devuelve el texto repetido N veces (usa un bucle for o repeat() si lo conoces).
*/

function repetirTexto(texto,veces){
    
    for(let i=0; i<veces;i++){
        console.log(texto)
    }
    return veces;
}

repetirTexto("Hola mundo", 5)

/*
 6. esPalindromo(palabra)
🔹 Devuelve true si la palabra se lee igual al revés (como "oso", "ana", "reconocer").
console.log(esPalindromo("ana"));     // true
console.log(esPalindromo("camilo"));  // false

*/

function esPalindromo(palabra){

    let invertida= palabra.split("").reverse().join("");

    if(invertida==palabra){
        console.log(`La palabra es ${palabra} si es  Palidromo`)
    }else{
        console.log(`La palabra ${palabra} No es palidromo es ${invertida}`);
    }
}

esPalindromo("Camilo");
esPalindromo("ana")
esPalindromo("oso")

/*
7. calcularIMC(peso, altura)
🔹 Calcula el IMC con la fórmula: peso / (altura * altura)
🔹 Retorna el IMC y si es:

Bajo peso: < 18.5

Normal: 18.5 - 24.9

Sobrepeso: 25 - 29.9

Obesidad: >= 30
*/

function calcularIMC(peso,altura,nombre){

    let calculoImc= peso/ (altura*altura);

    if(calculoImc<18.5){
       console.log(`${nombre},Tu IMC es de ${calculoImc}, Estas bajo de peso`)
    }else if(calculoImc >=18.5 && calculoImc<=24.9){
         console.log(`${nombre},Tu IMC es de ${calculoImc}, Estas en peso normal`)
    }else if(calculoImc>=25 && calculoImc<=29.9){
         console.log(`${nombre},Tu IMC es de ${calculoImc}, Estas con sobrepeso`)
    }else if(calculoImc>=30){
         console.log(`${nombre},Tu IMC es de ${calculoImc}, Estas en obesidad`)
    }
    return calculoImc    
}

calcularIMC(58.8, 1.84,"Camilo");
calcularIMC(90, 1.60, "Andrea");

/*
8. convertirSegundos(horas, minutos, segundos)
🔹 Convierte todo a segundos y devuelve el total.

console.log(convertirSegundos(1, 2, 30)); // 37
totalSegundos = (horas * 3600) + (minutos * 60) + segundos;

*/

function convertirSegundos(horas,minutos,segundos){

    let totalSegundos= (horas*3600)+(minutos*60)+segundos;
    return totalSegundos;
}

console.log("Los segundos totales son"+convertirSegundos(1,2,30))

