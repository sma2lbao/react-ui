import React, { Component } from 'react'
import GBProdbutton from './GB-Prod-button.jsx'

export default class GBProdbuttonHelp extends Component {
  render() {
    return (
      <div>
        <span>默认：</span>
        <GBProdbutton />
        <hr />

        <span>text属性：(text="Prod按钮")</span>
        <GBProdbutton text="Prod按钮" />
        <hr />

        <span>hasIcon属性：(hasIcon=&#123;true&#125; text="按钮")</span>
        <GBProdbutton hasIcon={true} text="按钮" />
        <hr />

        <span>color属性：(color="purple")</span>
        <GBProdbutton color="purple" text="Prod按钮" />
        <div>可选值：'green', 'purple', 'blue', 'red'（不适用有图标按钮）</div>
        <hr />

        <span>disabled属性：(disabled=&#123;true&#125; text="按钮")</span>
        <GBProdbutton disabled={true} text="按钮" />
        <hr />

        <span>icon属性：(hasIcon=&#123;true&#125; icon="tstIcon")</span>
        <GBProdbutton hasIcon={true} icon="tstIcon" text="按钮" />
        <div>tstIcon为传入的icon的class名</div>
        <hr />
      </div>
    )
  }
}
