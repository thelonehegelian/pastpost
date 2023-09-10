// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./NFTAccessFactory.sol";

contract TimeCapsule is Ownable {

    struct Capsule {
        bytes32 hash;
        address owner;
        address nftContract;
    }

    address private nftFactory;

    // how to store capsules? array, mapping
    //mapping(uint256 => Capsule[]) public timeCapsules;

    // capsule hash => cids
    mapping(bytes32 => bytes32[]) public capsuleCids;
    
    event TimeCapsuleCreated(bytes32 hash);

    constructor(address _nftFactory) {
        nftFactory = _nftFactory;
    }

    function createTimeCapsule(bytes32 _hash) public {
        address nftContract = nftFactory.createNFTContract();
        Capsule memory newCapsule = new Capsule({hash: _hash, owner: msg.sender, nftContract: nftContract});
        //timeCapsules[counter] = newCapsule;

        emit TimeCapsuleCreated(_hash);
    }


    function addFileToCapsule(uint256 _capsuleId, bytes32 _cid) public {
        requires(timeCapsules[_capsuleId].owner == msg.sender, "not an owner");
        capsuleCids[_capsuleId].push(_cid);
    }

    function deleteFileFromCapsule(uint256 _capsuleId, bytes32 _cid) public {
        // TODO: add deletion?
    }
}
