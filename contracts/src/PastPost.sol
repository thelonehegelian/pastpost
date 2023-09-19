// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./NFTContract.sol";

contract PastPost is Ownable {

    string public uri;

    struct Capsule {
        address owner;
        address nftContract;
    }

    mapping(address => address[]) userNftContracts;
    Capsule[] public timeCapsules;
    
    event TimeCapsuleCreated(address owner, address nft);

    constructor(string memory _uri) {
        uri = _uri;
    }

    function createTimeCapsule(address receiver) public {
        NFTContract nft = new NFTContract();
        userNftContracts[msg.sender].push(address(nft));
        Capsule memory newCapsule = Capsule({owner: msg.sender, nftContract: address(nft)});
        timeCapsules.push(newCapsule);
        nft.safeMint(msg.sender, uri);
        if (receiver != address(0)) {
            nft.safeMint(receiver, uri);
        }
        nft.transferOwnership(msg.sender);
        emit TimeCapsuleCreated(msg.sender, address(nft));
    }

    function setURI(string memory _uri) public onlyOwner {
        uri = _uri;
    }
}
