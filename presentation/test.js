const hamburgerBtn = document.querySelector('#btn');
const hoverBox = document.querySelector('#hover-box')
const main = document.querySelector('.body');
const input = document.querySelector('#input');

hamburgerBtn.addEventListener('click', () => {
    main.classList.toggle('bg-color')
});
// hoverBox.addEventListener("mouseover", () => {
//     main.classList.toggle('bg-color')
// });
// hoverBox.addEventListener("mouseout", () => {
//     main.classList.toggle('bg-color')
// });
// main.addEventListener("keydown", () => {
//     main.classList.toggle('bg-color')
// });
// input.addEventListener("change",()=>{main.classList.toggle('bg-color')});
