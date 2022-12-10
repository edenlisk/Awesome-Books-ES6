/* eslint-disable no-restricted-globals */
import { DateTime, DATETIME_FULL_WITH_SECONDS } from './modules/luxon.js';
import BooksFormat from './modules/BooksFormat.js';
import Listeners from './modules/Events.js';

const bookDisplayContainer = document.querySelector('.bookDisplayContainer');
const form = document.querySelector('form');
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const list = document.querySelector('#list');
const addNew = document.querySelector('#addNew');
const contactLink = document.querySelector('#contact');
const awesomeBooks = document.querySelector('.allAwesomeBooks');
const addBook = document.querySelector('#addBook');
const contact = document.querySelector('.contact');
const dateTime = document.querySelector('.date-time');
const body = document.querySelector('body');

const BookCollection = new BooksFormat(bookDisplayContainer);
const EventListeners = new Listeners(awesomeBooks, contact, addBook);

body.insertBefore(dateTime, awesomeBooks);
const liveTime = () => {
  dateTime.innerHTML = DateTime.now().toLocaleString(DATETIME_FULL_WITH_SECONDS);
};
setInterval(liveTime);

BookCollection.displayBooks();
const remove = document.querySelectorAll('.remove');

remove.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    BookCollection.removeBook(btn, index);
  });
});

if (bookDisplayContainer.childElementCount === 0) {
  const defaultMessage = document.createElement('p');
  defaultMessage.classList.add('text-center', 'fs-3');
  defaultMessage.innerText = 'No Awesome Books';
  bookDisplayContainer.appendChild(defaultMessage);
}

form.addEventListener('submit', (e) => {
  if (title.value !== null && author.value !== null) {
    BookCollection.storeBook(title.value, author.value);
    location.reload();
    title.value = '';
    author.value = '';
  }
  e.preventDefault();
});

list.addEventListener('click', (e) => {
  e.preventDefault();
  EventListeners.showList();
});

addNew.addEventListener('click', (e) => {
  e.preventDefault();
  EventListeners.showNew();
});

contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  EventListeners.showContact();
});