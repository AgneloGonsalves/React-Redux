import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';
import MainSection from '../components/MainSection';
import * as SiteActions from '../actions/SiteActions';

export default class SiteApp extends Component {
  render() {
    return (
      <Connector select={state => ({ siteStore : state.site })}>
        {this.renderChild}
      </Connector>
    );
  }

  renderChild({ siteStore, dispatch }) {
    const actions = bindActionCreators(SiteActions, dispatch);
    return (
      <div>
        <MainSection data={siteStore} actions={actions} />
      </div>
    );
  }
}
