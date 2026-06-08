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
});
