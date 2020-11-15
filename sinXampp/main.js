$(document).ready(function(){
	console.log("JQuery Activo");
});

function activateButton(activate){
	for(var i=1; i<=9; i++)
		$("#btn" + i).removeClass('active');

	$("#btn" + activate).addClass('active');

	var url = "ejercicios/ejercicio" + activate + ".html";

	$.get(url, function(result){
	   $("#cuerpo").html(result);
	});
}

function effects(effect){
	switch(effect){
		case "hide":
		$('#elemento').hide(1000);
		break;
		case "show":
		$('#elemento').show(1000);
		break;
		case "fadeOut":
		$('#elemento').fadeOut(1000);
		break;
		case "fadeIn":
		$('#elemento').fadeIn(1000);
		break;
		case "slideDown":
		$('#elemento').slideDown(1000);
		break;
		case "slideUp":
		$('#elemento').slideUp(1000);
		break;
	}
}

function hideShowLi(effect){
	if(effect == "hide")
		for(var i=1; i<=5; i++)
			$('#li' + i).hide(1000);
	else
		for(var i=1; i<=5; i++)
			$('#li' + i).show(1000);
}

function changeCss(id){
	$('#titulo' + id).css({"background-color": "green", "color": "red", "font-family" : "Arial"});
}

function over(id){
	$('#enlace' + id).css({"background-color" : "blue", "color": "white"});
}
function out(id){
	var color = "";
	switch(id){
		case "1":
		color="red";
		break;
		case "2":
		color="yellow";
		break;
		case "3":
		color="green";
		break;
	}
	$('#enlace' + id).css({"background-color" : color, "color": "black"});	
}

function borrarItem(){
	$('#li1').fadeOut(1000);
}
function modificarItem(){
	$('#li2').html("TEXTO MODIFICADO");
}
function addItem(){
	$('#lista1').append('<li class="list-group-item" id="li5">ITEM ANIADIDO</li>');
}

function addBackground(){
	$('.clase').css({"background-color": "red"});
}
function addClass(){
	$('#parrafos').addClass('ejercicio7');
}
function quitarClass(){
	$('#parrafos').removeClass('ejercicio7');
}
function crearFormulario(){
	$('#ejercicio').html('<form>');
	$('#ejercicio').append('<div class="form-group>">');
	$('#ejercicio').append('<label for="exampleInputEmail1">NOMBRE DE USUARIO</label>');
    $('#ejercicio').append('<input type="text" class="form-control" id="nombre" aria-describedby="emailHelp" placeholder="Enter email">');
    $('#ejercicio').append('</div>');
    $('#ejercicio').append('<div class="form-group">');
    $('#ejercicio').append('<label for="exampleInputPassword1">PASSWORD</label>');
    $('#ejercicio').append('<input type="password" class="form-control" id="password" placeholder="Password">');
    $('#ejercicio').append('</div><br>');
    $('#ejercicio').append('<button class="btn btn-primary" onclick="mostrar();">MOSTRAR</button>');
    $('#ejercicio').append('</form>');
}
function mostrar(){
	var nombre = $('#nombre').val();
	var password = $('#password').val();

	alert("Nombre: " + nombre + "\nPassword: " + password);
}

function enFoco(id){
	$('#caja' + id).css({
		"color": 'red',
	});
}
function fueraFoco(id){
	$('#caja' + id).css({
		"color": 'blue',
	});
}