const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form');

const validainput = ({target}) => {
    if(target.value.length > 2) {
        button.removeAttribute('disabled','');
        
    } else{
        button.setAttribute('disabled','');
        
    }
}

const subGo = (event) => {
    event.preventDefault();
  
    localStorage.setItem('Player', input.value);
    window.location = '/pages/game.html';

}

input.addEventListener('input', validainput);
form.addEventListener('submit', subGo);