import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import LogoImg from './assets/shared/logo.svg';
import EurImg from './assets/destination/image-europa.webp';
import MarsImg from './assets/destination/image-mars.webp';
import MoonImg from './assets/destination/image-moon.webp';
import TitImg from './assets/destination/image-titan.webp';
import ComImg from './assets/crew/image-douglas-hurley.webp';
import EngImg from './assets/crew/image-anousheh-ansari.webp';
import PilImg from './assets/crew/image-victor-glover.webp';
import SpeImg from './assets/crew/image-mark-shuttleworth.webp';
import VehImg from './assets/technology/image-launch-vehicle-portrait.jpg';
import VehImgMob from './assets/technology/image-launch-vehicle-landscape.jpg';
import CapImg from './assets/technology/image-space-capsule-portrait.jpg';
import CapImgMob from './assets/technology/image-space-capsule-landscape.jpg';
import SpaImg from './assets/technology/image-spaceport-portrait.jpg';
import SpaImgMob from './assets/technology/image-spaceport-landscape.jpg';

const NavBar = ({setActivePage}) => {
  return (
    <header>
      <img src={LogoImg} alt='logo' />
      <div id="DeskNav">
        <a onClick={() => setActivePage('Home')}><strong>00</strong> Home</a>
        <a onClick={() => setActivePage('Destination')}><strong>01</strong> Destination</a>
        <a onClick={() => setActivePage('Crew')}><strong>02</strong> Crew</a>
        <a onClick={() => setActivePage('Technology')}><strong>03</strong> Technology</a>
      </div>
    </header>
  );
};

const Home = () => {
  return (
    <section id="home">
      <h1>So, you want to travel to</h1>
      <h2>Space</h2>
      <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
      outer space and not hover kind of on the edge of it. Well sit back, and relax 
      because we’ll give you a truly out of this world experience!</p>
      <button>Explore</button>
    </section>
  );
};

const Destination = () => {
  const [activePlanet, setActivePlanet] = useState('Moon');

  return (
    <section id='destination'>
      <h2><span>01</span> Pick your destination</h2>
      <div className='planetsPanel'>
        <div className='planetsNav'>
          <a onClick={() => setActivePlanet('Moon')}>Moon</a>
          <a onClick={() => setActivePlanet('Mars')}>Mars</a>
          <a onClick={() => setActivePlanet('Europa')}>Europa</a>
          <a onClick={() => setActivePlanet('Titan')}>Titan</a>
        </div>
        {activePlanet === 'Moon' && <Moon />}
        {activePlanet === 'Mars' && <Mars />}
        {activePlanet === 'Europa' && <Europa />}
        {activePlanet === 'Titan' && <Titan />}
      </div>
    </section>
  );
};

const Moon = () => {
  return(
    <div className='planet'>
      <img src={MoonImg} alt="PlanetImg" />
      <h3>Moon</h3>
      <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
      regain perspective and come back refreshed. While you’re there, take in some history 
      by visiting the Luna 2 and Apollo 11 landing sites.</p>
      <h4>Avg. distance</h4>
      <h4>Est. travel time</h4>
      <h5>384,400 km</h5>
      <h5>3 days</h5>
    </div>
  );
};

const Mars = () => {
  return(
    <div className='planet'>
      <img src={MarsImg} alt="PlanetImg" />
      <h3>Mars</h3>
      <p>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
      the tallest planetary mountain in our solar system. It’s two and a half times 
      the size of Everest!</p>
      <h4>Avg. distance</h4>
      <h4>Est. travel time</h4>
      <h5>225 mil. km</h5>
      <h5>9 months</h5>
    </div>
  );
};

const Europa = () => {
  return(
    <div className='planet'>
      <img src={EurImg} alt="PlanetImg" />
      <h3>Europa</h3>
      <p>The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
      winter lover’s dream. With an icy surface, it’s perfect for a bit of 
      ice skating, curling, hockey, or simple relaxation in your snug 
      wintery cabin.</p>
      <h4>Avg. distance</h4>
      <h4>Est. travel time</h4>
      <h5>628 mil. km</h5>
      <h5>3 years</h5>
    </div>
  );
};

const Titan = () => {
  return(
    <div className='planet'>
      <img src={TitImg} alt="PlanetImg" />
      <h3>Titan</h3>
      <p>The only moon known to have a dense atmosphere other than Earth, Titan 
      is a home away from home (just a few hundred degrees colder!). As a 
      bonus, you get striking views of the Rings of Saturn.</p>
      <h4>Avg. distance</h4>
      <h4>Est. travel time</h4>
      <h5>1.6 bil. km</h5>
      <h5>7 years</h5>
    </div>
  );
};

