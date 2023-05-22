import React, { Component } from 'react';

export class FeedbackOptions extends Component {
    render() {
    const { forGood, forBad, forNeutral } = this.props;

    return (
      <div>
        <button onClick={forGood}>good</button>
        <button onClick={forNeutral}>neutral</button>
        <button onClick={forBad}>bad</button>
      </div>
    );
  }
}
