import React, {Component} from 'react';
import info from './articles.json';

class Footer extends Component {
   constructor(props){
      super(props);
   }

   render(){
      var emailLink = "mailto:" + info.email;
      var twitterLink = "http://www.twitter.com/" + info.twitter;
      return (
         <div className="footer">
            <p className="footer-text">&copy; 2019 Dan Singer |
               <a href={emailLink}>Email</a>
                |
                <a href={twitterLink}>Twitter</a>
            </p>
         </div>
      );
   }
}

export default Footer;
