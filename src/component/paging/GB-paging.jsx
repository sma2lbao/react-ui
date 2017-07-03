import React, { Component, PropTypes } from 'react'
import styles from './GB-paging.css'
import cns from 'classnames/bind'
let cx = cns.bind(styles)

export default class GB_paging extends Component {
  static defaultProps = {
    size: 1,
    total: 0,
    current: 1,
  }

  static propTypes = {
    size: PropTypes.number,
    total: PropTypes.number,
    current: PropTypes.number,
  }

  constructor(props) {
    super(props)
    this.state = {
      show: new Array()
    }
  }

  render() {
    const {size, total, current} = this.props
    let pages = Math.ceil(total/size)

    return(
      <div className={cx(styles.pageWrapper)}>
        <span className={cx(styles.pageItem)}>pre</span>

        <span className={cx(styles.pageItem, styles.pageItemActive)}>1</span>
        <span className={cx(styles.pageItem)}>next</span>
      </div>
    )
  }
}
