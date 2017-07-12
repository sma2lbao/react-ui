import React, { Component } from 'react'
import GBDropdownbuttou from './GB-Dropdown-button.jsx'

export default class GBDropdownbuttonHelp extends Component {
  render() {
    return (
      <div>
        <span>默认：</span><GBDropdownbuttou />
        <hr />

        <span>text属性：(text="下拉")</span>
        <GBDropdownbuttou text="下拉" />
        <hr />

        <span>arry属性：( text="下拉" arry=&#123;['选项一', '选项二']&#125;)</span>
        <GBDropdownbuttou text="下拉" arry={['选项一', '选项二']} />
        <hr />

        <span>disabled属性：(disabled=&#123;true&#125; text="下拉" arry=&#123;['选项一', '选项二']&#125;)</span>
        <GBDropdownbuttou disabled={true} text="下拉" arry={['选项一', '选项二']} />
        <hr />

        <span>color属性：(color="blue" text="下拉" arry=&#123;['选项一', '选项二']&#125;)</span>
        <GBDropdownbuttou color="blue" text="下拉" arry={['选项一', '选项二']} />
        <div>可选值：'green', 'purple', 'blue', 'red'</div>
        <hr />

        <span>onClick属性：( onClick=&#123;(text) => alert(text)&#125; text="下拉" arry=&#123;['选项一', '选项二']&#125;)</span>
        <GBDropdownbuttou onClick={(text) => alert(text)} text="下拉" arry={['选项一', '选项二']} />
        <hr />
      </div>
    )
  }
}
