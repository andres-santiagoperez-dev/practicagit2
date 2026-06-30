let ciudades =[
    {
        nombre:"Cartago",
        numeroHabitantes:10000,
        metrosSobreNivelMar:50,
        temperaturaPromedio:30,
        coordenadas:[6.2442, -75.5812],
        sitiosDeInteres:{
            "01":"parque",
            "02":"zoologico"
        }
    },
    {
        nombre:"Pereira",
        numeroHabitantes:90000,
        metrosSobreNivelMar:80,
        temperaturaPromedio:32,
        coordenadas:[4.2442, -50.5812],
        sitiosDeInteres:{
            "01":"Piscina",
            "02":"Tienda de Ropa"
        }
    },
    {
        nombre:"Medellin",
        numeroHabitantes:150000,
        metrosSobreNivelMar:120,
        temperaturaPromedio:34,
        coordenadas:[1.2442, -95.5812],
        sitiosDeInteres:{
            "01":"motel",
            "02":"zona rosa"
        }
    },
    {
        nombre:"Obando",
        numeroHabitantes:10000,
        metrosSobreNivelMar:50,
        temperaturaPromedio:30,
        coordenadas:[6.2442, -75.5812],
        sitiosDeInteres:{
            "01":"parque",
            "02":"zoologico"
        }
    },
    {
        nombre:"Jamundi",
        numeroHabitantes:90000,
        metrosSobreNivelMar:80,
        temperaturaPromedio:32,
        coordenadas:[4.2442, -50.5812],
        sitiosDeInteres:{
            "01":"Piscina",
            "02":"Tienda de Ropa"
        }
    },
    {
        nombre:"Cali",
        numeroHabitantes:150000,
        metrosSobreNivelMar:120,
        temperaturaPromedio:34,
        coordenadas:[1.2442, -95.5812],
        sitiosDeInteres:{
            "01":"motel",
            "02":"zona rosa"
        }
    }
];


//VARIABLES
let salidaTabla = document.getElementById("salidaTabla");
let contadorTabla=1;

salidaTabla.innerHTML="";
ciudades.forEach(ciudad=>{
    let sitiosInteres ="";
    for(let [clave,valor] of Object.entries(ciudad.sitiosDeInteres))
    {
        sitiosInteres+=valor+" - ";
    }
    sitiosInteres=sitiosInteres.substring(0, sitiosInteres.length - 2);
    salidaTabla.innerHTML+=
    `
    <tr>
        <th scope="row">${contadorTabla}</th>
        <td>${ciudad.nombre}</td>
        <td>${ciudad.numeroHabitantes}</td>
        <td>${ciudad.metrosSobreNivelMar}</td>
        <td>${ciudad.coordenadas}</td>
        <td>${sitiosInteres}</td>
    </tr>
    
    `
    contadorTabla++;
})