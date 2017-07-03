import React, { Component } from 'react'
import GBProdbutton from '@/Component/product-button/GB-Prod-button.jsx'
import GBbutton from './component/button/GB-button.jsx'
import GBDropdownbutton from './component/dropdown-button/GB-Dropdown-button.jsx'
import GBselect from './component/input-select/GB-select.jsx'
import GBoption from './component/input-select/GB-option.jsx'
import GBradio from './component/radio/GB-radio.jsx'
import GBTogglebbutton from './component/toggle-button/GB-Toggle-button.jsx'
import GBmsg from './component/msg/GB-msg.jsx'
import GBInputText from './component/input-text/GB-Input-text.jsx'
import GBMultioption from './component/multi-option/GB-Multi-option.jsx'
import GBpop from './component/pop/GB-pop.jsx'
import GBpaging from './component/paging/GB-paging.jsx'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      statu: true
    }
  }
  render() {
    return(
      <div>
        <GBMultioption />
        <hr />
        <GBbutton disabled={true} text="hi" />
        <hr />
        <GBpaging onChange={(askPage) => console.log('请求页面：%d', askPage)} />
      </div>
    )
  }
}
