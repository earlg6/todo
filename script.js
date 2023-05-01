// отримуємо посилання на елементи DOM
const taskInput = document.querySelector('#taskInput');
const addTaskBtn = document.querySelector('#addTask');
const taskList = document.querySelector('#taskList');

// додаємо відповідну функцію до кнопки "Add Task"
addTaskBtn.addEventListener('click', () => {
  // отримуємо значення введеного користувачем тексту
  const newTaskText = taskInput.value.trim();
  if (newTaskText.length === 0) return; // якщо текст порожній, то нічого не робимо
  
  // створюємо новий елемент li з текстом завдання та кнопкою видалення
  const newTask = document.createElement('li');
  newTask.innerHTML = `<span class="task">${newTaskText}</span><button class="deleteTaskBtn">X</button>`;
  
  // додаємо новий елемент li до списку ul
  taskList.appendChild(newTask);
  
  // очищуємо вміст input
  taskInput.value = '';
});

// додаємо функцію для відмітки завдань як виконані
taskList.addEventListener('click', (event) => {
  const target = event.target;
  if (target.tagName !== 'SPAN') return; // якщо клікнуто не на текст завдання, то нічого не робимо
  target.classList.toggle('completed');
});

// додаємо функцію для видалення завдань
taskList.addEventListener('click', (event) => {
  const target = event.target;
  if (target.tagName !== 'BUTTON' || target.className !== 'deleteTaskBtn') return; // якщо клікнуто не на кнопку видалення, то нічого не робимо
  target.parentNode.remove(); // видаляємо відповідний елемент li зі списку ul
});