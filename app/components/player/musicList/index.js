import React, {Component} from 'react';
import {Link} from 'react-router'
import {connect} from 'react-redux'
import MusicListItem from '../musicListItem'
import '../index.less';

class MusicList extends Component {
  render() {
    const {
      musicList,
      currentMusicItem
    } = this.props
    console.log('this.props.item', this.props.items)
    return (
      <div>
      <div><Link to="/">{'<'}</Link></div>
      <ul>
        {
          musicList.map((item, key) => <MusicListItem focus={item === currentMusicItem} key={key} item={item} />)
        }
      </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  items: state,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(MusicList)
