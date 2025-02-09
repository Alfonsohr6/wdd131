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
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg "
            },
            {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg "
            },
            {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg "
            },
            {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg "
            },
            {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg "
            },
            // Add more temple objects here...
            {
            templeName: "Arequipa Peru Temple",
            location: "Arequipa, Arequipa,Peru",
            dedicated: "2019, December, 15",
            area: 26969,
            imageUrl:
            "https://churchofjesuschrist.org/imgs/cea11ee017a94c829c8a630b43be3e369edf4103/full/1280%2C/0/default "
            },
            {
            templeName: "Trujillo Peru Temple",
            location: "Trujillo,La Libertad, Peru",
            dedicated: "2015, June, 21",
            area: 28200,
            imageUrl:
            "https://www.churchofjesuschrist.org/imgs/d3314069b0111c411c5e21948f4d2d331a98eb3d/full/1920%2C/0/default "
            },
            {
            templeName: "Oaxaca Mexico Temple",
            location: "Oaxaca, Mexico",
            dedicated: "2000, March, 11",
            area: 10700,
            imageUrl:
            "https://www.churchofjesuschrist.org/imgs/581374a61f8732d11ebff1496246465905078e11/full/1920%2C/0/default "
            },
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
