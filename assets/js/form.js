let form = document.querySelector('.form_calculate_cost');
let inputs = document.querySelectorAll('.form_list input');
let btnRequest = document.querySelector('.form_button_agree button');
let userMessage = document.getElementById('userMessage');
let userFile = document.getElementById('userFile')

const [userName,  userPhone, userEmail,] = inputs;




// add user file
userFile.addEventListener('change', (e) => {
  let label = userFile.parentElement.parentElement.children[2],
   checkIcon = userFile.parentElement.parentElement.children[1],
   img = userFile.parentElement.parentElement.children[0];
  label.innerText = 'Файл загрузил';
  label.style.color = '#61BF1A';
  checkIcon.style.display = 'inline-block';
  img.style.display = 'none';
  
  userFile.parentElement.children[1].textContent = ''
  userFile.classList.add('inputSucces');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
})

btnRequest.addEventListener('click', () => {
  checkInputs()
  if(userName.classList == 'inputSucces' && userEmail.classList == 'inputSucces' && userPhone.classList == 'inputSucces' && userFile.classList == 'inputSucces') {
   return btnRequest.type = 'submit'
  }
})

function checkInputs() {
  let userNameValue = userName.value.trim();
  let userEmailValue = userEmail.value.trim();
  let userPhoneValue = userPhone.value.trim();
  let userMessageValue = userMessage.value.trim();
  let userFileValue = userFile.value.trim();


  // user name
  if(userNameValue === '') {
    setErrorFor(userName, 'Введите ваше имя')
    userName.classList.add('errorInp')
  } else if(userNameValue.length <= 2) {
    setErrorFor(userName, "Должно быть не менее 3 слов")
    userName.classList.add('errorInp')
  } else {
    setSuccesFor(userName)
    userName.classList.remove('errorInp')
  }

  // user email
  if(userEmailValue === '') {
    setErrorFor(userEmail, 'Введите ваше эл. почта')
    userEmail.classList.add('errorInp')
  } else if(!isEmail(userEmailValue)) {
    setErrorFor(userEmail, 'Некорректный эл. почта')
    userEmail.classList.add('errorInp')
  } else {
    setSuccesFor(userEmail)
    userEmail.classList.remove('errorInp')
  }

  // user phone number
  if(userPhoneValue === '') {
    setErrorFor(userPhone, 'Введите свой номер телефона')
    userPhone.classList.add('errorInp')
  } else {
    setSuccesFor(userPhone)
    userPhone.classList.remove('errorInp')
  }

    // user message
    if(userMessageValue === '') {
        setErrorFor(userMessage, 'Добавьте описание')
        userMessage.classList.add('errorInp')
      } else if(userMessageValue.length <= 50) {
        setErrorFor(userMessage, "Должно быть не менее 50 слов")
        userMessage.classList.add('errorInp')
      } else {
        setSuccesFor(userMessage)
        userMessage.classList.remove('errorInp')
      }
    
      if(userFileValue === '') {
        userFile.parentElement.children[1].textContent = 'Файл не загружен'
      }
}



function setErrorFor(input, message) {
  let small = input.parentElement.children[1] 
      small.innerText = message
  }
  
  function setSuccesFor(input) {
  let small = input.parentElement.children[1]
      input.classList.add('inputSucces');
      small.innerText = ''
  }

function isEmail(userEmail) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(userEmail);
}
