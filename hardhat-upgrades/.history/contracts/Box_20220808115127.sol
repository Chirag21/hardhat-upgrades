// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Box {
    uint256 internal value;

    event ValueChanged(uint256 newValue);

    function store(uint256 newValue) external {
        value = newValue;
        emit ValueChanged(newValue); 
    }

    function retireve
}
