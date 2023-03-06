// Configurar el servicio de correo electrónico en EmailJS
emailjs.init("service_81gpvmp");

// Configurar la función para enviar el correo electrónico
function enviarCorreo(e) {
  e.preventDefault(); // Prevenir la acción por defecto del botón de envío

  // Obtener los datos del formulario
  const nombre = document.getElementById("name").value;
  const correo = document.getElementById("email").value;
  const mensaje = document.getElementById("message").value;

  // Enviar el correo electrónico
  emailjs.send("service_81gpvmp", "template_6h5yjg8", {
    from_name: nombre ,
    from_email: correo,
    message: mensaje + correo,
  })
  .then((response) => {
    console.log("Correo electrónico enviado con éxito", response.status, response.text);
    alert("El mensaje ha sido enviado exitosamente.");
  }, (error) => {
    console.log("Error al enviar el correo electrónico", error);
    alert("Ha ocurrido un error al intentar enviar el mensaje.");
  });

  // Limpiar los campos del formulario
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}

// Asociar la función enviarCorreo() con el evento de clic del botón de envío
document.getElementById("form-submit").addEventListener("click", enviarCorreo);
