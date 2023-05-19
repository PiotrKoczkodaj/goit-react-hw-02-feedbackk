import React, { Component } from "react";

export class Feedback extends Component {

    static defaultProps = {
        value: 0,
        step: 1,
}
   
    state = {
       good: 0,
  neutral: 0,
  bad: 0
    };

    counterForGood = () => {
        this.setState((state, props) => {
            return { good: state.good + props.step }
        })
    };
    counterForNeutral = () => {
        this.setState((state, props) => {
            return { neutral: state.neutral + props.step }
        })
    };
    counterForBad = () => {
        this.setState((state, props) => {
            return { bad: state.bad + props.step }
        })
    };
  
    render() {
        
 const countTotalFeedback = () => {
        return this.state.good + this.state.bad + this.state.neutral
        };
        
const countPositiveFeedbackPercentage = () => {
    const total = this.state.good + this.state.bad + this.state.neutral;
    const percentage = this.state.good * 100 / total;
    const number = Math.round(percentage) + "%";
    if (number === 'NaN%') return 0
    return number
 }       
       
        return (
            <div>
                <h2>Please leave feedback</h2>
                <button onClick={this.counterForGood}>Good</button>
                <button onClick={this.counterForNeutral}>Neutral</button>
                <button onClick={this.counterForBad}>Bad</button>
                <h3>Statistics</h3>
                <p>Good:{this.state.good}</p>
                <p>Neutral:{this.state.neutral }</p>
                <p>Bad:{this.state.bad}</p>
                <p>Total:{countTotalFeedback() }</p>
                <p>Percentage:{countPositiveFeedbackPercentage()}</p>
            </div>
        )
    }
}

