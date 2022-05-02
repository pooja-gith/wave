
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import Footer from './include/Footer';
import Header from './include/Header';
import Team from './component/Team';
import Pricing from './component/Pricing';
import Services from './component/Services';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Switch>
   <Route path="/" exact component={Home}></Route>
   <Route path="/about" exact component={About}></Route>
   <Route path="/contact" exact component={Contact}></Route>
   <Route path="/pricing" exact component={Pricing}></Route>
   <Route path="/services" exact component={Services}></Route>
   <Route path="/team" exact component={Team}></Route>
      <Header/>
      <Footer/>
      <Home/>
      <About/>
      <Contact/>
</Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
