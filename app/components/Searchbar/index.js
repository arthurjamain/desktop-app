// @flow
import React, { Component } from 'react';
import styles from './Searchbar.css';
import FontAwesome from 'react-fontawesome';


export default class Searchbar extends Component {

  render() {
    return (
      <div className={styles.container}>
        <input className={styles.field} placeholder="Search" type="text" />
      </div>
    );
  }

}
