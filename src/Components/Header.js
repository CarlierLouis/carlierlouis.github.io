import React, { Component } from 'react';

class Header extends Component {
  render() {

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Accueil</a></li>
            <li><a className="smoothscroll" href="#about">À propos</a></li>
	         <li><a className="smoothscroll" href="#resume">CV</a></li>
            <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
            <li><a className="smoothscroll" href="#testimonials">Projet professionnel</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Carlier Louis</h1>
            <h3>Bonjour ! Je m'appelle Louis et je suis étudiant en BAC3 technologie de l'informatique à l'EPHEC de Louvain-la-Neuve</h3>
            <hr />
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
