// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "./NFTContract.sol";

contract NFTAccessFactory {
    address[] public contracts;
    mapping(address => NFTContract[]) contractsOfOwner;

    event NFTContractCreated(address newNFTContract, address owner);

    function createNFTContract() public returns(address) {
        NFTContract newNftContract = new NFTContract();
        contracts.push(address(newNftContract));
        newNftContract.transferOwnership(msg.sender);
        contractsOfOwner[msg.sender].push(newNftContract); 

        emit  NFTContractCreated(address(newNftContract), msg.sender); 
        return address(newNftContract); 
    }

    function getContractsByOwner(address _owner) public view returns (NFTContract[] memory) {
        return contractsOfOwner[_owner];
    }

    function getContractsNumber() public view returns(uint256) {
        return contracts.length;
    }
}