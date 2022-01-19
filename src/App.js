import React,{Component}from 'react';
import CardList from './CardList';
// import {robots} from './robots';
import SearchBox from './SearchBox';

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
	// const filteredRobots=this.state.robots.filter(robots =>{
	// 	return (
	// 		robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
	// 	)
	// })
}

	render(){
		const filteredRobots=this.state.robots.filter(robots =>{
		return (
			robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		)
	})

		if (this.state.robots.length===0){
			return <h1>Loading</h1>
		}else{
			return (
				<div className="tc">
					<h1 className ="f1 tc light-green">RoboFriend</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<CardList robots={filteredRobots}/>
				</div>
			);
		}
	}

}

export default App;