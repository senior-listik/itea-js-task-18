const poligons = document.querySelectorAll('.trello__item .trello__body');
let trelloTask = document.querySelector('.trello__task');

poligons.forEach((el) => {
    el.addEventListener('dragover', allowDrop);
    el.addEventListener('drop', dropTask);
})

function allowDrop(e) {
    e.preventDefault();
}

function dropTask() {
    this.appendChild(trelloTask);
}