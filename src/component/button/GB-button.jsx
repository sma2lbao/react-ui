import React, { Component, PropTypes } from 'react'
import './GB-button.css'

export default class GB_button extends Component {
  static defaultProps = {
    text: PropTypes.string,
    type: PropTypes.oneOf(['primary', 'warn', 'default', 'disable']),
  }
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    )
  }
}
