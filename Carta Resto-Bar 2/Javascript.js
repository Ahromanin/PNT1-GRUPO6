document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("pedido-form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      let isValid = false;
      
      const nombre = document.getElementById("nombre");
      const telefono = document.getElementById("telefono");
      const email = document.getElementById("email");
  
      if (nombre.value.trim() === "" ) {
        // isValid = false;
        alert("El campo Nombre no puede estar vacío");
      }else{
        isValid = true;

      }
      if (telefono.value.trim() === "") {
        // isValid = false;
        document.getElementById("telefono-error").textContent =
          "El campo Teléfono no puede estar vacío.";
      } else if (!telefono.validity.valid) {
        // isValid = false;
        document.getElementById("telefono-error").textContent =
          "Por favor, ingrese solo números en el campo Teléfono.";
      } else {
        document.getElementById("telefono-error").textContent = "";
          isValid = true;
      }
  
      if (email.value.trim() === "") {
        // isValid = false;
        document.getElementById("email-error").textContent =
          "El campo Email no puede estar vacío.";
      } else if (!email.validity.valid) {
        // isValid = false;
        document.getElementById("email-error").textContent =
          "Por favor, ingrese una dirección de correo válida.";
      } else {
        document.getElementById("email-error").textContent = "";
        isValid = true;
      }
  
      isValid = validarChecksCarnes();
      if (isValid) {
        form.submit();
        alert("Pedido enviado!, Muchas gracias!");
      }
    });

    function validarChecks() {
      var chks = document.getElementsByClassName('guarnicion');
      var hasCheckedg = false;
      for (var i = 0; i < chks.length; i++) {
          if (chks[i].checked) {
              hasCheckedg = true;
              break;
          }
      }
      if (hasCheckedg == false) {

          alert("Por favor seleccione al menos una guarnicion").preventDefault();
          return  false;
      }
      return  true;
  }

  function validarChecksCarnes() {
    var chks2 = document.getElementsByClassName('carnes');
    var hasCheckedc = false;
    for (var i = 0; i < chks2.length; i++) {
        if (chks2[i].checked) {
          hasCheckedc = true;
          validarChecks();
          break;
        }
    }
    if (hasCheckedc == false) {

        alert("Por favor seleccione al menos un corte de carne").preventDefault();
        return  false;
    }
    return  true;
}

const telefonoInput = document.getElementById("telefono");

telefonoInput.addEventListener("input", function (event) {
  const telefono = telefonoInput.value;
  if (telefono.length > 10) {
    telefonoInput.value = telefono.slice(0, 10);
  }
});
  });
  