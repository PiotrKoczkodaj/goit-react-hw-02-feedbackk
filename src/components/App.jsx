import { Feedback } from "./Feedback/Feedback";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Component } from "react";
export class App extends Component{

  constructor() {
    super();
     this.state = {
        good: 0,
        neutral: 0,
        bad: 0
  };
  }
 
  render() {
    
  const counterForGood = () => {
        this.setState((state, props) => {
            return { good: state.good + props.step }
        })
    };
  const  counterForNeutral = () => {
        this.setState((state, props) => {
            return { neutral: state.neutral + props.step }
        })
    };
   const counterForBad = () => {
        this.setState((state, props) => {
          
            return { bad: state.bad + props.step }
        })
    };

return (
    
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Section title="Please leave feedback">
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={0} positivePercentage={0} />
        <FeedbackOptions options={counterForBad} onLeaveFeedback={0}/>
      </Section>
      {/* <Feedback step={1} /> */}
      
      
    </div>
  );

  }
  
};
