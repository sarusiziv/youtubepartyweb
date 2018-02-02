import React from 'react'
import { Switch ,Route } from 'react-router-dom'
import ChooseApp from './ChooseApp'
import PlayerPage from './PlayerPage'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={ChooseApp}/>
      <Route path='/player' component={PlayerPage}/>
    </Switch>
  </main>
)

export default Main
