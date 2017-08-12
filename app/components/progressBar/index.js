import React, {Component} from 'react';
import './index.less';

export default class ProgressBar extends Component {
  constructor() {
    super()
    this.changeProgress = this.changeProgress.bind(this)
  }
  changeProgress(e) {
    const progressBarDiv = this.refs.progressBarDiv
    // 鼠标的位置 - 元素距离可是窗口的距离 / 元素的宽度
    const progress = (e.clientX - progressBarDiv.getBoundingClientRect().left) / progressBarDiv.clientWidth
    this.props.onChangeProgress && this.props.onChangeProgress(progress)
  }
  render() {
    return (
      <div ref="progressBarDiv" className='components-progress' onClick={this.changeProgress}>
        <div className="progress" style={{width: `${this.props.progress}%`, background: this.props.backColor}}></div>
      </div>
    )
  }
}
