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


const dateTime=
date.getMonth()+1 +' / '+
date.getDate()+' / '+
date.getFullYear()+' '+
date.getHours()+' : '+
date.getMinutes()+' : ' +
date.getSeconds()
    ;

document.querySelector('#date').value = dateTime;