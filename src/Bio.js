import React, {Component} from 'react';
import Header from './Header.js';

class Bio extends Component {

   render(){
      return(
         <div>
            <Header page="bio" />
            <p>bio goes here</p>
         </div>
      );
   }
}

export default Bio;
