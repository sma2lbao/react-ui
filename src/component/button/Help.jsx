import React, { Component } from 'react'
import GBbutton from './GB-button.jsx'

export default class ButtonHelp extends Component {
  render() {
    return (
      <div>
        <span>默认：</span><GBbutton />
        <hr />
        <span>text属性：(text="确定")</span><GBbutton text="确定" />
        <hr />
        <span>color属性：(color="purple")</span>
        <GBbutton color="purple" />
        <span>color属性：(color="white" text="确定")</span>
        <GBbutton color="white" text="确定" />
        <div>可选值：'green', 'purple', 'blue', 'red', 'white'</div>
        <hr />
        <span>size属性：(size="small")</span>
        <GBbutton size="small" />
        <div>可选值：'normal', 'small'</div>
        <hr />
        <span>disabled属性：(disabled=&#123;true&#125;)</span>
        <GBbutton disabled={true} />
        <hr />
        <span>onClick属性：(onClick=&#123;() => alert('click')&#125;)</span>
        <GBbutton onClick={() => alert('click')} />
      </div>
    )
  }
}
