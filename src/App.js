//import react from "react"
import './App.css';
import NavBar from './Components/Navbar'
import Home from './Components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Allblogs from './Components/Allblogs'
import Create from './Components/create'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/allblogs" component={Allblogs}></Route>
        <Route path="/create" component={Create}></Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
