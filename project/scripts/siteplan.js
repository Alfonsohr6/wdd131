window.onload = function () {
    // Obtener el año actual
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").innerHTML = currentYear;

    // Mostrar la última modificación
    const lastModified = document.lastModified;
    document.getElementById("lastModified").innerHTML = "Last updated: " + lastModified;

    // Agregar funcionalidad al menú desplegable
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

};