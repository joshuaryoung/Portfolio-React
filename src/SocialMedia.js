import React, { Component } from 'react';
import withSizes from 'react-sizes';
import Modal from './Modal';

// IMAGES //
import backgroundImage from './img/pexels-photo-257853-copy.jpeg';
import gitHubImage from './img/Git-icon-black.svg';
import linkedInImage from './img/linkedIn.svg';
import facebookImage from './img/facebook.svg';
import gmailImage from './img/gmail.svg';
import joshImage from './img/JoshGreeneryBW.jpg';
import hakoneVineImage from './img/HakoneVine.jpg';
import joshBWImage from './img/joshBW.jpg';

// CONSTS //
const bgStyle = {backgroundImage: 'url(' + backgroundImage + ')'};

class SocialMedia extends Component {
	constructor(props)
	{
    super(props);
		this.state = {isModalActive: false};
		
		this.handleModalClick = this.handleModalClick.bind(this);
	}
	
	handleModalClick()
	{
		this.setState({isModalActive: !this.state.isModalActive});
	}
	
  render() {
    return (
			<div className="social-media-container" style = {bgStyle}>
				<SocialMediaButtons className = "SocialMediaButtons"/>
				<JoshImage handleClick = {this.handleModalClick}/>
				<Modal pageOfOrigin = "social-media" isActive = {this.state.isModalActive} header = {joshAbout.header} image = {[hakoneVineImage, joshBWImage]} body = {joshAbout.body} handleClick = {this.handleModalClick}/>
			</div>
		);
  }
}

const socialMediaButtonArr = [{
	name: 'Github',
	key: 0,
	url: 'https://github.com/joshuaryoung',
	img: gitHubImage,
	x: 0,
	y: 7
},
{
	name: 'LinkedIn',
	key: 1,
	url: 'https://www.linkedin.com/in/joshua-young-a79108100',
	img: linkedInImage,
	x: 0,
	y: 0
},
{
	name: 'Facebook',
	key: 2,
	url: 'https://www.facebook.com/jyrocksquad',
	img: facebookImage,
	x: 0,
	y: 0
},
{
	name: 'Gmail',
	key: 3,
	url: 'mailto:joshua.r.young1@gmail.com',
	img: gmailImage,
	x: 0,
	y: 0
}
];

const joshAbout = {
	header: "About Josh",
	body: ["Josh Young is a self-taught programmer, designer, guitarist and electronics enthusiast from Salt Lake City, Utah where he lives with his dog Aquiles.", "His interests include playing music, live concerts, film, photography, video game design, gardening, cooking, knife sharpening, traveling, learning foreign languages, camping and hiking."]
};

function SocialMediaButtons()
{
	const HORIZONTAL_SPACING = 8, HORIZONTAL_OFFSET = 46.27;
	
	for(let i = 1; i < socialMediaButtonArr.length ; i++)
	{
		socialMediaButtonArr[i].x = socialMediaButtonArr[i-1].x + HORIZONTAL_SPACING;
		socialMediaButtonArr[i].y = socialMediaButtonArr[i].x * 1.113 + socialMediaButtonArr[0].y;
	}
	return(
		<div className = "SocialMediaButtons">
			{socialMediaButtonArr.map((i) => {
				return(
					<a target = "_blank" href = {i.url} key = {i.key} style={{top: i.y + 'vw', left: i.x + HORIZONTAL_OFFSET + 'vw'}}>
						<img src = {i.img} alt = {i.name} className={'social-media-button social-media-button' + i.key } />
					</a>
				);
			})}
		</div>
	);
}

function JoshImage(props)
{
	return(
		<div className = "josh-image-container">
			<img src = {joshImage} alt = "Josh" className = "josh-image" onClick = {props.handleClick}/>
		</div>
	);
}

const mapSizesToProps = (sizes) => {
	return sizes;
};


						// <div className = {"social-media-button-text social-media-button-text" + i.key}>{i.name}</div>

export default withSizes(mapSizesToProps)(SocialMedia);