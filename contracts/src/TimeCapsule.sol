/**
 * @title TimeCapsule
 * @author thelonehegelian
 * @dev This contract is a blockchain-powered digital time capsule, built upon the ERC721 standard.
 * Users can create capsules containing data stored on IPFS, and set a future time for its reveal.
 * Each capsule is represented as an NFT (Non-Fungible Token), ensuring clear ownership and potential transferability.
 * Once the set time arrives, the owner of the NFT can claim and access the content of the capsule.
 *
 * PastPost: Bridging past intentions with future discoveries, for individuals or collaborative groups.
 */

pragma solidity >=0.7.0 <0.9.0;

import "openzeppelin/token/ERC721/ERC721.sol";

contract TimeCapsule is ERC721 {
    struct Capsule {
        string ipfsHash; // Hash of the file on IPFS
        uint256 unlockTime;
    }

    mapping(uint256 => Capsule) public capsules;

    constructor() ERC721("TimeCapsule", "CAPS") {}

    function createCapsule(string memory _ipfsHash, uint256 _unlockTime) public {
        // Mint a new NFT for the message sender
        // The new token's ID could be the current length of the capsules array
        // Create a new Capsule and add it to the capsules mapping with the new token's ID as the key
    }

    function claimCapsule(uint256 _tokenId) public {
        // Check that the message sender is the owner of the NFT with _tokenId
        require(_isApprovedOrOwner(_msgSender(), _tokenId), "ERC721: caller is not owner nor approved");

        // Check the current time against the unlock time of the capsule with _tokenId
        // If the current time is later, allow the user to access the capsule
    }
}
