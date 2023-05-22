import React, { Component } from 'react';
import styles from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  render() {
    const { forGood, forBad, forNeutral } = this.props;

    return (
      <div >
        <button className={styles.buttons} onClick={forGood}>good</button>
        <button className={styles.buttons} onClick={forNeutral}>neutral</button>
        <button className={styles.buttons} onClick={forBad}>bad</button>
      </div>
    );
  }
}
