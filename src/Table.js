import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import content from './content.json';


class ArticleTable extends Component {

   constructor(props){
      super(props);

      this.render = this.render.bind(this);
      this.createHomeBody = this.createHomeBody.bind(this);
      this.createArchiveBody = this.createArchiveBody.bind(this);
      this.createHomeRow = this.createHomeRow.bind(this);
      this.createArchiveRow = this.createArchiveRow.bind(this);

   }

   createHomeRow(article){
      return (
         <tr>
            <td>{article.title}</td>
            <td>{article.type}</td>
            <td>{article.publication}</td>
         </tr>
      );
   }

   createHomeBody(articles){
      return articles.map(this.createHomeRow);
   }

   createArchiveRow(article){
      return(
         <tr>
            <td>{article.date}</td>
            <td>{article.title}</td>
            <td>{article.type}</td>
            <td>{article.publication}</td>
         </tr>
      );
   }

   createArchiveBody(articles){
      return articles.map(this.createArchiveRow);
   }


   render(){
      if(this.props.page == "archive"){
         return (
            <Table bordered hover>
               <thead>
                  <tr>
                     <th>Date</th>
                     <th>Title</th>
                     <th>Type</th>
                     <th>Publication</th>
                  </tr>
               </thead>
               <tbody>
                  {this.createArchiveBody(content.articles)}
               </tbody>
            </Table>
         );
      }
      else {
         return (
            <Table bordered hover>
               <tbody>
                  {this.createHomeBody(content.articles)}
               </tbody>
            </Table>
         );

      }
   }
}

export default ArticleTable;
