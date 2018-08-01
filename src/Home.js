import React, { Component } from 'react';
import backgroundImage from './img/pexels-photo-696407-copy.jpeg';

const bgStyle = {backgroundImage: 'url(' + backgroundImage + ')'};

class Home extends Component {
  render() {
    return (
			<div className="home-container" style = {bgStyle}>
        <div className="home-text-container">
          <h3>
            <p>Web Development</p><br/>
            <p>Software Development</p><br/>
            <p>Game Development</p>
          </h3>
        </div>
		
			</div>
		);
  }
}

export default Home;