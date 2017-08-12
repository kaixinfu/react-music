import React, {Component} from 'react';
import './index.less';

export default class Header extends Component {
  render() {
    return (
      <div className='components-header row'>
        <img src="/static/images/logo.png" width="40" className="-col-auto" />
        <h1 className="caption">react-music</h1>
      </div>
    )
  }
}
