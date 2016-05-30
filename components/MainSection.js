import React, { Component, PropTypes } from 'react';
import SiteList from './SiteList';
import FilterSite from './FilterSite';

export default class MainSection extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {
    const { data : { site, clickedSite, searchTerm }, actions } = this.props;

    return (
      <section className="">
        <div className="mdl-js-layout mdl-layout--fixed-header shift-content-down">
  <header className="mdl-layout__header">
    <div className="mdl-layout__header-row">
      
      <span className="mdl-layout-title">Site Tracker</span>
    </div>
    
  </header>
      </div>
      <h4>My Sites</h4>
        <FilterSite
          searchTerm={searchTerm}
          actions={actions} />

        <SiteList
          site={site}
          clickedSite={clickedSite}
          actions={actions} />

      </section>
    );
  }

}
