import React, { Component } from 'react';

class Testimonials extends Component {
  render() {

   

    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span></span></h1>
            </div>

            <div className="ten columns flex-container">
               
                  <ul className="slides">
                        <p style={{color: 'white'}}>Dès le début de mon bachelier, 
                           j'ai su que je voulais me tourner vers la programmation et devenir développeur après mes études.
                           J'ai d'ailleurs réalisé mon stage de fin de bachelier dans ce domaine et cette expérience
                           n'a fait que renforcer mon objectif de me tourner vers cette voie.<br></br><br></br>
                           Cependant, j'ai pour ambition de d'abord faire un Master en sciences informatiques à l'UCL 
                           avant de me lancer dans le monde du travail. J'ai envie de continuer à apprendre tant que je suis dans le monde
                           des études afin de renforcer mes compétences et d'être d'avantage à l'aise avec le monde de l'IT.</p>
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Testimonials;
