//here the new project So sorry the a lot comments but I need to know what myself was thinking to do this parts and 
//understand better my code and so sorry that I type that in Spanish but I need understand me, I use and apply
//the code that I understand by videos of Youtube in Spanish so sorry my issues

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