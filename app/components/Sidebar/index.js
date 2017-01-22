// @flow
import React, { Component } from 'react';
import styles from './Sidebar.css';
import { Link } from 'react-router';

var ReactSidebar = require('react-sidebar').default;
var menuItems = {
  explore: {
    label: 'Explore',
    links: [
      { label:'Popular', icon: '', uri: '/populars' },
      { label:'Staffpicks', icon: '', uri: '/staffpicks' },
      { label:'Users', icon: '', uri: '/users' },
      { label:'Collections', icon: '', uri: '/collections' },
    ]
  },
  features: {
    label: 'Features',
    links: [
      { label:'Settings', icon: '', uri: '/settings' },
      { label:'Uploader', icon: '', uri: '/upload' },
      { label:'Texture Watcher', icon: '', uri: '/texture-watcher' },
    ]
  }
}

export default class Sidebar extends Component {

  renderSection( section ) {
    let links = section.links.map((link) => this.renderLink(link));
    return <div className={styles.sectionContainer} key={section.label}><p className={ styles.section }>{ section.label }</p><div>{ links }</div></div>
  }

  renderLink( link ) {
    return <p className={styles.linkLabel} key={link.label}><Link className={ styles.link } to={ link.uri }>{ link.label }</Link></p>
  }

  renderContent() {
    return (
      <div>
        { Object.keys(menuItems).map((key) => this.renderSection(menuItems[key]) ) }
      </div>
    );
  }

  render() {
    return (
      <ReactSidebar sidebar={ this.renderContent() }
                sidebarClassName={ styles.container }
               open={ this.props.open }
               onSetOpen={ this.props.onSidebarOpen }>
         { this.props.children }
      </ReactSidebar>
    );
  }

}
