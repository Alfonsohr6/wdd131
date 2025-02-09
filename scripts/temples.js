//So sorry the a lot comments but I need to know what myself was thinking to do this parts and 
//understand better my code and so sorry that I type that in Spanish but I need understand me, 
//I use and apply the code that I understand by videos of Youtube in Spanish so sorry my issues

window.onload = function () {
    // Obtener el año actual
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").innerHTML = currentYear;

    // Obtener la última modificación
    const lastModified = document.lastModified;
    document.getElementById("lastModified").innerHTML = "Last updated: " + lastModified;

    // Detectar el ancho de la pantalla y cargar el CSS correspondiente
    function loadCSS() {
        const cssLink = document.getElementById("dynamic-css");
        if (window.matchMedia("(max-width: 600px)").matches) {
            // Si el ancho es menor o igual a 600px (celular)
            cssLink.href = "styles/temples-large.css";
        } else {
            // Si el ancho es mayor a 600px (computadora)
            cssLink.href = "styles/temples.css";
        }
    }

    // Cargar el CSS inicialmente
    loadCSS();

    // Actualizar el CSS si el tamaño de la pantalla cambia
    window.addEventListener("resize", loadCSS);
};

//Alternar el menú dependiendo el tamaño de la panatalla (Celular o Computadora)
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}