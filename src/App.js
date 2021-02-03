import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import FirstImage from "./components/FirstImage/Firstimage";






class App extends React.Component {
  render() {
    return (
      <div>        
       <FirstImage/>
      </div>
    )
  }
}

export default App;
