const pikachu = document.querySelector(".pikachu-running");
const snorlax = document.querySelector(".snorlax-enemy");
const jumpSound = document.querySelector('.jumpSound');
const gameOversound = document.querySelector('#gameOverSound');
const trilhaSonora = document.querySelector('#trilhaSonora');
const recarga = document.querySelector('#restart');
const endMenu = document.querySelector('.endMenu');
const darkSide = document.querySelector('.darksideselected');


//Configuracao do Contador
const countScore = document.querySelector('#pointScore')
let score = 0;

const contador = setInterval(() => {
  score ++;
  countScore.innerHTML = `Score ${score}`
}, 500);


//Acrescentando a mecanica de Pulo
const jump = () => {
  pikachu.classList.add('jump-pikachu');
  jumpSound.play()
  jumpSound.volume = 0.7;

  setTimeout(() => {
  pikachu.classList.remove('jump-pikachu');
}, 500);
};

//Core do game
const loopegame = setInterval (() => {
  const snorlaxPosition = snorlax.offsetLeft;
  const pikachuPosition = +window
  .getComputedStyle(pikachu)
  .bottom.replace("px", "");
  trilhaSonora.play();
  trilhaSonora.volume = 0.4;

if (snorlaxPosition <= 120 && snorlaxPosition > 0 && pikachuPosition < 80) {
  snorlax.style.animation = "none";
  snorlax.style.left = `${snorlaxPosition}px`;
    
  pikachu.style.animation = "none";
  pikachu.style.bottom = `${pikachuPosition}px`;

  pikachu.src = "./Images/pikachu-game-over.gif";
  pikachu.style.width = "90px";
  pikachu.style.marginRight = "35px";
  
  endMenu.style.display = 'flex';

  clearInterval(contador);
  jumpSound.volume = 0.0;
  trilhaSonora.volume = 0.0;
  gameOversound.play();
  gameOversound.volume = 0.5;
  
  pikachu.src ="../Images/pikachu-game-over.gif";
  pikachu.style.width ="105px";


  clearInterval(loopegame);
}
}, 10);


//Escutador de eventos

document.addEventListener("keydown", jump);
document.addEventListener("click", jump);