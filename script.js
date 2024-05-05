const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form');

const validainput = ({target}) => {
    if(target.value.length > 2) {
        button.removeAttribute('disabled','');
    }
    if(target.value.length > 10) {
            button.setAttribute('disabled','');
    }
    if(target.value.length < 3) {
            button.setAttribute('disabled','');
    }

}
const subGo = (event) => {
    event.preventDefault();
  
    localStorage.setItem('Player', input.value);
    window.location = 'game.html';

}

input.addEventListener('input', validainput);
form.addEventListener('submit', subGo);