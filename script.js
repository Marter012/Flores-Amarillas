const boton = document.getElementById("boton");

const inicio = document.getElementById("inicio");

const jardin = document.getElementById("jardin");

const flores = document.getElementById("flores");

const petalos = document.getElementById("petalos");

const mensaje = document.getElementById("mensaje");


/* =====================================
   CONFIGURACIÓN
===================================== */

const cantidadFloresGrandes = 18;

const cantidadFloresPequenas = 40;

const cantidadPetalos = 100;


/* =====================================
   BOTÓN
===================================== */

boton.addEventListener("click", comenzar);


function comenzar() {

    inicio.classList.add("oculto");


    // Primero aparecen las flores grandes

    crearFloresGrandes();


    // Después las flores pequeñas

    setTimeout(() => {

        crearFloresPequenas();

    }, 500);


    // Lluvia de pétalos

    setTimeout(() => {

        crearPetalos();

    }, 800);


    // Destellos

    crearDestellos();


    // Mensaje final

    setTimeout(() => {

        mensaje.classList.add("visible");

    }, 600);
}


/* =====================================
   FLORES GRANDES
===================================== */

function crearFloresGrandes() {

    for (
        let i = 0;
        i < cantidadFloresGrandes;
        i++
    ) {

        setTimeout(() => {

            const flor =
                document.createElement("div");

            flor.classList.add("flor-grande");


            /*
             * Evitamos poner flores
             * exactamente en el centro.
             */

            let x;
            let y;

            do {

                x = Math.random() * 90;

                y = Math.random() * 85;

            } while (
                x > 25 &&
                x < 75 &&
                y > 25 &&
                y < 75
            );


            flor.style.left = x + "%";

            flor.style.top = y + "%";


            // Variación de tamaño

            const escala =
                .7 + Math.random() * .7;

            flor.style.transform =
                `scale(${escala})`;


            // Crear pétalos

            for (
                let p = 0;
                p < 8;
                p++
            ) {

                const petalo =
                    document.createElement("div");

                petalo.classList.add(
                    "petalo-flor"
                );

                flor.appendChild(petalo);
            }


            // Centro

            const centro =
                document.createElement("div");

            centro.classList.add(
                "centro-flor"
            );

            flor.appendChild(centro);


            // Tallo

            const tallo =
                document.createElement("div");

            tallo.classList.add("tallo");

            flor.appendChild(tallo);


            // Hojas

            const hoja1 =
                document.createElement("div");

            hoja1.classList.add(
                "hoja",
                "hoja-1"
            );

            flor.appendChild(hoja1);


            const hoja2 =
                document.createElement("div");

            hoja2.classList.add(
                "hoja",
                "hoja-2"
            );

            flor.appendChild(hoja2);


            jardin.appendChild(flor);


        }, i * 220);
    }
}


/* =====================================
   FLORES PEQUEÑAS
===================================== */

const tiposFlor = [
    "🌻",
    "🌼",
    "💛",
    "✦"
];


function crearFloresPequenas() {

    for (
        let i = 0;
        i < cantidadFloresPequenas;
        i++
    ) {

        setTimeout(() => {

            const flor =
                document.createElement("div");

            flor.classList.add("flor");


            flor.textContent =
                tiposFlor[
                    Math.floor(
                        Math.random() *
                        tiposFlor.length
                    )
                ];


            flor.style.left =
                Math.random() * 95 + "%";


            flor.style.top =
                Math.random() * 90 + "%";


            flor.style.fontSize =
                20 + Math.random() * 35 + "px";


            flores.appendChild(flor);


        }, i * 100);

    }
}


/* =====================================
   PÉTALOS
===================================== */

function crearPetalos() {

    for (
        let i = 0;
        i < cantidadPetalos;
        i++
    ) {

        setTimeout(() => {

            crearPetalo();

        }, i * 70);

    }
}


function crearPetalo() {

    const petalo =
        document.createElement("div");

    petalo.classList.add("petalo");


    petalo.textContent =
        Math.random() > .5
            ? "🌼"
            : "✦";


    petalo.style.left =
        Math.random() * 100 + "%";


    petalo.style.fontSize =
        10 + Math.random() * 20 + "px";


    const duracion =
        4 + Math.random() * 5;


    petalo.style.animationDuration =
        duracion + "s";


    petalos.appendChild(petalo);


    setTimeout(() => {

        petalo.remove();

    }, duracion * 1000);
}


/* =====================================
   DESTELLOS INICIALES
===================================== */

function crearDestellos() {

    for (let i = 0; i < 70; i++) {

        setTimeout(() => {

            const luz =
                document.createElement("div");

            luz.classList.add("luz");


            luz.style.left =
                10 + Math.random() * 80 + "%";


            luz.style.top =
                30 + Math.random() * 60 + "%";


            document.body.appendChild(luz);


            setTimeout(() => {

                luz.remove();

            }, 2000);

        }, i * 35);
    }
}


/* =====================================
   DESTELLO AL HACER CLICK
===================================== */

document.addEventListener(
    "click",
    (evento) => {

        if (
            inicio.classList.contains("oculto")
        ) {

            for (
                let i = 0;
                i < 5;
                i++
            ) {

                crearDestelloClick(
                    evento.clientX,
                    evento.clientY
                );

            }
        }

    }
);


function crearDestelloClick(x, y) {

    const luz =
        document.createElement("div");

    luz.classList.add("luz");

    luz.style.left = x + "px";

    luz.style.top = y + "px";

    document.body.appendChild(luz);


    setTimeout(() => {

        luz.remove();

    }, 2000);
}