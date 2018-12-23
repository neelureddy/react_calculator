import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.setPrice = this.setPrice.bind(this);
    this.setDownPayment = this.setDownPayment.bind(this);
    this.setLoanTerm = this.setLoanTerm.bind(this);
    this.setInterest = this.setInterest.bind(this);
    this.calc = this.calc.bind(this);
    this.state = {
      price:'',
      downPayment:'',
      loanTerm:'',
      interest:'',
      ans:''
     
    };
  }

  setPrice(e){
    this.setState({price:e.target.value.trim()});
  }
  setDownPayment(e){
 this.setState({downPayment:e.target.value.trim()});
  }
  setLoanTerm(e){
 this.setState({loanTerm:e.target.value.trim()});
  }
  setInterest(e){
 this.setState({interest:e.target.value.trim()});
  }
  calc(){
    this.setState({ans:'$'+((this.state.price-this.state.downPayment)+((this.state.price*this.state.loanTerm/12*this.state.interest)/100))/this.state.loanTerm
  })
  }

  render() {
    return (
      <div className="box">
      <div>
      <p className="title">PRICE OF THE HOME</p>
      <text className="dollar">$</text>
        <input onChange={this.setPrice}/>
        <p className="title">DOWN PAYMENT</p>
        <text className="dollar">$</text>
         <input onChange={this.setDownPayment}/>
         <p className="small-title">Down payments less than 20% of property value may require Private Mortgage Insurance (PMI).</p>
         <p className="title">LOAN TERM</p>
          <input onChange={this.setLoanTerm}/>
          <p className="small-title">*PenFed Adjustable Rate Mortgages (ARMs) are calculated using 30 year Loan Term</p>
          <p className="title">INTEREST RATE</p>
           <input onChange={this.setInterest}/>
           <button onClick={this.calc} className="calculate title">Calculate</button>
           </div>
           <div className="ans">
           {this.state.ans !==""?
           <p>EMI is: {this.state.ans}</p>:""}
           </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
