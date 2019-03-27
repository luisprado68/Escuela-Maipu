var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav');

btnMenu.addEventListener('click', function(){ // al hacer un click me muestre  la clase nueva llamada mostrar
	nav.classList.toggle('mostrar');// se agregara una clase llamada mostrar.
} )