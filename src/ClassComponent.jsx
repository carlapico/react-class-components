import React, { Component } from "react";

class ClassComponent extends Component {
    // props
    // setting state
    constructor(props){
        super(props) 

        this.state = {
            count: props.count,
            coffee: []
            // color: props.color,
        }
    }
    //useEffect
    componentDidMount(){ // loading coffees from API
        console.log('component did mount') //showcasing this happening
        let url = 'https://api.sampleapis.com/coffee/hot'
        fetch(url)
        .then(res => res.json())
        .then(data =>
            this.setState({
                count: this.state.count,
                coffee: data
                })
            )
    }
    
    //returning
    render() {
        return (
            <>
                <h1>This is a ClassComponent {this.state.count}</h1>
                 <button onClick={ () => { 
                    this.setState({ 
                        //updated the count + 1
                        count: this.state.count + 1,
                        coffee: this.state.coffee
                    })
                 }}>Add One</button>
                 <> 
                    {/* mapping through coffee */}
                    {this.state.coffee.map(coffee => 
                            <h1 key={coffee.id}>{coffee.title}</h1>

                        )}
                 </>
            </>
        ) 
    }
}

export default ClassComponent