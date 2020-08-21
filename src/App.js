// import React from 'react';
import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar.jsx'
import Counters from "./components/counters"

class App extends Component {
  state = { 
    counters :[

    ],
    id : 0
  };
  showCounters=()=>{
    console.log(this.state.counters)
  }
  handleIncrement = (counter_id) => {
      const counters = [...this.state.counters];
      const index = counters.findIndex((counter)=>counter.id===counter_id);
      counters[index]={...counters[index]}
      counters[index].value++;
      this.setState({counters});
  }
  handleDecrement = counter_id => {
    const counters = [...this.state.counters];
    const index = counters.findIndex((counter)=>counter.id===counter_id);
    counters[index]={...counters[index]}
    counters[index].value--;
    this.setState({counters});
  }
  handleReset = () =>{
      const counters = this.state.counters.map( c => {
          c.value=0;
          return c;
      })
      this.setState({counters});
  }
  handleDelete= (product_id) => {
      console.log("Delete product",product_id)
      const counters = this.state.counters.filter(c => c.id !== product_id)
      this.setState({counters : counters})
  }
  addCounter = () => {
    let counters = [...this.state.counters]
    const id = this.state.id +1
    this.setState({id})
    const counter = { id : id, value : 0}
    counters.push(counter)
    this.setState({counters})
  }
  render(){
    return (
      <div>

        <NavBar totalCount={this.state.counters.filter(c => c.value>0).length}/>
        <button onClick={this.showCounters} className="btn btn-primary btn-sm m-2">ShowCount</button>                       
        <Counters
        counters={this.state.counters}
        onReset={this.handleReset}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete}/>
        <button onClick={this.addCounter} className="btn btn-success btn-sm m-2">Add Item</button>                       
      </div>
    );
}
}
export default App;
