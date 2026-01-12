registros = [];

function prosesar(){
    const formulario = document.forms['usuarioForm'];
    const registo = {
        "nombre": formulario.elements[0].value,
        "apellido": formulario.elements[1].value,
        "direccion": formulario.elements[2].value,
        "email": formulario.elements[3].value,
    };
    registros.push(registo);
    formulario.reset();
    formulario.elements[0].focus();
    console.log(registros);
}