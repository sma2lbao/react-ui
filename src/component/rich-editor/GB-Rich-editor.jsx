import React, { Component, PropTypes } from 'react'
import styles from './GB-Rich-editor.css'
import cns from 'classnames/bind'
import fa from 'font-awesome/css/font-awesome.css'
let cx = cns.bind(styles)
let fac = cns.bind(fa)

export default class GB_Rich_editor extends Component {
  static defaultProps = {

  }

  static propsTypes = {

  }

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <div className={cx(styles.editorWrap)}>
        <div className={cx(styles.editorTool)}>
          <button><i className=""></i>B</button>
          <button>I</button>
          <button>U</button>

          <button>left</button>
          <button>center</button>
          <button>right</button>
          <button>shuji</button>
          <button>shengchu</button>
          <button>wuxu</button>
          <button>youxu</button>

          <button>Text Style</button>

          <button>lianjie</button>
          <button>图片</button>
          <button>视频</button>
          <button>yinyong</button>
          <button>daima</button>
          <button>biaoge</button>
        </div>
        <div className={cx(styles.editorComt)} contentEditable="true">

        </div>
      </div>
    )
  }
}
