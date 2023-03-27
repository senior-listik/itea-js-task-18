// creating variables
const poligons = document.querySelectorAll('.trello__item .trello__body');
let trelloRemoveTaskBtn = document.querySelector('.fa-circle-xmark');
const trelloBtn = document.querySelector('.header__btn');
const trelloInp = document.querySelector('.header__inp');
const trelloSprint = document.querySelector('.trello__sprint .trello__body');
let trelloTask = document.querySelector('.trello__task');
let newTrelloTask;


trelloTask.addEventListener('dragstart', movingTask);
trelloTask.addEventListener('drop', (event)=>{event.stopPropagation()})
trelloTask.addEventListener('drop', dropPerformer);

poligons.forEach((el) => {
    el.addEventListener('dragover', allowDrop);
    el.addEventListener('drop', dropTask);
})

trelloRemoveTaskBtn.addEventListener('click', removeTask);
trelloBtn.addEventListener('click', addTask);

function removeTask() {

    // returning the avatar to the container when deleting a task
    let img = this.parentElement.querySelector('img');
    if ( img !== null){
        performerContainer.appendChild(img);
        this.parentElement.remove();
    } else {
        this.parentElement.remove();
    }
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
        trelloTask.setAttribute('contenteditable', 'true');
        trelloTask.setAttribute('draggable', 'true');
        trelloSprint.appendChild(trelloTask);

        trelloTask.addEventListener('drop', (event)=>{event.stopPropagation()})
        trelloTask.addEventListener('drop', dropPerformer);

        trelloTask.appendChild(trelloRemoveTaskBtn);
        trelloInp.value = '';
    }
    
}

function movingTask(e) {
    newTrelloTask = e.target;
    newTrelloTask.addEventListener('drop', (event) => { event.stopPropagation() })
    newTrelloTask.addEventListener('drop', dropPerformer);

};


// the appearance of a container with executors when a button is pressed
const showPerformerBtn = document.querySelector('.header__showPerformerBtn');
const performerContainer = document.querySelector('.header__performerContainer');
let performers = document.querySelectorAll('.header__performerContainer img');
let performer;

performerContainer.addEventListener('dragover', allowDrop);

showPerformerBtn.addEventListener('click', performersVisible);

function performersVisible() {
    performerContainer.classList.toggle('performersVisible')
}
  
// adding performers
performerContainer.addEventListener('dragover', allowDrop);
performerContainer.addEventListener('drop', dropPerformer);
trelloTask.addEventListener('dragover', allowDrop);

performers.forEach((el) => {
    el.addEventListener('dragstart', (e) => { performer = e.target });
});

function dropPerformer() {

    if (this != '<img>') {
        this.appendChild(performer);
    }  
}   

// add new performer avatar to container
const addNewPerformerBtn = document.querySelector('.header__addPerformerBtn');
let nwePerformer;
addNewPerformerBtn.addEventListener('click', addNewAvatar);

function addNewAvatar() {

    nwePerformer = document.createElement('img');
    nwePerformer.setAttribute('src', './img/Unknown.jpg');
    nwePerformer.setAttribute('alt', 'avatar');
    nwePerformer.setAttribute('draggable', 'true');
    performerContainer.appendChild(nwePerformer);
    performers = document.querySelectorAll('.header__performerContainer img');
    performers.forEach((el) => {
        el.addEventListener('dragstart', (e) => { performer = e.target });
    });
}