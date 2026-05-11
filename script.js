document.getElementById('myForm').addEventListener("submit", function(event){
    event.preventDefault()

    let userNema = document.getElementById('userNema').value;
    let userEmail = document.getElementById('userEmail').value;
    let userPassword = document.getElementById('userPassword').value;
    let isValid = true

    if(userNema === ""){
        document.getElementById('userNemaError').textContent = "Имя не ведено!"
        isValid = false
    }
    else{
        document.getElementById('userNemaError').textContent = ""
    }

    let emeilRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emeilRegex.test(userEmail)){
        document.getElementById('userEmailError').textContent = "Почта ведена не верно"
        isValid = false
    }
    else{
        document.getElementById('userEmailError').textContent = ""
        }
        

    if(userPassword.length < 8){
        document.getElementById('userPasswordError').textContent = "Пароль не ведён!"
        isValid = false
    }
    else{
        document.getElementById('userPasswordError').textContent = ""
    }   

    if(isValid){
        alert("Формула успешно отправлена")
    }
    
    
})




// Получаем элементы
const modal = document.getElementById('myModal');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.querySelector('.close');
const modalCloseBtn = document.querySelector('.modal-close-btn');
const saveBtn = document.querySelector('.modal-save-btn');

// Функция открытия окна
function openModal() {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
}

// Функция закрытия окна
function closeModal() {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Возвращаем скролл
}

// Закрытие при клике на фон
window.onclick = function(event) {
  if (event.target === modal) {
    closeModal();
  }
}

// Закрытие при нажатии Escape
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && modal.style.display === 'block') {
    closeModal();
  }
});

// Обработчики событий
openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
modalCloseBtn.addEventListener('click', closeModal);