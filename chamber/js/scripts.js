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

const banner = document.querySelector('.banner');
banner.innerHTML = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";

if (day == 1||day ==2){
    banner.classList.toggle('display');
}

// local storage
localStorage.setItem('msg1', 'Hello Permanent');

localStorage.setItem('visitDate', Date.now());

sessionStorage.setItem('msg2', 'Hi Temporary');

let message = localStorage.getItem('msg1');

let visitDate = localStorage.getItem('visitDate');

console.log(visitDate);


//days since last visit
