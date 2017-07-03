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
    onChange: PropTypes.func
  }

  constructor(props) {
    super(props)
    this.state = {
      current: props.current,
      pageNum: Math.ceil(props.total/props.size)
    }
  }

  handlePrev() {
    if(1 >= this.state.current) {
      return
    }
    this.setState({
      current: --this.state.current
    })

    if(this.props.onChange) {
      this.props.onChange(this.state.current)
    }
  }

  handleNext() {
    if(this.state.pageNum <= this.state.current) {
      return
    }
    this.setState({
      current: ++this.state.current
    })

    if(this.props.onChange) {
      this.props.onChange(this.state.current)
    }
  }

  handlePage(event) {
    this.state.current = parseInt(event.target.innerText)
    this.setState({
      current: this.state.current
    })

    if(this.props.onChange) {
      this.props.onChange(this.state.current)
    }
  }

  render() {
    console.log(this.state.pageNum)
    const {size, total, current} = this.props
    let pageLst = new Array(this.state.pageNum)
    for (let i = 0; i < pageLst.length; i++) {
      pageLst[i] = i + 1
    }
    let domLst = new Array()
    for (let i = 0; i < pageLst.length; i++) {
      domLst.push(<button
        onClick={this.handlePage.bind(this)}
        className={cx(styles.pageItem,
          {
            pageItemActive: i + 1 === this.state.current,
            hidden: (this.state.pageNum -  5 < this.state.current ? i + 1 < this.state.pageNum - 8 : i + 1 < this.state.current - 4)
                    || (5 >= this.state.current ? i + 1 > 9 : i + 1 > this.state.current + 4),
          })}>{i + 1}</button>)
    }
    return(
      <div className={cx(styles.pageWrapper)}>
        <button
          className={cx(styles.pageItem, {disabled: this.state.current === 1})}
          onClick={this.handlePrev.bind(this)}
        >prev</button>
        {domLst}
        <button
          className={cx(styles.pageItem, {disabled: this.state.current === this.state.pageNum || 0 === this.state.pageNum})}
          onClick={this.handleNext.bind(this)}
        >next</button>
      </div>
    )
  }
}
