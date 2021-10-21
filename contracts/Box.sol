// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// import "./access-control/Auth.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Box is Ownable {
    uint256 private _value;
    // (old) Auth private _auth;

    event ValueChanged(uint256 value);

    // (old) constructor() {
    //     _auth = new Auth(msg.sender);
    // }

    function store(uint256 value) public onlyOwner{
        // (old) require(_auth.isAdministrator(msg.sender), "You are not the owner");
        _value = value;
        emit ValueChanged(value);
    }

    function retrieve() public view returns (uint256) {
        return _value;
    }
}
