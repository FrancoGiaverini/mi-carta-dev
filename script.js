$(document).ready(function () {
  let veces = 0;

  $("#btn-activar").click(function () {
    alert("¡Pixel Perfect activada!");

    $(".carta").addClass("activa");

    veces++;

    $("#contador").text("Activada " + veces + " veces");
  });

  $(".carta").hover(
    function () {
      $(".rareza").text("🔥 ¡LEGENDARIA! 🔥");
    },

    function () {
      $(".rareza").text("Legendaria");
    },
  );

  const hobbies = [
    {
      nombre: "Gaming",
      descripcion: "Jugar RPGs y juegos de estrategia en general",
      horas: 12,
    },

    {
      nombre: "Deporte",
      descripcion: "Entrenar y jugar futbol",
      horas: 14,
    },

    {
      nombre: "Lectura",
      descripcion: "Leer comics y manga",
      horas: 6,
    },
  ];

  let indice = Math.floor(Math.random() * hobbies.length);

  mostrarHobby();

  function mostrarHobby() {
    $("#hobby-nombre").text(hobbies[indice].nombre);

    $("#hobby-descripcion").text(hobbies[indice].descripcion);

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
    $("#horas-hobby").text("Horas semanales: " + hobbies[indice].horas);
  });
  $("#btn-modo").click(function () {
    $("body").toggleClass("modo-noche");

    if ($("body").hasClass("modo-noche")) {
      $(this).text("Modo día");
    } else {
      $(this).text("Modo noche");
    }
  });
  $("#btn-reverso").click(function () {
    $("#reverso").slideToggle();

    if ($(this).text() === "Ver reverso") {
      $(this).text("Ocultar reverso");
    } else {
      $(this).text("Ver reverso");
    }
  });
  const poderes = [
    "Los Lunes casi no me afectan",

    "Visión de errores instantánea",

    "dormir todo el dia",

    "Tomar café sin limite",

    "Códear sin errores",
  ];

  let ultimoPoder = "";

  $("#btn-poder").click(function () {
    let poder;
    do {
      poder = poderes[Math.floor(Math.random() * poderes.length)];
    } while (poder === ultimoPoder);

    ultimoPoder = poder;

    $("#poder-secreto").fadeOut(function () {
      $(this).text(poder).fadeIn();
    });

    $(".carta").addClass("brillo");

    setTimeout(function () {
      $(".carta").removeClass("brillo");
    }, 500);
  });
});
