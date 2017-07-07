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
      linkPopStatu: false,
      link: '',
      linkText: '',
      tablePopStatu: false,
      rows: 0,
      cols: 0,
      videoPopStatu: false,
      videoSrc: '',
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
    let sel = window.getSelection()
    let range = sel.getRangeAt(0)
    this.setState({
      active: 'link',
      range: range,
      linkPopStatu: true
    })
    // document.execCommand('createLink', false, 'dfsdf');
  }

  handleInsertImage() {
    let sel = window.getSelection()
    let range = sel.getRangeAt(0) ? sel.getRangeAt(0) : new Object()
    this.setState({
      active: 'image',
      range: range,
      imgPopStatu: true
    })
  }

  handleInsertVideo() {
    let sel = window.getSelection()
    let range = sel.getRangeAt(0) ? sel.getRangeAt(0) : new Object()
    this.setState({
      active: 'play',
      range: range,
      videoPopStatu: true
    })
  }

  handleInsertQuoto() {
    this.setState({
      active: 'quote-left'
    })
    document.execCommand('insertHTML', false, `<div style="background-color: #e5edf0;padding: 10px;border-left: 5px solid #645ebe;min-height: 1.5em;color: #29324a;font-size: 12px;"></div><br>`);

  }

  handleInsertCode() {
    this.setState({
      active: 'code'
    })
    document.execCommand('insertHTML', false, '<div style="padding: 10px;min-height: 1.5em;color: #fff;background-color: #29324a;"></div></br>');
  }

  handleInsertTable() {
    let sel = window.getSelection()
    let range = sel.getRangeAt(0) ? sel.getRangeAt(0) : new Object()
    this.setState({
      active: 'table',
      range: range,
      tablePopStatu: true
    })
    // document.execCommand('insertHTML', false, '<table></table>');
  }

  handleColor(color) {
    let sel = window.getSelection()
    let range = sel.getRangeAt(0) ? sel.getRangeAt(0) : new Object()
    // if(!range.collapsed) {
      // document.execCommand('insertHTML', false, `<span style="color: ${color}">${range.toString()}</span>`)
      document.execCommand('foreColor', false, color)
    // }
  }

  handleFontSize(size) {
    let sel = window.getSelection()
    let range = sel.getRangeAt(0) ? sel.getRangeAt(0) : new Object()
    document.execCommand('fontSize', false, size)
    let doms = document.getElementsByTagName('font')
    for (let i = 0; i < doms.length; i++) {
      if(doms[i].size) {
        let size = parseInt(doms[i].size)
        switch (size) {
          case 7:
            doms[i].size = ''
            doms[i].style.fontSize = '50px'
            break;
          case 6:
            doms[i].size = ''
            doms[i].style.fontSize = '46px'
            break;
          case 5:
            doms[i].size = ''
            doms[i].style.fontSize = '38px'
            break;
          case 4:
            doms[i].size = ''
            doms[i].style.fontSize = '22px'
            break;
          case 3:
            doms[i].size = ''
            doms[i].style.fontSize = '18px'
            break;
          case 2:
            doms[i].size = ''
            doms[i].style.fontSize = '15px'
            break;
          case 1:
            doms[i].size = ''
            doms[i].style.fontSize = '13px'
            break;
          default:
            doms[i].size = ''
            doms[i].style.fontSize = '13px'
        }
      }
    }
  }

  renderImgPop() {
    let {imgSrc, imgHei, imgWid} = this.state
    return(
      <GBpop statu={this.state.imgPopStatu} title="输入图片信息">
        <div style={{textAlign: 'center'}}>
          <div style={{marginBottom: '10px'}}>请输入图片地址</div>
          <GBInputtext isRequired={true} value={imgSrc} onChange={(value) => this.setState({imgSrc: value})} />
          <div style={{marginBottom: '10px', marginTop: '10px'}}>请输入图片高度</div>
          <GBInputtext value={imgHei} onChange={(value) => this.setState({imgHei: value})} />
          <div style={{marginBottom: '10px', marginTop: '10px'}}>请输入图片宽度</div>
          <GBInputtext value={imgWid} onChange={(value) => this.setState({imgWid: value})} />
        </div>
        <div style={{textAlign: 'center'}}>
          <GBbutton size="small" style={{marginRight: '30px'}} text="确定" onClick={
            () => {
              this.setState({imgPopStatu: false})
              window.getSelection().addRange(this.state.range)
              document.execCommand('insertHTML', false, `<img src="${imgSrc}" width="${imgWid}" height="${imgHei}">`);
            }
          } />
          <GBbutton size="small" color="white" text="取消" onClick={() => this.setState({imgPopStatu: false})} />
        </div>
      </GBpop>
    )
  }

  renderLinkPop() {
    let {linkPopStatu, link, linkText} = this.state
    return (
      <GBpop statu={linkPopStatu} title="输入链接信息">
        <div style={{textAlign: 'center'}}>
          <div style={{marginBottom: '10px'}}>请输入链接地址</div>
          <GBInputtext isRequired={true} value={link} onChange={(value) => this.setState({link: value})} />
          <div style={{marginBottom: '10px', marginTop: '10px'}}>请输入链接文字</div>
          <GBInputtext value={linkText} onChange={(value) => this.setState({linkText: value})} />
        </div>
        <div style={{textAlign: 'center'}}>
          <GBbutton size="small" style={{marginRight: '30px'}} text="确定" onClick={
            () => {
              this.setState({linkPopStatu: false})
              window.getSelection().addRange(this.state.range)
              if(this.state.range.collapsed){
                this.setState({link: '', linkText: ''})
                document.execCommand('insertHTML', false, `<a href="${link}">${linkText}</a>`)
              }
              else {
                this.setState({link: '', linkText: ''})
                document.execCommand('createLink', false, `${link}`);
              }
            }
          } />
          <GBbutton size="small" color="white" text="取消" onClick={() => this.setState({linkPopStatu: false})} />
        </div>
      </GBpop>
    )
  }

  renderTablePop() {
    let {tablePopStatu, rows, cols} = this.state
    return (
      <GBpop statu={tablePopStatu} title="输入表格信息">
        <div style={{textAlign: 'center'}}>
          <div style={{marginBottom: '10px'}}>请输入表格行数</div>
          <GBInputtext isRequired={true} value={rows} onChange={(value) => this.setState({rows: value})} />
          <div style={{marginBottom: '10px', marginTop: '10px'}}>请输入表格列数</div>
          <GBInputtext isRequired={true} value={cols} onChange={(value) => this.setState({cols: value})} />
        </div>
        <div style={{textAlign: 'center'}}>
          <GBbutton size="small" style={{marginRight: '30px'}} text="确定" onClick={
            () => {
              this.setState({tablePopStatu: false})
              window.getSelection().addRange(this.state.range)
              let row = parseInt(this.state.rows)
              let col = parseInt(this.state.cols)
              let tableHtml = '<table><tbody>'
              for (let i = 0; i < row; i++) {
                tableHtml += '<tr>'
                for(let j = 0; j < col; j++) {
                  if(0 === j) {
                    tableHtml += '<td></td>'
                  }
                  else {
                    tableHtml += '<td></td>'
                  }
                }
                tableHtml += '</tr>'
              }
              tableHtml += '</tbody></table>'
              document.execCommand('insertHTML', false, tableHtml)
              this.setState({rows: 0, cols: 0})
            }
          } />
          <GBbutton size="small" color="white" text="取消" onClick={() => this.setState({tablePopStatu: false})} />
        </div>
      </GBpop>
    )
  }

  renderVideoPop() {
    let {videoPopStatu, videoSrc} = this.state
    return (
      <GBpop statu={videoPopStatu} title="输入视频信息">
        <div style={{textAlign: 'center'}}>
          <div style={{marginBottom: '10px'}}>请输入视频地址</div>
          <GBInputtext isRequired={true} value={videoSrc} onChange={(value) => this.setState({videoSrc: value})} />
        </div>
        <div style={{textAlign: 'center'}}>
          <GBbutton size="small" style={{marginRight: '30px'}} text="确定" onClick={
            () => {
              this.setState({videoPopStatu: false})
              window.getSelection().addRange(this.state.range)
              document.execCommand('insertHTML', true, `<video style="width: 50%;margin-left: 25%; border: 1px solid #ddd;" controls="controls" src="${videoSrc}">不支持该标签</video>`);
              this.setState({videoSrc: ''})
            }
          } />
          <GBbutton size="small" color="white" text="取消" onClick={() => this.setState({videoPopStatu: false})} />
        </div>
      </GBpop>
    )
  }

  handleMenuPop(event) {
    if(2 === event.button){
      
    }
  }


  render() {
    const {active, isBold, isItalic, isUnderline, align, dent, list} = this.state
    return(
      <div className={cx(styles.editorWrap)} ref="editor">
        <div className={cx(styles.editorTool)}>
          <button onClick={this.handleBold.bind(this)} className={cx(styles.toolBtn, {btnActive: isBold})}><i className={fab(fa['fa'], fa['fa-bold'])}></i></button>
          <button onClick={this.handleItalic.bind(this)} className={cx(styles.toolBtn, {btnActive: isItalic})}><i className={fab(fa['fa'], fa['fa-italic'])}></i></button>
          <button onClick={this.handleUnderline.bind(this)} className={cx(styles.toolBtn, {btnActive: isUnderline})}><i className={fab(fa['fa'], fa['fa-underline'])}></i></button>

          <button onClick={this.handleJustifyLeft.bind(this)} className={cx(styles.toolBtn, {btnActive: 'left' === align})}><i className={fab(fa['fa'], fa['fa-align-left'])}></i></button>
          <button onClick={this.handleJustifyCenter.bind(this)} className={cx(styles.toolBtn, {btnActive: 'center' === align})}><i className={fab(fa['fa'], fa['fa-align-center'])}></i></button>
          <button onClick={this.handleJustifyRight.bind(this)} className={cx(styles.toolBtn, {btnActive: 'right' === align})}><i className={fab(fa['fa'], fa['fa-align-right'])}></i></button>
          <button onClick={this.handleIndent.bind(this)} className={cx(styles.toolBtn, {btnActive: 'indent' === dent})}><i className={fab(fa['fa'], fa['fa-indent'])}></i></button>
          <button onClick={this.handleOutdent.bind(this)} className={cx(styles.toolBtn, {btnActive: 'outdent' === dent})}><i className={fab(fa['fa'], fa['fa-outdent'])}></i></button>
          <button onClick={this.handleInsertUnorderedList.bind(this)} className={cx(styles.toolBtn, {btnActive: 'list-ul' === list})}><i className={fab(fa['fa'], fa['fa-list-ul'])}></i></button>
          <button onClick={this.handleInsertOrderedList.bind(this)} className={cx(styles.toolBtn, {btnActive: 'list-ol' === list})}><i className={fab(fa['fa'], fa['fa-list-ol'])}></i></button>
          <button onClick={this.handleCreateLink.bind(this)} className={cx(styles.toolBtn, {btnActive: 'link' === active})}><i className={fab(fa['fa'], fa['fa-link'])}></i></button>
          <button onClick={this.handleInsertImage.bind(this)} className={cx(styles.toolBtn, {btnActive: 'image' === active})}><i className={fab(fa['fa'], fa['fa-image'])}></i></button>
          <button onClick={this.handleInsertVideo.bind(this)} className={cx(styles.toolBtn, {btnActive: 'play' === active})}><i className={fab(fa['fa'], fa['fa-play'])}></i></button>
          <button onClick={this.handleInsertQuoto.bind(this)} className={cx(styles.toolBtn, {btnActive: 'quote-left' === active})}><i className={fab(fa['fa'], fa['fa-quote-left'])}></i></button>
          <button onClick={this.handleInsertCode.bind(this)} className={cx(styles.toolBtn, {btnActive: 'code' === active})}><i className={fab(fa['fa'], fa['fa-code'])}></i></button>
          <button onClick={this.handleInsertTable.bind(this)} className={cx(styles.toolBtn, {btnActive: 'table' === active})}><i className={fab(fa['fa'], fa['fa-table'])}></i></button>
          <div className={styles.fontWrap}>
            <button className={styles.toolBtn}><i className={fab(fa['fa'], fa['fa-tint'])}></i></button>
            <ul className={styles.listWrap}>
              <li><button  style={{color: '#1abcb0'}} onClick={this.handleColor.bind(this, '#1abcb0')}><i className={fab(fa['fa'], fa['fa-font'])}></i></button></li>
              <li><button  style={{color: '#28b5f2'}} onClick={this.handleColor.bind(this, '#28b5f2')}><i className={fab(fa['fa'], fa['fa-font'])}></i></button></li>
              <li><button  style={{color: '#756ed5'}} onClick={this.handleColor.bind(this, '#756ed5')}><i className={fab(fa['fa'], fa['fa-font'])}></i></button></li>
              <li><button  style={{color: '#e10098'}} onClick={this.handleColor.bind(this, '#e10098')}><i className={fab(fa['fa'], fa['fa-font'])}></i></button></li>
              <li><button  style={{color: '#1d396b'}} onClick={this.handleColor.bind(this, '#1d396b')}><i className={fab(fa['fa'], fa['fa-font'])}></i></button></li>
              <li><button  style={{color: '#df88d9'}} onClick={this.handleColor.bind(this, '#df88d9')}><i className={fab(fa['fa'], fa['fa-font'])}></i></button></li>
              <li><button  style={{color: '#29324a'}} onClick={this.handleColor.bind(this, '#29324a')}><i className={fab(fa['fa'], fa['fa-font'])}></i></button></li>
            </ul>
          </div>
          <div className={styles.fontWrap}>
            <button className={styles.toolBtn}><i className={fab(fa['fa'], fa['fa-font'])}></i></button>
            <ul className={styles.listWrap}>
              <li><button onClick={this.handleFontSize.bind(this, '7')}>50px</button></li>
              <li><button onClick={this.handleFontSize.bind(this, '6')}>46px</button></li>
              <li><button onClick={this.handleFontSize.bind(this, '5')}>38px</button></li>
              <li><button onClick={this.handleFontSize.bind(this, '4')}>22px</button></li>
              <li><button onClick={this.handleFontSize.bind(this, '3')}>18px</button></li>
              <li><button onClick={this.handleFontSize.bind(this, '2')}>15px</button></li>
              <li><button onClick={this.handleFontSize.bind(this, '1')}>13px</button></li>
            </ul>
          </div>

        </div>

        <div ref="editorComt" style={{padding: '20px', color: '#29324a', fontSize: '12px'}} className={cx(styles.editorComt)} onClick={this.handleMenuPop.bind(this)} contentEditable="true" onMouseOver={this.hideSysMenu.bind(this)} onMouseOut={this.showSysMenu.bind(this)}>

        </div>

        {
          this.renderImgPop()
        }
        {
          this.renderLinkPop()
        }
        {
          this.renderTablePop()
        }
        {
          this.renderVideoPop()
        }
      </div>


    )
  }

  listennerBody() {
    document.getElementsByTagName('body')[0].addEventListener('contextmenu', (event) => {
      let targetDom = event.target
      let disableRightMenu = false
      console.log(this.refs.editor)
      targetDom === this.refs.editor ? disableRightMenu = true : disableRightMenu = false
      if (!disableRightMenu) {
        for(let dom of this.refs.editor.childNodes) {
          if(dom === targetDom) {
            disableRightMenu = true
            break
          }
        }
      }
      if (!disableRightMenu) {
        for(let dom of this.refs.editorComt.childNodes) {
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
