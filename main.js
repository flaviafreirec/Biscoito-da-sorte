const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const imgButton = document.querySelector('.imgButton');
const frases = document.querySelector('#frases');
const cookieButton = document.querySelector('#openAnotherCookie');

cookieButton.addEventListener('click', handleClickAnother)

imgButton.addEventListener('click', handleClickOpen)

const frasesArray = ['Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.', 
'A vida trará coisas boas se tiver paciência.', 
'Não compense na ira o que lhe falta na razão.', 
'Não há que ser forte. Há que ser flexível.', 
'A maior de todas as torres começa no solo.']

let randomNumber = Math.round(Math.random() * 4);

function handleClickOpen(){
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
    randomNumber = Math.round(Math.random() * 4);
    frases.innerText = frasesArray[randomNumber]

    console.log(randomNumber)
}

function handleClickAnother() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}