import React from 'react'
import {RouterContext, match, createRoutes} from 'react-router'

import AppRouter from './router'

class DataProvider extends React.Component {
  getChildContext() {
    return { 
    	data: this.props.data
    };
  }
  render() {
    return <RouterContext {...this.props}/>;
  }
}

DataProvider.propTypes = { 
  data: React.PropTypes.object
};

DataProvider.childContextTypes = { 
  data: React.PropTypes.object
};

export default DataProvider;