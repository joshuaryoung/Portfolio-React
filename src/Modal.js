import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

var newTextBody = Array(2), newTextHeader = Array(2), hyphenatedPropsHeader, originalHeader, imageVar, linksVar;

class Modal extends Component
{	
	render()
	{
		if(this.props.header)
		{
			hyphenatedPropsHeader = this.props.header.toLowerCase();
			originalHeader = this.props.header;
			while(hyphenatedPropsHeader.includes(' '))
			{
				hyphenatedPropsHeader = hyphenatedPropsHeader.replace(' ', '-');
			}
		}
		
		if(this.props.body && newTextHeader[1] !== hyphenatedPropsHeader)
		{
			if(Array.isArray(this.props.body))
			{
				newTextBody[0] = this.props.body.map ((item, i) => <p key={i} className = {'modal-body-p' + i}>{item}</p>);
			}
			else
			{
				newTextBody[0] = <p className = {'modal-body-p' + 0}>{this.props.body}</p>
			}
			newTextBody[1] = newTextBody[0];
			newTextHeader[1] = hyphenatedPropsHeader
			newTextHeader[0] = originalHeader;
			imageVar = this.props.image;
			linksVar = this.props.imgLink;
		}
		
		return(
			<CSSTransition classNames = "modals" in = {this.props.isActive} appear = {true} timeout = {{enter: 0, exit: 500}} mountOnEnter = {false} unmountOnExit = {true}>
				<div className = {"Modal Modal-" + this.props.pageOfOrigin + '-' + hyphenatedPropsHeader}>
					<CSSTransition in = {this.props.isActive} appear = {true} timeout = {{enter: 0, exit: 500}} mountOnEnter = {false} unmountOnExit = {true} classNames = "fade-modal">
						<ModalBackground handleClick = {this.props.handleClick} />
					</CSSTransition>
					
					<CSSTransition in = {this.props.isActive} appear = {true} timeout = {{enter: 0, exit: 500}} mountOnEnter = {false} unmountOnExit = {true} classNames = "fade-modal">
						<ModalDialog header = {newTextHeader[0]} modalClass = {hyphenatedPropsHeader} body = {newTextBody[0]} image = {imageVar} imgLink = {linksVar} />
					</CSSTransition>
				</div>
			</CSSTransition>
		);
		
	}
}

function ModalDialog(props)
{
	let newImageArr = props.imgLink ? <a href = {props.imgLink} target = "_blank"><img src = {props.image} className = {'modal-body-image0'} /> </a> : <img src = {props.image} className = {'modal-body-image0'} />;
	
	if(Array.isArray(props.image))
	{
		newImageArr = props.image.map((item, i) => props.imgLink ? <a href = {props.imgLink[i]}  target = "_blank" key={i}> <img src = {item} className = {'modal-body-image' + i} /> </a> : <img src = {item} key={i} className = {'modal-body-image' + i} />);
	}
	return (
		<div className = "ModalDialog" style = {{backgroundImage: 'url(' + (props.bgImage ? props.backgroundImage : '') + ')'}}>
			<div className = {"ModalHeader " + props.modalClass}>
				{props.header}
			</div>			
			<div className = {"ModalBody " + props.modalClass}>
				{props.body}
				{newImageArr}
			</div>
		</div>	
	
	);
}

function ModalBackground(props)
{
	return (
		<div className = "ModalBackground" onClick = {props.handleClick}>
		
		</div>	
	
	);
}

export default Modal;