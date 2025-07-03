document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const tipoConsulta = document.getElementById('tipoConsulta').value;
    const mensaje = document.getElementById('mensaje').value;
    const terminos = document.getElementById('terminos').checked;

    const nombreRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefonoRegex = /^\d{8,15}$/;

    if (!nombreRegex.test(nombre)) {
        alert('El nombre solo debe contener letras y espacios.');
        return;
    }
    if (!emailRegex.test(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return;
    }
    if (!telefonoRegex.test(telefono)) {
        alert('El número de teléfono debe tener entre 8 y 15 dígitos.');
        return;
    }
    if (tipoConsulta === "") {
        alert('Por favor, seleccione un tipo de consulta.');
        return;
    }
    if (mensaje.length < 10) {
        alert('El mensaje debe tener al menos 10 caracteres.');
        return;
    }
    if (!terminos) {
        alert('Debe aceptar los términos y condiciones.');
        return;
    }

    alert('Formulario enviado con éxito!');

    // Limpiar el formulario
    document.getElementById('contactForm').reset();
});

  ooi  