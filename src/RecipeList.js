import React, { Component } from 'react';

class RecipeList extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="cardContainer">
                    
                    <div className="card" onClick={this.props.handleClick}>
                        <img className="img" src="https://images.ctfassets.net/kk2bw5ojx476/3TJp6aDAcMw6yMiE82Oy0K/2a4cde3c1c7e374166dcce1e900cb3c1/SKU1503_Hero_102__1_-6add52eb4eec83f785974ddeac3316b7.jpg" alt="placeholder" 
                        width="250" 
                        />
                        <p className="textCards">Grilled Steak & Vegetables with Cilantro-Jalapeño Dressing</p>
                    </div>
                    <div className="card">
                        <img className="img" src="https://images.ctfassets.net/kk2bw5ojx476/48S44TRZN626y4Wy4CuOmA/9c0a510bc3d18dda9318c6bf49fac327/SKU1498_Hero_154__2_-adb6124909b48c69f869afecb78b6808-2.jpg" alt="placeholder" 
                        width="250" 
                        />
                        <p className="textCards">Tofu Saag Paneer with Buttery Toasted Pita</p>
                    </div>
                    <div className="card">
                        <img className="img" src="https://images.ctfassets.net/kk2bw5ojx476/61XHcqOBFYAYCGsKugoMYK/0009ec560684b37f7f7abadd66680179/SKU1240_hero-374f8cece3c71f5fcdc939039e00fb96.jpg" alt="placeholder" 
                        width="250" 
                        />
                        <p className="textCards">White Cheddar Grilled Cheese with Cherry Preserves & Basil</p>
                    </div>
                    <div className="card">
                        <img className="img" src="https://images.ctfassets.net/kk2bw5ojx476/5mFyTozvSoyE0Mqseoos86/fb88f4302cfd184492e548cde11a2555/SKU1479_Hero_077-71d8a07ff8e79abcb0e6c0ebf0f3b69c.jpg" alt="placeholder" 
                        width="250" 
                        />
                        <p className="textCards">Crispy Chicken and Rice with Peas & Arugula Salad</p>
                    </div>
                    
                    
                </div>

            </React.Fragment>
        )
    }
}

export default RecipeList;

