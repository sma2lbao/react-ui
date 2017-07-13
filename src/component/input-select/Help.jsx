import React, { Component } from 'react'
import GBselect from './GB-select.jsx'
import GBoption from './GB-option.jsx'

export default class GBslectHelp extends Component{
  render() {
    return (
      <div>
        <span>默认：</span>
        <GBselect>
          <GBoption />
        </GBselect>
        <hr />

        <span>GBoption：text属性：(text="选项一") selected属性：(selected=&#123;true&#125;)</span>
        <span>GBselect：onChange属性：(onChange=&#123;(text) => alert(text)&#125;)</span>
        <GBselect onChange={(text) => alert(text)}>
          <GBoption text="选择一" selected={true} />
          <GBoption text="选择二" />
          <GBoption text="选择三" />
        </GBselect>
        <hr />
      </div>
    )
  }
}
