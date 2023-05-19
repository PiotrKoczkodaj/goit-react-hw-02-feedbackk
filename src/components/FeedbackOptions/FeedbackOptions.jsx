import React, { Component } from "react";

export class FeedbackOptions extends Component{

    render() {
    const {counterForBad} = this.props
        return (
            
            <div>
                <button>good</button>
                <button>neutral</button>
                <button onClick={counterForBad}>bad</button>
            </div>
                
    
)

}

}