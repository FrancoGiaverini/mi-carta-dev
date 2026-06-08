$(document).ready(function () {

    let veces = 0;

    $("#btn-activar").click(function () {

        alert("¡Pixel Perfect activada!");

        $(".carta").addClass("activa");

        veces++;

        $("#contador").text(
            "Activada " + veces + " veces"
        );

    });

    $(".carta").hover(

        function () {

            $(".rareza").text(
                "🔥 ¡LEGENDARIA! 🔥"
            );

        },

        function () {

            $(".rareza").text(
                "Legendaria"
            );

        }

    );


    const hobbies = [

        {
            nombre: "Gaming",
            descripcion: "Jugar RPGs y juegos de estrategia en general",
            horas: 12
        },

        {
            nombre: "Deporte",
            descripcion: "Entrenar y jugar futbol",
            horas: 14
        },

        {
            nombre: "Lectura",
            descripcion: "Leer comics y manga",
            horas: 6
        }

    ];

    let indice =
        Math.floor(
            Math.random() * hobbies.length
        );

    mostrarHobby();

    function mostrarHobby() {

        $("#hobby-nombre").text(
            hobbies[indice].nombre
        );

        $("#hobby-descripcion").text(
            hobbies[indice].descripcion
        );

        $("#horas-hobby").text("");

    }

    $("#btn-hobby").click(function () {

        $("#hobby").fadeOut(function () {

            indice++;

            if (indice >= hobbies.length) {

                indice = 0;

            }

            mostrarHobby();

            $("#hobby").fadeIn();

        });

    });

    $("#hobby").dblclick(function () {

        $("#horas-hobby").text(
            "Horas semanales: " +
            hobbies[indice].horas
        );

    });

});
