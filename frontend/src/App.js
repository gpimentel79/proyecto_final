import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import NovedadesPage from "./pages/NovedadesPage";
import HomePage from "./pages/HomePage";
import ContactoPage from "./pages/ContactoPage"
import NosotrosPage from "./pages/NosotrosPage";
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';


function App() {
  return (
    <Router>
     <Header/>
     <Nav/>
     <Switch>
       <Route path='/' exact component={HomePage} />
       <Route path='/nosotros' exact component= {NosotrosPage} />
       <Route path='/novedades' exact component= {NovedadesPage} />
       <Route path='/contactos' exact component= {ContactoPage} />
      </Switch>
      <Footer/>
    </Router>
    
  );
}

export default App;
