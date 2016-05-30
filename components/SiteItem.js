import React, { Component, PropTypes } from 'react';

export default class SiteItem extends Component {
  static propTypes = {
    site: PropTypes.object.isRequired,
    clicked: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {
    const {site, clicked, actions} = this.props;

    return (
      <tr className={clicked ? 'success' : ''}>
        <td>{site.name}</td>
        <td>{site.type}</td>
        <td>{site.stage}</td>
        <td>{site.species}</td>
        <td>
          {clicked ?
            'Clicked!' :
            <button
              type="button"
              onClick={() => actions.markClicked(site.name)}
              className="btn btn-primary">
              Click
            </button>
          }
        </td>

      </tr>
    );
  }
}
