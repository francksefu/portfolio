/** Menu Part */

const hamber = document.querySelector('#menu-clic');
const menu = document.querySelector('#menu');
const other = document.querySelectorAll('.hide');
const x = document.querySelector('#x');
const main = document.querySelector('main');
const foot = document.querySelector('footer');

/** See project part variable */
const screen = window.matchMedia('(min-width: 768px)');
const navBarMobile = document.querySelector('#smallScreen');
const buttonCheckProject = document.querySelector('#check-project1');
const div = document.querySelector('#see-project');
const divContent = document.createElement('div');

/** Image main : see Project */

const img = document.createElement('img');
const span1 = document.createElement('span');
const imgC1 = document.createElement('img');

/** title, list and paragraph */

const h2 = document.createElement('h2');
const ul = document.createElement('ul');
const p = document.createElement('p');

/** text inside li */

/** contenair of button */

const divButton = document.createElement('div');

/** desktop private variable */

const contentptagbutton = document.createElement('div');
const contentSpan = document.createElement('div');
const broSpan = document.createElement('div');

/** function for Menu (disapear and appear) */

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

/** End of Menu part */

/** Start see project part */

/** Content (style of div, p and soon) */

const divC = {

  css: `background-color: #c1c7d0;
  width: 100%; height: auto; padding-top: 20px; padding-bottom: 26px;
  padding-left: 16px; padding-right: 16px;`,
};

const div1C = {

  css: `padding-top: 16px; display: flex; gap: 12px;
  flex-direction: column; align-items: flex-start;
  background-color: white; border-radius: 16px; border: 1px solid #dfe1e6; padding-left: 16px;
  padding-right: 16px; padding-bottom: 20px;`,
};

const mainContent = [
  { mainImg: { alt: 'project picture', src: 'imgSeeP/Snapshoot Portfolio.png' } },
  { h2: { textContent: 'Keeping track of hundreds of components' } },
  { ul_li_content: ['Ruby on rails', 'css', 'JavaScript'] },
  {
     p_textcontent: `
   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
   text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea
   `, 
  },
  { button: { see_Project_href: '#', see_Source_href: '#', }, },
];

const contentptagbuttonC = {

  css: 'display: flex; flex-direction: row; align-items: flex-start; padding: 0px; gap: 12px; height: auto;',
};

const spanallC = {

  css: `width: 100%; height: auto; padding: 0; margin: 0;
  display: flex; flex-direction: row; justify-content: space-between;`,
};

const spanbro = {

  css: 'width: 60px; height: 10px;',
};

const imgC = {

  alt: mainContent[0].mainImg.alt,
  src: mainContent[0].mainImg.src,
  css: 'width: 100%; height: 220px; border-radius: 8px;',
};

const cross = {

  css: 'width: 24px; height: 24px; visibility: hidden;',
  src: 'imgSeeP/Icon - Cancel.png',
  alt: 'cancel',
  cssSpan: `width: 10%; height: 10%; background-color: transparent;
  position: absolute; top: 59px; left: 78.5%`,
};

const h2C = {

  textContent: mainContent[1].h2.textContent,
  css: `width: 259px; height: 135px; font-weight: 600;
  font-size: 32px; line-height: 44px; color: #172b4d; margin-top: 0;
  margin-bottom: 0; text-align: start;`,
};

const ulC = {

  css: `display: flex; flex-direction: row; align-items: center; 
  padding: 0px; gap: 8px; margin-bottom: 0; margin-top: 0;`,
  liC: {
    css: `background: #ebf0ee; border-radius: 4px; height: 32px;
    padding: 8px 12px;`,
    spanC: {
      css: `font-weight: 600; font-size: 12px; line-height: 16px; height: 16px;
      letter-spacing: 0.03em; color: #3A4A42;`,
      textContent: '',
    },
  },
};

const pC = {

  textContent: mainContent[3].p_textcontent,
  css: `font-weight: 400; font-size: 16px; line-height: 24px; color: #344563; height: auto;
  padding: 0; margin: 0; text-align: start;`,
};

const divButtonC = {

  css: `display: flex; flex-direction: row; justify-content: space-between; width: 100%; height: 56px;
  padding-top: 4px; padding-bottom: 4px;`,
};

const buttonC = {

  css: `display: flex; flex-direction: row; align-items: flex-start; padding: 12px 16px;
  gap: 12px; background: #36B37F; border-radius: 4px;`,
  a1: {
    href: mainContent[4].button.see_Source_href,
    imgC: {
      src: 'imgSeeP/Icon - Export.png',
      alt: 'icon',
    },
    css: 'width: 20px; height: 20px;',
  },
  a0: {
    href: mainContent[4].button.see_Project_href,
    textContent: 'See Live',
    css: 'font-weight: 500; font-size: 17px; line-height: 24px; color: #fff;',
  },
};

/** Responsive design */

