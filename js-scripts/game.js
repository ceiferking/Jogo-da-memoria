const gridd = document.querySelector('.gridd');

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

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const revealcard = ( target ) =>{
    
}

const createCard = (personagen) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url("../imagens/${personagen}.jpg")`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealcard);
    
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

loadGame();