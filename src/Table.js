import React, {Component} from 'react';
import {Table, Col,Row, Container, Button} from 'react-bootstrap';
import content from './content.json';


class ArticleTable extends Component {

   constructor(props){
      super(props);

      this.state = {
         articles: content.articles
      }

      this.render = this.render.bind(this);
      this.createHomeBody = this.createHomeBody.bind(this);
      this.createArchiveBody = this.createArchiveBody.bind(this);
      this.createHomeRow = this.createHomeRow.bind(this);
      this.createArchiveRow = this.createArchiveRow.bind(this);
      this.createButton = this.createButton.bind(this);
      this.createButtons = this.createButtons.bind(this);
   }

   createHomeRow(article){
      return (
         <a href={article.link} className="table-link">
            <Row className="home-table-row">
               <Col md={7}>
                  <td className="home-table-title">{article.title}</td>
               </Col>
               <Col md={2}>
                  <td>{article.type}</td>
               </Col>
               <Col md={3}>
                  <td>{article.publication}</td>
               </Col>
            </Row>
         </a>
      );
   }

   createHomeBody(articles){
      return articles.map(this.createHomeRow);
   }

   createArchiveRow(article){
      return(
         <a href={article.link} className="table-link">
            <Row className="archive-table-row">
               <Col md={2}>
                  <td>{article.date}</td>
               </Col>
               <Col md={5}>
                  <td className="archive-table-title">{article.title}</td>
               </Col>
               <Col md={2}>
                  <td>{article.type}</td>
               </Col>
               <Col md={3}>
                  <td>{article.publication}</td>
               </Col>
            </Row>
         </a>
      );
   }

   createArchiveBody(articles){
      return articles.map(this.createArchiveRow);
   }

   createButton(publication){
      return (
         <Button variant="outline-dark" className="filter-button">{publication}</Button>
      );
   }

   createButtons(publications){
      return publications.map(this.createButton);
   }

   render(){
      var list;
      if(this.props.page == "archive"){
         list = this.state.articles.slice(0, 7);
         return (
            <div>
               <div className="filter-group">
                  {this.createButtons(content.publications)}
               </div>
               <Table borderless className="archive-table">
                  <thead>
                     <Row className="archive-table-header">
                        <Col md={2}>
                           <th>Date</th>
                        </Col>
                        <Col md={5}>
                           <th>Title</th>
                        </Col>
                        <Col md={2}>
                           <th>Type</th>
                        </Col>
                        <Col md={3}>
                           <th>Publication</th>
                        </Col>
                     </Row>
                  </thead>
                  <tbody>
                     {this.createArchiveBody(list)}
                  </tbody>
               </Table>
            </div>
         );
      }
      else {
         list = this.state.articles.slice(0, 10);
         return (
            <Table borderless className="home-table">
               <tbody>
                  {this.createHomeBody(list)}
               </tbody>
            </Table>
         );

      }
   }
}

export default ArticleTable;
