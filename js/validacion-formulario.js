/* FORMULARIO */

let formulario= document.querySelector(".form_header");
let campoForm= document.querySelector("[name=busqueda]");

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    if ( campoForm.value =="") {
        alert("Debes escribir algo")
    } else if (campoForm.value.length <3){
        alert("Su búsqueda debe tener más de tres caracteres")
    }else {
        this.submit()
    }

    
})

