import { Feedback } from './Feedback/Feedback';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Component } from 'react';
export class App extends Component {
  static defaultProps = {
    step: 1,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  counterForGood = () => {
    this.setState((state, props) => {
      return { good: state.good + props.step };
    });
  };

  counterForNeutral = () => {
    this.setState((state, props) => {
      return { neutral: state.neutral + props.step };
    });
  };
  counterForBad = () => {
    this.setState((state, props) => {
      return { bad: state.bad + props.step };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.state.good + this.state.bad + this.state.neutral;
    const percentage = (this.state.good * 100) / total;
    const number = Math.round(percentage) + '%';
    if (number === 'NaN%') return 0;
    return number;
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
          <FeedbackOptions
            forGood={this.counterForGood}
            forBad={this.counterForBad}
            forNeutral={this.counterForNeutral}
          />
        </Section>
        {/* <Feedback step={1} /> */}
      </div>
    );
  }
}
