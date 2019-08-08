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
      this.generateSection = this.generateSection.bind(this);
   }

   generateSection(section){
      var cursor = 0;
      var items = [];
      if(section.links.length === 0){
         items.push(<p className="bio-text"> {section.paragraph} </p>);
      }
      else{
         for (var i = 0; i < section.links.length; i++){
            console.log("cursor " + cursor);
            var linkText = section.links[i].linkText;
            var linkIndex = section.paragraph.indexOf(linkText);
            console.log("linkIndex " + linkIndex);
            console.log("linkText " + linkText );
            console.log("atIndex " + section.paragraph[linkIndex]);
            items.push(<span>{section.paragraph.substring(cursor, linkIndex)}</span>);
            items.push(<a className="bio-text-span bio-link" href={section.links[i].link}> {linkText} </a>);
            cursor = linkIndex + linkText.length;
         }
         items.push(<span>{section.paragraph.substring(cursor, section.paragraph.length)}</span>);
      }
      return (
         <p className="bio-text">
            {items}
         </p>
      );
   }

   generateBio(sections){
      return sections.map(this.generateSection);
   }

   render(){
      var emailLink = "mailto:" + content.email;
      var twitterLink = "http://www.twitter.com/" + content.twitter;
      return(
         <div>
         <Header page="bio" />
         <Container>
            <Row>
               <Col md={7} sm={12} className="bio-container">
                  {this.generateBio(content.longBio)}
               </Col>
               <Col md={3} sm={10} className="d-sm-none d-md-block pic-container">
                  <img className="bio-pic" src={bioPic} />
                  <br />
                  <h1 className="bio-header">CONTACT INFORMATION</h1>
                  <a href={emailLink} className="bio-link">Email</a>
                  <br />
                  <a href={twitterLink} className="bio-link">Twitter</a>
               </Col>
            </Row>
            <div className="bio-buffer" />
         </Container>
         </div>
      );
   }
}

export default Bio;
