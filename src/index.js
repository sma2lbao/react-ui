import React, { Compoent } from 'react'
import ReactDOM from 'react-dom'
// import App from './App.jsx'
import GBProdbutton from '@/Component/product-button/GB-Prod-button.jsx'
import GBbutton from './component/button/GB-button.jsx'
import GBDropdownbutton from './component/dropdown-button/GB-Dropdown-button.jsx'
import GBselect from './component/input-select/GB-select.jsx'
import GBoption from './component/input-select/GB-option.jsx'
import GBradio from './component/radio/GB-radio.jsx'
import GBTogglebbutton from './component/toggle-button/GB-Toggle-button.jsx'


const App = () => {
  return (
    <div>
      <GBbutton style={{ width: '200px' }} />

      <GBProdbutton />

      <GBDropdownbutton text="下载" />

      <GBselect>
        <GBoption text="122" />
        <GBoption />
        <GBoption />
      </GBselect>

      <GBradio onChange={(value) => console.log(value)} default={true} type="circle" disabled={false}/>

      <GBTogglebbutton onChange={(value) => console.log(value)} default={true} />
    </div>
  )
}

ReactDOM.render(<App />,
 document.getElementById('root'));
