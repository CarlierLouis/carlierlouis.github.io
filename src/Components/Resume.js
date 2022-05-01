import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Formation</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 <h1>Études supérieures :</h1>
                 <p>Bachelier en technologie de l’informatique, Haute Ecole
                  EPHEC Campus Louvain-la-Neuve (2019-2022).</p>
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Expérience</span></h1>
         </div>

         <div className="nine columns main-col">
           <h1>Stage en entreprise :</h1>
          <p>Stage en tant que développeur chez
SmartSkills à Gembloux (février 2022 - mai 2022).</p>
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Compétences</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>
            </p>

				<div className="bars">
        <h5>Voici une liste non exhaustive de différents langages que j'ai été amené à utiliser: </h5><br></br>
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
