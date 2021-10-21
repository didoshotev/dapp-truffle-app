// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract HelloWorld {
  	string message;

	constructor(string memory _message) {
		message = _message;
	}

	function getMessage() public view returns(string memory) {
		return message;
	}

	function hi() public pure returns(string memory) {
		return ("hi");		
	}
}
