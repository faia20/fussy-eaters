import React from 'react'

export default React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired
  },
  render () {
    const users = this.props.data
    const userCheckboxes = users.map(function (userCheckbox) {
      return (
        <div>
          <label>{userCheckbox.name}</label>
          <input key={userCheckbox.name} type='checkbox' value={userCheckbox.name} checked='checked' />
          <br />
        </div>
      )
    })
    return (
      <div>
        {userCheckboxes}
      </div>
    )
  }
})
