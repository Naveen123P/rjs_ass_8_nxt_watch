import {Route, Switch} from 'react-router-dom'
import {Component} from 'react'
import ThemContext from './context/ThemContext'
import Home from './components/Home'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import SavedVideosRoute from './components/SavedVideosRoute'
import ProtectedRoute from './components/ProtectedRoute'
import LoginForm from './components/LoginForm'

import './App.css'

class App extends Component {
  state = {
    isDark: true,
    displayPremiumBox: true,
  }

  changeThem = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  closePremiumBox = () => {
    this.setState({displayPremiumBox: false})
  }

  render() {
    const {isDark, displayPremiumBox} = this.state
    return (
      <ThemContext.Provider
        value={{
          isDark,
          displayPremiumBox,
          changeThem: this.changeThem,
          closePremiumBox: this.closePremiumBox,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
        </Switch>
      </ThemContext.Provider>
    )
  }
}

export default App
