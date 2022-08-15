import React, { Component } from "react";

class ClassComponent extends Component {
    constructor(props){
        super(props) 

        this.state = {
            count: props.count,
            // color: props.color,
        }
    }

    render() {
        return (
            <>
                <h1>This is a ClassComponent {this.state.count}</h1>
                 <button onClick={ ( ) => { 
                    this.setState( { count: this.state.count + 1 } )
                 }}>Add One</button>
            </>
        ) 
    }
}

export default ClassComponent