import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Videos from './components/Videos';
import { Switch, Route} from "react-router-dom"
import SearchComp from './components/SearchComp';


function App() {
  return (



    <div className="app">
    <Header/>
    <Switch>
    <Route exact path= "/search/:searchTerm">
    <div className='apps_page'>
    <Sidebar/>
    <SearchComp/>
    
  
    </div>
    </Route>

    <Route exact path="/">

    <div className='apps_page'>
    <Sidebar/>
    <Videos/>
    
  
    </div>
    
  
    </Route>
    
    
    
    
    
    
    
    
    
    
    
    
    </Switch>

  
    

    
    


 
    
  
      
    </div>

  );
}

export default App;
