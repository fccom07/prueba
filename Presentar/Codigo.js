/*
Codigo Dom
*/

var fondoOscuro = "#1a1b1d";
var fondoPanelOscuro = "#23242a";
var fondoBotonOscuro = "#31333c"
var textoOscuroA = "#F2F2F2";
var fondoClaro = "#F2F2F2";
var fondoPanelClaro = "#ffffff";
var fondoBotonClaro = "#ffffff";
var textoClaroRosa = "#A42EF2";
var textoClaroAzul = "#41A0F2";
var verde = " #3DD990";
var plomo = "#ccc";
var plomoDark = "#3E403F";
var azulDark = "#5C82F2";
var sombra = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";


//Variables
var oscuro = false;
var buscadorActivo = false;
var cuerpo = document.body;
var cabecera = document.getElementsByTagName("header");
var contenedor = document.getElementsByClassName("contenedor");
var buscador = document.getElementById("buscador");
var boton = document.getElementsByTagName("button");
var a = document.getElementsByTagName("a");
var p = document.getElementsByTagName("p");
var h1 = document.getElementsByTagName("h1");
var i = 0;
var btnBuscador = document.getElementById("btnBuscador");
var btnOscuro = document.getElementById("btnActivarOscuro");
var btnRejoj = document.getElementById("btnReloj");
var pTiempo = document.getElementById("reloj");
var pTxtReloj = document.getElementById("txtReloj");

//Cambio 2 Modo oscuro
function ModoOscuro(){
    cabecera[0].style.backgroundColor = "transparent";
    if(!oscuro){
        oscuro = true;
        cuerpo.style.backgroundColor = fondoOscuro;
        buscador.style.backgroundColor = fondoBotonOscuro;
        buscador.style.border = "none";
        for ( i = 0; i < h1.length; i++){
            h1[i].style.color = fondoClaro;
        }
        for ( i = 0; i < a.length; i++) {
            a[i].style.color = verde;
        }
        for ( i = 0; i < p.length; i++) {
            p[i].style.color = plomo;
        }
        for ( i = 0; i<contenedor.length; i++){
            contenedor[i].style.backgroundColor = fondoPanelOscuro;
        }
        for ( i = 0; i < boton.length; i++) {
            boton[i].style.backgroundColor = fondoBotonOscuro;
            boton[i].style.border = "2px solid " + verde;
            boton[i].style.color = verde;
        }
        btnOscuro.innerHTML = "Desactivar modo oscuro";
    }
    else {
        oscuro = false;
        cuerpo.style.backgroundColor = fondoClaro;
        buscador.style.backgroundColor = fondoClaro;
        buscador.style.border = "2px solid #ccc";
        for ( i = 0; i < h1.length; i++){
            h1[i].style.color = plomoDark;
        }
        for ( i = 0; i < a.length; i++) {
            a[i].style.color = textoClaroAzul;
        }
        for ( i = 0; i < p.length; i++) {
            p[i].style.color = plomoDark;
        }
        for (var i = 0; i<contenedor.length; i++){
            contenedor[i].style.backgroundColor = fondoPanelClaro;
        }
        for ( i = 0; i < boton.length; i++) {
            boton[i].style.backgroundColor = fondoBotonClaro;
            boton[i].style.border = "2px solid " + textoClaroAzul;
            boton[i].style.color = textoClaroAzul;
        }
        btnOscuro.innerHTML = "Activar el modo oscuro";
    }
}


// Animar Buscador
function AnimarBuscador() {
    if (!buscadorActivo) {
        buscadorActivo = true;
        buscador.style.width = "100%";
        buscador.style.transition = "width 2s ease-in-out";
        btnBuscador.innerHTML = "Reducir Buscador";
    } else {
        buscadorActivo = false;
        buscador.style.width = "258px";
        buscador.style.transition = "width 2s ease-in-out";
        btnBuscador.innerHTML = "Animar Buscador";
    }
}


// Cambiar fondo
function FullColor() {
    cabecera[0].style.backgroundColor = azulDark;
    
    for ( i = 0; i < p.length; i++) {
        p[i].style.color = plomo;
    }
    for (var i = 0; i<contenedor.length; i++){
        contenedor[i].style.backgroundColor = textoClaroAzul;
    }
    for ( i = 0; i < boton.length; i++) {
        boton[i].style.backgroundColor = verde;
        boton[i].style.border = "2px solid " + verde;
        boton[i].style.color = fondoClaro;
    }
}

/*
Codigo BOM
*/


// Reloj
var reloj = setInterval(miReloj, 1000);
var relojActivo = false;

function miReloj() {
  var d = new Date();
  pTiempo.style.fontSize = "90px";
  pTiempo.style.color = textoClaroRosa;
  pTiempo.innerHTML = d.toLocaleTimeString();
}

function MostrarReloj() {
    if (!relojActivo) {
        pTiempo.style.display = "block";
        pTxtReloj.style.display = "none";
        btnRejoj.innerHTML = "Ocultar Reloj";
        relojActivo = true;
    } else {
        pTiempo.style.display = "none";
        pTxtReloj.style.display = "block";
        btnRejoj.innerHTML = "Mostrar Reloj";
        relojActivo = false;
    }
}


// Pantalla completa
var pantalla = document.documentElement;
function PantallaCompleta() {
  if (pantalla.requestFullscreen) {
    pantalla.requestFullscreen();
  } else if (pantalla.mozRequestFullScreen) { /* Firefox */
    pantalla.mozRequestFullScreen();
  } else if (pantalla.webkitRequestFullscreen) { /* Chrome, Safari y Opera */
    pantalla.webkitRequestFullscreen();
  } else if (pantalla.msRequestFullscreen) { /* IE/Edge */
    pantalla.msRequestFullscreen();
  }

  alert(
      "BOM tambien ofrece la posibilidad de ver tu pagina web en modo Pantalla completa\n" +
        "\nPara salir del Modo Pantalla Completa; solo debes presionar la tecla escape..."
      );
}




function TxtAnimado() {
    if (posicion < txt.length) {
        document.getElementById("escritura").innerHTML += txt.charAt(posicion);
        posicion++;
        setTimeout(TxtAnimado, velocidad);
    }
}
//jquery 
//efectos
(function($) {
    "use strict"; 
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
    //efecto fadeIn y fadeOut

    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
    //efecto de ocultar imagen
  
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  // efecto de ocultar con un deslice
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery);

  var flag = true;
  $('#btnFade').click(function(){
    if(flag){
      $('#imagen').fadeOut(500);
      $('#btnFade').html("Aparecer Foto");
      flag = false;
    }
    else{
      $('#imagen').fadeIn();
      $('#btnFade').html("Desaparecer Foto");
      flag = true;
    }
  });

  var flag2 = true;
  $('#btnSlide').click(function(){
    if(flag2){
      $('#imagen2').slideUp();
      $('#btnSlide').html("Aparecer Foto");
      flag2 = false;
    }
    else{
      $('#imagen2').slideDown();
      $('#btnSlide').html("Desaparecer Foto");
      flag2 = true;
    }
  });       
  var size=50;
  $('#btnIncrementar').click(function(){
    size=size+50;
    animacion(size);
  });
  $('#btnDecrementar').click(function(){
    size=size-50;
    animacion(size);
  });

  function animacion(size){
    $('#imagen3').animate({height: size+"px", width: size+"px"},1500);
  }