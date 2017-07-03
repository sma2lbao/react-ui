import React, { Component, PropTypes } from 'react'
import styles from './GB-msg.css'
import cns from 'classnames/bind'
let cx = cns.bind(styles)

export default class GB_msg extends Component {
  static defaultProps = {
    type: 'alert',
    title: 'Info',
    text: '',
    arrow: 'left'
  }

  static propTypes = {
    type: PropTypes.oneOf(['alert', 'hover']),
    title: PropTypes.string,
    text: PropTypes.string,
    arrow: PropTypes.oneOf(['left', 'right', 'top', 'bottom'])
  }

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const { type, title, text, icon, arrow } = this.props
    if('alert' === type) {
      return (
        <div className={cx(styles.msgAlert,)}>
          <div className={cx(styles.msgIcon)}><i className={cx(icon, {defIcon: !icon})}></i></div>
          <div className={cx(styles.msgComt)}>
            <div className={cx(styles.msgAlertTitle)}>{title}</div>
            <div>{text}</div>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className={cx(styles.msgHover)}>
          <div className={cx(styles.msgHoverTitle)}>{title}</div>
          <div className={cx(styles.msgHoverText)}>
            {text}
          </div>

          <div className={cx({msgHoverLeftArrow: 'left' === arrow})}>
          </div>
          <div className={cx({msgHoverRightArrow: 'right' === arrow})}>
          </div>
          <div className={cx({msgHoverTopArrow: 'top' === arrow})}>
          </div>
          <div className={cx({msgHoverBottomArrow: 'bottom' === arrow})}>
          </div>
        </div>
      )
    }
  }
}
