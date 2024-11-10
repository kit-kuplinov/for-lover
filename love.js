const wrapper = document.querySelector(".wrapper"); 
const question = document.querySelector(".question"); 
const gif = document.querySelector(".gif"); 
const yesBtn = document.querySelector(".yes-btn"); 
const noBtn = document.querySelector(".no-btn"); 

yesBtn.addEventListener("click", () => {
    question.innerHTML = "i love you too!";
    gif.src = "https://i.pinimg.com/originals/0d/b7/63/0db763006052f2dda9ba4f829f97011f.gif"; 
}); 


noBtn.addEventListener("mouseover", () => { 
    const noBtnRect = noBtn.getBoundingClientRect(); 
    const maxX = window.innerWidth - noBtnRect.width; 
    const maxY = window.innerHeight - noBtnRect.height; 

    const randomX = Math.floor(Math.random() * maxX); 
    const randomY = Math.floor(Math.random() * maxY); 

    noBtn.style.left = randomX + "px"; 
    noBtn.style.top = randomY + "px"; 
});

function loopGif(gifElement) {
    gifElement.src = gifElement.src.split('?')[0] + "?a=" + Math.random();
}


setInterval(() => loopGif(gif), 6100); 



const hideAllButtonsButton = document.getElementById('yes-btn');
const allButtons = document.querySelectorAll('button');

hideAllButtonsButton.addEventListener('click', function() {
    allButtons.forEach(function(button) {
        button.style.display = 'none';
    });
});
