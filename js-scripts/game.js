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

let clickCount = 0; // Variável global para armazenar o número de cliques

function onClick() {
    clickCount++; // correção de bug de clicar muito rapido varias vezes na mesma carta contar como carta revelada.
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
    
    if (firstCharacter == secondCharacter & clickCount <= 2){
        
        firstcard.firstChild.classList.add('disable-card');
        secondcard.firstChild.classList.add('disable-card');

        clickCount = 0;
        firstcard = '';
        secondcard = '';
    } else {

        setTimeout(() => {
            firstcard.classList.remove('reveal-card');
            secondcard.classList.remove('reveal-card');

            firstcard = '';
            secondcard = '';
            clickCount = 0;
        }, 500);
    }
}

const revealCard = ({target}) =>{

    if (target.parentNode.className.includes('reveal-card'))
    {
        return;
    }

    if (firstcard == '') {
        target.parentNode.classList.add('reveal-card');
        firstcard = target.parentNode;
    }

    else if (secondcard == '') {
        target.parentNode.classList.add('reveal-card');
        secondcard = target.parentNode;

    }
    checkcards();   
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

loadGame();