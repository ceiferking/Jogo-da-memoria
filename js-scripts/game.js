const gridd = document.querySelector('#gridd');
const spanPlayer = document.querySelector('.Player');
const timerslain = document.querySelector('.Timer');

const personagens = [
    'bakugo',
    'debi',
    'deku',
    'denki',
    'eraserhead',
    'kyouka',
    'todoroki',
    'toga',
    'tokoyami',
    'tomura',
    'uraraka',
    'engine',
];

let contcard = 0;

const checkendgame = () =>{
    const disablecards = document.querySelectorAll('.disable-card');

    if(disablecards.length === 24){
        clearInterval(this.loop);
        alert(`'Parabéns,${spanPlayer.innerHTML}, você ganhou! Seu tempo foi de: ${timerslain.innerHTML} segundos!'`);
    }
}

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstcard = '';
let secondcard = '';

const checkcards = () => {
    const firstCharacter = firstcard.getAttribute('data-character');
    const secondCharacter = secondcard.getAttribute('data-character');

    if (firstCharacter === secondCharacter){
        firstcard.firstChild.classList.add('disable-card');
        secondcard.firstChild.classList.add('disable-card');

        firstcard = '';
        secondcard = '';

    

        checkendgame();

    } else {

        setTimeout(() => {
            firstcard.classList.remove('reveal-card');
            secondcard.classList.remove('reveal-card');

            firstcard = '';
            secondcard = '';
        }, 500);
        

    }
}

const revealCard = ({target}) =>{
    if(target.parentNode.id.includes('gridd')){
        target = null;
    } //solução para o bug que adiciona a classe "reveal-card" para o gridd causando um bug visual

    if (target.parentNode.className.includes('reveal-card'))
    {
        return;
    }

    if (firstcard === '') {

        target.parentNode.classList.add('reveal-card');
        firstcard = target.parentNode;

    } else if (secondcard === '') {

        target.parentNode.classList.add('reveal-card');
        secondcard = target.parentNode;
        
        checkcards();

    } 
}

const createCard = (personagen) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url("../imagens/${personagen}.jpg")`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', personagen);
    
    return card;
}

const loadGame = () => {

    const duplicapersonagens = [ ...personagens, ...personagens];

    const shuffled = duplicapersonagens.sort(() => Math.random() - 0.5);

    shuffled.forEach((personagen) => {
        const card = createCard(personagen);
        gridd.appendChild(card);
    });

}
const starTime = () => {

    this.loop = setInterval(() =>{

        const curretTime = +timerslain.innerHTML;
        timerslain.innerHTML = curretTime + 1;
    }, 1000)
}

window.onload = () => {
    spanPlayer.innerHTML = localStorage.getItem('Player');
    starTime();
    loadGame();
}