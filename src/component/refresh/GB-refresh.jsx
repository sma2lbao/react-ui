import React, { Component, PropTypes } from 'react'
import styles from './GB-refresh.css'
import cns from 'classnames/bind'
let cx = cns.bind(styles)

export default class GB_refresh extends Component {
  static defaultProps = {
    playing: true,
    radius: 80,
    color: 'green',
    bgColor: '#fff'
  }

  static propTypes = {
    playing: PropTypes.bool,
    radius: PropTypes.number,
    color: PropTypes.string,
    bgColor: PropTypes.string,
  }

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className={cx(styles.whiteBg)} style={{width: this.props.radius + 1, height: this.props.radius + 1, backgroundColor: this.props.bgColor}}>
        <div
          className={
            cx(styles.refreshWrap,
              {refreshAnimation: this.props.playing,
                red: 'red' === this.props.color,
                purple: 'purple' === this.props.color,
                purple: 'purple' === this.props.color,
              })}

              >
                <div className={cx(styles.refreshHelp)} style={{ backgroundColor: this.props.bgColor }}></div>
                <div className={cx(styles.refreshHiddenHelp)} style={{ backgroundColor: this.props.bgColor }}>
                  <div
                    className={cx(styles.refreshHead,
                      {
                        red: 'red' === this.props.color,
                        purple: 'purple' === this.props.color,
                        purple: 'purple' === this.props.color,
                      }
                    )}>
                  </div>
                </div>
              </div>
      </div>
    )
  }

}
