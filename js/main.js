const poligons = document.querySelectorAll('.trello__item .trello__body');
let trelloRemoveTaskBtn = document.querySelector('.fa-circle-xmark');
const trelloBtn = document.querySelector('.header__btn');
const trelloInp = document.querySelector('.header__inp');
const trelloSprint = document.querySelector('.trello__sprint .trello__body');

let trelloTask = document.querySelector('.trello__task');
let newTrelloTask;
trelloTask.addEventListener('dragstart', (e) => { newTrelloTask = e.target });
poligons.forEach((el) => {
    el.addEventListener('dragover', allowDrop);
    el.addEventListener('drop', dropTask);
})

trelloRemoveTaskBtn.addEventListener('click', removeTask);
trelloBtn.addEventListener('click', addTask);

function removeTask() {
    this.parentElement.remove();
}

function allowDrop(e) {
    e.preventDefault();
}

function dropTask() {
    this.appendChild(newTrelloTask);
}

function addTask() {
    if (trelloInp.value) {
        const trelloTask = document.createElement('div');
        const trelloRemoveTaskBtn = document.createElement('i');
        trelloRemoveTaskBtn.classList.add('fa-solid');
        trelloRemoveTaskBtn.classList.add('fa-circle-xmark');
        trelloRemoveTaskBtn.addEventListener('click', removeTask);
        trelloTask.addEventListener('dragstart', (e) => { newTrelloTask = e.target });
        trelloTask.classList.add('trello__task');
        trelloTask.innerText = trelloInp.value;
        // trelloTask.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        trelloTask.setAttribute('contenteditable', 'true');
        trelloTask.setAttribute('draggable', 'true');
        trelloSprint.appendChild(trelloTask);
        trelloTask.appendChild(trelloRemoveTaskBtn);

        trelloInp.value = '';
    }
    
}