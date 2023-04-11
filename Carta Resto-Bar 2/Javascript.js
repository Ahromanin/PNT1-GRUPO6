document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("pedido-form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const nombre = document.getElementById("nombre");
      const telefono = document.getElementById("telefono");
      const email = document.getElementById("email");
  
      let isValid = true;
  
      if (nombre.value.trim() === "") {
        isValid = false;
        document.getElementById("nombre-error").textContent =
          "El campo Nombre no puede estar vacío.";
      } else {
        document.getElementById("nombre-error").textContent = "";
      }
  
      if (telefono.value.trim() === "") {
        isValid = false;
        document.getElementById("telefono-error").textContent =
          "El campo Teléfono no puede estar vacío.";
      } else if (!telefono.validity.valid) {
        isValid = false;
        document.getElementById("telefono-error").textContent =
          "Por favor, ingrese solo números en el campo Teléfono.";
      } else {
        document.getElementById("telefono-error").textContent = "";
      }
  
      if (email.value.trim() === "") {
        isValid = false;
        document.getElementById("email-error").textContent =
          "El campo Email no puede estar vacío.";
      } else if (!email.validity.valid) {
        isValid = false;
        document.getElementById("email-error").textContent =
          "Por favor, ingrese una dirección de correo válida.";
      } else {
        document.getElementById("email-error").textContent = "";
      }
  
      if (isValid) {
        form.submit();
      }
    });
  });
  