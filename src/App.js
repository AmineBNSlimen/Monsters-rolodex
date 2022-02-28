import React, { Component }  from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component{
  constructor() {
    super();
    this.state = {
      monsters:[],
      searchField: ''
    }

  


  }
   componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/users')
      .then( Response => Response.json())
      .then(x => this.setState({ monsters : x}))
   }

   handleChange = e =>  {this.setState({ searchField: e.target.value});}

  render() {
    const {monsters, searchField} = this.state;
    const filtredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return(
      <div className="App">
      <h1> Monster Rolodex </h1>
      <SearchBox
      placeholder='search monsters' 
      handleChange={this.handleChange}
      />
      <CardList monsters = {filtredMonsters}>
      
      </CardList>
     
    </div>
    );
  }

}


export default App;
