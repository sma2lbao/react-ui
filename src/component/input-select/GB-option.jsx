import React, { Component, PropTypes } from 'react'
import styles from './GB-option.css'
import cns from 'classnames/bind'
let cx = cns.bind(styles)

export default class GB_option extends Component {
  static defaultProps = {
    selected: false
  }

  static propTypes = {
    text: PropTypes.string,
    selected: PropTypes.bool
  }

  handleClick(event) {
    if(this.props.onClick) {
      this.props.onClick(event)
    }
  }

  render() {
    return (
      <li
        className={cx(styles.li)}
        onClick={this.handleClick.bind(this)}
        id={this.props.id}
        value={this.props.value}
      >
        {this.props.text}
      </li>
    )
  }
}
