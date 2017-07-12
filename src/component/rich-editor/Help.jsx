import React, { Component } from 'react'
import RichEidtor from './GB-Rich-editor.jsx'

export default class RichEditorHelp extends Component{
  render() {
    return (
      <div>
        <span>onChange属性：(onChange=&#123;(html) => console.log(html)&#125;)</span>
        <RichEidtor onChange={(html) => console.log(html)} />
      </div>
    )
  }
}
