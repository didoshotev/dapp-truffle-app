// contracts/Basic.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Basic {

    uint data = 123;

    function getData() external view returns(uint) {

        return data;
    }

    function setData(uint _data) external {
        data = _data;
    }

    function setDataPrivate(uint _data) private {
        data = _data + 10;
    }
}
