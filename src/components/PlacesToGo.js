import React from 'react'

export default React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired
  },
  render () {
    const listOfPlacesToGo = this.props.data
    let outputPlacesToGo
    if (listOfPlacesToGo.length !== 0) {
      outputPlacesToGo = listOfPlacesToGo.map(function (theVenue, index) {
        return (
          <li key={index}>
            {theVenue}
          </li>
        )
      })
    } else {
      outputPlacesToGo = 'No recommended venues found for the selected users'
    }
    return (
      <div>
        <h2>Places to go:</h2>
        <ul>
          {outputPlacesToGo}
        </ul>
      </div>
    )
  }
})
