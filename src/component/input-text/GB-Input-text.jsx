import React, { Component, PropTypes } from 'react'
import styles from './GB-Input-text.css'
import cns from 'classnames/bind'
let cx = cns.bind(styles)

export default class GB_Input_text extends Component {
  static defaultProps  = {
    isRequired: false,
    warn: false,
    value: '',
    type: 'text'
  }

  static propTypes = {
    isRequired: PropTypes.bool,
    warn: PropTypes.bool,
    onChange: PropTypes.func,
    vaild: PropTypes.func,
    value: PropTypes.string.isRequired,
    type: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = {
      warn: this.props.warn,
      warnMsg: this.props.warnMsg,
    }
  }

  handleChange(event) {
    if(this.props.onChange) {
      this.props.onChange(event.target.value)
    }
    if(this.props.vaild) {
      let {needWarn, warnMsg} = this.props.vaild(event.target.value)
      this.setState({
        warn: needWarn,
        warnMsg: warnMsg
      })
    }
  }

  render() {
    const { isRequired, warn, value, type} = this.props
    return (
      <div className={cx(styles.wrapper)}>
        <input type={type} value={value} className={cx(styles.def, {warn: this.state.warn})} onChange={this.handleChange.bind(this)} ref="input" />
        <i className={cx({required: isRequired})}></i>
        <span className={cx(styles.warnMsg)}>{this.state.warnMsg}</span>
      </div>
    )
  }
}
