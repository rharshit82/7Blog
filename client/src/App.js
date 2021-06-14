import './App.css'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Logout from './components/Logout'
import RegisterScreen from './screens/RegisterScreen.js'
import HomeScreen from './screens/HomeScreen.js'
import LoginScreen from './screens/LoginScreen.js'
import AddPostScreen from './screens/AddPostScreen.js'
import PostScreen from './screens/PostScreen'
import AboutScreen from './screens/AboutScreen'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'

function App() {
  const [isAuth, setIsAuth] = useState(false)
  useEffect(() => {
    async function checkAuth() {
      try {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'))
        const config = {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
        const res = await axios.post('/api/is_auth', {}, config)
        setIsAuth(res.data.isAuth)
      } catch (err) {
        setIsAuth(false)
      }
    }
    checkAuth()
    return () => {
      setIsAuth(false)
    }
  }, [])
  return (
    <Router>
      <header>
        <Header isAuth={isAuth} />
      </header>
      <main>
        <Switch>
          <Route exact path='/' component={() => <HomeScreen />} />
          <Route exact path='/about' component={() => <AboutScreen />} />

          <Route
            path='/register'
            component={() => <RegisterScreen setIsAuth={setIsAuth} />}
          />
          <Route
            path='/login'
            component={() => <LoginScreen setIsAuth={setIsAuth} />}
          />
          <Route exact path='/add_post' component={() => <AddPostScreen />} />
          <Route
            exact
            path='/logout'
            component={() => <Logout setIsAuth={setIsAuth} />}
          />
          <Route exact path='/post/:id' component={() => <PostScreen />} />
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  )
}

export default App
