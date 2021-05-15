import './styles/Navigation.css'
import './styles/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import {Switch,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Navigation/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/services' component={Services}/>
      <Route exact path='/projects' component={Projects}/>
      <Route exact path='/gallery' component={Gallery}/>
      <Route exact path='/contact' component={Contact}/>
    </Switch>
    </>
  );
}

export default App;