import React, { Component, PropTypes } from 'react';

export default class FilterSite extends Component {
  static propTypes = {
    searchTerm: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {
    const {searchTerm, actions} = this.props;

    return (
      <form>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="search"
            placeholder="Filter..."
            value={searchTerm}
            onChange={e => actions.searchTermChanged(e.target.value)} />
        </div>
      </form>
    );
  }
}
