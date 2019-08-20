/**
 *--------------------------------------------------------------------------
 *                          TALLER 2 JAVASCRIPT PARTE 2
 *--------------------------------------------------------------------------
 *Archivo: tallerParteII.js
 *Autor: Jaimen Aza <jaimen.aza@correounivalle.edu.com>
 *Fecha Creación: 2019 - 08 - 15
 *Fecha Ultima modificación: 2019 - 08 - 19
 *--------------------------------------------------------------------------
 *Utilidad: Solución de la parte dos del taller listas y estructuras
 *--------------------------------------------------------------------------
 */

const { cons, first, rest, isEmpty, isList } = require('functional-light');
const { ordenarAscendente, invertirOrden, longitud, obtenerUltimoElemento, eliminarUltimoElemento } = require('./tallerParteI');

console.log("-----------------------------------------------------------------")
console.log("\t\t\tSOLUCIÓN TALLER 2 JAVASCRIPT PARTE 2 LISTAS CON ESTRUCTURAS")
console.log("---------------------------------------------------------------\n")


const canciones = {
    cancion1: {
        nombre: "How to fly",
        artista: "Sticky Fingers",
        album: "How to fly",
        duracion: 330,
        estrellas: 3
    },
    cancion2: {
        nombre: "Coma white",
        artista: "Desconocido",
        album: "Coma white",
        duracion: 520,
        estrellas: 2
    },
    cancion3: {
        nombre: "La vela se apaga",
        artista: "Parabellum",
        album: "No hay opción",
        duracion: 414,
        estrellas: 4
    },
    cancion4: {
        nombre: "Quien quiere",
        album: "No hay opción",
        artista: "Parabellum",
        duracion: 314,
        estrellas: 3
    },
    cancion5: {
        nombre: "Disorder",
        artista: "Joy Division",
        album: "Trainspotting",
        duracion: 203,
        estrellas: 3
    },
    cancion6: {
        nombre: "Where is my mind",
        artista: "Pixies",
        album: "Surfer Rosa",
        duracion: 229,
        estrellas: 3
    },
    cancion7: {
        nombre: "Papel dile",
        artista: "Stan MC",
        album: "Desconocido",
        duracion: 314,
        estrellas: 2
    },
    cancion8: {
        nombre: "Noches de humo",
        artista: "Morodo",
        album: "Koma",
        duracion: 300,
        estrellas: 4
    },
    cancion9: {
        nombre: "En La Ciudad De La Furia",
        artista: "Soda Stereo",
        album: "Comfort Y Musica Para Volar",
        duracion: 253,
        estrellas: 5
    },
    cancion10: {
        nombre: "Maligno",
        artista: "Aterciopelados feat. León Larregui",
        album: "Desconocido",
        duracion: 313,
        estrellas: 5
    }
}

const listaDeReproduccion = [canciones.cancion1, canciones.cancion2, canciones.cancion3, canciones.cancion4, canciones.cancion5, canciones.cancion6, canciones.cancion7, canciones.cancion8, canciones.cancion9, canciones.cancion10]

/**
 * 1.Búsqueda de canciones por nombre de canción. Debe retornar una canción o
     vacío en caso de no encontrarla.
 *      Contrato: string,lista -> lista
 *      Propósito: Búsqueda de canciones por nombre de canción 
 *      Definición:  buscarCancionPorNombre(nombreCancion, list)
 *      Ejemplo: 
 *      console.log(buscarCancionPorNombre("Where is my mind", listaDeReproduccion))
 */
function buscarCancionPorNombre(nombreCancion, list) {
    if (isEmpty(list)) {
        return []
    } else {
        if (first(list).nombre == nombreCancion) {
            return cons(first(list), buscarCancionPorNombre(nombreCancion, rest(list)))
        } else {
            return buscarCancionPorNombre(nombreCancion, rest(list))
        }
    }
}
console.log("1. ", buscarCancionPorNombre("En La Ciudad De La Furia", listaDeReproduccion))

