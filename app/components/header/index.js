import React from 'react';
import './header.less';

const Hello = React.createClass({
  render() {
    return (
      <div className='components-header row'>
        <img src="/static/images/logo.png" width="40" className="-col-auto" />
        <h1 className="caption">react-music</h1>
      </div>
    )
  }
})

export default Hello
