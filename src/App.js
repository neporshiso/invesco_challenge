import React, { Component } from "react";
import "./App.css";
import data from "./data.json";

export default class App extends Component {
  state = {
    // data is an array of objects
    investments: data,
    id: "",
    region: ""
  };

  render() {
    const handleSubmit = e => {
      e.preventDefault();
      alert(
        `This mimics a Create request / POST request to update this data. ID: ${this.state.id} REGION: ${this.state.region}`
      );
    };

    const handleChange = e => {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({
        [name]: value
      });
    };

    const handleDelete = (e) => {
      alert(`deletion detected for investment id ${e.target.value}`)
    }

    return (
      <>
        <div>
          <ul>
            {this.state.investments.map(inv => {
              return (
                <>
                  <li key={inv.InvestmentId}>{inv.InvestmentId}</li>
                  <p>{inv.Region}</p>
                  <p>{inv.Office}</p>
                  <button value={inv.InvestmentId} onClick={e => handleDelete(e)}>Delete</button>
                </>
              );
            })}
          </ul>
        </div>
        <form onSubmit={e => handleSubmit(e)}>
          <h2>Add Investment Data</h2>
          <label>
            Add Investment Id
            <input
              type="number"
              name="id"
              value={this.state.id}
              onChange={e => {
                handleChange(e);
              }}
            />
          </label>
          <label>
            Region
            <input
              type="text"
              name="region"
              value={this.state.region}
              onChange={e => {
                handleChange(e);
              }}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}