/**
 * 2. Búsqueda de canciones por artista. Debe retornar una lista de canciones o empty  
 *      Contrato: string, lista -> lista
 *      Propósito: Bascar canciones por artista
 *      Definición: buscarCancionPorArtista(nombreArtista, list)
 *      ejemplo:
 *      console.log(buscarCancionPorArtista("Sticky Fingers", listaDeReproduccion))
 */
function buscarCancionPorArtista(nombreArtista, list) {
    if (isEmpty(list)) {
        return []
    } else {
        if (first(list).artista == nombreArtista) {
            return cons(first(list), buscarCancionPorArtista(nombreArtista, rest(list)))
        } else {
            return buscarCancionPorArtista(nombreArtista, rest(list))
        }
    }
}
console.log("2. ", buscarCancionPorArtista("Parabellum", listaDeReproduccion))

/**
 * 3. Duración de la lista de reproducción en el formato “horas:minutos:segundos”
 *      Contrato: int -> string
 *      Propósito:convierte segundos hacía el formato “horas:minutos:segundos”
 *      Definición: duracionListaReproduccionConformato(duracionSegundos)
 *      ejemplo:
 *      console.log(duracionListaReproduccionConformato(3673))-> 1:1:13
 *      console.log(duracionListaReproduccionConformato(duracionEnSegundosListaReproduccion(listaDeReproduccion))) -> 0:53:9
 *      
 */
function duracionListaReproduccionConformato(duracionSegundos) {
    const hora = duracionSegundos / 3600
    const minutos = (hora % 1) * 60
    const segundos = (minutos % 1) * 60
    return Math.trunc(hora).toString() + ":" + Math.trunc(minutos).toString() + ":" + Math.trunc(segundos).toString()
}
console.log("3. ", duracionListaReproduccionConformato(duracionEnSegundosListaReproduccion(listaDeReproduccion)))

/**
 *      Contrato: lista -> int
 *      Propósito:  calcular la duración de la lista de reproducción en segundos
 *      Definición: duracionEnSegundosListaReproduccion(list)
 *      ejemplo: 
 *      console.log(duracionEnSegundosListaReproduccion(listaDeReproduccion)) -> 239
 */
function duracionEnSegundosListaReproduccion(list) {
    if (isEmpty(list)) {
        return 0
    } else {
        return first(list).duracion + duracionEnSegundosListaReproduccion(rest(list))
    }
}

/**
 * 4. Todas las canciones con al menos 2 estrellas
 *      Contrato: lista -> lista
 *      Propósito: retornar todas las canciones con al menos 2 estrellas
 *      Definición: cancionesAlMenosDosEstrellas(list)
 *      ejemplo:
 *      console.log(cancionesAlMenosDosEstrellas(listaDeReproduccion)) 
 */
function cancionesAlMenosDosEstrellas(list) {
    if (isEmpty(list)) {
        return []
    } else {
        if (first(list).estrellas <= 2) {
            return cons(first(list), cancionesAlMenosDosEstrellas(rest(list)))
        } else {
            return cancionesAlMenosDosEstrellas(rest(list))
        }
    }
}
console.log("4. ", cancionesAlMenosDosEstrellas(listaDeReproduccion))

/**
 * 5. Todas las canciones con 5 estrellas
 *      Contrato: lista -> lista
 *      Propósito: retornar todas las canciones con 5 estrellas 
 *      Definición: cancionesCincoEstrellas(list)
 *      ejemplo: 
 *      console.log(cancionesCincoEstrellas(listaDeReproduccion)) 
 */
function cancionesCincoEstrellas(list) {
    if (isEmpty(list)) {
        return []
    } else {
        if (first(list).estrellas == 5) {
            return cons(first(list), cancionesCincoEstrellas(rest(list)))
        } else {
            return cancionesCincoEstrellas(rest(list))
        }
    }
}
console.log("5. ", cancionesCincoEstrellas(listaDeReproduccion))

/**
 * 6. Imprima los títulos de las canciones y su duración.
 *      Contrato: lista -> lista 
 *      Propósito: Imprimir los títulos de las canciones y su duración
 *      Definición: imprimirTitulosYDuracion(list)
 *      ejemplo:
 *      console.log(imprimirTitulosYDuracion(listaDeReproduccion))
 */
