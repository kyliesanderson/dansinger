import React, {Component} from 'react';

class Footer extends Component {
   constructor(props){
      super(props);
   }

   render(){
      return (
         <div className="footer">
            <p className="footer-text">&copy; 2019 Dan Singer | Email | Twitter </p>
         </div>
      );
   }
}

export default Footer;
