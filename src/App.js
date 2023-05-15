import React from "react";
import { Component } from "react";

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      product: "",
      retail: "",
      percentage :"13",
      total:""
    }

  }

  inp1_chg = (ret) => {
   
    this.setState ({
      retail :parseInt(ret)
    })
  }
  inp2_chg = (per) => {
   
    this.setState ({
      percentage :parseFloat(per)
    })
  }
  inp_prod = (prod) => {
  this.setState ({
    product: prod
  })
}

  _total = () => {

  this.inp2_chg - this.inp1_chg
  
}

  render(){
    return(
      <>
      <input type="text" placeholder="Enter Products" value={this.state.product} onChange={(e) => this.inp_prod(e.target.value)}/>
      <input type="text" placeholder="Enter Value" value={this.state.retail} onChange={(e) => this.inp1_chg(e.target.value)}/>
      <input type="number" placeholder="Enter Percentage" value={this.state.percentage} onChange={(e) => this.inp2_chg(e.target.value)} />
      {/* <h1 >{this.state.retail}</h1> */}
      <button onClick={() => this._total()}>Result</button>
      </>
    )
  }
}
export default App