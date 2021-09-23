import React, { Component } from 'react';

class RecipeDisplay extends Component {

    render() {
        return (
            <React.Fragment>
                    <div className="displayDiv">
                        <img className="img" src={this.props.photo} alt="placeholder" 
                        />
                        <h2 className="textDisplay">{this.props.title}</h2>
                         {/* tags */}
                        <div className="tagsDisplayDiv">
                            <span className="tag">vegetarian</span>
                            <span className="tag">healthy</span>
                            <span className="tag">vegan</span>
                        </div>
                        <p className="textDisplay">{this.props.description}</p>
                        <p className="textDisplay">{this.props.chef}</p>
                       
                    </div>
                          
                  
                      


            </React.Fragment>
        )
    }
}

export default RecipeDisplay;

