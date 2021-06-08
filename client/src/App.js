import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import RegisterScreen from './screens/RegisterScreen.js'
import HomeScreen from './screens/HomeScreen.js'
import LoginScreen from './screens/LoginScreen.js'
import AddPostScreen from './screens/AddPostScreen.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <main>
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route exact path='/add_post' component={AddPostScreen} />
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  )
}

export default App
