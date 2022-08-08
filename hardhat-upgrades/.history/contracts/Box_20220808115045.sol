// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Box {
    uint256 internal value;

    event ValueChanged(uint256 newValue);

    functiion store(uint256 _value) external{
        value=_value;
    }
}
