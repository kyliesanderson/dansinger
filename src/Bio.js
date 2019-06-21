import React, {Component} from 'react';
import {Col, Row} from 'react-bootstrap';
import Header from './Header.js';
import content from './content.json';
import bioPic from './biography-pic.jpg';

class Bio extends Component {

   constructor(props){
      super(props);

      this.render = this.render.bind(this);
      this.generateBio = this.generateBio.bind(this);
      this.generateParagraph = this.generateParagraph.bind(this);
   }

   generateParagraph(paragraph){
      return (
         <p className="bio-text">{paragraph}</p>
      );
   }

   generateBio(paragraphs){
      return paragraphs.map(this.generateParagraph);
   }

   render(){
      return(
         <div>
            <Header page="bio" />
            <Row>
               <Col md={7} className="bio-container">
                  {this.generateBio(content.longBio)}
               </Col>
               <Col md={3} className="pic-container">
                  <img className="bio-pic" src={bioPic} />
               </Col>
            </Row>
         </div>
      );
   }
}

export default Bio;
