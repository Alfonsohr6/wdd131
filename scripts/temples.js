window.onload = function(){
    // intento conseguir el año 
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").innerHTML = currentYear;
    
    //Ultima modificacion.
    
    const lastModified = document.lastModified;
    document.getElementById("lastModified").innerHTML = "Last upated: " + lastModified;
    }

