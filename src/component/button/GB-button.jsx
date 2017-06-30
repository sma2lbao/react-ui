import React, { Component, PropTypes } from 'react'
import styles from './GB-button.css'
import cns from 'classnames/bind'
let cx = cns.bind(styles)

export default class GB_button extends Component {
  static propTypes = {
    text: PropTypes.string,
    color: PropTypes.oneOf(['green', 'purple', 'blue', 'red', 'white']),
    size: PropTypes.oneOf(['normal', 'small']),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    color: 'green',
    size: 'normal',
    disabled: false,
  }

  render() {
    const {color, size} = this.props
    const sizeClass = {
      normal: styles.sizeNormal,
      small: styles.sizeSmall,
    }
    const colorClass = {
      green: styles.colorGreen,
      purple: styles.colorPurple,
      blue: styles.colorBlue,
      red: styles.colorRed,
      white: styles.colorWhite
    }

    return (
      <button
        className={ cx(
        sizeClass[size],
        colorClass[color],
        {
          button: true,
          disabled: this.props.disabled
        }) }
        onClick={this.props.onClick} style={this.props.style} type="button">
        {this.props.text}
      </button>
    )
  }
}
