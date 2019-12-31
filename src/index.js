import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './stylesheets/main.scss';

const toggleNav = () => {
  document.querySelector('.modal').classList.toggle('open');
}

const addEventListenerToNav = () => {
  document.querySelector('.menu-icon').addEventListener('click', toggleNav);
  document.querySelector('.close-icon').addEventListener('click', toggleNav);
} 

document.addEventListener('DOMContentLoaded', addEventListenerToNav)

ReactDOM.render(<App/>, document.querySelector('.calendar-controls'));
