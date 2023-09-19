// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract ERC721Factory is Ownable {
  address public erc721Contract;

  constructor(address _erc721Contract) {
    require(_erc721Contract != address(0), 'Invalid ERC721 contract address');
    erc721Contract = _erc721Contract;
  }

  function createToken(
    address to,
    uint256 tokenId,
    string memory tokenURI
  ) public onlyOwner {
    require(
      ERC721(erc721Contract).ownerOf(tokenId) == address(this),
      'Factory does not own ERC721 token'
    );

    ERC721(erc721Contract).transferFrom(address(this), to, tokenId);

    if (bytes(tokenURI).length > 0) {
      ERC721(erc721Contract).setTokenURI(tokenId, tokenURI);
    }
  }
}
