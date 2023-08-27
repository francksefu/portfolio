/** Menu Part */

const hamber = document.querySelector('#menu-clic');
const menu = document.querySelector('#menu');
const other = document.querySelectorAll('.hide');
const x = document.querySelector('#x');
const main = document.querySelector('main');
const foot = document.querySelector('footer');

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


function deleteChild(e) {
  let child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
}
function project(buttonCheckProject, mainContent, mainContentD, div) {
  /** See project part variable */
  const screen = window.matchMedia('(min-width: 768px)');
  const navBarMobile = document.querySelector('#smallScreen');
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
  const divButtonParag = document.createElement('div');

  const divC = {

    css: `background-color: #c1c7d0;
    width: 100%; height: auto; padding-top: 20px; padding-bottom: 26px;
    padding-left: 16px; padding-right: 16px; z-index: 5; position: fixed; top: 0; bottom: 0; overflow-y: scroll; overflow-x: hidden;`,
  };

  const div1C = {

    css: `padding-top: 16px; display: flex; gap: 12px;
    flex-direction: column; align-items: flex-start;
    background-color: white; border-radius: 16px; border: 1px solid #dfe1e6; padding-left: 16px;
    padding-right: 16px; padding-bottom: 20px; width: 100%; margin-right: 16px;`,
  };

  const divButtonParagC = {

    css: 'display: flex; flex-direction: row; justify-content: space-between; padding: 0px; height: auto;',
  };

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
    buttonC.a1.href = mainContentD[4].button.see_Source_href;

    buttonC.a0.href = mainContentD[4].button.see_Source_href;

    divC.css = `background:transparent; 
    width: 100%; z-index: 5; height: auto; padding-top: 122px; padding-bottom: 201px; padding-left: 18%; padding-right: 18%; position: fixed; top: 0; bottom: 0; overflow-y: scroll; overflow-x: hidden;`;

    div1C.css = `padding-top: 24px; display: flex; gap: 12px;
    flex-direction: column; align-items: flex-start;
    background-color: white; border-radius: 16px; border: 1px solid #dfe1e6; padding-left: 24px;
    padding-right: 24px; padding-bottom: 44px; height: auto;`;

    imgC.css = 'width: 100%; height: 616px; border-radius: 8px; border: 1px solid #dfe1e6; margin-bottom: 12px;';

    imgC.src = mainContentD[0].mainImg.src;

    ulC.liC.css = `background: #ebf0ee; border-radius: 8px; height: 32px;
    padding: 8px 12px;`;

    ulC.css = `display: flex; flex-direction: row; align-items: center; 
    padding: 0px; gap: 8px; margin-bottom: 0; margin-top: 8px;`;

    buttonC.css = `display: flex; flex-direction: row; align-items: center; padding: 12px;
    gap: 10px; background: #36b37f; border-radius: 8px; height: 48px; width: 115px;`;

    buttonC.a0.css = 'font-weight: 500; font-size: 15px; line-height: 20px; color: #fff;';

    h2C.css = `max-width: 589px; width:67%; height: auto; font-weight: 700;
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
    divButtonParag.style.cssText = divButtonParagC.css;

    /** Add to DOM */

    div.appendChild(divContent);
    divContent.appendChild(contentSpan);
    divContent.appendChild(img);
    divContent.appendChild(divButtonParag);
    divButtonParag.appendChild(h2);
    divButtonParag.appendChild(contentptagbutton);

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
      a1.appendChild(img1);
      button.appendChild(a1);
    }

    for (let i = 0; i < 1; i += 1) {
      const button = document.createElement('button');
      button.style.cssText = `display: flex; flex-direction: row; align-items: center; padding: 12px;
      gap: 10px; background: #36b37f; border-radius: 8px; height: 48px; width: 141px;`;
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
    }

    divContent.appendChild(ul);

    for (let i = 0; i < mainContentD[2].ul_li_content.length; i += 1) {
      const li = document.createElement('li');
      const span = document.createElement('span');
      ul.appendChild(li);
      li.appendChild(span);
      li.style.cssText = ulC.liC.css;
      span.style.cssText = ulC.liC.spanC.css;
      ulC.liC.spanC.textContent = mainContentD[2].ul_li_content[i];
      span.textContent = ulC.liC.spanC.textContent;
    }

    divContent.appendChild(p);
    buttonCheckProject.addEventListener('click', () => {
      div.style.display = 'block';
      main.style.filter = 'blur(8px);';
      foot.style.filter = 'blur(8px);';
    });

    span1.addEventListener('click', () => {
      div.style.display = 'none';
      main.style.display = 'block';
      foot.style.display = 'block';
      main.style.filter = 'blur(0px)';
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

    span1.addEventListener('click', () => {
      div.style.display = 'none';
      main.style.display = 'block';
      foot.style.display = 'block';
      navBarMobile.style.display = 'flex';
      main.style.filter = 'blur(0px)';
    });
  }
}

