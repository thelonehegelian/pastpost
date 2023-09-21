// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./NFTContract.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@tableland/evm/contracts/utils/TablelandDeployments.sol";
import "@tableland/evm/contracts/utils/SQLHelpers.sol";

contract PastPost is Ownable, ERC721Holder {
    uint256 private tableId;
    string public constant TABLE_PREFIX = "pastpost"; 

    string public uri = "";

    struct Capsule {
        address owner;
        address nftContract;
    }

    mapping(address => address[]) public userNftContracts;
    Capsule[] public timeCapsules;
    
    event TimeCapsuleCreated(address owner, address nft);

    constructor() {
        tableId = TablelandDeployments.get().create(
            address(this),
            SQLHelpers.toCreateFromSchema(
                "id integer primary key,"
                "capsule text,"
                "cid text",
                TABLE_PREFIX
            )
        );
    }

    function tableName() external view returns (string memory) {
        return SQLHelpers.toNameFromId(TABLE_PREFIX, tableId);
    }

    function createTimeCapsule(address receiver) public returns(address) {
        NFTContract nft = new NFTContract();
        userNftContracts[msg.sender].push(address(nft));
        Capsule memory newCapsule = Capsule({owner: msg.sender, nftContract: address(nft)});
        timeCapsules.push(newCapsule);
        nft.safeMint(msg.sender, uri);
        if (receiver != msg.sender) {
            nft.safeMint(receiver, uri);
        }
        nft.transferOwnership(msg.sender);

        emit TimeCapsuleCreated(msg.sender, address(nft));

        return address(nft);
    }

    function insertIntoTable(address _nft, string[] calldata _cids) external {
        string[] memory values = new string[](_cids.length);
        for (uint i = 0; i < _cids.length; i++) {
            values[i] = string(abi.encodePacked("'", _nft, " ", _cids[i], "'"));
        }

        TablelandDeployments.get().mutate(
            address(this),
            tableId,
            SQLHelpers.toBatchInsert(
                TABLE_PREFIX,
                tableId,
                "capsule, cid",
                values
            )
        );
    }

    function setURI(string memory _uri) public onlyOwner {
        uri = _uri;
    }


}
