import React, { Component } from 'react';

class RecipeDisplay extends Component {

    render() {
        return (
            <React.Fragment>
                    <div className="displayDiv">
                        <img className="img" src={this.props.photo} alt="recipePhoto" 
                        />
                        <h2 className="textDisplay">{this.props.title}</h2>
                         {/* tags */}
                        <div className="tagsDisplayDiv">
                             {this.props.tags && (this.props.tags.map(tag => {
                                return (
                                    <span  key={"tag"+tag} className="tag">{tag}</span>
                                )
                                }))
                            } 
                        </div>
                        <p className="textDisplay">{this.props.description}</p>
                        {this.props.chef && (
                                <p className="textDisplay">{this.props.chef}</p>
                        )}
                       
                    </div>
                          
                  
                      


            </React.Fragment>
        )
    }
}

export default RecipeDisplay;

