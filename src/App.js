
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
// import {Switch, Route} from 'react-router-dom';
// import Products from './component/Products';


function App() {
  return (
    
    <div>
      <Navbar />
      {/* <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />


      </Switch> */}

      <Home />
      

    </div>

      
   
  );
}

export default App;