function loadingI() {
  const maman = document.querySelector('main');
  const addBeforethis = document.querySelector('#about');
  const section = document.createElement('section');
  const divtitle = document.createElement('div');
  const h1 = document.createElement('h1');
  const divbar = document.createElement('div');
  section.classList.add('recentWork');
  section.setAttribute('id', 'recent');
  divtitle.classList.add('rHeader');
  divtitle.classList.add('title');
  h1.classList.add('title');
  divbar.classList.add('bar');
  maman.insertBefore(section, addBeforethis);
  section.appendChild(divtitle);
  divtitle.appendChild(h1);
  h1.innerHTML = 'My Recent<br> Works';
  divtitle.appendChild(divbar);
// add table for data
  description_project1 = `
  In this project I just built the front end part and backend
  of a management web application (For commerce). Also note that we
  will use a client-server environment in the same machine. 
  `;
  let project1 = {
    name: "Pharmacie Maria",
    photo: "./picture_project/maria.png",
    decription: description_project1,
    link: "https://youtu.be/GXfj4Nc1BYU",
    stack: ['JavaScript', 'HTML', 'CSS', 'Bootstrap', 'PHP']
  }

  let description_project2 = `
  This React capstone project (remember what they are?)is about 
  building a mobile web application to check a list of metrics 
  (numeric values) that you will create making use of React and Redux.
  I was select an API that provides numeric data about finance and then 
  build the webapp around it.
  `;
  let project2 = {
    name: "Collect Data",
    photo: "./picture_project/capstone_R.png",
    decription: description_project2,
    link: "unrivaled-basbousa-5981a9.netlify.app/",
    stack: ['React', 'Redux', 'Bootstrap', 'Git', 'GitHub']
  }

  let description_project3 = `
  This JavaScript capstone project is about building your own web application
   based on an external API, It is a restaurant application that shows us the
  dishes, allows us to like these dishes and even to comment on everything thanks 
  to communication with an API
  `;
  let project3 = {
    name: "Franck_Ezra restaurant",
    photo: "./picture_project/franck_ezra.png",
    decription: description_project3,
    link: "https://github.com/francksefu/franck-ezra-capstone",
    stack: ['Webpack', 'JavaScript', 'Html/Css', 'Bootstrap 5', 'Git', 'GitHub']
  };

  let description_project4 = `
  What you have here is a portfolio of a civil engineering company, as for any portfolio, 
  inside we put their work there and we talked a little about them and added a small form 
  to contact them.
  `;
  let project4 = {
    name: "BICC2022",
    photo: "./picture_project/bicc.png",
    decription: description_project4,
    link: "https://francksefu.github.io/Capstone-project/",
    stack: ['JavaScript', 'Html/Css', 'Bootstrap 5', 'Git', 'GitHub']
  };

  let description_project5 = `
  In this project, we was working with the real live data from the SpaceX API. 
  the task was to build a web application for a company that provides commercial and 
  scientific space travel services. 
  The application allow users to book rockets and join selected space missions.
  `;
  let project5 = {
    name: "Space Travel",
    photo: "./picture_project/space.png",
    decription: description_project5,
    link: "https://github.com/Ali-0111/react-group-2",
    stack: ['React', 'Bootstrap 5', 'Gitflow', 'GitHub']
  };

  let description_project6 = `
  In this project I just built the front end part and backend
  of a management web application (For commerce). Also note that we
  will use a client-server environment in the same machine. 
  `;
  let project6 = {
    name: "Pharmacie Maria",
    photo: "./picture_project/maria.png",
    decription: description_project6,
    link: "https://youtu.be/GXfj4Nc1BYU",
    stack: ['JavaScript', 'HTML', 'CSS', 'Bootstrap', 'PHP']
  }

  // see content of project
  
  
  
  //content desk top click see project
  
  

  //

  const table_project = [project1, project2, project3, project4, project5, project6];

  for (let j = 0; j < 6; j += 1) {
    const id = 'i'.concat(j);
    const divArticle = document.createElement('div');
    const article1 = document.createElement('article');
    const divVide = document.createElement('div');
    const divDetail = document.createElement('div');
    const divRHeader = document.createElement('div');
    const h2 = document.createElement('h2');
    const ul = document.createElement('ul');
    const buttonCol = document.createElement('button');
    const spanButton = document.createElement('span');
    divArticle.classList.add('look');
    divVide.classList.add('vide');

    // add image
    const img = document.createElement('img');
    img.src = table_project[j].photo;
    img.classList.add('image_p');
    divVide.appendChild(img)

    divDetail.classList.add('detail');
    divRHeader.classList.add('rHeader');
    ul.classList.add('language');
    buttonCol.classList.add('buttonCol');
    buttonCol.classList.add('.ecoute');
    buttonCol.setAttribute('id', id);
    section.appendChild(divArticle);
    divArticle.appendChild(article1);
    article1.appendChild(divVide);
    article1.appendChild(divDetail);
    divDetail.appendChild(divRHeader);
    h2.innerHTML = table_project[j].name;
    divRHeader.appendChild(h2);
    divDetail.appendChild(ul);

    for (let i = 0; i < table_project[j].stack.length; i += 1) {
      const li = document.createElement('li');
      const span = document.createElement('span');
      li.appendChild(span);
      span.textContent = table_project[j].stack[i];
      ul.appendChild(li);
    }

    divDetail.appendChild(buttonCol);
    buttonCol.appendChild(spanButton);
    spanButton.textContent = 'See Project';
  }
}

