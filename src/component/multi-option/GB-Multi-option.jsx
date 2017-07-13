import React, { Component, PropTypes } from 'react'
import styles from './GB-Multi-option.css'
import cns from 'classnames/bind'
let cx = cns.bind(styles)

export default class GB_Multe_option extends Component {
  static defaultProps = {
    lst: ['option1', 'option2'],
    active: 0
  }

  static propTypes = {
    lst: PropTypes.array,
    active: PropTypes.number,
    onChange: PropTypes.func
  }

  constructor(props) {
    super(props)
    this.state = {
      active: props.active
    }
  }

  handleClick(index, event) {
    this.setState({
      active: index
    })
    if(this.props.onChange) {
      this.props.onChange(event.target.innerText, index)
    }
  }

  render() {
    const { lst } = this.props
    return (
      <div className={cx(styles.warpper)}>
        {lst.map((value, index) => {
          return <span key={index} style={this.props.style} className={cx(styles.item, {itemActive: index === this.state.active})} onClick={this.handleClick.bind(this, index)}>{value}</span>
        })}

      </div>
    )
  }
}
