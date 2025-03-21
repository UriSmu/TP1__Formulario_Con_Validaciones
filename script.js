function VerificarNombre(valor)
{
    let tresCaracteres = document.getElementById("tresCaracteres");
    let mensaje = "Debe tener al menos 3 caracteres";

    if(!ValidarNombre(valor))
    {
        tresCaracteres.style.color = "red";
        tresCaracteres.innerHTML=mensaje;
    }
    else
    {
        mensaje = "";
        tresCaracteres.innerHTML=mensaje;
    }
}

function VerificarEmail(valor)
{
    let formatoValido = document.getElementById("formatoValido");
    let mensaje = "Debe tener un formato 'Email' válido";

    if(!ValidarEmail(valor))
    {
        formatoValido.style.color = "red";
        formatoValido.innerHTML=mensaje;
    }
    else
    {
        mensaje = "";
        formatoValido.innerHTML=mensaje;
    }
}

function VerificarContraseña(valor)
{
    let formatoValido = document.getElementById("contraseñaValida");
    let mensaje = "La contraseña debe contener mínimo 8 caracteres, y al menos un número y una letra";

    if(!ValidarContrasena(valor))
    {
        formatoValido.style.color = "red";
        formatoValido.innerHTML=mensaje;
    }
    else
    {
        mensaje = "";
        formatoValido.innerHTML=mensaje;
    }
}

function VerificarContraseñaIgual(valor)
{
    let formatoValido = document.getElementById("contraseñaIgual");
    let contraseña = document.getElementById("contraseña").value;
    let mensaje = "La contraseña debe ser igual a la anterior";

    if(!ValidarContrasenaIgual(contraseña, valor))
    {
        formatoValido.style.color = "red";
        formatoValido.innerHTML=mensaje;
    }
    else
    {
        mensaje = "";
        formatoValido.innerHTML=mensaje;
    }
}

const EnviarFormulario = (e) =>
{
    let mensajeLugar = document.getElementById("enviar");
    const mensaje = "Todos los datos deben ser válidos";

    const nombre = document.getElementById("nombreCompleto").value;
    const email = document.getElementById("email").value;
    const contrasena = document.getElementById("contraseña").value;
    const confirmacion = document.getElementById("confirmarContraseña").value;

    if(!(ValidarNombre(nombre) && ValidarEmail(email) && ValidarContrasena(contrasena) && ValidarContrasenaIgual(contrasena, confirmacion)))
    {
        e.preventDefault();
        mensajeLugar.style.color = "red";
        mensajeLugar.innerHTML=mensaje;
    }
    else
    {
        localStorage.setItem(nombre, );
        alert(`Bienvenido, ${nombre}`);
    }
}



function CambiarModoOscuro() 
{
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function pass(){ document.getElementById('contraseña').type="password"; } 
function text(){ document.getElementById('contraseña').type="text"; }





//BUSQUÉ EN LA WEB UNA FUNCIÓN QUE VALIDE EL FORMATO DE LOS EMAILS, Y DE LAS CONTRASEÑAS
function ValidarEmail(email) 
{
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}
function ValidarContrasena(contrasena) {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    return regex.test(contrasena);
}


function ValidarNombre(nombre)
{
    if(nombre.length < 3)
    {
        return false;
    }
    else
    {
        return true;
    }
}
function ValidarContrasenaIgual(contrasena, repeticion)
{
    if(contrasena !== repeticion)
    {
        return false;
    }
    else
    {
        return true;
    }
}