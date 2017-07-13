import React, { Component } from 'react'
import GBTogglebutton from './GB-Toggle-button.jsx'

export default class GBTogglebuttonHelp extends Component{
  render() {
    return (
      <div>
        <span>默认：</span>
        <GBTogglebutton />
        <hr />

        <span>value属性：(value=&#123;true&#125;)</span>
        <GBTogglebutton value={true} />
        <hr />

        <span>onChange属性：(onChange=&#123;(value) => alert(value)&#125;)</span>
        <GBTogglebutton onChange={(value) => alert(value)}  />
      </div>
    )
  }
}
