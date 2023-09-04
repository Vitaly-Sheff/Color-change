let page = document.querySelector('.page');
let themeButton = document.querySelector('.switch_icn');

themeButton.onclick = function() {
  page.classList.toggle('lightTheme');
  page.classList.toggle('darkTheme');
};

let colorFrame = document.querySelector('.colorFrame');

let buttons = document.querySelector('.buttons')

buttons.addEventListener('click', (event) => {
    if(event.target.closest('.btn')) {
        colorFrame.style.background = event.target.dataset.color;
    }
})