import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Logout from './components/Logout'
import RegisterScreen from './screens/RegisterScreen.js'
import HomeScreen from './screens/HomeScreen.js'
import LoginScreen from './screens/LoginScreen.js'
import AddPostScreen from './screens/AddPostScreen.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <Router>
      <header>
        <Header isAuth={isAuth} setIsAuth={setIsAuth} />
      </header>
      <main>
        <Switch>
          <Route exact path='/' component={() => <HomeScreen />} />
          <Route
            path='/register'
            component={() => (
              <RegisterScreen isAuth={isAuth} setIsAuth={setIsAuth} />
            )}
          />
          <Route
            path='/login'
            component={() => (
              <LoginScreen isAuth={isAuth} setIsAuth={setIsAuth} />
            )}
          />
          <Route
            exact
            path='/add_post'
            component={() => (
              <AddPostScreen isAuth={isAuth} setIsAuth={setIsAuth} />
            )}
          />
          <Route
            exact
            path='/logout'
            component={() => <Logout isAuth={isAuth} setIsAuth={setIsAuth} />}
          />
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  )
}

export default App
