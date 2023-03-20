const coutnerDisplay = document.querySelector("h3");
let counter = 0;

// creation bulle 
const bubbleMaker = () => {
const bubble = document.createElement("span");
bubble.classList.add("bubble")
document.body.appendChild(bubble);

// dimensions bulle 
const size = (Math.random()* 200 + 100 +"px");
bubble.style.width =size;
bubble.style.height =size;

// deplacement bulle 
bubble.style.top = Math.random()*100 +50 + "%";
bubble.style.left =Math.random()*100 + "%";

const plusMinus=Math.random() >0.5 ? 1: -1;
bubble.style.setProperty('--left', Math.random() * 100 * plusMinus + "%");

// evenement click delete bulle 
bubble.addEventListener('click',()=>{
    counter++;
    coutnerDisplay.textContent=counter;
    bubble.remove()},);

setTimeout(() => {bubble.remove(); }, 8000);};

setInterval(bubbleMaker, 1000) ;