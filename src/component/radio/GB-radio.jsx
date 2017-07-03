import React, { Component, PropTypes } from 'react'
import styles from './GB-radio.css'
import cns from 'classnames/bind'
let cx = cns.bind(styles)

export default class GB_radio extends Component {
  static defaultProps  =  {
    type: 'circle',
    disabled: false,
    default: false,
  }

  static propTypes = {
    type: PropTypes.oneOf(['circle', 'square']),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    default: PropTypes.bool,
  }

  constructor(props) {
    super(props)
    this.state = {
      value: this.props.default,
    }
  }
  handleValue() {
    if(this.props.disabled) {
      return
    }

    if(this.props.onChange) {
      this.props.onChange(!this.state.value)
    }

    this.setState({
      value: !this.state.value
    })

  }
  render() {
    const { type, disabled } = this.props
    // 返回圆形radio
    if('circle' === type) {
      return (
        <div className={cx(styles.circleDef, {circleActive: this.state.value, disabled: disabled})} value={this.state.value} onClick={this.handleValue.bind(this)}>
          <div className={cx(styles.circleSelectDef, {hidden: !this.state.value})}>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className={cx(styles.squareDef, {circleActive: this.state.value, disabled: disabled})} value={this.state.value} onClick={this.handleValue.bind(this)}>
          <div className={cx(styles.squareSelectDef, {hidden: !this.state.value})}>
          </div>
        </div>
      )
    }
  }
}
