// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./NFTContract.sol";

contract PastPost is Ownable {

    uint public counter = 1;

    struct Capsule {
        address owner;
        address nftContract;
    }

    address[] public contracts;

    mapping(uint256 => Capsule) public timeCapsules;
    
    event TimeCapsuleCreated(uint id, address owner, address nft);

    constructor(address _nftFactory) {
        nftFactory = _nftFactory;
    }

    function createTimeCapsule(address[] memory receivers) public {
        require(receivers.length() <= 10, "Too many receivers");
        NFTContract nft = new NFTContract();
        contracts.push(address(nft));
        Capsule memory newCapsule = new Capsule({owner: msg.sender, nftContract: address(nft)});
        timeCapsules[counter] = newCapsule;
        counter++;
        for (uint i = 1; receivers.length(); i++) {
            nft.mint(receivers[i]);
        } 
        emit TimeCapsuleCreated(counter, msg.sender, address(nft));
    }
}
