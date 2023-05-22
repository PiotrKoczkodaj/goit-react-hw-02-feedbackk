import React, { Component } from "react";

export class FeedbackOptions extends Component{
    

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
        
        const { options, step } = this.props;
       
    

       
        return (
            
            <div>
                <button onClick={this.counterForGood}>good</button>
                <button>neutral</button>
                <button  >bad</button>
            </div>
                
    
)

}

}