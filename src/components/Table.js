import React, { Component } from 'react';
import moment from 'moment'

const STATUSES = ['CREATED', 'SENT', 'RECEIVED']

class Table extends Component {

  render() {
    return (
      <div id="content">
        <h1>{this.props.name}</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Status</th>
              <th scope="col">Custodian</th>
              <th scope="col">Links</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{STATUSES[this.props.status]}</td>
              <td><small>{this.props.custodian}</small></td>
              <td>
                <a href={`http://localhost:3000?address=${this.props.contractAddress}`} target="_blank">Share</a> |
                <button
                  onClick={() => {
                    let recipient = window.prompt("Who would you like to send the asset to?")
                    this.props.sendAsset(recipient)
                  }}
                >
                  Send
                </button>
                <button onClick={() => this.props.receiveAsset() } > 
                  Receive
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <h2>History</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Action</th>
              <th scope="col">Timestamp</th>
              <th scope="col">Account</th>
              <th scope="col">Custodian</th>
            </tr>
          </thead>
          <tbody>
            { this.props.actions.map((action, key) => {
              return(
                <tr key={key}>
                  <td>{action.returnValues.name}</td>
                  <td><small>{moment.unix(action.returnValues.timestamp).format()}</small></td>
                  <td><small>{action.returnValues.account}</small></td>
                  <td><small>{action.returnValues.custodian}</small></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
