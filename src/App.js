import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import NavBar from './NavBar';
import Home from './Home';
import Portfolio from './Portfolio';
import SocialMedia from './SocialMedia';
import './App.css';

const timeout = {enter: 0,
								 exit: 1500};

class App extends Component {
  render() {
    return (
			<div className = "app-container">
				<Router>
					<Route render={({ location }) => (
						<div className = "routes-container">
							<NavBar activeLocation = {location.pathname}/>
							<TransitionGroup>
								<CSSTransition key={location.key} classNames="fade" timeout = {timeout}>
									<Switch location={location}>
										<Route exact path="/" component = {Home} />
										<Route path="/Portfolio" component = {Portfolio} />
										<Route path="/Social-Media" component = {SocialMedia} />
									</Switch>
								</CSSTransition>							
							</TransitionGroup>
						</div>
					)}/>
				</Router>
			</div>
    );
  }
}

export default App;
