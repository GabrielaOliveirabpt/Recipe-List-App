import React, { Component } from 'react';
class RecipeList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="cardContainer">                    
                        {this.props.recipeData.map(obj => {
                            return (
                                <div 
                                    className="card"
                                    key={obj.fields.calories}
                                    onClick={()=>this.props.handleClick(obj.sys.id)}
                                >
                                    <img 
                                        className="img" 
                                        key={obj.fields.photo.sys.id} 
                                        src={obj.fields.photo.fields.file.url} 
                                        alt="placeholder" 
                                        width="250" 
                                    />
                                    <p className="textCards" key={obj.sys.id}>{obj.fields.title}</p>
                                </div>
                            )
                        })}
                </div>
            </React.Fragment>
        )
    }
}

export default RecipeList;

