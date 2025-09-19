const buses= require('../JSON/buses.json')

console.log(buses.empresa) //nombre de la empresa
console.log(buses.tipoTransporte)// tipo de trasnporte
console.log(buses.rutas)

buses.rutas.forEach(ruta=>{
    console.log(`Ruta: ${ruta.numero}`);

        console.log(" ----> SALIDA ")
    ruta.trayectos.salida.forEach(parada=>{
        console.log(`      - ${parada}`)
    })

    console.log("<---- Retorno")
    ruta.trayectos.retorno.forEach(vuelta=>{
        console.log(`   -${vuelta}`)
    })
})

for(let clave in buses.rutas){
    console.log("Ruta "+ " " + buses.rutas[clave].numero)

    console.log("-----> Salida")
    let sal= buses.rutas[clave].trayectos.salida.filter(s=>s.includes("Parque Santander"))
    console.log(sal)

    console.log("<----- Retorno")
    let retorn= buses.rutas[clave].trayectos.retorno.filter(r=> r.includes("Parque Santander"))
    console.log(retorn)
}