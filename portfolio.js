const hamber = document.querySelector('#menu-clic');
const menu = document.querySelector('#menu');
const other = document.querySelectorAll('.hide');
const x = document.querySelector('#x');

function displ() {
  if (menu.style.display === 'none') {
    menu.style.display = 'block';
    x.style.display = 'block';
    hamber.style.display = 'none';
  } else {
    menu.style.display = 'none';
    x.style.display = 'none';
    hamber.style.display = 'block';
  }
}

function hide() {
  menu.style.display = 'none';
  x.style.display = 'none';
  hamber.style.display = 'block';
}

for(let i = 0; i < other.length; i++){
  other[i].addEventListener('click', hide);
}

hamber.addEventListener('click', displ);
x.addEventListener('click', displ);