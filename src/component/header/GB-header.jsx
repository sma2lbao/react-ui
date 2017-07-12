import React, { Component, PropTypes } from 'react'
import styles from './GB-header.css'
import cns from 'classnames/bind'
let cx = cns.bind(styles)

export default class GB_header extends Component {
  static defaultProps = {
    propList: ['', ''],
    active: 0
  }
  static propTypes = {
    btnClick: PropTypes.func,
    propList: PropTypes.array,
    active: PropTypes.number,
    itemClick: PropTypes.func
  }
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  btnClick() {
    if(this.props.btnClick) {
      this.props.btnClick()
    }
  }
  itemClick(value, index) {
    if(this.props.itemClick) {
      this.props.itemClick(value, index)
    }
  }
  render() {
    const { propList, active} = this.props
    return (
      <div className={cx(styles.headerWrap)}>
        <div className={cx(styles.headerComt)}>
          <span className={cx(styles.logo)}>
            <i className={cx(styles.logoIconWrap)}>S</i>
            <span className={cx(styles.logoComt)}>Sma2lBao</span>
          </span>
          <span className={cx(styles.navigator)}>
            <ul>
              {
                propList.map((value, index) => {
                  return (
                    <li key={index} onClick={this.itemClick.bind(this, value, index)} className={cx(styles.item, {active: index === active})}>{value}</li>
                  )
                })
              }
            </ul>
          </span>
          <span className={cx(styles.operating)}>
            <button onClick={this.btnClick.bind(this)}>登录</button>
          </span>
        </div>
      </div>
    )
  }
}
