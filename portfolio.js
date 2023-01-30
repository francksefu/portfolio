const hamber = document.querySelector("#menu-clic");
const menu = document.querySelector("#menu");
const other = document.querySelector("#contain");
const footer = document.querySelector("footer");

function displ() {
  if(menu.style.display == "none"){
    menu.style.display = "block";
  }else {
    menu.style.display = "none";
  }
}

function hide() {
    menu.style.display = "none";
}

hamber.addEventListener("click", displ);
other.addEventListener("click", hide);
footer.addEventListener("click", hide);