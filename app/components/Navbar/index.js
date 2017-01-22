// @flow
import React, { Component } from 'react';
import styles from './Navbar.css';
import FontAwesome from 'react-fontawesome';
import Searchbar from '../Searchbar';
import AuthButton from '../AuthButton';


export default class Navbar extends Component {

  props: {
    toggleSidebar: () => void,
  }

  renderSidebarButton() {
      const { toggleSidebar } = this.props;
      return(
        <button className={ styles.sidebarButton } onClick={ toggleSidebar }>
          <FontAwesome
            name='bars'
            className={ styles.sidebarButtonLogo }
          />
        </button>
      );
  }

  renderLogo() {
    return (<img className={ styles.logo } src={'logo.png'} />);
  }

  render() {

    let sidebarButton = this.renderSidebarButton();
    let authButton = ( <AuthButton /> );
    let logo = this.renderLogo();
    let searchBar = ( <Searchbar /> );

    return (
      <div className={ styles.container }>
        { sidebarButton }
        { logo }
        { searchBar }
        { authButton }
      </div>
    );
  }

}
