const hamber = document.querySelector('#menu-clic');
const menu = document.querySelector('#menu');
const other = document.querySelectorAll('.hide');
const x = document.querySelector('#x');
const main = document.querySelector('main');
const foot = document.querySelector('footer');

function displ() {
  if (menu.style.display === 'none') {
    menu.style.display = 'block';
    x.style.display = 'block';
    hamber.style.display = 'none';
    main.style.display = 'none';
    foot.style.display = 'none';
  } else {
    menu.style.display = 'none';
    x.style.display = 'none';
    hamber.style.display = 'block';
    main.style.display = 'block';
    foot.style.display = 'block';
  }
}

function hide() {
  menu.style.display = 'none';
  x.style.display = 'none';
  hamber.style.display = 'block';
  main.style.display = 'block';
  foot.style.display = 'block';
}

for (let i = 0; i < other.length; i += 1) {
  other[i].addEventListener('click', hide);
}

hamber.addEventListener('click', displ);
x.addEventListener('click', displ);