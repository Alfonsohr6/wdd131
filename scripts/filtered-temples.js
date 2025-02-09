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
            cssLink.href = "styles/filtered-temples-large.css";
        } else {
            // Si el ancho es mayor a 600px (computadora)
            cssLink.href = "styles/filtered-temples.css";
        }
    }

    // Cargar el CSS inicialmente
    loadCSS();

    // Actualizar el CSS si el tamaño de la pantalla cambia
    window.addEventListener("resize", loadCSS);

    // Alternar el menú dependiendo del tamaño de la pantalla
    function toggleMenu() {
        const menu = document.getElementById("menu");
        menu.classList.toggle("active");
    }

    // Cargar la galería dinámicamente
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        // Agrega más templos aquí...
    ];

    const galeriaContainer = document.getElementById("galeria-container");

    temples.forEach(temple => {
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        const figcaption = document.createElement("figcaption");

        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        figcaption.textContent = temple.templeName;

        figure.appendChild(img);
        figure.appendChild(figcaption);
        galeriaContainer.appendChild(figure);
    });
};