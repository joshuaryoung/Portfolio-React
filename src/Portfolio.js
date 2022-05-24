import React, { Component } from 'react';
import Modal from './Modal';

import backgroundImage from './img/pexels-photo-397998-copy.jpeg';
import JRandalYoungReactImage from './img/JRandalYoung.jpg';
import JRandalYoungOriginalImage from './img/JRandalYoungOriginal.jpg';
import clayMarksImage from './img/clayMarks.jpg';
import clayMarksOriginalImage from './img/clayMarksOriginal.jpg';
import breakOutImage from './img/breakOut.jpg';
import satoshiKonImage from './img/satoshiKon.jpg';

const bgStyle = {backgroundImage: 'url(' + backgroundImage + ')'};

class Portfolio extends Component {
	constructor(props)
	{
    super(props);
		this.state = {isModalActive: false, header: '', body: '', image: '', modalImg: '', imgLink: ''};
		
		this.handleModalClick = this.handleModalClick.bind(this);
	}
	
	handleModalClick(args)
	{
		this.setState({isModalActive: !this.state.isModalActive});
		if(!this.state.isModalActive)
		{
			this.setState({header: args.name, body: args.body, image: args.img, modalImg: args.modalImg, imgLink: args.url});
		}
	}
	
  render() {
    return (
			<div className="portfolio-container" style = {bgStyle}>
				<PortfolioTable isModalActive = {this.state.isModalActive} handleClick = {this.handleModalClick} />
				<Modal isActive = {this.state.isModalActive} pageOfOrigin = {'portfolio'} header = {this.state.header} image = {this.state.modalImg} body = {this.state.body} imgLink = {this.state.imgLink} handleClick = {this.handleModalClick}/>
			</div>
		);
  }
}

const portfolioTableArr = [{
	name: 'J Randal Young DPM',
	img: JRandalYoungReactImage,
	modalImg: [JRandalYoungOriginalImage, JRandalYoungReactImage],
	key: 0,
	url: ['https://brave-edison-cc01e2.netlify.com/Home', 'https://jrandalyoungdpm.com'],
	body: ["This was my first full website. Initially done with just HTML, CSS and a bit of borrowed JS. Below is a link to that original version", "The current version (below) is written entirely in ReactJS and uses AWS Lambda to run a NodeJS script for handling the Contact-Us form"]
},
{
	name: 'Clay Marks',
	img: clayMarksImage,
	modalImg: [clayMarksOriginalImage, clayMarksImage],
	key: 1,
	url: ['https://pedantic-einstein-0deb5b.netlify.com/', 'https://claymarks.com'],
	body: ["This was my second website. The original build was done with HTML, CSS and Bootstrap", 'The current build uses ReactJS and was my first implementation of ReactTransitionGroup']
},
{
	name: 'Break Out',
	img: breakOutImage,
	modalImg: breakOutImage,
	key: 2,
	url: 'https://festive-almeida-14df2b.netlify.com/',
	body: "Back in the the early 2000s, I used Borland C++ to make a Break Out clone that I was quite proud of. This is an homage to that project. It uses P5.JS and hand written collision detection."
},
{
	name: 'Satoshi Kon Tribute',
	img: satoshiKonImage,
	modalImg: satoshiKonImage,
	key: 3,
	url: 'https://practical-nobel-5951ff.netlify.com/',
	body: "This was a practice site I made to learn the basics of Bootstrap."
},
// {
	// name: 'Tic Tac Toe',
	// img: ticTacToeImage,
	// modalImg: ticTacToeImage,
	// key: 4,
	// url: 'https://codepen.io/joshuaryoung/full/eMdXEM/',
	// body: "A tutorial guided project that from the React DOCS, I implemented a reset feature that goes beyond the scope of the tutorial"
// }
// {
	// name: 'Clay Marks2',
	// img: clayMarksImage,
	// modalImg: [JRandalYoungReactImage, JRandalYoungReactImage],
	// key: 5,
	// url: 'https://claymarks.com',
	// body: "6Josh Young is a self-taught programmer, designer, guitarist and electronics enthusiast from Salt Lake City, Utah where he lives with his dog Aquiles.\nHis interests include playing music, live concerts, film, photography, video game design, gardening, cooking, knife sharpening, traveling, learning foreign languages, camping and hiking."
// },
// {
	// name: 'Block Breaker3',
	// img: breakOutImage,
	// modalImg: [JRandalYoungReactImage, JRandalYoungReactImage],
	// key: 6,
	// url: '',
	// body: "Josh Young is a self-taught programmer, designer, guitarist and electronics enthusiast from Salt Lake City, Utah where he lives with his dog Aquiles.\nHis interests include playing music, live concerts, film, photography, video game design, gardening, cooking, knife sharpening, traveling, learning foreign languages, camping and hiking."
// },
// {
	// name: 'Block Breaker4',
	// img: breakOutImage,
	// modalImg: [JRandalYoungReactImage, JRandalYoungReactImage],
	// key: 7,
	// url: '',
	// body: "Josh Young is a self-taught programmer, designer, guitarist and electronics enthusiast from Salt Lake City, Utah where he lives with his dog Aquiles.\nHis interests include playing music, live concerts, film, photography, video game design, gardening, cooking, knife sharpening, traveling, learning foreign languages, camping and hiking."
// }
];

function PortfolioTable(props)
{
	return(
		<div className = "PortfolioTable">
			{portfolioTableArr.map((i) => {
				return(
					<div key = {i.key} onClick = {props.handleClick.bind(this, i)}>
						<img src = {i.img} alt = {i.name} className={'table-img table-img' + i.key } />
					</div>
				);
			})}
		</div>
	);
}


						// <div className = {"table-text table-text" + i.key}>{i.name}</div>

export default Portfolio;