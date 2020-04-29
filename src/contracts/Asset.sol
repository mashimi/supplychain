pragma solidity ^0.5.0;

contract Asset {
  string public name;
  address public custodian;
  States public state;

  enum States {
    Created,
    Sent,
    Received
  }

  event Action(
    string name,
    address account,
    address custodian,
    uint timestamp
  );

  constructor(string memory _name) public {
    // Set name
    name = _name;

    // Make deployer custodian
    custodian = msg.sender;

    // Update state to "Created"
    state = States.Created;

    // Log history
    emit Action("CREATE", msg.sender, msg.sender, now);
  }

  function send(address _to) public {
    // Must be custodian to send
    require(msg.sender == custodian);

    // Cannot send to self
    require(_to != custodian);

    // Can't be in "Sent" state
    // Must be "Created" or "Received"
    require(state != States.Sent);

    // Update state to "Sent"
    state = States.Sent;

    // Make _to new custodian
    custodian = _to;

    // Log history
    emit Action("SEND", msg.sender, _to, now);
  }

  function receive() public {
    // Must be custodian to receive
    require(msg.sender == custodian);

    // Must be in "Sent" state
    // Cannot be "Created" or "Received"
    require(state == States.Sent);

    // Update state to "Received"
    state = States.Received;

    // Log history
    emit Action("RECEIVE", msg.sender, msg.sender, now);
  }
}
