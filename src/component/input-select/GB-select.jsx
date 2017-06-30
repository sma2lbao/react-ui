import React, { Component, PropTypes } from 'react'
import styles from './GB-select.css'
import cns from 'classnames'

export default class GB_select extends Component {
  static defaultProps = {

  }

  static propTypes = {

  }

  render() {
    return (
      <div className={styles.select-def}>
        Select something<i></i>
        {this.props.children}
      </div>
    )
  }
}
