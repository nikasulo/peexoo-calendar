import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './stylesheets/main.scss';

const toggleNav = () => {
  document.querySelector('.modal').classList.toggle('open');
}

const closeNav = () => {
  const nav = document.querySelector('.modal');
  if (nav.classList.contains('open')){
    nav.classList.toggle('open');
  }
}

const addEventListeners = () => {
  document.querySelector('.menu-icon').addEventListener('click', toggleNav);
  document.querySelector('.close-icon').addEventListener('click', toggleNav);
  document.onscroll = closeNav;
} 

document.addEventListener('DOMContentLoaded', addEventListeners)

ReactDOM.render(<App/>, document.querySelector('.calendar-controls'));
