const validations = [
  {
    field: "name",
    check: (input) => input.value.length >= 3,
    message: "Debe contener al menos 3 caracteres",
  },
  {
    field: "price",
    check: (input) => !isNaN(Number(input.value)) && input.value.length >= 3,
    message: "Debes ingresar al menos 3 Numeros",
  },
  {
    field: "brand",
    check: (input) => input.value.length >= 1,
    message: "Selecciona una Marca",
  },
  {
    field: "category",
    check: (input) => input.value.length >= 1,
    message: "Selecciona una categoria",
  },
  {
    field: "description",
    check: (input) => input.value.length >= 10,
    message: "Debe contener al menos 10 caracteres",
  },
  {
    field: "image",
    check: (input) => input.files && input.files.length > 0,
    message: "Sube una Imagen",
  },
];

validations.forEach((validation) => {
  const inputId = validation.field;
  const input = document.getElementById(inputId);
  const inputErrorMsg = document.getElementById(inputId + "Error");

  function validate() {
    inputValidation(validation, input, inputErrorMsg);
  }

  input.addEventListener("blur", validate);
  input.addEventListener("input", validate);
});

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const validationsResult = [];

  validations.forEach((validation) => {
    const inputId = validation.field;
    const input = document.getElementById(inputId);
    const inputErrorMsg = document.getElementById(inputId + "Error");
    const result = inputValidation(validation, input, inputErrorMsg);
    validationsResult.push(result);
  });

  if (validationsResult.every((val) => val == true)) {
    form.submit();
  }
});

function inputValidation(validation, input, inputErrorMsg) {
  if (!input.value) {
    inputErrorMsg.innerText = "Completa los datos";
    inputErrorMsg.classList.add("display");
    return false;
  }

  if (!validation.check(input)) {
    inputErrorMsg.innerText = validation.message;
    inputErrorMsg.classList.add("display");
    return false;
  }

  inputErrorMsg.innerText = "";
  inputErrorMsg.classList.remove("display");
  return true;
}
