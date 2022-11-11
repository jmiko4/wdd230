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

const requestURL = 'js/data.json';

async function getCards(requestURL) {
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok) {
        const jsObject = await response.json();
        console.log(jsObject);
        const businesss = jsObject['businesss'];
        console.log(businesss[0].lastname);
        businesss.forEach(displayBusinesses);
    }
}

getCards(requestURL);

function displayBusinesses(item) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p'); 
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let img = document.createElement('img');

    h2.textContent = item.businesssname; 
    p1.textContent = item.address ;
    p2.textContent = item.phone;
    p3.textContent = item.website;
    img.setAttribute('src', item.imagesrc)
    img.setAttribute('alt', item.businesssname);

    card.appendChild(h2);
    card.appendChild(p1); 
    card.appendChild(p2); 
    card.appendChild(p3); 
    card.appendChild(img); 
    document.querySelector('.cards').appendChild(card); 
}