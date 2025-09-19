/*
✅ 1. ¿Qué es un objeto?
Un objeto es una colección de datos (pares clave-valor) que representa una entidad o cosa real.

Ejemplo básico:
*/

let persona= {
     nombre:"Camilo",
    edad: 19,
    esEstudiante:true
}

//✅ 2. Cómo acceder a los valores
console.log(persona.nombre)
console.log(persona["nombre"])

/*
✅ 3. Cómo modificar un valor

persona.edad = 26;
persona["nombre"] = "Carlos";
*/

persona.edad=20;
persona["edad"]=21;
console.log(persona.edad)

/*
✅ 4. Cómo agregar una nueva propiedad

persona.ciudad = "Bogotá";
*/

persona.ciudad= "Bogota"
console.log(persona)

/*
✅ 5. Cómo eliminar una propiedad
delete persona.esEstudiante;
*/

delete persona.esEstudiante;
console.log(persona)

/*
✅ 6. Recorrer un objeto (for...in)
*/

for (let clave in persona){
      console.log(clave + ": " + persona[clave]);

}

/*
1. for...in — (clásico)

for (let clave in persona) {
  console.log(clave);          // nombre, edad, ciudad
  console.log(persona[clave]); // Carlos, 32, Medellín
}
✅ Úsalo cuando:
Quieras recorrer todas las propiedades (incluso heredadas, a veces).

Estás en un entorno más antiguo.

Quieres algo corto y simple.

⚠️ Cuidado:
Recorre propiedades heredadas si no filtras con hasOwnProperty().


*/


/*
2. Object.keys(obj) + forEach — (moderno, solo claves)

Object.keys(persona).forEach(clave => {
  console.log(clave);             // nombre, edad, ciudad
  console.log(persona[clave]);    // Carlos, 32, Medellín
});
✅ Úsalo cuando:
Quieras solo las claves propias del objeto.

Estás usando otras funciones modernas como .map(), .filter().
*/

/*
3. Object.entries(obj) — (clave y valor directo)

Object.entries(persona).forEach(([clave, valor]) => {
  console.log(clave + ": " + valor);
});
🧠 Aquí [clave, valor] es desestructuración de cada arreglo como [“nombre”, “Carlos”], [“edad”, 32], etc.

✅ Úsalo cuando:
Quieras clave y valor al mismo tiempo sin tener que escribir obj[clave].

Estás trabajando con estructuras tipo tabla o JSON.
*/


/*
📊 COMPARACIÓN RÁPIDA


| Método                | ¿Qué devuelve?            | ¿Recorre heredados? | ¿Cuándo usar?                            |
| --------------------- | ------------------------- | ------------------- | ---------------------------------------- |
| `for...in`            | claves                    | ✅ Sí                | Código clásico o corto                   |
| `Object.keys(obj)`    | array de claves           | ❌ No                | Para filtrar, mapear, contar claves      |
| `Object.entries(obj)` | array de `[clave, valor]` | ❌ No                | Para mostrar info clara o exportar datos |

*/

//ejemplos

let animal= {
      tipo: "carnivoro"
}


let oso = Object.create(animal);

oso.pies= 4
oso.nombre= "Polar";

for(let clave in oso){
      console.log(`${clave.toUpperCase()} : ${oso[clave]}`)
}

let leon = Object.create(animal);
leon.garras=5;
leon.nombre="Leonardo";
leon.edad=60

for(let clave in leon){
      console.log(`${clave.toUpperCase()} : ${leon[clave]}`)
}

console.log("\n🔹 Object.keys() (solo propias):");
Object.keys(oso).forEach(clave=>{
      console.log(`${clave.toUpperCase()} : ${oso[clave]}`)
})

Object.keys(leon).forEach(clave=>{
      console.log(`${clave.toUpperCase()} : ${leon[clave]}`)
})

console.log("\n🔹 Object.entries() (clave y valor, solo propias):");
Object.entries(oso).forEach(([clave,valor])=>{

 console.log(`${clave.toUpperCase()} : ${valor}`)
})    

console.log("Nombre del animal", " " , leon.nombre);

Object.entries(leon).forEach(([clave,valor])=>{
      console.log(`${clave.toUpperCase()} : ${valor}`)
})