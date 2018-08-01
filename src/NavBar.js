import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

var activeLinkHighlight = {x: 0, y: 0};

class NavBar extends Component
{
  render()
	{		
		switch (this.props.activeLocation)
		{
			case '/':
				activeLinkHighlight = {x: '32.9vw', y: '0vh'};
				break;
				
			case '/Portfolio':
				activeLinkHighlight = {x: '44.35vw', y: '0vh'};
				break;
				
			case '/Social-Media':
				activeLinkHighlight = {x: '57.4vw', y: '0vh'};
				break;
		}
		
    return (
			<div className = "nav-container">
				<Brand />
				<JsxLinks />
				<div className = "navbar-highlight-effect" style = {{top: activeLinkHighlight.y, left: activeLinkHighlight.x}}>
				</div>
				<Motto />
			</div>
    );
  }
}

const navLinks = [
	{name: 'Home', location: '/'} ,
	{name: 'Portfolio', location: '/Portfolio'} ,
	{name: 'Social Media', location: '/Social-Media'}
];

function JsxLinks()
{
	return (
		<div className = "jsxLinks-container">
			{navLinks.map( (navLinks) => <NavLink key = {navLinks.name} to={navLinks.location}>{navLinks.name}</NavLink>)}
		</div>
	);
}

function Brand()
{
	return (
		<div className = "brand">
			Josh Young
		</div>
	);
}

function Motto()
{
	return (
		<div className = "motto">
			FORM. FUNCTION. FEEL.
		</div>		
	);
}

export default NavBar;
