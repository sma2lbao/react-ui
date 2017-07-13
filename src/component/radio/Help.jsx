import React, { Component } from 'react'
import GBradio from './GB-radio.jsx'

export default class GBradioHelp extends Component {
  render() {
    return(
      <div>
        <span>默认：</span>
        <GBradio />
        <hr />

        <span>type属性：(type="square")</span>
        <GBradio type="square" />
        <hr />

        <span>disabled属性：(disabled=&#123;true&#125;)</span>
        <GBradio disabled={true} />
        <hr />

        <span>default属性：(default=&#123;true&#125;)</span>
        <GBradio default={true} />
        <hr />

        <span>onChange属性：(onChange=&#123;(value) => alert(value)&#125;)</span>
        <GBradio onChange={(value) => alert(value)} />
        <hr />
      </div>
    )
  }
}