if (screen.matches) {
  mainContent[0] = { mainImg: { alt: 'project picture desktop', src: 'imgSeeP/desktop-img-main.png' } };
  mainContent[1] = { h2: { textContent: 'Keeping track of hundreds of components' } };
  mainContent[2] = { ul_li_content: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap'] };
  mainContent[3] = { 
    p_textcontent: `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
  Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea
  `
};
  mainContent[4] = { button: { see_Project_href: '#', see_Source_href: '#' } };

  divC.css = `background-color: #c1c7d0;
  width: 100%; height: auto; padding-top: 122px; padding-bottom: 201px; padding-left: 18%; padding-right: 18%;`;

  div1C.css = `padding-top: 24px; display: flex; gap: 12px;
  flex-direction: column; align-items: flex-start;
  background-color: white; border-radius: 16px; border: 1px solid #dfe1e6; padding-left: 24px;
  padding-right: 24px; padding-bottom: 44px; height: auto;`;

  imgC.css = 'width: 100%; height: 616px; border-radius: 8px; border: 1px solid #dfe1e6; margin-bottom: 12px;';

  imgC.src = mainContent[0].mainImg.src;

  ulC.liC.css = `background: #ebf0ee; border-radius: 8px; height: 32px;
  padding: 8px 12px;`;

  ulC.css = `display: flex; flex-direction: row; align-items: center; 
  padding: 0px; gap: 8px; margin-bottom: 0; margin-top: 8px;`;

  buttonC.css = `display: flex; flex-direction: row; align-items: center; padding: 12px;
  gap: 10px; background: #36b37f; border-radius: 8px; height: 48px`;

  buttonC.a0.css = 'font-weight: 500; font-size: 15px; line-height: 20px; color: #fff;';

  h2C.css = `width: 67%; height: auto; font-weight: 700;
  font-size: 32px; line-height: 44px; color: #172b4d; margin-top: 0;
  margin-bottom: 0; text-align: start;`;

  pC.css = `font-weight: 400; font-size: 16px; line-height: 24px; color: #344563; height: auto;
  padding: 0; margin: 0; text-align: start; margin-top: 24px;`;

  cross.css = 'width: 24px; height: 24px;';
  cross.src = 'imgSeeP/cancel1.png';
  cross.alt = 'cancel';
  cross.cssSpan = `width: 40px; height: 40px;
  background-color: #EBECF0; border-radius: 8px; padding: 8px;`;

  /** Affectation */

  contentptagbutton.style.cssText = contentptagbuttonC.css;
  contentSpan.style.cssText = spanallC.css;
  broSpan.style.cssText = spanbro.css;
  div.style.cssText = divC.css;
  divContent.style.cssText = div1C.css;

  /** images affectation */

  img.style.cssText = imgC.css;
  img.src = imgC.src;
  img.alt = imgC.alt;
  span1.style.cssText = cross.cssSpan;
  imgC1.style.cssText = cross.css;
  imgC1.src = cross.src;
  imgC1.alt = cross.alt;

  /** list and p tag affectation */

  h2.style.cssText = h2C.css;
  h2.textContent = h2C.textContent;
  ul.style.cssText = ulC.css;
  p.style.cssText = pC.css;
  p.textContent = pC.textContent;
  divButton.style.cssText = divButtonC.css;

  /** Add to DOM */

  div.appendChild(divContent);
  divContent.appendChild(contentSpan);
  divContent.appendChild(img);
  divContent.appendChild(contentptagbutton);
  contentptagbutton.appendChild(h2);

  /** Add cross */

  span1.appendChild(imgC1);
  contentSpan.appendChild(broSpan);
  contentSpan.appendChild(span1);

  /** Add button in DOM */

  for (let i = 0; i < 1; i += 1) {
    const button = document.createElement('button');
    button.style.cssText = buttonC.css;
    contentptagbutton.appendChild(button);
    const a = document.createElement('a');
    const a1 = document.createElement('a');
    const img1 = document.createElement('img');
    a.href = buttonC.a0.href;
    a.textContent = buttonC.a0.textContent;
    a.style.cssText = buttonC.a0.css;
    button.appendChild(a);
    a1.style.cssText = buttonC.a0.css;
    a1.href = buttonC.a1.href;
    img1.src = buttonC.a1.imgC.src;
    img1.alt = buttonC.a1.imgC.alt;
    img1.style.cssText = buttonC.a1.css;
    a1.appendChild(img1)
    button.appendChild(a1);
  };

  for (let i = 0; i < 1; i += 1) {
    const button = document.createElement('button');
    button.style.cssText = buttonC.css;
    contentptagbutton.appendChild(button);
    const a = document.createElement('a');
    const a1 = document.createElement('a');
    const img1 = document.createElement('img');
    a.href = buttonC.a0.href;

    /** update text content button */

    buttonC.a0.textContent = 'See Source';
    a.textContent = buttonC.a0.textContent;
    a.style.cssText = buttonC.a0.css;
    button.appendChild(a);
    a1.style.cssText = buttonC.a1.css;
    a1.href = buttonC.a1.href;

    /** update img button */

    buttonC.a1.imgC.src = 'imgSeeP/git1.png';
    img1.src = buttonC.a1.imgC.src;
    img1.alt = buttonC.a1.imgC.alt;
    img1.style.cssText = buttonC.a1.css;
    a1.appendChild(img1);
    button.appendChild(a1);
  };

  divContent.appendChild(ul);

  for (let i = 0; i < mainContent[2].ul_li_content.length; i += 1) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    ul.appendChild(li);
    li.appendChild(span);
    li.style.cssText = ulC.liC.css;
    span.style.cssText = ulC.liC.spanC.css;
    ulC.liC.spanC.textContent = mainContent[2].ul_li_content[i];
    span.textContent = ulC.liC.spanC.textContent;
  };

  divContent.appendChild(p);
  buttonCheckProject.addEventListener('click', () => {

    div.style.display = 'block';
    main.style.display = 'none';
    foot.style.display = 'none';
  });
  span1.addEventListener('click', () => {

    div.style.display = 'none';
    main.style.display = 'block';
    foot.style.display = 'block';
  });
  /** End of desktop */

} else {

  /** Affectation */

  contentSpan.style.cssText = spanallC.css;
  broSpan.style.cssText = spanbro.css;
  div.style.cssText = divC.css;
  divContent.style.cssText = div1C.css;
  img.style.cssText = imgC.css;
  img.src = imgC.src;
  img.alt = imgC.alt;
  span1.style.cssText = cross.cssSpan;
  imgC1.style.cssText = cross.css;
  imgC1.src = cross.src;
  imgC1.alt = cross.alt;
  h2.style.cssText = h2C.css;
  h2.textContent = h2C.textContent;
  ul.style.cssText = ulC.css;
  p.style.cssText = pC.css;
  p.textContent = pC.textContent;
  divButton.style.cssText = divButtonC.css;

  /** Add to DOM */

  div.appendChild(divContent);
  divContent.appendChild(span1);
  divContent.appendChild(img);
  span1.appendChild(imgC1);
  divContent.appendChild(h2);
  divContent.appendChild(ul);
  divContent.appendChild(p);
  divContent.appendChild(divButton);

  for (let i = 0; i < mainContent[2].ul_li_content.length; i += 1) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    ul.appendChild(li);
    li.appendChild(span);
    li.style.cssText = ulC.liC.css;
    span.style.cssText = ulC.liC.spanC.css;
    ulC.liC.spanC.textContent = mainContent[2].ul_li_content[i];
    span.textContent = ulC.liC.spanC.textContent;
  }

  for (let i = 0; i < 1; i += 1) {
    const button = document.createElement('button');
    button.style.cssText = buttonC.css;
    divButton.appendChild(button);
    const a = document.createElement('a');
    const a1 = document.createElement('a');
    const img1 = document.createElement('img');
    a.href = buttonC.a0.href;
    a.textContent = buttonC.a0.textContent;
    a.style.cssText = buttonC.a0.css;
    button.appendChild(a);
    a1.style.cssText = buttonC.a0.css;
    a1.href = buttonC.a1.href;
    img1.src = buttonC.a1.imgC.src;
    img1.alt = buttonC.a1.imgC.alt;
    img1.style.cssText = buttonC.a1.css;
    a1.appendChild(img1);
    button.appendChild(a1);
  }

  for (let i = 0; i < 1; i += 1) {
    const button = document.createElement('button');
    button.style.cssText = buttonC.css;
    divButton.appendChild(button);
    const a = document.createElement('a');
    const a1 = document.createElement('a');
    const img1 = document.createElement('img');
    a.href = buttonC.a0.href;
    buttonC.a0.textContent = 'See Source';
    a.textContent = buttonC.a0.textContent;
    a.style.cssText = buttonC.a0.css;
    button.appendChild(a);
    a1.style.cssText = buttonC.a1.css;
    a1.href = buttonC.a1.href;
    buttonC.a1.imgC.src = 'imgSeeP/git1.png';
    img1.src = buttonC.a1.imgC.src;
    img1.alt = buttonC.a1.imgC.alt;
    img1.style.cssText = buttonC.a1.css;
    a1.appendChild(img1);
    button.appendChild(a1);
  }

  buttonCheckProject.addEventListener('click', () => {
    div.style.display = 'block';
    main.style.display = 'none';
    foot.style.display = 'none';
    navBarMobile.style.display = 'none';
  });

  span1.addEventListener('click', () => {
    div.style.display = 'none';
    main.style.display = 'block';
    foot.style.display = 'block';
    navBarMobile.style.display = 'flex';
  });
}