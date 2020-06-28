let article = document.querySelector('h3');
let body = document.querySelector('body');
let textHeading = document.querySelector('.text-heading');
let bgHeading = document.querySelector('.bg-heading');
let divContainer = document.querySelector('div');

//for text color buttons

let tomato = document.querySelector('.tomato');
let aqua = document.querySelector('.aqua');
let green = document.querySelector('.green');
let pink = document.querySelector('.pink');
let salmon = document.querySelector('.salmon');
let orange = document.querySelector('.orange');
let yellow = document.querySelector('.yellow');
let lightGreen = document.querySelector('.lightGreen');

//for background color buttons

let bgTomato = document.querySelector('.bg-tomato');
let bgAqua = document.querySelector('.bg-aqua');
let bgGreen = document.querySelector('.bg-green');
let bgPink = document.querySelector('.bg-pink');
let bgSalmon = document.querySelector('.bg-salmon');
let bgOrange = document.querySelector('.bg-orange');
let bgYellow = document.querySelector('.bg-yellow');
let bgLightGreen = document.querySelector('.bg-lightGreen');

const buttons = [
  tomato,
  aqua,
  orange,
  lightGreen,
  green,
  yellow,
  salmon,
  pink,
  bgAqua,
  bgGreen,
  bgPink,
  bgLightGreen,
  bgSalmon,
  bgTomato,
  bgYellow,
  bgOrange,
];

buttons.forEach(btn => {
  btn.style.cssText =
    'font-size: 20px; padding: 10px 30px; margin: 5px; border-radius: 6px; border: 2px solid black; outline: none';
});

tomato.style.background = 'tomato';
bgTomato.style.background = 'tomato';

orange.style.background = ' orange';
bgOrange.style.background = 'orange';

yellow.style.background = 'yellow';
bgYellow.style.background = 'yellow';

lightGreen.style.background = 'greenyellow';
bgLightGreen.style.background = 'greenyellow';

green.style.background = 'palegreen';
bgGreen.style.background = 'palegreen';

pink.style.background = 'pink';
bgPink.style.background = 'pink';

salmon.style.background = 'salmon';
bgSalmon.style.background = 'salmon';

aqua.style.background = 'aqua';
bgAqua.style.background = 'aqua';

tomato.addEventListener('click', function () {
  article.style.color = 'tomato';
});

bgTomato.addEventListener('click', function () {
  body.style.background = 'tomato';
});

aqua.addEventListener('click', function () {
  article.style.color = 'aqua';
});
bgAqua.addEventListener('click', function () {
  body.style.background = 'aqua';
});
yellow.addEventListener('click', function () {
  article.style.color = 'yellow';
});
bgYellow.addEventListener('click', function () {
  body.style.background = 'yellow';
});
lightGreen.addEventListener('click', function () {
  article.style.color = 'palegreen';
});
bgLightGreen.addEventListener('click', function () {
  body.style.background = 'palegreen';
});

pink.addEventListener('click', function () {
  article.style.color = 'pink';
});

bgPink.addEventListener('click', function () {
  body.style.background = 'pink';
});

orange.addEventListener('click', function () {
  article.style.color = 'orange';
});

bgOrange.addEventListener('click', function () {
  body.style.background = 'orange';
});

salmon.addEventListener('click', function () {
  article.style.color = 'salmon';
});

bgSalmon.addEventListener('click', function () {
  body.style.background = 'salmon';
});

green.addEventListener('click', function () {
  article.style.color = 'palegreen';
});

bgGreen.addEventListener('click', function () {
  body.style.background = 'palegreen';
});

article.style.cssText = 'text-align: center; padding: 70px 70px';

textHeading.setAttribute(
  'style',
  'font-size: 30px; text-align: center; font-family: Piedra, cursive;'
);
bgHeading.setAttribute(
  'style',
  'font-size: 30px; text-align: center; font-family: Piedra, cursive;'
);

divContainer.style.cssText = 'text-align: center; padding: 35px 35px';
