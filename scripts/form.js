//here the new project

window.onload = function(){
    // intento conseguir el año 
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").innerHTML = currentYear;
    
    //Ultima modificacion.
    
    const lastModified = document.lastModified;
    document.getElementById("lastModified").innerHTML = "Last upated: " + lastModified;

    const products = ["Product A", "Product B", "Product C", "Product D"];
        const productSelect = document.getElementById("product");
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product;
            option.textContent = product;
            productSelect.appendChild(option);
        });
}