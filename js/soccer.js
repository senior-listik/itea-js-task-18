// creating variables
const poligons = document.querySelectorAll('.wrapper>div');
const ball = document.querySelector('.ball')
let firstTeam =document.querySelector('.firstTeam');
let secondTeam =  document.querySelector('.secondTeam');

let firstTeamScore = 0;
let secondTeamScore = 0;

poligons.forEach( function(el){
    // allowing the movement of objects on polygons and setting the function when moving
    el.addEventListener('dragover',allowDrop);
    el.addEventListener('drop', dropElement);
});


function allowDrop(e){
    e.preventDefault() // overrides the browser's default behavior
} 

function dropElement(e){
    // changing the score
    if (this.classList.contains('leftGate')) {
        firstTeam.innerText = ++firstTeamScore;
    }
    else if (this.classList.contains('rightGate')) {
        secondTeam.innerText = ++secondTeamScore;
    }
    // setting the coordinates of the ball movement, taking into account the offsets and the width of the image
    this.appendChild(ball);
    ball.style.left = (e.pageX - (e.pageX - e.offsetX) - 25) + 'px';
    ball.style.top = (e.pageY - (e.pageY - e.offsetY) - 25) + 'px';
}
// write the score
firstTeam.innerText = firstTeamScore;
secondTeam.innerText = secondTeamScore;
