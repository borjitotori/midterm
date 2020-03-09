import React, { Component } from 'react';
import './App.css';
import cloneDeep from "clone-deep";
import Films from "./Components/Films"
import Data from "./assets/data";

class App extends Component {
  state = {
    data: { ...Data }
  }


  bigPictureHandler = film =>{
    const data = cloneDeep(this.state.data);
    data.info.bigPicture = film;
    this.setState({data});
    console.log(film)  
  }
  //samll picture portview Handler
  smallPicturehandler= () =>{
    const data = cloneDeep(this.state.data);
    data.info.bigPicture = 0;
    this.setState({data});  
  }

  render() {
    return (
      <div className="App">
        <Films bigPictureHandler = {this.bigPictureHandler} smallPicturehandler ={this.smallPicturehandler}  className="Films" data = {this.state.data}/>
      </div>
    );
  }
}

export default App;
