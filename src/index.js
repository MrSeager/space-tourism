import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import LogoImg from './assets/shared/logo.svg';

const NavBar = () => {
  return (
    <header>
      <img src={LogoImg} />
      <div>
        <a><strong>00</strong> Home</a>
        <a><strong>01</strong> Destination</a>
        <a><strong>02</strong> Crew</a>
        <a><strong>03</strong> Technology</a>
      </div>
    </header>
  );
};

const Sect1 = () => {
  return (
    <section id="s1">
      <h1>So, you want to travel to</h1>
      <h2>Space</h2>
      <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
      outer space and not hover kind of on the edge of it. Well sit back, and relax 
      because we’ll give you a truly out of this world experience!</p>
      <button>Explore</button>
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Sect1 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
