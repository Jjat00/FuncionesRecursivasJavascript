const { buscarCancionPorNombre, buscarCancionPorArtista, duracionListaReproduccionConformato, cancionesAlMenosDosEstrellas, cancionesCincoEstrellas, imprimirTitulosYDuracion, ordenarMejorAPeorCancion, eliminarCancionN, estrellasCanciones } = require('../src/tallerParteII');


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


test('1. ', () => {
    expect(buscarCancionPorNombre("En La Ciudad De La Furia'", listaDeReproduccion)) == ([{
        nombre: 'En La Ciudad De La Furia',
        artista: 'Soda Stereo',
        album: 'Comfort Y Musica Para Volar',
        duracion: 253,
        estrellas: 5
    }])
})

test('2. ', () => {
    expect(buscarCancionPorArtista("Parabellum", listaDeReproduccion)) == ([{
            nombre: 'La vela se apaga',
            artista: 'Parabellum',
            album: 'No hay opción',
            duracion: 414,
            estrellas: 4
        },
        {
            nombre: 'Quien quiere',
            album: 'No hay opción',
            artista: 'Parabellum',
            duracion: 314,
            estrellas: 3
        }
    ])
})

test('3. ', () => {
    expect(duracionListaReproduccionConformato(listaDeReproduccion)) == ("0:53:9")
})

test('4. ', () => {
    expect(cancionesAlMenosDosEstrellas(listaDeReproduccion)) == ([{
            nombre: 'Coma white',
            artista: 'Desconocido',
            album: 'Coma white',
            duracion: 520,
            estrellas: 2
        },
        {
            nombre: 'Papel dile',
            artista: 'Stan MC',
            album: 'Desconocido',
            duracion: 314,
            estrellas: 2
        }
    ])
})

test('5. ', () => {
    expect(cancionesCincoEstrellas(listaDeReproduccion)) == ([{
            nombre: 'En La Ciudad De La Furia',
            artista: 'Soda Stereo',
            album: 'Comfort Y Musica Para Volar',
            duracion: 253,
            estrellas: 5
        },
        {
            nombre: 'Maligno',
            artista: 'Aterciopelados feat. León Larregui',
            album: 'Desconocido',
            duracion: 313,
            estrellas: 5
        }
    ])
})
test('6. ', () => {
    expect(imprimirTitulosYDuracion(listaDeReproduccion)) == (['How to fly',
        330,
        'Coma white',
        520,
        'La vela se apaga',
        414,
        'Quien quiere',
        314,
        'Disorder',
        203,
        'Where is my mind',
        229,
        'Papel dile',
        314,
        'Noches de humo',
        300,
        'En La Ciudad De La Furia',
        253,
        'Maligno',
        313
    ])
})

test('8. ', () => {
    expect(eliminarCancionN(0, listaDeReproduccion)) == ([{
            nombre: 'Coma white',
            artista: 'Desconocido',
            album: 'Coma white',
            duracion: 520,
            estrellas: 2
        },
        {
            nombre: 'La vela se apaga',
            artista: 'Parabellum',
            album: 'No hay opción',
            duracion: 414,
            estrellas: 4
        },
        {
            nombre: 'Quien quiere',
            album: 'No hay opción',
            artista: 'Parabellum',
            duracion: 314,
            estrellas: 3
        },
        {
            nombre: 'Disorder',
            artista: 'Joy Division',
            album: 'Trainspotting',
            duracion: 203,
            estrellas: 3
        },
        {
            nombre: 'Where is my mind',
            artista: 'Pixies',
            album: 'Surfer Rosa',
            duracion: 229,
            estrellas: 3
        },
        {
            nombre: 'Papel dile',
            artista: 'Stan MC',
            album: 'Desconocido',
            duracion: 314,
            estrellas: 2
        },
        {
            nombre: 'Noches de humo',
            artista: 'Morodo',
            album: 'Koma',
            duracion: 300,
            estrellas: 4
        },
        {
            nombre: 'En La Ciudad De La Furia',
            artista: 'Soda Stereo',
            album: 'Comfort Y Musica Para Volar',
            duracion: 253,
            estrellas: 5
        },
        {
            nombre: 'Maligno',
            artista: 'Aterciopelados feat. León Larregui',
            album: 'Desconocido',
            duracion: 313,
            estrellas: 5
        }
    ])
})