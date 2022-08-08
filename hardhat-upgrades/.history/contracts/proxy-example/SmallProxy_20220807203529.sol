// SPDX-License_identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/proxy/Proxy.sol";

contract Smallproxy is Proxy {
    // This is the keccak-256  hash of "eip1967.proxy.implementation" subtracted by 1
    bytes32 private constant _IPLEMENTATION_SLOT =
        0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc;

    function setImplementation(address newImplementation) external {
        assembly {
            sstore(_IPLEMENTATION_SLOT, newImplementation)
        }
    }

    function _implementation() internal view override returns (address implementaionAddress) {
        assembly {
            {
                implementaionAddress := sload(_IPLEMENTATION_SLOT)
            }
        }
    }

    function setCalldata(uint256 value) external pure returns (bytes memory) {
        return abi.encodeWithSignature("setValue(uint256)", value);
    }

    function readStorage() external pure returns (uint256 valueAtSotrageSlotZero) {
        assembly {
            {
                value := sload(0)
            }
        }
    }
}

contract ImplementationA {
    uint256 public value;

    function setValue(uint256 _value) external {
        value = _value;
    }
}
