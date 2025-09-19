/*
Qué es Set en JavaScript?
Un Set es una colección de valores únicos. Es decir, no permite duplicados.

🎯 ¿Para qué sirve?
Sirve para guardar elementos sin repetir. Muy útil cuando quieres:

Contar cuántos elementos únicos hay.

Eliminar duplicados de un array.

Verificar si un valor ya fue agregado.


*/
const numero=[1,2,4,5,6,6,7,6,2]

const unicos = new Set(numero)

console.log(unicos)
console.log(unicos.size)


//Ejemplo 2 
const ventasDeCarlos = [
    { productoId: 1 },
    { productoId: 2 },
    { productoId: 1 }, // repetido
    { productoId: 3 }
  ];
  
  const productosUnicos = new Set();
  
  ventasDeCarlos.forEach(venta => {
    productosUnicos.add(venta.productoId);
  });
  
  console.log(productosUnicos.size); // 3 (porque 1, 2 y 3 son únicos)
  