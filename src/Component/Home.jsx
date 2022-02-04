import React, { Component } from 'react';
import image from '../images/booksimage2.jpg';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
           <><img className="img-fluid" 
           src={image} style={{width:'100%', height:'50%'}}
           alt="logo"/></>
             );
    }
}
 
export default Home;