import React, { Component, PropTypes } from 'react'
import styles from './GB-Toggle-button.css'
import cns from 'classnames/bind'
let cx = cns.bind(styles)

export default class GB_Toggle_button extends Component {
  static defaultProps = {
    value: false
  }
  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.bool,
  }

  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value
    }
  }

  handleClick() {
    if(this.props.onChange) {
      this.props.onChange(!this.state.value)
    }
    this.setState({
      value: !this.state.value
    })
  }

  render() {
    return(
      <div className={cx(styles.toggleWrapDef, {toggleWrapActive: this.state.value})} onClick={this.handleClick.bind(this)}>
        <div className={cx(styles.toggleComt)}></div>
      </div>
    )
  }
}
