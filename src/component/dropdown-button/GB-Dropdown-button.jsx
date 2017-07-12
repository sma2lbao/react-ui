import React, { Component, PropTypes } from 'react'
import styles from './GB-Dropdown-button.css'
import cns from 'classnames/bind'
let cx = cns.bind(styles)

export default class GB_Dropdown_button extends Component {
  static defaultProps = {
    arry: new Array(),
    disabled: false,
    color: 'green',
  }

  static propTypes = {
    text: PropTypes.string,
    arry: PropTypes.array,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    color: PropTypes.string,
  }

  toggleOption() {

    // 如果长度大于0,才会显示。
    if(this.props.arry.length > 0 && !this.props.disabled) {
      this.refs.ul.style.display === 'block' ? this.refs.ul.style.display = 'none' : this.refs.ul.style.display = 'block'
    }
  }

  handleClickItem(event) {
    // console.log(event.target.innerText)
    if(this.props.onClick) {
      this.props.onClick(event.target.innerText)
    }
    this.refs.ul.style.display = 'none'
  }

  render() {
    const arry = this.props.arry
    const colorClass = {
      green: styles.colorGreen,
      purple: styles.colorPurple,
      blue: styles.colorBlue,
      red: styles.colorRed
    }

    const colorLiClass = {
      green: styles.colorGreenLi,
      purple: styles.colorPurpleLi,
      blue: styles.colorBlueLi,
      red: styles.colorRedLi,
    }

    return (
      <div className={cx(styles.dropdownParent, styles.base)}>
        <button type="button"
          className={cx(
          colorClass[this.props.color],
          {
            dropdownSize: true,
            disabled: this.props.disabled
          })}
          onClick={this.toggleOption.bind(this)}>
          {this.props.text}
          <i className={cx({
            icon: true,
            disabledIcon: this.props.disabled
          })}></i>
        </button>
        <div ref="ul" className={cx(styles.posR)}>
          <ul className={cx(styles.lsn, {ul: true})}>
            {
              (this.props.arry).map((val) => {
                return(
                  <li className={cx(colorLiClass[this.props.color], styles.li, styles.lsn)} onClick={this.handleClickItem.bind(this)}>{val}</li>
                )
              })
            }
          </ul>
          <i className={cx(styles.arrowUp)}></i>
        </div>
      </div>

    )
  }
}
