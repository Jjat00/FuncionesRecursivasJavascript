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

console.log("----------------------------------------------------")
console.log("\t\t\tSOLUCIÓN TALLER 2 JAVASCRIPT")
console.log("----------------------------------------------------\n")


/**
 *  1. Encontrar el mayor valor de una lista
 * 
 *      Contrato: lista -> número
 *      Propósito: Encontrar el elemento de mayor valor en una lista
 *      Definición:  mayorValor(lista) -> ...
 *      Ejemplo: console.log(mayorValor([1,3,4,20])) -> 20
 */
function mayorValor(lista) {
    if (longitud(lista) == 1) {
        return first(lista)
    } else {
        return Math.max(first(lista), mayorValor(rest(lista)))
    }
}
console.log("1. Mayor Valor de [1, 3, 4, 20] --> ", mayorValor([1, 3, 4, 20]))

/**
 *      Contrato: lista -> número
 *      Propósito: obtener el elemento con el mínimo valor
 *      Definición: minValor(lista) -> ...
 *      Ejemplo: console.log(minValor([1,3,4,20])) -> 1
 */
function minValor(lista) {
    if (longitud(lista) == 1) {
        return first(lista)
    } else {
        return Math.min(first(lista), minValor(rest(lista)))
    }
}

/** 
 *      Contrato: lista -> número
 *      Propósito: obtener el número de elementos de una lista
 *      Definición: longitud(lista) -> ...
 *      Ejemplo: console.log(longitud([1,3,4,20])) -> 4
 */
function longitud(lista) {
    if (isEmpty(lista)) {
        return 0
    } else {
        return 1 + longitud(rest(lista))
    }
}

/**
 * 2. Encontrar el promedio de los valores de una lista
 * 
 *      Contrato: lista -> número
 *      Propósito: obtener el promedio de los valores de una lista
 *      Definición:  promedio(lista) -> ...
 *      Ejemplo: console.log(promedio([1,3,4,20])) -> 7
 */
function promedio(lista) {
    if (isEmpty(lista)) {
        return 0
    } else {
        return sumaLista(lista) / longitud(lista)
    }
}
console.log("2. Promedio: ", promedio([1, 3, 4, 20]))

/**
 *      Contrato: lista -> número
 *      Propósito: sumar los elementos de una lista
 *      Definición: sumaLista(lista) -> ...
 *      Ejemplo: console.log(sumaLista([1,3,4,20])) -> 28
 */
function sumaLista(lista) {
    if (isEmpty(lista)) {
        return 0
    } else {
        return first(lista) + sumaLista(rest(lista))
    }
}


/**
 * 3. Invertir el orden de los elementos de una lista
 * 
 *      Contrato: lista -> lista
 *      Propósito: invertir los elementos de una lista
 *      Definición: invertirOrden(lista) -> ...
 *      Ejemplo: console.log(sumaLista([1,3,4,20])) -> [20,4,3,1]
 */
function invertirOrden(lista) {
    if (isEmpty(lista)) {
        return []
    } else {
        return cons(obtenerUltimoElemento(lista), invertirOrden(eliminarUltimoElemento(lista)))
    }
}
console.log("3. Invertir orden: ", invertirOrden([1, 3, 4, 20]))

/**
 *      Contrato: lista -> número
 *      Propósito: obtener el ultimo elemento de una lista
 *      Definición: obtenerUltimoElemento(lista) -> ...
 *      Ejemplo: console.log(obtenerUltimoElemento([1,3,4,20])) -> 20
 */
function obtenerUltimoElemento(lista) {
    if (longitud(lista) == 1) {
        return first(lista)
    } else {
        return obtenerUltimoElemento(rest(lista))
    }
}

/**
 *      Contrato: lista -> lista
 *      Propósito: obtener una lista sin el último elemento
 *      Definición: eliminarUltimoElemento(lista) -> ...
 *      Ejemplo: console.log(eliminarUltimoElemento([1,3,4,20])) -> [1,3,4]
 */
function eliminarUltimoElemento(lista) {
    if (longitud(lista) == 1) {
        return []
    } else {
        return cons(first(lista), eliminarUltimoElemento(rest(lista)))
    }
}

