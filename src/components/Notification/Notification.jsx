import React, { Component } from 'react';
import styles from './Notification.module.css';

export class Notification extends Component {
  render() {
    const { message, total } = this.props;

    const classMaker = () => {
      if (total === 0) {
        return styles.active;
      }
      return styles.disabled;
    };
    return <h5 className={classMaker()}>{message}</h5>;
  }
}