function imprimirTitulosYDuracion(list) {
    if (isEmpty(list)) {
        return []
    } else {
        return cons(first(list).nombre, cons(first(list).duracion, imprimirTitulosYDuracion(rest(list))), imprimirTitulosYDuracion(rest(list)))
    }
}
console.log("6. ", imprimirTitulosYDuracion(listaDeReproduccion))

/**
 * 7. Crear la lista de mejor a peor canción
 *      Contrato: lista, lista -> lista
 *      Propósito: retorna las canciones con el numero de estrellas ingresado
 *      Definición: ordenarMejorAPeorCancion(estrellas, list)
 *      ejemplo:
 *      - console.log(ordenarMejorAPeorCancion([2,5,4]), listaDeReproduccion))
 *      - console.log(ordenarMejorAPeorCancion(estrellasCanciones(listaDeReproduccion), listaDeReproduccion))
 */
function ordenarMejorAPeorCancion(estrellas, list) {
    if (isEmpty(estrellas)) {
        return []
    } else {
        return cons(mejorCancion(estrellas, list), ordenarMejorAPeorCancion(rest(estrellas), list))
    }

}
console.log("7. ", ordenarMejorAPeorCancion(estrellasCanciones(listaDeReproduccion), listaDeReproduccion))

/**
 *      Contrato: lista -> lista 
 *      Propósito: ordena descendentemente las estrellas de cada canción en la lista 
 *      Definición: estrellasCanciones(list)
 *      ejemplo:
 *      estrellasCanciones(listaDeReproduccion)
 */
function estrellasCanciones(list) {
    if (isEmpty(list)) {
        return []
    } else {
        return invertirOrden(ordenarAscendente(cons(first(list).estrellas, estrellasCanciones(rest(list)))))
    }
}

/**
 *      Contrato: lista, lista -> lista
 *      Propósito:retorna la mejor canción en una lista ordenada
 *      Definición: mejorCancion(estrellas, list)
 *      ejemplo:
 *      console.log(mejorCancion([5,3,2],listaDeReproduccion))
 */
function mejorCancion(estrellas, list) {
    if (isEmpty(list)) {
        return []
    } else {
        if (first(estrellas) == first(list).estrellas) {
            return cons(first(list), mejorCancion(estrellas, rest(list)))
        } else {
            return mejorCancion(estrellas, rest(list))
        }
    }
}

/**
 * 8. Eliminar la n-ésima canción
 *      Contrato: int, lista, lista -> lista
 *      Propósito: eliminar la cancion n de la lista de reproducción 
 *      Definición: eliminarCancionN(n, list1, list)
 *      ejemplo:
 *      console.log(eliminarCancionN(3, listaDeReproduccion, listaDeReproduccion))
 */
function eliminarCancionN(n, list1, list) {
    if (isEmpty(list)) {
        return []
    } else {
        if (cancionN(n, list1) != first(list)) {
            return cons(first(list), eliminarCancionN(n, list1, rest(list)))
        } else {
            return rest(list)
        }
    }
}

console.log("8. ", eliminarCancionN(0, listaDeReproduccion, listaDeReproduccion))

/**
 *      Contrato: int, lista -> lista
 *      Propósito: retonar la cancion n de una lista
 *      Definición: cancionN(n, list)
 *      ejemplo:
 *      console.log(cancionN(4,listaDeReproduccion))
 */
function cancionN(n, list) {
    if (n < longitud(list)) {
        if (longitud(list) - 1 == n) {
            return obtenerUltimoElemento(list)
        } else {
            return cancionN(n, eliminarUltimoElemento(list))
        }
    } else {
        return "index out of size"
    }
}

module.exports = { buscarCancionPorNombre, buscarCancionPorArtista, duracionListaReproduccionConformato, cancionesAlMenosDosEstrellas, cancionesCincoEstrellas, imprimirTitulosYDuracion, ordenarMejorAPeorCancion, eliminarCancionN, estrellasCanciones }