/**
 * 4. Ordenar de manera ascendente una lista
 * 
 *      Contrato: lista -> lista
 *      Propósito: Ordenar de manera ascendente una lista
 *      Definición:  ordenarAscendente(lista) -> ...
 *      Ejemplo: console.log(ordenarAscendente([6,18,4,20])) -> [4,6,18,20]
 */
function ordenarAscendente(lista) {
    if (isEmpty(lista)) {
        return []
    } else {
        return cons(minValor(lista), ordenarAscendente(eliminarUnElemento(minValor(lista), lista)))
    }
}
console.log("4. Orden ascendente: ", ordenarAscendente([6, 18, 4, 20]))


/**
 *      Contrato: elemento,lista -> lista
 *      Propósito: eliminar  un elemento x de una lista
 *      Definición: eliminarUnElemento(elemento, lista) -> ...
 *      Ejemplo: console.log(eliminarUnElemento(4,[6,18,4,20])) -> [6,18,20]
 */
function eliminarUnElemento(elemento, lista) {
    if (isEmpty(lista)) {
        return []
    } else {
        if (first(lista) == elemento) {
            return rest(lista)
        } else {
            return cons(first(lista), eliminarUnElemento(elemento, rest(lista)))
        }
    }
}


/**
 * 5. Genere una lista de los primeros n términos de la serie de Fibonacci
 * 
 *      Contrato: número -> lista
 *      Propósito: Generar una lista de los primeros n términos de la serie de Fibonacci
 *      Definición: serieFiboacci(n) -> ...
 *      Ejemplo: console.log(serieFiboacci(4)) -> [ 1, 1, 2, 3, 5 ]
 */
function serieFiboacci(n) {
    return invertirOrden(listaFibonacci(n))
}
console.log("5. Serie fibonacci: ", serieFiboacci(4))

/**
 *      Contrato: número -> lista
 *      Propósito: Generar una lista invertida de los primeros n términos de la serie de Fibonacci
 *      Definición: listaFibonacci(n) -> ...
 *      Ejemplo: console.log(listaFibonacci(4)) -> [ 5, 3, 2, 1, 1]
 */
function listaFibonacci(n) {
    if (n == 0) {
        return [1]
    }
    if (n == 1) {
        return [1, 1]
    } else {
        return cons(fibonacci(n), listaFibonacci(n - 1))
    }
}

/**
 *      Contrato: número -> número
 *      Propósito: retorna el valor n de la serie de Fibonacci
 *      Definición: fibonacci(n) -> ...
 *      Ejemplo: console.log(fibonacci(4)) -> 5
 */
