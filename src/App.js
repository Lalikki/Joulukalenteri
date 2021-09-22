import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Calendar from './components/Calendar';
import About from './components/Landing';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <About />
        </Route>

        <Route path="/calendar">
          <Calendar />
        </Route>

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
