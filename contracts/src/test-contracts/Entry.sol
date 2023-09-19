// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import './NftFactory.sol';
import './SoulboundFactory.sol';

contract Entry {
  address public owner;
  NftFactory public nftFactory;
  SoulboundFactory public soulboundFactory;

  constructor(address _nftFactory, address _soulboundFactory) {
    owner = msg.sender;
    nftFactory = NftFactory(_nftFactory);
    soulboundFactory = SoulboundFactory(_soulboundFactory);
  }

  /*******************************************
   ************ EVENTS *************
   *******************************************/
  event NftMinted(address nftTokenAddress);
  // TODO update in line with the function body
  event AccessControlApplied(string cid);

  enum NftType {
    ERC721,
    ERC6239
  }

  struct UserRequest {
    NftType nftType;
    string cid;
    address sender;
    address ownerOfNft;
    AccessControlConditions accessControlConditions;
    TableLandData tableLandData;
  }

  struct AccessControlConditions {
    uint256 id;
    string chain;
    string method;
    string standardContractType;
    address contractAddress;
  }

  struct TableLandData {
    address tableOwner;
    string someMessage;
  }

  /*
   * @note this is the function that will get triggered when the user fills in the
   * form on the frontend. The frontend will pass in the user request as a struct
   */
  function processTimeCapsule(UserRequest memory userRequest) external {
    address nftAddress = mintNFT(userRequest.nftTypeId);
    // @dev this is will tokengate the data

    _applyAccessControl(userRequest.accessControlData, userrequest.cid);

    _writeToTableLand(userRequest.tableLandData);
  }

  /*******************************************
   ************ PRIVATE FUNCTIONS ************
   *******************************************/
  function _mintNFT(NftType _nftType) private returns (address) {
    if (_nftType == NftType.ERC721) {
      // create a standard ERC721 NFT
      address nftTokenAddress = nftFactory.mintNFT(tokenInfo.name);
      return nftTokenAddress;
    } else if (_nftType == NftType.ERC6239) {
      // create a soulbound NFT
      address soulboundTokenAddress = soulboundFactory.createSoulbound();
      return soulboundTokenAddress;
    } else {
      revert('Invalid NFT type');
    }

    emit NftMinted(nftTokenAddress);
  }

  /*
   * @dev Access control conditions are set by the user
   * @param cid data that needs to be tokengated
   * @note made a mistake here about accessControlCondition
   */
  function _applyAccessControl(
    uint256 accessControlData,
    string cid,
    address nftAddressForAccessControl
  ) private {
    // TODO use lighthouse smart contracts to add access control to the uploaded data
    // TODO this should probably return some data and that data should be stored in the NFT
    // TODO relevant data should also be emitted in an event
    // TODO return data that the _writeToTableLand function can use to write to user Table
    emit AccessControlApplied(cid);
  }

  function _writeToTableLand(string memory tableLandData) private {
    // TODO use tableland's TablelandController to create a table
  }
}
