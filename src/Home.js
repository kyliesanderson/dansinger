import React, {Component} from 'react';
import ArticleTable from './Table.js';
import Header from './Header.js';


class Home extends Component {

   render(){
      return(
         <div>
            <Header page="home"/>
            <ArticleTable page="Home" />
         </div>
      );
   }
}

export default Home;
