import React, { Component } from 'react'
import { HashRouter as Router, Route} from 'react-router-dom'

import ButtonHelp from './component/button/Help.jsx'
import DropdownHelp from './component/dropdown-button/Help.js'
import InputTextHelp from './component/input-text/Help.js'
import RichEditorHelp from './component/rich-editor/Help.jsx'
import RefreshHelp from './component/refresh/Help.jsx'
import ToggleHelp from './component/toggle-button/Help.jsx'
import RadioHelp from './component/radio/Help.jsx'
import ProdButtonHelp from './component/product-button/Help.jsx'
import PopHelp from './component/pop/Help.jsx'
import PaginHelp from './component/paging/Help.jsx'
import MultiHelp from './component/multi-option/Help.jsx'
import MsgHelp from './component/msg/Help.jsx'
import InputSelectHelp from './component/input-select/Help.jsx'
import CarouselHelp from './component/carousel/Help.jsx'
import Help from './Help.jsx'

const AppRouter = () => (
  <Router>
    <div>
      <Route path ="/" exact component={Help} />
      <Route path ="/btn" exact component={ButtonHelp} />
      <Route path ="/inputtext" exact component={InputTextHelp} />
      <Route path ="/rich" exact component={RichEditorHelp} />
      <Route path ="/refresh" exact component={RefreshHelp} />
      <Route path ="/toggle" exact component={ToggleHelp} />
      <Route path ="/radio" exact component={RadioHelp} />
      <Route path ="/prodbtn" exact component={ProdButtonHelp} />
      <Route path ="/paging" exact component={PaginHelp} />
      <Route path ="/multi" exact component={MultiHelp} />
      <Route path ="/msg" exact component={MsgHelp} />
      <Route path ="/inputsel" exact component={InputSelectHelp} />
      <Route path ="/carousel" exact component={CarouselHelp} />
    </div>
  </Router>
)
export default AppRouter
