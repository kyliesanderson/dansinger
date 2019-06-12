import React, {Component} from 'react';
import ArticleTable from './Table.js';
import Header from './Header.js';

class Archive extends Component {

   render(){
      return(
         <div>
            <Header page="archive" />
            <ArticleTable page="archive" />
         </div>
      );
   }
}

export default Archive;