/**When we click at the see button  */

function content_of_projet(projet) {
  const mainContent1 = [
    { mainImg: { alt: 'project picture', src: projet.photo } },
    { h2: { textContent: projet.name } },
    { ul_li_content: projet.stack },
    {
      p_textcontent: projet.description,
    },
    { button: { see_Project_href: projet.link, see_Source_href: projet.link2 } },
  ];

  const mainContentD = [
    { mainImg: { alt: 'project picture desktop', src: projet.photo } },
    { h2: { textContent: projet.name } },
    { ul_li_content: projet.stack },
    {
      p_textcontent: projet.description,
    },
    { button: { see_Project_href: projet.link, see_Source_href: projet.link2 } },
  ];
  return [mainContent1, mainContentD]
}

let description_project1 = `
  In this project I just built the front end part and backend
  of a management web application (For commerce). Also note that we
  will use a client-server environment in the same machine. 
  `;
  let project1 = {
    name: "Pharmacie Maria",
    photo: "./picture_project/maria.png",
    description: description_project1,
    link: "https://youtu.be/GXfj4Nc1BYU",
    link2: "https://github.com/francksefu/Pharmacie-Maria",
    stack: ['JavaScript', 'HTML', 'CSS', 'Bootstrap', 'PHP']
  }

  let description_project2 = `
  This React capstone project (remember what they are?)is about 
  building a mobile web application to check a list of metrics 
  (numeric values) that you will create making use of React and Redux.
  I was select an API that provides numeric data about finance and then 
  build the webapp around it.
  `;
  let project2 = {
    name: "Collect Data",
    photo: "./picture_project/capstone_R.png",
    description: description_project2,
    link: "unrivaled-basbousa-5981a9.netlify.app/",
    link2: "https://github.com/francksefu/capstone-react",
    stack: ['React', 'Redux', 'Bootstrap', 'Git', 'GitHub']
  }

  let description_project3 = `
  This JavaScript capstone project is about building your own web application
   based on an external API, It is a restaurant application that shows us the
  dishes, allows us to like these dishes and even to comment on everything thanks 
  to communication with an API
  `;
  let project3 = {
    name: "Franck_Ezra restaurant",
    photo: "./picture_project/franck_ezra.png",
    description: description_project3,
    link: "https://github.com/francksefu/franck-ezra-capstone",
    link2: "https://github.com/francksefu/franck-ezra-capstone",
    stack: ['Webpack', 'JavaScript', 'Html/Css', 'Bootstrap 5', 'Git', 'GitHub']
  };

  let description_project4 = `
  What you have here is a portfolio of a civil engineering company, as for any portfolio, 
  inside we put their work there and we talked a little about them and added a small form 
  to contact them.
  `;
  let project4 = {
    name: "BICC2022",
    photo: "./picture_project/bicc.png",
    description: description_project4,
    link: "https://francksefu.github.io/Capstone-project/",
    link2: "https://github.com/BICC2022/portfolio",
    stack: ['JavaScript', 'Html/Css', 'Bootstrap 5', 'Git', 'GitHub']
  };

  let description_project5 = `
  In this project, we was working with the real live data from the SpaceX API. 
  the task was to build a web application for a company that provides commercial and 
  scientific space travel services. 
  The application allow users to book rockets and join selected space missions.
  `;
  let project5 = {
    name: "Space Travel",
    photo: "./picture_project/space.png",
    description: description_project5,
    link: "https://github.com/Ali-0111/react-group-2",
    link2: "https://github.com/Ali-0111/react-group-2",
    stack: ['React', 'Bootstrap 5', 'Gitflow', 'GitHub']
  };

  let description_project6 = `
  In this project I just built the front end part and backend
  of a management web application (For commerce). Also note that we
  will use a client-server environment in the same machine. 
  `;
  let project6 = {
    name: "Pharmacie Maria",
    photo: "./picture_project/p6.png",
    description: description_project6,
    link: "https://youtu.be/GXfj4Nc1BYU",
    link2: "https://github.com/francksefu/Pharmacie-Maria",
    stack: ['JavaScript', 'HTML', 'CSS', 'Bootstrap', 'PHP']
  }

