import './App.css';
import React, { Component } from 'react';
import RecipeDisplay from './RecipeDisplay.js';
import RecipeList from './RecipeList.js';
import { createClient } from 'contentful';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      title: "", 
      photo: null, 
      description: "", 
      tags: null, // []
      chef: "",
      id: null,
      recipesObjById : [],
      recipeData: []
    };
    this.client = createClient({
      space: 'kk2bw5ojx476',
      accessToken: '7ac531648a1b5e1dab6c18b0979f822a5aad0fe5f1109829b8a197eb2be4b84c'
    })
  }
  getDataFromContentful = () => {
    this.client.getEntries({content_type:'recipe'})
    .then((response) => 
      this.setState(
        { recipeData: response.items,
          title: response.items[3].fields.title,
          photo: response.items[3].fields.photo.fields.file.url,
          description: response.items[3].fields.description,
          // // tags: [ response.items[3].fields.tags[0].fields.name, response.items[3].fields.tags[1].fields.name ],
          chef: response.items[3].fields.chef.fields.name
        })
      
    )
    .catch(console.error)
  }

  componentDidMount() {
    this.getDataFromContentful();
  }
  handleClick = (id) => {
    console.log(id, 'this needs to update the state with the display info')
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <br/>
          <h1 className="header">Recipe List App</h1>

          <br/>
          <div className="container">
            <RecipeDisplay 
              title={this.state.title}
              photo={this.state.photo}
              description={this.state.description}
              tags={this.state.tags}
              chef={this.state.chef}
              state={this.state}
            />
            <RecipeList 
              title={this.state.title}
              photo={this.state.photo}
              handleClick={this.handleClick}
              recipeData={this.state.recipeData}
            />
          </div>
          
          
          
        </header>
      </div>
    );
  }
}



export default App;
