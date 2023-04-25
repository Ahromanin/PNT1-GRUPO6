document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("pedido-form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      let isValid = true;
      
      validarChecksCarnes(isValid);
      const nombre = document.getElementById("nombre");
      const telefono = document.getElementById("telefono");
      const email = document.getElementById("email");
  
      if (nombre.value.trim() === "" ) {
        isValid = false;
        alert("El campo Nombre no puede estar vacío");
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

    function validarChecks() {
      var chks = document.getElementsByName('chk []');
      var hasChecked = false;
      for (var i = 0; i < chks.length; i++) {
          if (chks[i].checked) {
              hasChecked = true;
              break;
          }
      }
      if (hasChecked == false) {
          alert("Por favor seleccione al menos una guarnicion");
          return false;
      }
      return true;
  }

  function validarChecksCarnes() {
    var chks2 = document.getElementsByClassName('carnes');
    var hasChecked = false;
    for (var i = 0; i < chks2.length; i++) {
        if (chks2[i].checked) {
          hasChecked = true;
          validarChecks();
          break;
        }
    }
    if (hasChecked == false) {
        alert("Por favor seleccione al menos un corte de carne");
        return false;
    }
    return true;
}


  });
  