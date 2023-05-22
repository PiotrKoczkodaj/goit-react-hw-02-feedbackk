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
 
   countTotalFeedback = () => {
        return this.state.good + this.state.bad + this.state.neutral
        };
  
   countPositiveFeedbackPercentage = () => {
    const total = this.state.good + this.state.bad + this.state.neutral;
    const percentage = this.state.good * 100 / total;
    const number = Math.round(percentage) + "%";
    if (number === 'NaN%') return 0
    return number
    }
  
  render() {
  
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
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
      <FeedbackOptions options={this.state} step={1} />
      </Section>
      {/* <Feedback step={1} /> */}
      
      
    </div>
  );

  }
  
};
