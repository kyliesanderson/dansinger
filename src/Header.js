import React, {Component} from 'react';
import {Col, Row} from 'react-bootstrap';
import content from './articles.json';

class Header extends Component{
   constructor(props){
      super(props);

      this.render = this.render.bind(this);
      this.createNav = this.createNav.bind(this);
   }

   createNav(){
      return(
         <Col md={5}>
            <Row>
               <a href="/archive" className="header-link navigation-link">ARCHIVE</a>
            </Row>
            <Row>
               <a href="/bio" className="header-link navigation-link">BIOGRAPHY</a>
            </Row>
         </Col>
      );

   }

   render(){
      if(this.props.page == "home"){
         return (
            <Row className="header">
               <Col md={7} className="short-bio-container">
                  <h1 className="short-bio">
                     <a href="/" className="short-bio-link">DAN SINGER</a>
                     {content.shortBio}
                     <a href="/bio" className="short-bio-link">MORE</a>
                  </h1>
               </Col>
               {this.createNav()}
            </Row>
         )
      }
      else {
         return (
            <Row className="header">
               <Col md={7} className="short-bio-container">
                  <h1 className="short-bio">
                     <a href="/" className="header-link">DAN SINGER</a>
                  </h1>
               </Col>
               {this.createNav()}
            </Row>
         );
      }

   }
}

export default Header;
