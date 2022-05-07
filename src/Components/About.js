import React, { Component } from 'react';


class About extends Component {
  render() {

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img style={{width: '100%', height: '100%'}} className="profile-pic"  src="./images/Moi.JPG" alt="Carlier Louis Photo" />
         </div>
         <div className="nine columns main-col">
            <h2>À propos de moi</h2>
            <p>Je suis en dernière année de bachelier en technologie de l'informatique à L'EPHEC de Louvain-la-Neuve.
                Durant mon cursus, j'ai eu l'occasion d'aborder de nombreux aspects au nieavu IT. Mais dès le début de ma formation,
                mon attention s'est portée sur la programmtion et le développement. J'ai donc pour objectif de travailler en tant que développeur après mes études.
            <hr></hr>
            <ul>
               <li>Age: 21</li>
               <li>Langues: français, anglais</li>
            </ul>
            </p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact</h2>
                  <p className="address">
						   <span>Carlier Louis</span><br />
						   <span>Rue Jean Delange 4A<br />
						         Hannut, 4280, Belgique
                   </span><br />
						   <span>0478464795</span><br />
                     <span>carlier.louis.info@gmail.com</span>
					   </p>
               </div>
               <br></br><br></br>
               <div className="columns download">
                  <p>
                     <a href="./data/CV.pdf" target="_blank" className="button"><i className="fa fa-download"></i>Mon CV version pdf</a>
                  </p>
               </div> 
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
