import React, { Component } from 'react'
import GBpop from './GB-pop.jsx'

export default class GBpopHelp extends Component {
  render() {
    return (
      <div>
        <span>title属性：(title="弹窗")</span>
        <span>statu属性：(statu=&#123;true&#125;)默认true，当为false时关闭</span>
        <p>可添加其他子组件。如&lt;span&gt;我是子组件&lt;/span&gt;</p>
        <GBpop title="弹窗">
          <span>我是子组件件</span>
        </GBpop>
        <hr />
      </div>
    )
  }
}
