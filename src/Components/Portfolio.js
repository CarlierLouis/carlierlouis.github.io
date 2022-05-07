import React, { Component, useState } from 'react';

import Popup from 'reactjs-popup';

import '../App.css'


const contentStyle = {
  maxWidth: "600px",
  width: "90%"
};

class Portfolio extends Component {
  render() {

  if(this.props.data){
    var projects = this.props.data.projects.map(function(projects){
      var projectImage = 'images/portfolio/'+projects.image;
      return <div key={projects.title} className="columns portfolio-item" >
          <div className="item-wrap">
          <a target={'_blank'}  title={projects.title}>
              <img alt={projects.title} src={projectImage} style={{height: '100%', width: '100%'}} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                    <Popup
                        trigger={<a style={{marginLeft: '30%'}} className='hover1'>Voir plus</a>}
                        modal
                        contentStyle={contentStyle}
                      >
                        {close => (
                          <div className="modal" style={{backgroundColor:  '#2B2B2B', padding: '5%', color: 'white', width: '100%'}}>
                            <a className="close" onClick={close}>
                              &times;
                            </a>
                            <div className="content">
                              {projects.description}
                            </div>
                            <div className="actions">
                              
                              <button
                                className="button" style={{float: 'right', backgroundColor: '#F06000'}}
                                onClick={() => {
                                  console.log("modal closed ");
                                  close();
                                }}
                              >
                                fermer
                              </button>
                            </div>
                          </div>
                        )}
                      </Popup>
              <a target={'_blank'} href={projects.url} className='hover2' 
                style={{width: '80%', textAlign: 'center',
                  borderRadius: '0.5rem', padding: '2%', marginLeft: '7.5%'}}>
                Preuves</a>
                </div>
                
              </div>
          </a>
        </div>
        
      </div>
      })
    }

    return (

      <section id="portfolio">
        
      <div className="row">

         <div className="twelve columns collapsed">

            <h2 style={{textAlign: 'center'}}>Portfolio</h2>
            <p style={{textAlign: 'center'}} >Voici quelques activités valorisables pour mon portfolio que j'ai réalisées durant mon bachelier</p>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>

   </section>
   
    );
  }
}

export default Portfolio;
