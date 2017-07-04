import React, { Component, PropTypes } from 'react'
import styles from './GB-paging.css'
import cns from 'classnames/bind'
import GBmsg from '../msg/GB-msg.jsx'
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

  handleDefCurrent() {
    if(this.props.onChange) {
      this.props.onChange(this.state.current)
    }
  }

  handleProgClick(index, event) {

    this.state.current = parseInt(index)
    this.setState({
      current: this.state.current
    })

    if(this.props.onChange) {
      this.props.onChange(this.state.current)
    }
  }

  render() {

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
      <div>
        <div className={cx(styles.pageWrapper)}>
          <button
            className={cx(styles.pageItem, {disabled: this.state.current === 1})}
            onClick={this.handlePrev.bind(this)}
            >
            prev
          </button>
            {domLst}
          <button
              className={cx(styles.pageItem, {disabled: this.state.current === this.state.pageNum || 0 === this.state.pageNum})}
              onClick={this.handleNext.bind(this)}
          >
            next
          </button>


          <div className={cx(styles.prog)}>
            {
              new Array(this.state.pageNum).fill('1').map((value, index) => {
                return(
                  <span className={cx(styles.progItem, {progItemActive: index + 1 <= this.state.current })} ref="item"  onClick={this.handleProgClick.bind(this, (index + 1))}>
                    <span className={cx(styles.hoverPos)} ref="hoverPage">
                      <GBmsg type="hover" arrow='top' title={index + 1} />
                    </span>
                  </span>
                )
              })
            }
          </div>
        </div>

      </div>
    )
  }

  componentDidMount() {
    this.handleDefCurrent.bind(this)()

    {
      var itemWid = this.refs.item.clientWidth
      var doms = document.getElementsByClassName(styles.hoverPos)
      for(let i = 0; i < doms.length; i++) {
        let wid = doms[i].clientWidth
        doms[i].style.marginLeft = -wid/2 + itemWid/2 + 'px'
      }
    }
  }
}
