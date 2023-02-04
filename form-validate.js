const form = document.querySelector('form');
const email = document.querySelector('#email');
const displayMessage = document.querySelector('#emailMessage');
const nameF = document.querySelector('#name');
const textarea = document.querySelector('#comment');
const sessionForm = { emailForm: '', nameForm: '', textareaForm: '' };

/**
 * Function
 */

function validateEmail() {
  const reg = /[A-Z]/g;
  if (reg.test(email.value)) {
    email.style.borderColor = 'red';
    displayMessage.innerText = 'remove all charactere in UPPERCASE please';
    displayMessage.style.color = 'red';
    return false;
  }
  if (!(reg.test(email.value))) {
    email.style.border = 'none';
    displayMessage.style.color = 'none';
    displayMessage.innerText = '';
    return true;
  }
  return true;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateEmail()) {
    form.submit();
  }
});

/**
 * Local storage
 * check if we are avaiable to use storage
 */

function storageAvailable(type) {
  let storage;
  let e;
  try {
    storage = window[type];
    const x = '_test_';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch {
    return e instanceof DOMException && (
      e.code === 22 ||
      e.code === 1014 ||
      e.name === 'QuotaExceededError' ||
      e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && (storage && storage.length !== 0);
  }
}

function take() {
  email.value = JSON.parse(localStorage.getItem('session')).emailForm;
  nameF.value = JSON.parse(localStorage.getItem('session')).nameForm;
  textarea.value = JSON.parse(localStorage.getItem('session')).textareaForm;
  return localStorage.getItem('session');
}

function definir() {
  sessionForm.emailForm = email.value;
  sessionForm.nameForm = nameF.value;
  sessionForm.textareaForm = textarea.value;
  localStorage.setItem('session', JSON.stringify(sessionForm));
}

window.addEventListener('load', () => {
  if (storageAvailable('localStorage')) {
    if (localStorage.getItem('session')) {
      take();
    }
  }
});

email.addEventListener('change', definir);
nameF.addEventListener('change', definir);
textarea.addEventListener('change', definir);