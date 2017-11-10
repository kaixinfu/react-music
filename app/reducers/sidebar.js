const initialState = {
  menus: [],
  _menus: [{
    _key: 'fns',
    children: [{
      _key: 'System',
      title: '系统管理',
      icon: 'appstore-o',
      children: [{
        _key: 'User',
        title: '用户管理',
        to: 'users/list'
      }, {
        _key: 'Role',
        title: '角色管理',
        to: 'roles/list'
      }]
    }, {
      _key: 'Music',
      title: '曲库管理',
      icon: 'database',
      children: [{
        _key: 'Artist',
        title: '艺人管理',
        to: 'artists/list'
      }, {
        _key: 'Album',
        title: '专辑管理',
        to: 'albums/list'
      }, {
        _key: 'Track',
        title: '歌曲管理',
        to: 'tracks/list'
      }]
    }]
  }]
}
export default function (state = initialState, action) {
  switch (action.type) {
    default: return state
  }
}
