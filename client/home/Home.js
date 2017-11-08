import React from 'react'
import { connect } from 'react-redux'
import { addItem } from './data/actions'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleChange (event) {
    this.setState({ value: event.target.value })
  }
  handleClick () {
    this.props.dispatch(addItem(this.state.value))
    this.setState({value: ''})
  }
  render () {
    const items = this.props.$$items.map($$item => {
      return <div>{$$item}</div>
    })

    return (
      <div>
        <input type='text' value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.handleClick}>
          Add To List
        </button>
        <div>
          {items}
        </div>
      </div>
    )
  }
}

function mapStateToProps ($$state) {
  return {
    $$items: $$state.getIn(['home', 'items'])
  }
}

export default connect(mapStateToProps)(Home)
