import React, {Component} from 'react';
import {Table, Col,Row, Container, Button} from 'react-bootstrap';
import content from './articles.json';


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
      this.handleClick = this.handleClick.bind(this);
   }

   createHomeRow(article){
      if(article.title.length > 60){
         article.title = article.title.substring(0,57);
         article.title = article.title + "...";
      }
      return (
         <a href={article.link} className="table-link">
            <Row className="home-table-row">
               <Col md={7}>
                  <td className="home-table-title table-text">{article.title}</td>
               </Col>
               <Col md={2}>
                  <td className="table-text">{article.type}</td>
               </Col>
               <Col md={3}>
                  <td className="table-text">{article.publication}</td>
               </Col>
            </Row>
         </a>
      );
   }

   createHomeBody(articles){
      return articles.map(this.createHomeRow);
   }

   createArchiveRow(article){
      if(article.title.length > 50){
         article.title = article.title.substring(0,47);
         article.title = article.title + "...";
      }
      return(
         <a href={article.link} className="table-link">
            <Row className="archive-table-row">
               <Col md={2}>
                  <td className="table-text">{article.date}</td>
               </Col>
               <Col md={5}>
                  <td className="archive-table-title table-text">{article.title}</td>
               </Col>
               <Col md={2}>
                  <td className="table-text">{article.type}</td>
               </Col>
               <Col md={3}>
                  <td className="table-text">{article.publication}</td>
               </Col>
            </Row>
         </a>
      );
   }

   createArchiveBody(articles){
      return articles.map(this.createArchiveRow);
   }

   handleClick(publication){
      if(publication == "All"){
         this.setState({articles: content.articles});
      }
      else {
         var filteredArticles = content.articles.filter(article => article.publication == publication);
         this.setState({articles: filteredArticles})
      }
   }

   createButton(publication){
      return (
         <Button onClick={() => this.handleClick(publication)}
            variant="outline-dark"
            className="filter-button">
            {publication
         }</Button>
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
                     <Row className="archive-table-header d-none d-md-flex">
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
