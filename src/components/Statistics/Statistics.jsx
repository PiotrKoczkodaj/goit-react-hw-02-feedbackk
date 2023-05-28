import React, { Component } from 'react';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

export class Statistics extends Component {
  
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    const classMaker = () => {
      if (total === 0) {
        return styles.disabled;
      }
      return styles.active;
    };
    return (
      <div className={classMaker()}>
        <h3>Statistics</h3>
        <ul>
          <li>good:{good}</li>
          <li>neutral:{neutral}</li>
          <li>bad:{bad}</li>
          <li>Total:{total}</li>
          <li>percentage:{positivePercentage}</li>
        </ul>
      </div>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
}