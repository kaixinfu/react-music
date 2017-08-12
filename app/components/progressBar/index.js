import React from 'react';

const ProgressBar = React.createClass({
  render() {
    return (
      <div className='components-progress row'>
        {this.props.progress}s
      </div>
    )
  }
})

export default ProgressBar
