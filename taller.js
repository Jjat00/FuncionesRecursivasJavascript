/**
 *--------------------------------------------------------------------------
 *                              TALLER
 *--------------------------------------------------------------------------
 *Archivo: taller.js
 *Autor: Jaimen Aza < userjjat00@gmail.com>,
 *Fecha: 2019 - 07 - 23
 *--------------------------------------------------------------------------
 *Utilidad: funciones recursivas con el fin de manejar listas (Paradigma Funcional)
 *--------------------------------------------------------------------------
 */

const { cons, first, rest, isEmpty, isList } = require('functional-light');
const { ordenarAscendente, invertirOrden, longitud, obtenerUltimoElemento, eliminarUltimoElemento } = require('./src/index');

console.log("-----------------------------------------------------------------")
console.log("\t\t\tSOLUCIÓN TALLER 2 JAVASCRIPT PARTE 2 LISTAS CON ESTRUCTURAS")
console.log("---------------------------------------------------------------\n")

const cancion1 = {
    nombre: "How to fly",
    album: "How to fly",
    artista: "Sticky Fingers",
    duracion: 330,
    estrellas: 5
}
const cancion2 = {
    nombre: "Coma white",
    album: "Coma white",
    artista: "Desconocido",
    duracion: 520,
    estrellas: 4
}
const cancion3 = {
    nombre: "La vela se apaga",
    album: "No hay opción",
    artista: "Parabellum",
    duracion: 414,
    estrellas: 5
}
const cancion4 = {
    nombre: "Quien quiere",
    album: "No hay opción",
    artista: "Parabellum",
    duracion: 314,
    estrellas: 3
}

const misCanciones = [cancion1, cancion2, cancion3, cancion4]

/**
 * 1.Búsqueda de canciones por nombre de canción. Debe retornar una canción o
     vacío en caso de no encontrarla.
 * @param {*} nombreCancion 
 * @param {*} list 
 * 
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

/**
 * 2. Búsqueda de canciones por artista. Debe retornar una lista de canciones o empty
 * @param {*} nombreArtista 
 * @param {*} list 
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

/**
 * 3. Duración de la lista de reproducción en el formato “horas:minutos:segundos”
 * @param {*} duracionSegundos 
 */
function duracionListaReproduccionConformato(duracionSegundos) {
    const hora = duracionSegundos / 3600
    const minutos = (hora % 1) * 60
    const segundos = (minutos % 1) * 60
    return Math.trunc(hora).toString() + ":" + Math.trunc(minutos).toString() + ":" + Math.trunc(segundos).toString()
}

function duracionEnSegundosListaReproduccion(list) {
    if (isEmpty(list)) {
        return 0
    } else {
        return first(list).duracion + duracionEnSegundosListaReproduccion(rest(list))
    }
}

/**
 * 4. Todas las canciones con al menos menos de 2 estrellas
 * @param {*} list 
 */
function cancionesMasDeDosEstrellas(list) {
    if (isEmpty(list)) {
        return []
    } else {
        if (first(list).estrellas >= 2) {
            return cons(first(list), cancionesMasDeDosEstrellas(rest(list)))
        } else {
            return cancionesMasDeDosEstrellas(rest(list))
        }
    }
}

/**
 * 5. Todas las canciones con 5 estrellas
 * @param {*} list 
 */
function cancionesFavoritas(list) {
    if (isEmpty(list)) {
        return []
    } else {
        if (first(list).estrellas == 5) {
            return cons(first(list), cancionesFavoritas(rest(list)))
        } else {
            return cancionesFavoritas(rest(list))
        }
    }
}

/**
 * 6. Imprima los títulos de las canciones y su duración.
 * @param {*} list 
 */
function imprimirTitulosYDuracion(list) {
    if (isEmpty(list)) {
        return []
    } else {
        return cons(first(list).nombre, cons(first(list).duracion, imprimirTitulosYDuracion(rest(list))), imprimirTitulosYDuracion(rest(list)))
    }
}


/**
 * 7. Crear la lista de mejor a peor canción
 * @param {*} estrellas 
 * @param {*} list 
 */
function ordenarPeorAMejorCancion(estrellas, list) {
    if (isEmpty(estrellas)) {
        return []
    } else {
        return cons(mejorCancion(estrellas, list), ordenarPeorAMejorCancion(rest(estrellas), list))
    }

}

function mejorCancion(estrellas, list) {
    if (isEmpty(list)) {
        return []
    } else {
        if (first(list).estrellas == first(estrellas)) {
            return cons(first(list), mejorCancion(estrellas, rest(list)))
        } else {
            return mejorCancion(estrellas, rest(list))
        }
    }
}

function estrellasCanciones(list) {
    if (isEmpty(list)) {
        return []
    } else {
        return invertirOrden(ordenarAscendente(cons(first(list).estrellas, estrellasCanciones(rest(list)))))
    }
}

/**
 * 8. Eliminar la n-ésima canción
 * @param {*} n 
 * @param {*} list 
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

function cancionN(n, list) {
    if (longitud(list) - 1 == n) {
        return obtenerUltimoElemento(list)
    } else {
        return cancionN(n, eliminarUltimoElemento(list))
    }
}


//console.log(buscarCancionPorNombre("La vela se apaga", misCanciones))
//console.log(buscarCancionPorArtista("Sticky Fingers", misCanciones))
console.log(duracionListaReproduccionConformato(duracionEnSegundosListaReproduccion(misCanciones)))
    //console.log(cancionesMasDeDosEstrellas(misCanciones))
    //console.log(cancionesFavoritas(misCanciones))
    //console.log(imprimirTitulosYDuracion(misCanciones))
console.log(ordenarPeorAMejorCancion(estrellasCanciones(misCanciones), misCanciones))


//console.log(eliminarCancionN(0, misCanciones, misCanciones))