import React, { Component, PropTypes } from 'react'
import styles from './GB-Prod-button.css'
import cns from 'classnames/bind'
let cx = cns.bind(styles)

export default class GB_Prod_button extends Component {
  static propTypes = {
    hasIcon: PropTypes.bool,
    disabled: PropTypes.bool,
    color: PropTypes.oneOf(['green', 'purple', 'blue', 'red']),
    text: PropTypes.string,
    icon: PropTypes.string,
  }

  static defaultProps = {
    hasIcon: false,
    disabled: false,
    color: 'green',
  }

  render() {
    const {hasIcon} = this.props
    // 有图标
    if(hasIcon) {
      return (
        <button
          className={cx({
            button: true,
            prodIconBtn: true,
            iconDisabled: this.props.disabled
          })}
          style={this.props.style} onClick={this.props.onClick} type="button">
          <i className={cx(styles.icon, this.props.icon)}></i>
          {this.props.text}
        </button>
      )
    }

    // 无图标
    else {
      const {color} = this.props
      const colorClass = {
        green: styles.colorGreen,
        purple: styles.colorPurple,
        blue: styles.colorBlue,
        red: styles.colorRed,
      }

      return (
        <button className={cx(
        colorClass[color],
        {
          button: true,
          prodSize: true,
          disabled: this.props.disabled
        })}
        style={this.props.style} onClick={this.props.onClick} type="button">
          {this.props.text}
        </button>
      )
    }
  }
}
