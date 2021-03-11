// import React, {Component} from 'react'
// import {connect} from 'react-redux'
import React from 'react'
import { Route, Switch} from 'react-router-dom'
import { SignUp, Player, Window } from './components'
// import {Login, Signup, UserHome} from './components'
// import {me} from './store'


export default function Routes() {
  // componentDidMount() {
  //   this.props.loadInitialData()
  // }
    return (
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/player" component={Player} />
        <Route path="/" component={Window} />
        </Switch>

    )
  }


// CONTAINER

// const mapState = state => {
//   return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
//     isLoggedIn: !!state.user.id
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     loadInitialData() {
//       dispatch(me())
//     }
//   }
// }

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
// export default withRouter(connect(mapState, mapDispatch)(Routes))

