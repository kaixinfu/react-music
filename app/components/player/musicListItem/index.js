import React, {Component} from 'react';
import './index.less';

export default class MusicListItem extends Component {
  render() {
    const {
      item
    } = this.props
    return (
      <li className={`row components-listitem${this.props.focus ? ' focus' : ''}`}>
          <p><span className="bold">{item.title}</span>  -  {item.artist}</p>
          <p className="-col-auto delete"></p>
      </li>
    )
  }
}
