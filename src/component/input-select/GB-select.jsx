import React, { Component, PropTypes } from 'react'
import styles from './GB-select.css'
import cns from 'classnames/bind'
let cx = cns.bind(styles)

export default class GB_select extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  static defaultProps = {
  }

  static propTypes = {
    text: PropTypes.string,
    getValue: PropTypes.func
  }

  handleChildClick(event) {
    if(this.props.onChange) {
      this.props.onChange(event.target.innerText)
    }
    this.refs.select.innerText = event.target.innerText
    // this.props.text = event.target.innerText
    // 关闭选项
    this.refs.optEl.style.display = 'none'
    if('none' === this.refs.optEl.style.display && this.refs.btn.className.includes(styles.selectDefFocus)) {
      var regExp = new RegExp(styles.selectDefFocus)
      this.refs.btn.className = this.refs.btn.className.replace(regExp, '')
    }
  }

  toggleOptEl() {
    'none' === this.refs.optEl.style.display ? this.refs.optEl.style.display = 'block' : this.refs.optEl.style.display = 'none'
    if('none' === this.refs.optEl.style.display && this.refs.btn.className.includes(styles.selectDefFocus)) {
      var regExp = new RegExp(styles.selectDefFocus)
      this.refs.btn.className = this.refs.btn.className.replace(regExp, '')
    }
    if('none' !== this.refs.optEl.style.display && !this.refs.btn.className.includes(styles.selectDefFocus)) {
      this.refs.btn.className += ' ' + styles.selectDefFocus
    }
  }

  render() {
    return (
      <div style={{display: 'inline-block'}} className={cx(styles.parentWrap)} >
        <div className={cx(styles.selectDef)} style={this.props.style} onClick={this.toggleOptEl.bind(this)} ref="btn" >
          <span className={cx(styles.selectVal)} ref="select"></span><i></i>
        </div>
        <div className={cx(styles.init, styles.posR) } style={{ display: 'none' }} ref="optEl" >
          <ul style={{display: 'inline-block'}} className={cx(styles.posOpt)}>
            {
              React.Children.map(this.props.children, (child) => {
                return <div onClick={this.handleChildClick.bind(this)}>{child}</div>
              })
            }
          </ul>
          <i className={cx(styles.arrowUp)}></i>
        </div>
      </div>
    )
  }

  componentDidMount() {
      if(this.props.children) {
        this.refs.select.innerText = !this.props.children[0] ? this.props.children.props.text : this.props.children[0].props.text
        console.log(this.refs.select.innerText)
        this.refs.select.innerText ? this.refs.select.innerText = this.refs.select.innerText : this.refs.select.innerText = ''
      }
      React.Children.map(this.props.children, (child) => {
        if(child.props.selected) {
          this.refs.select.innerText = child.props.text
        }
      })
  }
}
