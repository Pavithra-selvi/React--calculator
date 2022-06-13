import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
//bootstrap cdn
//import "bootstrap/dist/css/bootstrap.min.css";
import github from "./images/github.png";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: "",
    };
  }
  addToInput = (val) => {
    this.setState({ input: this.state.input + val });
  };

  addDecimal = (val) => {
    // only add decimal if there is no current decimal point present in the input area
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val });
    }
  };

  addZeroToInput = (val) => {
    //if this.state.input is not empty then add zero
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val });
    }
  };

  clearInput = () => {
    this.setState({ input: "" });
  };

  backspace = () => {
    this.setState({ input: this.state.input.slice(0, -1) });
  };

  percentage = () => {
    const currentValue = parseFloat(this.state.input);

    if (currentValue === 0) return;

    const fixedDigits = this.state.input.replace(/^-?\d*\.?/, "");
    const newValue = parseFloat(this.state.input) / 100;
    this.setState({
      input: String(newValue.toFixed(fixedDigits.length + 10)),
    });
  };

  addition = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" }); //first there is state not setstate
    this.state.operator = "plus";
  };

  subtract = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "subtract";
  };

  multiply = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "multiply";
  };

  divide = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "divide";
  };

  evaluation = () => {
    this.state.currentNumber = this.state.input;
    if (this.state.operator === "plus") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) +
          parseFloat(this.state.currentNumber),
      });
    } else if (this.state.operator === "subtract") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) -
          parseFloat(this.state.currentNumber),
      });
    } else if (this.state.operator === "multiply") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) *
          parseFloat(this.state.currentNumber),
      });
    } else if (this.state.operator === "divide") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) /
          parseFloat(this.state.currentNumber),
      });
    }
  };

  render() {
    return (
      <>
        <div className="heading">
          <div>
            <h1>
              Calculator
            <span>
          <a
            href="https://github.com/Pavithra-selvi/React--calculator"
            target="_blank"
          >
            <img
              src={github}
              alt="github-image"
              style={{ width: "60px", marginTop: "-10px" }}
            />
          </a>
        </span>
            </h1>

            <div className="row">
              <Input>{this.state.input}</Input>
            </div>
            <div className="row">
              <Button handleClick={this.clearInput}>AC</Button>
              <Button handleClick={this.backspace}>C</Button>
              <Button>+/-</Button>
              <Button handleClick={this.percentage}>%</Button>
            </div>
            <div className="row">
              <Button handleClick={this.addToInput}>7</Button>
              <Button handleClick={this.addToInput}>8</Button>
              <Button handleClick={this.addToInput}>9</Button>
              <Button handleClick={this.divide}>/</Button>
            </div>
            <div className="row">
              <Button handleClick={this.addToInput}>4</Button>
              <Button handleClick={this.addToInput}>5</Button>
              <Button handleClick={this.addToInput}>6</Button>
              <Button handleClick={this.multiply}>*</Button>
            </div>
            <div className="row">
              <Button handleClick={this.addToInput}>1</Button>
              <Button handleClick={this.addToInput}>2</Button>
              <Button handleClick={this.addToInput}>3</Button>
              <Button handleClick={this.addition}>+</Button>
            </div>
            <div className="row">
              <Button handleClick={this.addDecimal}>.</Button>
              <Button handleClick={this.addZeroToInput}>0</Button>
              <Button handleClick={this.evaluation}>=</Button>
              <Button handleClick={this.subtract}>-</Button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
