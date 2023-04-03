const sliderElement = document.querySelector("#slider");
const botaoElement = document.querySelector("#botao");
const sizePassword = document.querySelector("#valor");
const passwordElement = document.querySelector("#password");
const containerPassword = document.querySelector("#container-password");
const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!';
let novaSenha = '';

sizePassword.textContent = sliderElement.value;

sliderElement.addEventListener("input", () => {
  sizePassword.textContent = sliderElement.value;
});

function generatePassword() {
  let pass = '';
  for (let i = 0; i < sliderElement.value; i++) {
    pass += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  
  console.log(pass)
  containerPassword.classList.remove("hide");
  passwordElement.textContent = pass;
  novaSenha = pass;
}

function copyPassword() {
  alert("Senha copiada com sucesso!")
  navigator.clipboard.writeText(novaSenha);
}