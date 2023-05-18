import React, { Component } from "react";

export class Feedback extends Component {

    static defaultProps = {
    value:1
}
   
    state = {
       good: 0,
  neutral: 0,
  bad: 0
    };
 
    
   
     

    render() {
        const { value } = this.props 
        
        return (
            <div>
                <h2>Please leave feedback</h2>
                <button onClick={console.log('f')}>Good</button>
                <button>Neutral</button>
                <button>Bad</button>
                <h3>Statistics</h3>
                <p>Good:{this.state.good}</p>
                <p>Neutral:{this.state.neutral }</p>
                <p>Bad:{this.state.bad }</p>
            </div>
        )
    }
}

