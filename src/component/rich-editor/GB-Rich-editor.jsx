import React, { Component, PropTypes } from 'react'
import styles from './GB-Rich-editor.css'
import cns from 'classnames/bind'
import fa from 'font-awesome/css/font-awesome.css'
import GBpop from '../pop/GB-pop.jsx'
import GBInputtext from '../input-text/GB-Input-text.jsx'
import GBbutton from '../button/GB-button.jsx'
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
      active: '',
      isBold: false,
      isItalic: false,
      isUnderline: false,
      align: 'left',
      dent: '',
      list: '',
      imgPopStatu: false,
      range: new Object(),
      imgSrc: '',
      imgHei: '',
      imgWid: '',
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
      isBold: !this.state.isBold
    })
    document.execCommand('bold')
  }

  handleItalic() {
    this.setState({
      isItalic: !this.state.isItalic
    })
    document.execCommand('italic');
  }

  handleUnderline() {
    this.setState({
      isUnderline: !this.state.isUnderline
    })
    document.execCommand('underline');
  }

  handleJustifyLeft() {
    this.setState({
      align: 'left'
    })
    document.execCommand('justifyLeft');
  }

  handleJustifyCenter() {
    this.setState({
      align: 'center'
    })
    document.execCommand('justifyCenter');
  }

  handleJustifyRight() {
    this.setState({
      align: 'right'
    })
    document.execCommand('justifyRight');
  }

  handleIndent() {
    this.setState({
      dent: 'indent'
    })
    document.execCommand('indent');
  }

  handleOutdent() {
    this.setState({
      dent: 'outdent'
    })
    document.execCommand('outdent');
  }

  handleInsertUnorderedList() {
    this.setState({
      list: 'list-ul'
    })
    document.execCommand('insertUnorderedList');
  }

  handleInsertOrderedList() {
    this.setState({
      list: 'list-ol'
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
    let sel = window.getSelection()
    let range = sel.getRangeAt(0)
    console.log(range)
    this.setState({
      active: 'image',
      range: range,
      imgPopStatu: true
    })
  }

  handleInsertVideo() {

    this.setState({
      active: 'play'
    })
    document.execCommand('insertHTML', true, '<div>vide</div>');
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
    document.execCommand('insertHTML', false, '<table></table>');
  }

  renderImgPop() {
    let {imgSrc, imgHei, imgWid} = this.state
    return(
      <GBpop statu={this.state.imgPopStatu} title="请输入图片信息">
        <div style={{textAlign: 'center'}}>
          <div style={{marginBottom: '10px'}}>请输入图片地址</div>
          <GBInputtext isRequired={true} onChange={(value) => this.setState({imgSrc: value})} />
          <div style={{marginBottom: '10px', marginTop: '10px'}}>请输入图片高度</div>
          <GBInputtext onChange={(value) => this.setState({imgHei: value})} />
          <div style={{marginBottom: '10px', marginTop: '10px'}}>请输入图片宽度</div>
          <GBInputtext onChange={(value) => this.setState({imgWid: value})} />
        </div>
        <div style={{textAlign: 'center'}}>
          <GBbutton size="small" style={{marginRight: '30px'}} text="确定" onClick={
            () => {
              this.setState({imgPopStatu: false})
              window.getSelection().addRange(this.state.range)
              console.log(this.state.range)
              document.execCommand('insertHTML', false, `<img src="${imgSrc}" width="${imgWid}" height="${imgHei}">`);
            }
          } />
          <GBbutton size="small" color="white" text="取消" onClick={() => this.setState({imgPopStatu: false})} />
        </div>
      </GBpop>
    )
  }



  render() {
    const {active, isBold, isItalic, isUnderline, align, dent, list} = this.state
    return(
      <div className={cx(styles.editorWrap)} ref="editor">
        <div className={cx(styles.editorTool)}>
          <button onClick={this.handleBold.bind(this)} className={cx({btnActive: isBold})}><i className={fab(fa['fa'], fa['fa-bold'])}></i></button>
          <button onClick={this.handleItalic.bind(this)} className={cx({btnActive: isItalic})}><i className={fab(fa['fa'], fa['fa-italic'])}></i></button>
          <button onClick={this.handleUnderline.bind(this)} className={cx({btnActive: isUnderline})}><i className={fab(fa['fa'], fa['fa-underline'])}></i></button>

          <button onClick={this.handleJustifyLeft.bind(this)} className={cx({btnActive: 'left' === align})}><i className={fab(fa['fa'], fa['fa-align-left'])}></i></button>
          <button onClick={this.handleJustifyCenter.bind(this)} className={cx({btnActive: 'center' === align})}><i className={fab(fa['fa'], fa['fa-align-center'])}></i></button>
          <button onClick={this.handleJustifyRight.bind(this)} className={cx({btnActive: 'right' === align})}><i className={fab(fa['fa'], fa['fa-align-right'])}></i></button>
          <button onClick={this.handleIndent.bind(this)} className={cx({btnActive: 'indent' === dent})}><i className={fab(fa['fa'], fa['fa-indent'])}></i></button>
          <button onClick={this.handleOutdent.bind(this)} className={cx({btnActive: 'outdent' === dent})}><i className={fab(fa['fa'], fa['fa-outdent'])}></i></button>
          <button onClick={this.handleInsertUnorderedList.bind(this)} className={cx({btnActive: 'list-ul' === list})}><i className={fab(fa['fa'], fa['fa-list-ul'])}></i></button>
          <button onClick={this.handleInsertOrderedList.bind(this)} className={cx({btnActive: 'list-ol' === list})}><i className={fab(fa['fa'], fa['fa-list-ol'])}></i></button>

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

        {
          this.renderImgPop()
        }
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
