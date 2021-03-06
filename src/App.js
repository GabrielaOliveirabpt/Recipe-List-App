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
          tags: [ response.items[3].fields.tags[0].fields.name, response.items[3].fields.tags[1].fields.name ], // fields.tags[1].sys.id
          chef: response.items[3].fields.chef.fields.name
        })
      
    )
    .catch(console.error)
  }

  componentDidMount() {
    this.getDataFromContentful();
  }
  
  handleClick = async (id) => {
    let objNum = this.translateId(id)
    await this.client.getEntries({content_type:'recipe'})
    .then((response) => {
      let chefUpdated;
      if(objNum === 3 || objNum === 2) {
        chefUpdated = response.items[objNum].fields.chef.fields.name
      } else {
        chefUpdated = ''
      }
      let tagUpdated;
       if(objNum === 0) {
        tagUpdated = [ response.items[objNum].fields.tags[0].fields.name]
        console.log('objNum = 0', response.items[objNum].fields.tags[0].fields.name)

      } else if(objNum === 3) {
        tagUpdated = [ response.items[objNum].fields.tags[0].fields.name, response.items[objNum].fields.tags[1].fields.name ]
        console.log('objNum = 3', response.items[objNum].fields.tags[1].fields.name, response.items[objNum].fields.tags[1].fields.name)
      } else {
        tagUpdated = ''
      }
    this.setState(
      { 
        title: response.items[objNum].fields.title,
        photo: response.items[objNum].fields.photo.fields.file.url,
        description: response.items[objNum].fields.description,
        tags: tagUpdated, 
        chef: chefUpdated,
      })
    })
    .catch(console.error)
  }
  translateId = (id) => {
    if(id === '4dT8tcb6ukGSIg2YyuGEOm') {
      return 0
    }
    if(id === '5jy9hcMeEgQ4maKGqIOYW6') {
      return 1
    }
    if(id === '2E8bc3VcJmA8OgmQsageas') {
      return 2
    }
    if(id === '437eO3ORCME46i02SeCW46') {
      return 3
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <br/>
          <div>
            <h1 className="header">Recipe List App</h1>
            {/* <h3>About us</h3> */}
          </div>
          

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