function fibonacci(n) {
    if (n == 0 || n == 1) {
        return 1
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
}

/**
 * 6. Dada una lista, eliminar todos los elementos que no sean números
 * 
 *      Contrato: lista -> lista
 *      Propósito: Dada una lista, eliminar todos los elementos que no sean números
 *      Definición: eliminarCaracteres(lista) -> ...
 *      Ejemplo: console.log(eliminarCaracteres([1, 2, 4, "j", 5, "a"]))-> [1,2,4,5]
 */
function eliminarCaracteres(lista) {
    if (isEmpty(lista)) {
        return []
    } else {
        if (typeof(first(lista)) == "number") {
            return cons(first(lista), eliminarCaracteres(rest(lista)))
        } else {
            return eliminarCaracteres(rest(lista))
        }
    }
}
console.log("6. Eliminar los no numeros: ", eliminarCaracteres([1, 2, 4, "j", 5, "a"]))

/**
 * 7. Implemente una función que inserta un elemento x en la posición n de la lista,
 *    si n está entre 0 y la longitud de la lista. No hace nada en caso contrario.
 *
 *      Contrato: x , n , lista  -> lista
 *      Propósito: insertar un elemento x en la posición n de una lista, si n está 
 *                 entre 0 y la longitud de la lista. No hace nada en caso contrario.
 *      Definición: insertarElemento(x, n, lista) -> ...
 *      Ejemplo: console.log(insertarElemento("j", 3, [1, 4, 6, 8, 5])) -> [ 1, 4, 6, 'j', 8, 5 ]
 */
function insertarElemento(x, n, lista) {
    if (n <= longitud(lista)) {
        return invertirOrden(insertar(x, n, lista))
    } else {
        return "index out of size"
    }
}
console.log("7. insertar x en la posición n: ", insertarElemento("j", 3, [1, 4, 6, 8, 5]))

/**
 *      Contrato: x , n , lista  -> lista
 *      Propósito: insertar un elemento x en la posición n de la una lista invertida
 *      Definición: insertar(x, n, lista) -> ...
 *      Ejemplo: console.log(insertar("j", 3, [1, 4, 6, 8, 5])) -> [ 5, 8, 'j', 6, 4, 1 ]
 */
function insertar(x, index, lista) {
    if (longitud(lista) == index) {
        return cons(x, invertirOrden(lista))
    } else {
        return cons(obtenerUltimoElemento(lista), insertar(x, index, eliminarUltimoElemento(lista)))
    }
}



/**
 * 8. Dada una lista ordenada, implementar una función que retorna el índice n 
 *    dónde se encuentra un número x dado, si existe, o (n+1), donde n es la posición
 *    en la cual se debería insertar x para mantener la lista ordenada.
 * 
 *      Contrato: x , lista  -> número
 *      Propósito: retornar el índice n dónde se encuentra un número x dado, si existe
 *                 o (n+1), donde n es la posición en la cual se debería insertar x
 *                 para mantener la lista ordenada.
 *      Definición: buscarIndice(x, lista) -> ...
 *      Ejemplo: console.log(buscarIndice(1, [0, 5, 3, 6, 1, 5, 6])) -> 4
 *               console.log(buscarIndice(2, [0, 5, 3, 6, 1, 5, 6])) -> 2
 */
function buscarIndice(x, lista) {
    if (buscarElemento(x, lista) == true) {
        return indice(x, lista)
    } else {
        return indiceListaOrdenada(x, lista)
    }

}
console.log("8. buscarElemento elemento x en lista ordenada: ", buscarIndice(1, [0, 5, 3, 6, 1, 5, 6]))

/**
 *      Contrato: x, lista  -> número
 *      Propósito: obtener el indice de un elemento x dado 
 *      Definición: indice(x, lista) -> ...
 *      Ejemplo: console.log(indice(3, [0, 5, 3, 6, 1, 5, 6])) -> 2
 */
function indice(x, lista) {
    if (obtenerUltimoElemento(lista) == x) {
        return longitud(lista) - 1 //cuenta desde la posición 0
    } else {
        return indice(x, eliminarUltimoElemento(lista))
    }
}

/**
 *      Contrato: x, lista  -> número
 *      Propósito: obtener el indice de un nuevo elemento x en una lista ordenada
 *      Definición: indiceListaOrdenada(x, lista) -> ...
 *      Ejemplo: console.log(indiceListaOrdenada(4, [0, 5, 3, 6, 1, 5, 6])) -> 3
 */
function indiceListaOrdenada(x, lista) {
    return indice(x, insertarElementoListaOrdenada(x, lista))
}

/**
 * 9. Implemente una función que inserta un dato en una lista que siempre está ordenada
 * 
 *      Contrato: x, lista  -> número
 *      Propósito: insertar un dato x en una lista que siempre está ordenada
 *      Definición: insertarElementoListaOrdenada(x, lista) -> ...
 *      Ejemplo: console.log(insertarElementoListaOrdenada(4, [0, 5, 3, 6, 1, 5, 6])) -> [ 0, 1, 3, 4, 5, 5, 6, 6 ]
 */
function insertarElementoListaOrdenada(x, lista) {
    return ordenarAscendente(cons(x, lista))
}
console.log("9. Insertar dato y ordenar lista: ", insertarElementoListaOrdenada(4, [0, 5, 3, 6, 1, 5, 6]))

/**
 * 10. Implemente una función que busca un elemento en una lista desordenada
 * 
 *      Contrato: x, lista  -> bool
 *      Propósito: buscar un elemento en una lista desordenada
 *      Definición: buscarElemento(x, lista) -> ...
 *      Ejemplo: console.log(buscarElemento(4, [0, 5, 3, 6, 1, 5, 6])) -> false
 */
function buscarElemento(x, lista) {
    if (isEmpty(lista)) {
        return false
    } else if (obtenerUltimoElemento(lista) == x) {
        return true
    } else {
        return buscarElemento(x, eliminarUltimoElemento(lista))
    }
}
console.log("10. buscarElemento elemento x en lista desordenada: ", buscarElemento(4, [0, 5, 3, 6, 1, 5, 6]))

/**
 * 11. Implemente una función que elimina el elemento n de la lista
 * 
 *      Contrato: n, lista  -> lista
 *      Propósito: eliminar el elemento n de la lista
 *      Definición: eliminar(n, lista) -> ...
 *      Ejemplo: console.log(eliminar(3, [0, 5, 3, 6, 1, 5, 6])) -> [ 0, 5, 3, 1, 5, 6 ]
 */
function eliminar(n, lista) {
    return eliminarUnElemento(obtenerElemento(n, lista), lista)
}
console.log("11. eliminar el elemento n de la lista: ", eliminar(3, [0, 5, 3, 6, 1, 5, 6]))

/**
 *      Contrato: n, lista  -> número
 *      Propósito: obtener el elemento de una lista dado el indice
 *      Definición: obtenerElemento(n, lista) -> ...
 *      Ejemplo: console.log(obtenerElemento(4, [0, 5, 3, 6, 1, 5, 6])) -> 1
 */
function obtenerElemento(n, lista) {
    if (n + 1 == longitud(lista)) {
        return obtenerUltimoElemento(lista)
    } else {
        return obtenerElemento(n, eliminarUltimoElemento(lista))
    }
}

/**
 * 12. Concatenar dos listas
 * 
 *      Contrato: lista,lista -> lista
 *      Propósito: concatenar 2 listas
 *      Definición: concatenarListas(lista1, lista2) -> ...
 *      Ejemplo: console.log(concatenarListas([1, 2, 4], [5, 6, 3])) -> [1,2,4,5,6,3]
 */
function concatenarListas(lista1, lista2) {
    if (isEmpty(lista1)) {
        return lista2
    } else {
        return cons(first(lista1), concatenarListas(rest(lista1), lista2))
    }
}
console.log("12. Concatenar 2 listas: ", concatenarListas([1, 2, 4], [5, 6, 3]))

/**
 * 13. Encontrar los valores mayores que un numero x dado
 * 
 *      Contrato: x ,lista -> lista
 *      Propósito: Encontrar los valores mayores que un numero x dado
 *      Definición:  mayorque(x, lista) -> ...
 *      Ejemplo: console.log(mayorque(6, [3, 5, 8, 9])) -> [8,9]
 */
function mayorque(x, lista) {
    if (isEmpty(lista)) {
        return []
    } else {
        if (first(lista) > x) {
            return cons(first(lista), mayorque(x, rest(lista)))
        } else {
            return mayorque(x, rest(lista))
        }
    }
}
console.log("13. Numero mayores que x: ", mayorque(6, [3, 5, 8, 9]))

/**
 * 14. Encontrar los numeros pares de una lista
 * 
 *      Contrato: lista -> lista
 *      Propósito: Encontrar los numeros pares de una lista
 *      Definición: buscarPares(lista) -> ...
 *      Ejemplo: console.log(buscarPares([1, 2, 3, 5, 6, 8, 16])) -> [2,6,8,16]
 */
function buscarPares(lista) {
    if (isEmpty(lista)) {
        return []
    } else {
        if (par(first(lista))) {
            return cons(first(lista), buscarPares(rest(lista)))
        } else
            return buscarPares(rest(lista))
    }

}
console.log("14. Buscar pares: ", buscarPares([1, 2, 3, 5, 6, 8, 16]))

/**
 *      Contrato: numero -> numero
 *      Propósito: Decir si un número es par o no
 *      Definición: par(elemento) -> ...
 *      Ejemplo: console.log(par(8)) -> true
 */
function par(elemento) {
    if (elemento % 2 == 0) {
        return true
    } else {
        return false
    }
}

/**
 * 15. Aplicar una operacion a cada elemento de una lista
 * 
 *      Contrato: operacion,lista -> lista
 *      Propósito: Aplicar una operacion a cada elemento de una lista
 *      Definición:  map(operacion, lista)
 *      Ejemplo: console.log(map((x) => 2 * x, [1,2,3,5])) -> [2,4,6,10]
 */
function map(operacion, lista) {
    if (isEmpty(lista)) {
        return []
    } else {
        return cons(operacion(first(lista)), map(operacion, rest(lista)))
    }
}
console.log("15. función map: ", map((x) => 2 * x, [1, 2, 3, 5]))