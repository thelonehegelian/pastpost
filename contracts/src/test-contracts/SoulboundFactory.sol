// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import './Soulbound.sol';

contract SoulboundFactory {
  address[] public deployedSoulbounds;

  function createSoulbound() public {
    Soulbound newSoulbound = new Soulbound();
    newSoulbound.transferOwnership(msg.sender);
    deployedSoulbounds.push(address(newSoulbound));
  }

  function getDeployedSoulbounds() public view returns (address[] memory) {
    return deployedSoulbounds;
  }
}
