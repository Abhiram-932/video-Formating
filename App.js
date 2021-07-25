import React from "react";
import "./App.css";
import{BrowserRouter as Router,Route,Switch,Link}from "react-router-dom"


function App(){
 

  return(
 
    <div className="App">    
      <h1>VIDEO FORMATTING APPLICATION</h1><br></br>
       
      <Router>
        <Switch>
      <button className="new" > <Link to="/new"><h2>New Project</h2></Link> </button> 
        </Switch>
      <Route path="/new">
      https://share.vidyard.com/watch/y768LWr77v1pWXDu6eTEJo
      </Route>
      </Router>
      <h3>convert To:</h3><br></br>
      <Router>
      <Switch>
      <select className="hi">
        <option>HLS</option>
        <option>MP3</option>
      </select><br></br><br></br>
      </Switch>
      </Router>
      <Router>
        <Switch>
      <button className="convert" > <Link to="/convert"><h2>Convert now</h2></Link> </button> 
      </Switch>
      <Route path="/convert">
        <h1>process is going on </h1>
      </Route>
      </Router>
     
    </div>
    )
 
}

export default App;
