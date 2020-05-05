import React, { Component } from 'react';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js';
import {robots} from './robots.js';
import Banner from './Banner.js';
import Footer from './Footer.js';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
		// console.log(filteredRobots);
	}

	render() {
		const filteredRobots = this.state.robots.filter(robots =>{
			return (
				robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
				+ robots.city.toLowerCase().includes(this.state.searchfield.toLowerCase())
				+ robots.bfa.toLowerCase().includes(this.state.searchfield.toLowerCase())
				+ robots.mfa.toLowerCase().includes(this.state.searchfield.toLowerCase())
			);
		})
		return (
			<div className='tc'>
				<Banner />
				<div id='main'>
					<h1 className='f1'>Studio Art Resources</h1>
					<h2 className='sub-title'>Web Resources for Art Students</h2>
					<SearchBox searchChange={this.onSearchChange}/>
					<CardList robots={filteredRobots}/>
					<Footer />
				</div>
			</div>
		);
	}
}

export default App;