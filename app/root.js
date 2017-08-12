import React from 'react';
import Header from './components/header'
import ProgressBar from './components/progressBar'

const Root = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <ProgressBar progress={'1'} />
      </div>
    )
  }
})

export default Root
