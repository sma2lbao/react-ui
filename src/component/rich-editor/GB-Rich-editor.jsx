import React, { Component, PropTypes } from 'react'
import styles from './GB-Rich-editor.css'
import cns from 'classnames/bind'
import fa from 'font-awesome/css/font-awesome.css'
let cx = cns.bind(styles)
let fab = cns.bind(fa)

export default class GB_Rich_editor extends Component {
  static defaultProps = {

  }

  static propsTypes = {

  }

  constructor(props) {
    super(props)
    this.state = {
      disableRightMenu: false,
      active: ''
    }
  }

  hideSysMenu() {
    this.setState({
      disableRightMenu: true
    })
  }

  showSysMenu() {
    this.setState({
      disableRightMenu: false
    })
  }

  handleBold() {
    this.setState({
      active: 'bold'
    })
    document.execCommand('bold')
  }

  handleItalic() {
    this.setState({
      active: 'italic'
    })
    document.execCommand('italic');
  }

  handleUnderline() {
    this.setState({
      active: 'underline'
    })
    document.execCommand('underline');
  }

  handleJustifyLeft() {
    this.setState({
      active: 'align-left'
    })
    document.execCommand('justifyLeft');
  }

  handleJustifyCenter() {
    this.setState({
      active: 'align-center'
    })
    document.execCommand('justifyCenter');
  }

  handleJustifyRight() {
    this.setState({
      active: 'align-right'
    })
    document.execCommand('justifyRight');
  }

  handleIndent() {
    this.setState({
      active: 'indent'
    })
    document.execCommand('indent');
  }

  handleOutdent() {
    this.setState({
      active: 'outdent'
    })
    document.execCommand('outdent');
  }

  handleInsertUnorderedList() {
    this.setState({
      active: 'list-ul'
    })
    document.execCommand('insertUnorderedList');
  }

  handleInsertOrderedList() {
    this.setState({
      active: 'list-ol'
    })
    document.execCommand('insertOrderedList');
  }

  handleCreateLink() {
    this.setState({
      active: 'link'
    })
    document.execCommand('createLink', false, 'dfsdf');
  }

  handleInsertImage() {
    this.setState({
      active: 'image'
    })
    document.execCommand('insertImage', false, 'dfsdf');
  }

  handleInsertVideo() {
    this.setState({
      active: 'play'
    })
    document.execCommand('insertHTML', false, '<div>vide</div>');
  }

  handleInsertQuoto() {
    this.setState({
      active: 'quote-left'
    })
    document.execCommand('insertHTML', false, '<div>quote</div>');
  }

  handleInsertCode() {
    this.setState({
      active: 'code'
    })
    document.execCommand('insertHTML', false, '<div>code</div>');
  }

  handleInsertTable() {
    this.setState({
      active: 'table'
    })
    document.execCommand('insertHTML', false, '<br/><p>table</p>');
  }

  render() {
    const {active} = this.state
    return(
      <div className={cx(styles.editorWrap)} ref="editor">
        <div className={cx(styles.editorTool)}>
          <button onClick={this.handleBold.bind(this)} className={cx({btnActive: 'bold' === active})}><i className={fab(fa['fa'], fa['fa-bold'])}></i></button>
          <button onClick={this.handleItalic.bind(this)} className={cx({btnActive: 'italic' === active})}><i className={fab(fa['fa'], fa['fa-italic'])}></i></button>
          <button onClick={this.handleUnderline.bind(this)} className={cx({btnActive: 'underline' === active})}><i className={fab(fa['fa'], fa['fa-underline'])}></i></button>

          <button onClick={this.handleJustifyLeft.bind(this)} className={cx({btnActive: 'align-left' === active})}><i className={fab(fa['fa'], fa['fa-align-left'])}></i></button>
          <button onClick={this.handleJustifyCenter.bind(this)} className={cx({btnActive: 'align-center' === active})}><i className={fab(fa['fa'], fa['fa-align-center'])}></i></button>
          <button onClick={this.handleJustifyRight.bind(this)} className={cx({btnActive: 'align-right' === active})}><i className={fab(fa['fa'], fa['fa-align-right'])}></i></button>
          <button onClick={this.handleIndent.bind(this)} className={cx({btnActive: 'indent' === active})}><i className={fab(fa['fa'], fa['fa-indent'])}></i></button>
          <button onClick={this.handleOutdent.bind(this)} className={cx({btnActive: 'outdent' === active})}><i className={fab(fa['fa'], fa['fa-outdent'])}></i></button>
          <button onClick={this.handleInsertUnorderedList.bind(this)} className={cx({btnActive: 'list-ul' === active})}><i className={fab(fa['fa'], fa['fa-list-ul'])}></i></button>
          <button onClick={this.handleInsertOrderedList.bind(this)} className={cx({btnActive: 'list-ol' === active})}><i className={fab(fa['fa'], fa['fa-list-ol'])}></i></button>

          <button className={cx({btnActive: ' ' === active})}>Text Style</button>

          <button onClick={this.handleCreateLink.bind(this)} className={cx({btnActive: 'link' === active})}><i className={fab(fa['fa'], fa['fa-link'])}></i></button>
          <button onClick={this.handleInsertImage.bind(this)} className={cx({btnActive: 'image' === active})}><i className={fab(fa['fa'], fa['fa-image'])}></i></button>
          <button onClick={this.handleInsertVideo.bind(this)} className={cx({btnActive: 'play' === active})}><i className={fab(fa['fa'], fa['fa-play'])}></i></button>
          <button onClick={this.handleInsertQuoto.bind(this)} className={cx({btnActive: 'quote-left' === active})}><i className={fab(fa['fa'], fa['fa-quote-left'])}></i></button>
          <button onClick={this.handleInsertCode.bind(this)} className={cx({btnActive: 'code' === active})}><i className={fab(fa['fa'], fa['fa-code'])}></i></button>
          <button onClick={this.handleInsertTable.bind(this)} className={cx({btnActive: 'table' === active})}><i className={fab(fa['fa'], fa['fa-table'])}></i></button>
        </div>

        <div className={cx(styles.editorComt)} contentEditable="true" onMouseOver={this.hideSysMenu.bind(this)} onMouseOut={this.showSysMenu.bind(this)}>

        </div>
      </div>
    )
  }

  listennerBody() {
    document.getElementsByTagName('body')[0].addEventListener('contextmenu', (event) => {
      let targetDom = event.target
      let disableRightMenu = false
      targetDom === this.refs.editor ? disableRightMenu = true : disableRightMenu = false
      if (!disableRightMenu) {
        for(let dom of this.refs.editor.childNodes) {
          if(dom === targetDom) {
            disableRightMenu = true
            break
          }
        }
      }

      if(disableRightMenu) {
        event.returnValue = false
      }
      else {
        event.returnValue = true
      }
    })
  }

  componentDidMount() {
    this.listennerBody.bind(this)()
  }
}
