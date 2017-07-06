import React, { Component, PropTypes } from  'react'
import styles from './GB-pop.css'
import cns from 'classnames/bind'
let cx = cns.bind(styles)

export default class GB_pop extends Component {
  static defaultProps = {
    title: 'Hello World',
    statu: true,
  }

  static propTypes = {
    title: PropTypes.string,
    statu: PropTypes.bool
  }

  constructor(props) {
    super(props)
    this.state = {
      close: false
    }
  }

  handleClose() {
    this.setState({
      close: true
    })
  }

  render() {
    const { title } = this.props
    return (
      <div className={cx(styles.warpper, {hidden: !this.props.statu || this.state.close})} ref="modal">
        <div className={cx(styles.comt)}>
          <div className={cx(styles.close)} onClick={this.handleClose.bind(this)}></div>
          <div className={cx(styles.title)}>{title}</div>
          <div className={cx(styles.article)}>
            {
              React.Children.map(this.props.children, (child) => {
                return (
                  <div className={cx(styles.section)}>
                    {child}
                  </div>
                )
              })
            }

          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    const modalHei = this.refs.modal.clientHeight
    this.refs.modal.style.marginTop = -modalHei/2 + 'px'
  }
}