const Crew = () => {
  const [activeCrewMember, setActiveCrewMember] = useState('Commander');

  return (
    <section id='crew'>
      <h2><span>02</span> Meet your crew</h2>
      <div className='crewPanel'>
        {activeCrewMember === 'Commander' && <Commander />}
        {activeCrewMember === 'Engineer' && <Engineer />}
        {activeCrewMember === 'Pilot' && <Pilot />}
        {activeCrewMember === 'Specialist' && <Specialist />}
        <div className='crewNav'>
          <a onClick={() => setActiveCrewMember('Commander')}>&middot;</a>
          <a onClick={() => setActiveCrewMember('Engineer')}>&middot;</a>
          <a onClick={() => setActiveCrewMember('Pilot')}>&middot;</a>
          <a onClick={() => setActiveCrewMember('Specialist')}>&middot;</a>
        </div>
      </div>
    </section>
  );
};

const Commander = () => {
  return (
    <div className='crewItem'>
      <h3>Commander</h3>
      <img src={ComImg} alt='crewImg' />
      <h4>Douglas Hurley</h4>
      <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
      and former NASA astronaut. He launched into space for the third time as 
      commander of Crew Dragon Demo-2.</p>
    </div>
  );
};

const Engineer = () => {
  return (
    <div className='crewItem'>
      <h3>Flight Engineer</h3>
      <img src={EngImg} alt='crewImg' />
      <h4>Anousheh Ansari</h4>
      <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
      Ansari was the fourth self-funded space tourist, the first self-funded woman to 
      fly to the ISS, and the first Iranian in space.</p>
    </div>
  );
};

const Pilot = () => {
  return (
    <div className='crewItem'>
      <h3>Pilot</h3>
      <img src={PilImg} alt='crewImg' />
      <h4>Victor Glover</h4>
      <p>Pilot on the first operational flight of the SpaceX Crew Dragon to the 
      International Space Station. Glover is a commander in the U.S. Navy where 
      he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
      station systems flight engineer.</p>
    </div>
  );
};

const Specialist = () => {
  return (
    <div className='crewItem'>
      <h3>Pilot</h3>
      <img src={SpeImg} alt='crewImg' />
      <h4>Mark Shuttleworth</h4>
      <p>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
      the Linux-based Ubuntu operating system. Shuttleworth became the first South 
      African to travel to space as a space tourist.</p>
    </div>
  );
};

const Technology = () => {
  const [activeTech, setActiveTech] = useState('Vehicle');

  return (
    <section id='technology'>
      <h2><span>03</span> Space launch 101</h2>
      <div className='techPanel'>
        <div className='techNav'>
          <button onClick={() => setActiveTech('Vehicle')}>1</button>
          <button onClick={() => setActiveTech('Capsule')}>2</button>
          <button onClick={() => setActiveTech('Spaceport')}>3</button>
        </div>
        {activeTech === 'Vehicle' && <Vehicle />}
        {activeTech === 'Capsule' && <Capsule />}
        {activeTech === 'Spaceport' && <Spaceport />}
      </div>
    </section>
  );
};

const Vehicle = () => {
  return (
    <div className='techItem'>
      <h3>The terminology...</h3>
      <img className='imgDesk' src={VehImg} alt="techImg" />
      <img className='imgMob' src={VehImgMob} alt="techImg" />
      <h4>Launch vehicle</h4>
      <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
      payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
      WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
      it's quite an awe-inspiring sight on the launch pad!</p>
    </div>
  );
};

const Capsule = () => {
  return (
    <div className='techItem'>
      <h3>The terminology...</h3>
      <img className='imgDesk' src={CapImg} alt="techImg" />
      <img className='imgMob' src={CapImgMob} alt="techImg" />
      <h4>Space capsule</h4>
      <p>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
      capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
      you'll spend your time during the flight. It includes a space gym, cinema, 
      and plenty of other activities to keep you entertained.</p>
    </div>
  ); 
};

const Spaceport = () => {
  return (
    <div className='techItem'>
      <h3>The terminology...</h3>
      <img className='imgDesk' src={SpaImg} alt="techImg" />
      <img className='imgMob' src={SpaImgMob} alt="techImg" />
      <h4>Spaceport</h4>
      <p>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
      by analogy to the seaport for ships or airport for aircraft. Based in the 
      famous Cape Canaveral, our spaceport is ideally situated to take advantage 
      of the Earth’s rotation for launch.</p>
    </div>
  ); 
};

const MainSite = () => {
  const [activePage, setActivePage] = useState('Home');

  return(
    <React.StrictMode>
      <NavBar setActivePage={setActivePage}/>
      <main>
        {activePage === 'Home' && <Home />}
        {activePage === 'Destination' && <Destination />}
        {activePage === 'Crew' && <Crew />}
        {activePage === 'Technology' && <Technology />}
      </main>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainSite />);
reportWebVitals();
