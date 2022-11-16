const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirm = document.getElementById('password_Confirmation')


form.addEventListener('submit', (e) => {
  e.preventDefault()

  checkInputs()
  checkEmail()
})

function checkInputs() {
  const usernameValue = username.value
  const emailValue = email.value
  const passwordValue = password.value
  const passwordConfirmValue = passwordConfirm.value

  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.")
  } else {
    setSuccessFor(username)
  }

  if (emailValue === '') {
    setErrorFor(email, "O email é obrigatório.")
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Insira um email válido.")
  } else {
    setSuccessFor(email)
  }

  if (passwordValue === '') {
    setErrorFor(password, "A Senha é obrigatória.")
  } else if (passwordValue.length < 8){
    setErrorFor(password, "A senha precisa ter no mínimo 8 caracteres")
  } else {
    setSuccessFor(password)
  }

  if (passwordConfirmValue === '') {
    setErrorFor(passwordConfirm, "A senha de confirmação é obrigatória.")
    /*Aqui eu tinha pensado que era só o password normal, mas era com o Value pq se trata
    dos valores inseridos no input
    */
  } else if (passwordConfirmValue != passwordValue)  {
    setErrorFor(passwordConfirm, "A senha está errada! Tente outra vez.")
  } else {
    setSuccessFor(passwordConfirm)
  }
}

//Mensagem de erro
function setErrorFor(input, message) {
 const formControl = input.parentElement
 const small = formControl.querySelector('small')
 
 small.innerText = message
 formControl.className = "form-control error"
}


//Mensagem de sucesso
function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = "form-control success"
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}