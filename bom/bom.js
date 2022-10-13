const input = document.querySelector('#favchap');
const ul = document.querySelector('.list');
const button = document.querySelector('button');


button.addEventListener('click',()=>{
    let Item = document.createElement('li');
    let remove_btn = document.createElement('button');
    remove_btn.textContent = '❌';
    Item.textContent = input.value;
    ul.appendChild(Item);
    Item.appendChild(remove_btn);
    remove_btn.addEventListener('click',()=>{ul.removeChild(Item);});
    input.value = '';
    input.focus();
});

