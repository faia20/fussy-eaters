import React from 'react'
import GenUserCheckboxes from './GenUserCheckboxes'

export default React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired
  },
  render () {
    const users = this.props.data
    return (
      <div>
        <h2>Users (The form action isn't done)</h2>
        <form>
          <GenUserCheckboxes data={users} />
          <button type='submit'>Doesn't do anything</button>
        </form>
      </div>
    )
  }
})
