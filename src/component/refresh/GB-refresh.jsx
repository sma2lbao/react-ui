import React, { Component, PropTypes } from 'react'
import styles from './GB-refresh.css'
import cns from 'classnames/bind'
let cx = cns.bind(styles)

export default class GB_refresh extends Component {
  static defaultProps = {

  }

  static propTypes = {

  }

  constructor(props) {
    super(props)
    this.state = {
      full: true
    }
  }

  render() {
    return(
      <div className={cx(styles.refreshWrap)}>
        {/* <div className={cx(styles.refreshDef, {refreshFull: this.state.full, refreshCircle: this.state.full})}>
        </div> */}
        <div className={cx(styles.bean)}></div>
      </div>
    )
  }

  componentDidMount() {

  }
}
