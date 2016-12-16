import React from 'react'
import users from './data/users'
import venues from './data/venues'
import PlacesToGo from './components/PlacesToGo'
import PlacesToAvoid from './components/PlacesToAvoid'
import FormUsers from './components/FormUsers'
import Note from './components/Note'

export default React.createClass({
  render () {
    let listOfPlacesToGo = []
    let listOfPlacesToAvoid = []

    venues.forEach(function (venue) {
      let reasons = []
      users.forEach(function (user) {
        venue.food.forEach(function (venueFood) {
          let disapprovedDishes = 0
          user.wont_eat.forEach(function (userFood) {
            if (userFood.toLowerCase() === venueFood.toLowerCase()) {
              disapprovedDishes += 1
            }
            if (disapprovedDishes === venue.food.length) {
              reasons.push(`${user.name} doesn't eat ${venue.food}`)
            }
          })
        })

        let drinksMatch = false
        venue.drinks.forEach(function (venueDrinks) {
          user.drinks.forEach(function (userDrinks) {
            if (venueDrinks.toLowerCase() === userDrinks.toLowerCase()) {
              drinksMatch = true
            }
          })
        })

        if (drinksMatch === false) {
          reasons.push(`${user.name} doesn't drink ${venue.drinks}`)
        }
      })

      if (reasons.length > 0) {
        listOfPlacesToAvoid.push({
          reasons,
          venue: venue.name
        })
      } else {
        listOfPlacesToGo.push(venue.name)
      }
    })

    return (
      <div>
        <header>
          <h1>Fussy Eaters</h1>
        </header>
        <div className='container'>
          <Note />
          <FormUsers data={users} />
          <PlacesToGo data={listOfPlacesToGo} />
          <PlacesToAvoid data={listOfPlacesToAvoid} />
        </div>
      </div>
    )
  }
})
