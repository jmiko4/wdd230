const hamburgerBtn = document.querySelector('.ham');
const navigation = document.querySelector('.mobile-links');

hamburgerBtn.addEventListener('click',() => {navigation.classList.toggle('responsive')});

const date = new Date();
const fullDate = new Intl.DateTimeFormat('en-US',{dateStyle: 'full'}).format(date._now);

document.querySelector('#date-box').innerHTML = fullDate;

const year = date.getFullYear();
document.querySelector('#year').innerHTML = "© " +year;

const text = document.lastModified;
document.querySelector('#last-modified').innerHTML = "Last Modified: " + text;
