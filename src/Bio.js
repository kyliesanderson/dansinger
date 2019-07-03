import React, {Component} from 'react';
import {Col, Row, Container} from 'react-bootstrap';
import Header from './Header.js';
import content from './articles.json';
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
      var emailLink = "mailto:" + content.email;
      var twitterLink = "http://www.twitter.com/" + content.twitter;
      return(
         <Container>
            <Header page="bio" />
            <Row>
               <Col md={7} sm={12} className="bio-container">
                  {this.generateBio(content.longBio)}
               </Col>
               <Col md={3} sm={10} className="d-sm-none d-md-block pic-container">
                  <img className="bio-pic" src={bioPic} />
                  <br />
                  <h1 className="bio-header">CONTACT INFORMATION</h1>
                  <a href={emailLink} className="plain-link">Email</a>
                  <br />
                  <a href={twitterLink} className="plain-link">Twitter</a>
               </Col>
            </Row>
         </Container>
      );
   }
}

export default Bio;
