import React, { Component } from 'react'
import GBMultibutton from './GB-Multi-option.jsx'

export default class GBmsg extends Component {
  render() {
    return (
      <div>
        <span>默认：</span>
        <GBMultibutton />
        <hr />

        <span>lst属性：(lst=&#123;['按钮一', '按钮二', '按钮三']&#125;)</span>
        <GBMultibutton lst={['按钮一', '按钮二', '按钮三']} />
        <hr />

        <span>active属性：( active=&#123;2&#125; lst=&#123;['按钮一', '按钮二', '按钮三']&#125;)</span>
        <GBMultibutton active={2} lst={['按钮一', '按钮二', '按钮三']} />
        <hr />

        <span>onChange属性：(  onChange=&#123;(text, value) => alert(text + "-" + value)&#125; lst=&#123;['按钮一', '按钮二', '按钮三']&#125;)</span>
        <GBMultibutton onChange={(text, value) => alert(text + "-" + value)} lst={['按钮一', '按钮二', '按钮三']} />
        <hr />
      </div>
    )
  }
}
