// Función para inicializar el mapa de Google Maps
function initMap() {
    const zumpango = { lat: 19.826759, lng: -99.134028 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: zumpango,
    });
    new google.maps.Marker({
        position: zumpango,
        map: map,
        title: "Zumpango, México",
    });
}

// Función para actualizar el año actual y la última modificación
window.onload = function () {
    // Obtener el año actual
    const currentYearElement = document.getElementById("currentYear");
    if (currentYearElement) {
        const currentYear = new Date().getFullYear();
        currentYearElement.innerHTML = currentYear;
    }

    // Mostrar la última modificación
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        const lastModified = document.lastModified;
        lastModifiedElement.innerHTML = "Last updated: " + lastModified;
    }

// Menú desplegable
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
    // Alternar el menú al hacer clic en el botón
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");

        // Ajustar el contenido principal cuando el menú está activo
        const mainContent = document.querySelector("main");
        if (navMenu.classList.contains("active")) {
            mainContent.style.marginTop = "200px"; // Mover el contenido hacia abajo
        } else {
            mainContent.style.marginTop = "0"; // Restaurar el margen original
        }
    });

    // Cerrar el menú cuando se hace clic fuera de él
    document.addEventListener("click", function (event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnButton = menuToggle.contains(event.target);

        if (!isClickInsideMenu && !isClickOnButton) {
            navMenu.classList.remove("active");

            // Restaurar el margen del contenido principal
            const mainContent = document.querySelector("main");
            mainContent.style.marginTop = "0";
        }
    });
}

    // Permitir que los enlaces sean clicables sin cerrar el menú inmediatamente
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Opcional: Cierra el menú después de hacer clic en un enlace
            navMenu.classList.remove("active");
        });
    });
}

    // Filtrar actividades (solo en activity.html)
    if (document.querySelector(".gallery")) {
        const filterButtons = document.querySelectorAll(".filter-button");
        const galleryItems = document.querySelectorAll(".gallery-item");

        filterButtons.forEach(button => {
            button.addEventListener("click", function () {
                const category = this.getAttribute("data-category");

                galleryItems.forEach(item => {
                    const itemCategory = item.getAttribute("data-category");
                    if (category === "all" || itemCategory === category) {
                        item.style.display = "block";
                    } else {
                        item.style.display = "none";
                    }
                });
            });
        });
    }

    // Búsqueda en la biblioteca (solo en library.html)
    if (document.querySelector("#searchInput")) {
        const searchInput = document.getElementById("searchInput");
        const tableRows = document.querySelectorAll("table tbody tr");

        searchInput.addEventListener("input", function () {
            const searchTerm = this.value.toLowerCase();

            tableRows.forEach(row => {
                const title = row.cells[0].textContent.toLowerCase();
                const author = row.cells[1].textContent.toLowerCase();
                const category = row.cells[2].textContent.toLowerCase();

                if (
                    title.includes(searchTerm) ||
                    author.includes(searchTerm) ||
                    category.includes(searchTerm)
                ) {
                    row.style.display = "table-row";
                } else {
                    row.style.display = "none";
                }
            });
        });
    }

    // Copiar enlaces de contacto (solo en help.html)
    if (document.querySelector(".contact-info")) {
        const contactLinks = document.querySelectorAll(".contact-info a");

        contactLinks.forEach(link => {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                const textToCopy = this.getAttribute("href").replace("mailto:", "");

                if (navigator.clipboard) {
                    navigator.clipboard.writeText(textToCopy).then(() => {
                        alert(`Copied to clipboard: ${textToCopy}`);
                    }).catch(err => {
                        console.error("Failed to copy text: ", err);
                    });
                } else {
                    alert("Your browser does not support clipboard operations.");
                }
            });
        });
    };