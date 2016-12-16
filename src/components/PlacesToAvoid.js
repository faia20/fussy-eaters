import React from 'react'

export default React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired
  },
  render () {
    const listOfPlacesToAvoid = this.props.data
    let outputPlacesToAvoid
    if (listOfPlacesToAvoid.length !== 0) {
      outputPlacesToAvoid = listOfPlacesToAvoid.map((theVenue, venueIndex) =>
        <li key={venueIndex}>
          {theVenue.venue}
          <ul>
            {theVenue.reasons.map((theReason, reasonIndex) =>
              <li key={reasonIndex}>
                {theReason}
              </li>
            )}
          </ul>
        </li>
      )
    } else {
      outputPlacesToAvoid = 'There is no place to avoid.'
    }
    return (
      <div>
        <h2>Places to avoid:</h2>
        <ul>
          {outputPlacesToAvoid}
        </ul>
      </div>
    )
  }
})
