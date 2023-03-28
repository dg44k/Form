const password = document.getElementById("password");
const confirnPassword = document.getElementById("confirnPassword");
const btnSub = document.querySelector(".btnSub");

const checkPassword = () => password.value === confirnPassword.value;

btnSub.addEventListener("click", (event) => {
  

  if (checkPassword() == false){
    event.preventDefault();
    alert("Password mismatch.Try again!");
  }
});
