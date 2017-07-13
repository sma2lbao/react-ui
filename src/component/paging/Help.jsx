import React, { Component } from 'react'
import GBpaging from './GB-paging.jsx'

export default class GBpagingHelp extends Component {
  render() {
    return (
      <div>
        {/* <span>默认：</span>
        <GBpaging />
        <hr /> */}


        <span>size属性：(size={1}) 每页显示条数</span>
        <span>total属性：(total={20}) 总条数</span>
        <span>current属性：(current={4}) 当前页</span>
        <span>onChange属性：(onChange=&#123;(value) => alert(value)&#125;)</span>
        <GBpaging onChange={(value) => alert(value)} size={1} total={20} current={4} />
        <hr />
      </div>
    )
  }
}
