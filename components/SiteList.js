import React, { Component, PropTypes } from 'react';
import SiteItem from './SiteItem';

export default class SiteList extends Component {
  static propTypes = {
    site: PropTypes.array.isRequired,
    clickedSite: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {
    const {site, clickedSite, actions} = this.props;

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Stage</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {site.map(siteObject =>
            <SiteItem
              key={siteObject.name}
              site={siteObject}
              clicked={clickedSite.indexOf(siteObject.name) > -1}
              actions={actions} />
          )}
        </tbody>
      </table>
    );
  }
}
