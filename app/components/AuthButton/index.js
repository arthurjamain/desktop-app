// @flow
import React, { Component } from 'react';
import styles from './AuthButton.css';
import FontAwesome from 'react-fontawesome';


export default class AuthButton extends Component {

  render() {
    return (
      <div className={styles.container}>
        <button className={ styles.button }>
          <FontAwesome
            name='user'
            className={ styles.logo }
          />
        </button>
      </div>
    );
  }

}
