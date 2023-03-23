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

        trelloTask.addEventListener('drop', (event)=>{event.stopPropagation()})
        trelloTask.addEventListener('drop', dropPerformer);

        trelloTask.appendChild(trelloRemoveTaskBtn);
        // const trelloBody = document.querySelectorAll('.trello__body div');
        // console.log(trelloTask);
        trelloInp.value = '';
        // console.log(trelloBody);
    }
    
}

function movingTask(e) {
    newTrelloTask = e.target;
    newTrelloTask.addEventListener('drop', (event) => { event.stopPropagation() })
    newTrelloTask.addEventListener('drop', dropPerformer);

};


// the appearance of a container with executors when a button is pressed
const addPerformerBtn = document.querySelector('.header__addPerformerBtn');
const performerContainer = document.querySelector('.header__performerContainer');
const performers = document.querySelectorAll('.header__performerContainer img');
let performer;
addPerformerBtn.addEventListener('click', performersVisible);

function performersVisible() {
    performerContainer.classList.toggle('performersVisible')
}
     
    
    
// adding performers
performerContainer.addEventListener('dragover', allowDrop);
trelloTask.addEventListener('dragover', allowDrop);
// performerContainer.addEventListener('drop', dropTask);

performers.forEach((el) => {
    el.addEventListener('dragstart', (e) => { performer = e.target });
    
    // if(trelloBody.contains(trelloTask)){
    // console.log(performer);
    // console.log(trelloTask);

    //      trelloTask.addEventListener('drop', (event)=>{event.stopPropagation()})
    //     trelloTask.addEventListener('drop', dropPerformer);
    // }
    // if(trelloBody.contains(newTrelloTask)){
    //     console.log(performer);
    //     console.log(newTrelloTask);

    //     newTrelloTask.addEventListener('drop', (event) => { event.stopPropagation() })
    //     newTrelloTask.addEventListener('drop', dropPerformer); 
    // }

});


function dropPerformer() {
    this.appendChild(performer);
    
}   