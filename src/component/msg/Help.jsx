import React, { Component } from 'react'
import GBmsg from './GB-msg.jsx'

export default class GBmsgHelp extends Component {
  render() {
    return (
      <div>
        <span>默认：</span>
        <GBmsg />
        <hr />

        <span>type属性：(type="hover")</span>
        <GBmsg type="hover" />
        <p>可选值：'alert', 'hover'</p>
        <hr />

        <span>title属性：(title="标题")</span>
        <GBmsg title="标题" />
        <hr />

        <span>text属性：(text="提示文本")</span>
        <GBmsg text="提示文本" />
        <hr />

        <span>arrow属性：(arrow="top")</span>
        <GBmsg arrow="top" type="hover" />
        <p>type为hover是有arrow属性。可选值：'left', 'right', 'top', 'bottom'</p>
        <hr />
      </div>
    )
  }
}
