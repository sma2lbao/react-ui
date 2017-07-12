import React, { Component } from 'react'
import GBInput from './GB-Input-text.jsx'

export default class InputHelp extends Component {
  render() {
    return (
      <div>
        <span>默认：</span><GBInput />
        <hr />

        <span>isRequired属性：(isRequired=&#123;true&#125;)</span>
        <GBInput isRequired={true} />
        <hr />

        <span>value属性：(value="GBInput")</span>
        <GBInput value="GBInput" />
        <hr />

        <span>type属性：( type="password" value="GBInput")</span>
        <GBInput type="password" value="GBInput" />
        <hr />

        <span>warn属性：( warn=&#123;true&#125; value="GBInput")</span>
        <GBInput warn={true}  value="GBInput" />
        <hr />

        <span>warnMsg属性：( warnMsg="error" warn=&#123;true&#125; value="GBInput")</span>
        <GBInput warn={true} warnMsg="error" value="GBInput" />
        <hr />

        <span>onChange属性：( onChange=&#123;(value) => alert(value)&#125; value="GBInput")</span>
        <GBInput onChange={(value) => alert(value)} value="GBInput" />
        <hr />

        <span>vaild属性：( vaild=&#123;(value) => (&#123;needWarn: true, warnMsg: 'error'&#125;)&#125;  value="GBInput")</span>
        <GBInput vaild={(value) => ({needWarn: true, warnMsg: 'error'})}  value="GBInput" />
        <hr />
      </div>
    )
  }
}
