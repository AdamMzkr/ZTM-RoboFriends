import React,{Component}from 'react';
import CardList from '../components/CardList';
// import {robots} from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBundler from '../components/ErrorBundler'

class App extends Component{
	constructor(){
		super()
		this.state={
			robots:[],
			'searchField':''
		}
	}
   // ASK API FOR DATA
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(user=>this.setState({robots:user}));
	}
	
	onSearchChange=(e)=>{
		this.setState({searchField:e.target.value});
}

	render(){
		const {robots,searchField}=this.state;
		const filteredRobots=robots.filter(robot =>{
		return (
			robot.name.toLowerCase().includes(searchField.toLowerCase())
		)
	})
		return (!robots.length)?
			<h1 className="tc">Loading</h1>:
			(
			<div className="tc">
				<h1 className =" f1 tc light-green">RoboFriend</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<ErrorBundler>
						<CardList robots={filteredRobots}/>
					</ErrorBundler>

				</Scroll>
			</div>
			);
	}

}

export default App;