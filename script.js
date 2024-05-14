let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
   
    var slideIndex = 0;
var slides = document.getElementsByClassName("proyecto");
var totalSlides = slides.length;
var visibleSlides = 3; // Número de imágenes visibles a la vez
showSlides(slideIndex);

function moveSlider(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;

    // Si llegamos al final del carrusel, volvemos al principio
    if (n > totalSlides - visibleSlides) { slideIndex = 0; }
    // Si estamos al principio y vamos hacia atrás, nos movemos al final del carrusel
    if (n < 0) { slideIndex = totalSlides - visibleSlides; }

    // Ocultamos todas las imágenes
    for (i = 0; i < totalSlides; i++) {
        slides[i].style.display = "none";
    }

    // Mostramos el conjunto de imágenes actual
    for (i = slideIndex; i < slideIndex + visibleSlides; i++) {
        slides[i].style.display = "block";
    }
}
