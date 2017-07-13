import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Help extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/btn">按钮</Link></li>
          <li><Link to="/inputtext">输入框</Link></li>
          <li><Link to="/rich">富文本</Link></li>
          <li><Link to="/refresh">loading</Link></li>
          <li><Link to="/toggle">switch按钮</Link></li>
          <li><Link to="/radio">勾选</Link></li>
          <li><Link to="/prodbtn">生产按钮</Link></li>
          <li><Link to="/paging">分页</Link></li>
          <li><Link to="/multi">tab切换按钮</Link></li>
          <li><Link to="/msg">提示框</Link></li>
          <li><Link to="/inputsel">选择框</Link></li>
          <li><Link to="/carousel">轮播</Link></li>
        </ul>
        <p><a href="https://github.com/sma2lbao/react-ui">项目仓库</a></p>
      </div>
    )
  }
}
