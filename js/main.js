$(document).ready(function () {
  // Slider

  if (window.location.href.indexOf("index") > -1) {
    $(".galeria").bxSlider({
      mode: "fade",
      captions: true,
      slideWidth: 600,
    });
  }

  // Post - FECHAS
  if (window.location.href.indexOf("index") > -1) {
    var posts = [
      {
        title: "Naruto",
        date:
          "Publicado el dia " +
          moment().day() +
          " de " +
          moment().format("MMMM ") +
          "del " +
          moment().format("YYYY "),
        content: "Aca va un parrafo",
        href: "https://naruto.fandom.com/es/wiki/Naruto_(Anime)",
        img: "https://c4.wallpaperflare.com/wallpaper/738/62/544/naruto-chidori-naruto-naruto-uzumaki-rasengan-naruto-sasuke-uchiha-hd-wallpaper-preview.jpg",
      },
      {
        title: "Dragon Ball",
        date:
          "Publicado el dia " +
          moment().day() +
          " de " +
          moment().format("MMMM ") +
          "del " +
          moment().format("YYYY "),
        content: "Aca va un parrafo",
        href: "https://dragonball.fandom.com/es/wiki/Dragon_Ball_Z",
        img: "https://www.rockandpop.cl/wp-content/uploads/2019/03/Dragon-Ball-z.jpeg",
      },
      {
        title: "One Piece",
        date:
          "Publicado el dia " +
          moment().day() +
          " de " +
          moment().format("MMMM ") +
          "del " +
          moment().format("YYYY "),
        content: "Aca va un parrafo",
        href: "https://onepiece.fandom.com/es/wiki/One_Piece_Wiki",
        img: "https://lafrikileria.com/blog/wp-content/uploads/2021/07/one-piece-logo.jpg",
      },
      {
        title: "Hajime No Ippo",
        date:
          "Publicado el dia " +
          moment().day() +
          " de " +
          moment().format("MMMM ") +
          "del " +
          moment().format("YYYY "),
        content: "Aca va un parrafo",
        href: "https://ippo.fandom.com/wiki/Hajime_no_Ippo",
        img: "https://areajugones.sport.es/wp-content/uploads/2021/06/imagen-2021-06-12-110632-1080x609.jpg",
      },
      {
        title: "My Hero Academy",
        date:
          "Publicado el dia " +
          moment().day() +
          " de " +
          moment().format("MMMM ") +
          "del " +
          moment().format("YYYY "),
        content: "Aca va un parrafo",
        href: "https://myheroacademia.fandom.com/es/wiki/My_Hero_Academia",
        img: "https://wallpaperaccess.com/full/2352050.jpg",
      },
      {
        title: "Spy x Spy",
        date:
          "Publicado el dia " +
          moment().day() +
          " de " +
          moment().format("MMMM ") +
          "del " +
          moment().format("YYYY "),
        content: "Aca va un parrafo",
        href: "https://spy-x-family.fandom.com/wiki/Spy_x_Family_Wiki",
        img: "https://as01.epimg.net/meristation/imagenes/2022/09/29/noticias/1664448316_373737_1664449195_noticia_normal.jpg",
      },
    ];

    posts.forEach((item, index) => {
      var post = `
    <article class="post">
      <h2>${item.title}</h2>
      <span class="date">${item.date}</span>

      <img src=${item.img} width="400" />
      <a href=${item.href} class="button-more">Ver más</a>
    `;
      $("#posts").append(post);
    });
  }
  // Selector de tema

  var theme = $("#theme");
  $("#to-blue").click(function () {
    theme.attr("href", "css/blue.css");
  });
  $("#to-dark").click(function () {
    theme.attr("href", "css/dark.css");
  });
  $("#to-light").click(function () {
    theme.attr("href", "css/light.css");
  });

  // Scroll arriba de la pagina
  $(".subir").click(function () {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );

    return false;
  });

  // Login falso

  $("#login form").submit(function () {
    var form_name = $("#form_name").val();
    localStorage.setItem("form_name", form_name);
  });

  var form_name = localStorage.getItem("form_name");

  if (form_name != null && form_name != undefined) {
    var about_parrafo = $("#about p");
    $("#about p").html("<strong>Bienvenido, " + form_name + "</strong>");
    about_parrafo.append("<a href= '#' id= 'logout'>Cerrar sesion</a>");

    $("#login").hide();

    $("#logout").click(function () {
      localStorage.clear();
      location.reload();
    });
  }

  // Acordeon
  if (window.location.href.indexOf("about") > -1) {
    $("#acordeon").accordion();
  }

  // Reloj
  if (window.location.href.indexOf("reloj") > -1) {
    setInterval(() => {
      var reloj = moment().format("h:mm:ss");
      $("#reloj").html(reloj);
    }, 1000);
  }

  // Validacion
  if (window.location.href.indexOf("contact") > -1) {
    $(document).ready(function() {
      $("#basic_form").validate();
      });
  }
});
