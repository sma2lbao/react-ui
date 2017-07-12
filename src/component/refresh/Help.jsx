import React, { Component } from 'react'
import GBrefresh from './GB-refresh.jsx'

export default class RefreshHelp extends Component {
  render() {
    return (
      <div>
        <span>默认：</span>
        <GBrefresh />
        <hr />

        <span>playing属性：(playing=&#123;false&#125;)</span>
        <GBrefresh playing={false} />
        <hr />

        <span>bgColor属性：(bgColor="red")</span>
        <GBrefresh bgColor="red" />
        <hr />

        <span>color属性：(color="red")</span>
        <GBrefresh color="red" />
        <div>可选值：'red', 'purple', 'blue'</div>
        <hr />

        <span>radius属性：(radius=&#123;50&#125;)</span>
        <GBrefresh radius={50} />
        <hr />
      </div>
    )
  }
}
