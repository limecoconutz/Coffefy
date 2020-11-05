import "./style.css";
import {randomizer, coffefiedName, simplifyName} from './utils';

let userName = document.getElementById('username');
const form = document.getElementById('user-form');


form.addEventListener('submit', (e) =>{
      
    e.preventDefault();
     const simplified = document.getElementById('simplified');
    simplified.classList.remove('d-none');
    let originalName = userName.value;
    let randomLetter = randomizer(originalName);
    console.log(randomLetter);

    simplifyName(originalName, randomLetter);

 })

form .reset();