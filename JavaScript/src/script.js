var age;
age = prompt("por favor insira a sua idade");

function checkAge() {
  if (age < 18) {
    console.log("Você é menor de idade!!");
  } else {
    console.log("Acesso permitido.");
  }
}
