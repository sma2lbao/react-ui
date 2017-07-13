import React, { Component } from 'react'
import GBcarousel from './GB-carousel.jsx'

export default class GBcarouselHelp extends Component {
  render() {
    return (
      <div>
        <span>默认：</span>
        <GBcarousel />
        <hr />

        <span>imgs属性：(imgs=&#123;['http://img.taopic.com/uploads/allimg/140326/235113-1403260U22059.jpg', 'http://pic.qiantucdn.com/58pic/11/31/58/97p58PICV26.jpg', 'http://img1.3lian.com/2015/w7/85/d/21.jpg']&#125;)</span>
        <p>timeout属性：(timeout=&#123;1000&#125;)默认：3000</p>
        <p>onClick属性：(onClick=&#123;(value, index) => alert(value + '--' + index)&#125;)默认：3000</p>
        <GBcarousel onClick={(value, index) => alert(value + '--' + index)} imgs={['http://img.taopic.com/uploads/allimg/140326/235113-1403260U22059.jpg', 'http://pic.qiantucdn.com/58pic/11/31/58/97p58PICV26.jpg', 'http://img1.3lian.com/2015/w7/85/d/21.jpg']} />
        <hr />
      </div>
    )
  }
}