window.addEventListener('load', () => {
  loadingI();
  const div0 = document.createElement('div');
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const div3 = document.createElement('div');
  const div4 = document.createElement('div');
  const div5 = document.createElement('div');
  document.body.insertBefore(div0, main);
  document.body.insertBefore(div1, main);
  document.body.insertBefore(div2, main);
  document.body.insertBefore(div3, main);
  document.body.insertBefore(div4, main);
  document.body.insertBefore(div5, main);
  const but0 = document.querySelector('#i0');
  const but1 = document.querySelector('#i1');
  const but2 = document.querySelector('#i2');
  const but3 = document.querySelector('#i3');
  const but4 = document.querySelector('#i4');
  const but5 = document.querySelector('#i5');
  but0.addEventListener('click', () => {
    main.style.filter = 'blur(5px)';
    deleteChild(div0);
    div0.classList.add('img-fit');
    if (div0.style.display === 'flex') {
      div0.style.display = 'none';
    } else {
      div0.style.display = 'flex';
    }
    project(but0, content_of_projet(project1)[0], content_of_projet(project1)[1], div0);
  });

  but1.addEventListener('click', () => {
    main.style.filter = 'blur(5px)';
    deleteChild(div1);
    div1.classList.add('img-fit');
    if (div1.style.display === 'flex') {
      div1.style.display = 'none';
    } else {
      div1.style.display = 'flex';
    }
    project(but1, content_of_projet(project2)[0], content_of_projet(project2)[1], div1);
  });
  but2.addEventListener('click', () => {
    main.style.filter = 'blur(5px)';
    deleteChild(div2);
    div2.classList.add('img-fit');
    if (div2.style.display === 'flex') {
      div2.style.display = 'none';
    } else {
      div2.style.display = 'flex';
    }
    project(but2, content_of_projet(project3)[0], content_of_projet(project3)[1], div2);
  });
  but3.addEventListener('click', () => {
    main.style.filter = 'blur(5px)';
    deleteChild(div3);
    div3.classList.add('img-fit');
    if (div3.style.display === 'flex') {
      div3.style.display = 'none';
    } else {
      div3.style.display = 'flex';
    }

    project(but3, content_of_projet(project4)[0], content_of_projet(project4)[1], div3);
  });
  but4.addEventListener('click', () => {
    main.style.filter = 'blur(5px)';
    deleteChild(div4);
    div4.classList.add('img-fit');
    if (div4.style.display === 'flex') {
      div4.style.display = 'none';
    } else {
      div4.style.display = 'flex';
    }

    project(but4, content_of_projet(project5)[0], content_of_projet(project5)[1], div4);
  });
  but5.addEventListener('click', () => {
    main.style.filter = 'blur(5px)';
    deleteChild(div5);
    div5.classList.add('img-fit');
    if (div5.style.display === 'flex') {
      div5.style.display = 'none';
    } else {
      div5.style.display = 'flex';
    }

    project(but5, content_of_projet(project6)[0], content_of_projet(project6)[1], div5);
  });
});