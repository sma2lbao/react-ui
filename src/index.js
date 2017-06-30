import React, { Compoent } from 'react'
import ReactDOM from 'react-dom'
// import App from './App.jsx'
// import App from '@/Component/product-button/GB-Prod-button.jsx'
// import App from './component/button/GB-button.jsx'
import App from './component/dropdown-button/GB-Dropdown-button.jsx'
// import App from './component/input-select/GB-select.jsx'
// import Option from './component/input-select/GB-option.jsx'

ReactDOM.render(<App
  color="blue"
  text="Hello World"
  arry={['otption1', 'otption1']}
  disabled={true}
  onClick={() => console.log('click')}
/>,
 document.getElementById('root'));
