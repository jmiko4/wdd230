const hamburgerBtn = document.querySelector('.ham');
const navigation = document.querySelector('.mobile-links');

hamburgerBtn.addEventListener('click',() => {navigation.classList.toggle('responsive')});

const date = new Date();
const fullDate = new Intl.DateTimeFormat('en-US',{dateStyle: 'full'}).format(date._now);
const day = date.getDay();
// let day = 1;

document.querySelector('#date-box').innerHTML = fullDate;

const year = date.getFullYear();
document.querySelector('#year').innerHTML = "© " +year;

const text = document.lastModified;
document.querySelector('#last-modified').innerHTML = "Last Modified: " + text;

const requestURL = 'https://jmiko4.github.io/wdd230/chamber/js/data.json';

async function getCards(requestURL) {
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok) {
        const jsObject = await response.json();
        console.log(jsObject);
        const businesses = jsObject['businesses'];
        businesses.forEach(displayBusinesses);
    }
}

getCards(requestURL);

function displayBusinesses(item) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p'); 
    let p2 = document.createElement('p');
    let a = document.createElement('a');
    let img = document.createElement('img');

    h2.textContent = item.businessname; 
    p1.textContent = item.address ;
    p2.textContent = item.phone;
    a.textContent = item.website;
    a.setAttribute('href', item.website);
    img.setAttribute('src', item.imagesrc)
    img.setAttribute('alt', item.businessname);

    card.appendChild(h2);
    card.appendChild(p1); 
    card.appendChild(p2); 
    card.appendChild(a); 
    card.appendChild(img); 
    document.querySelector('.cards').appendChild(card); 
}

async function getTable(requestURL) {
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok) {
        const jsObject = await response.json();
        console.log(jsObject);
        const businesses = jsObject['businesses'];
        businesses.forEach(displayTable);
    }
}

getTable(requestURL);


function displayTable(item) {
    // let table = document.createElement('table');
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let a = document.createElement('a');

    td1.textContent = item.businessname;
    td2.textContent = item.address ;
    td3.textContent = item.phone;
    a.textContent = item.website;
    a.setAttribute('href', item.website);

    // table.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4)
    td4.appendChild(a);
    document.querySelector('.table').appendChild(tr);
}
const table = document.querySelector('.table');
const cards = document.querySelector('.cards');
let toggleBtn = document.querySelector('.toggle-btn');
table.classList.toggle('hidden');
toggleBtn.addEventListener('click', () => {
    table.classList.toggle('hidden');
    cards.classList.toggle('hidden');
    });