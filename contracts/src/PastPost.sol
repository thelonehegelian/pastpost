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
        address sender;        
        address receiver;
        address nftContract;
        uint unlockTime;
    }

    mapping(address => address[]) public userNftContracts;
    Capsule[] public timeCapsules;
    
    event TimeCapsuleCreated(address sender, address receiver, address nft, uint unlockTime);

    constructor() {
        tableId = TablelandDeployments.get().create(
            address(this),
            SQLHelpers.toCreateFromSchema(
                "id integer primary key,"
                "sender text,"
                "receiver text," 
                "nft text," 
                "unlockTime integer,"
                "cid text",
                TABLE_PREFIX
            )
        );
    }

    function tableName() external view returns (string memory) {
        return SQLHelpers.toNameFromId(TABLE_PREFIX, tableId);
    }

    function createTimeCapsule(address _receiver, uint _unlockTime, string[] memory _rows) public returns(address) {
        NFTContract nft = new NFTContract();
        userNftContracts[msg.sender].push(address(nft));
        Capsule memory newCapsule = Capsule({
            sender: msg.sender, 
            receiver: _receiver,
            nftContract: address(nft),
            unlockTime: _unlockTime
        });
        timeCapsules.push(newCapsule);
        nft.safeMint(msg.sender, uri);
        nft.safeMint(_receiver, uri);
        nft.transferOwnership(msg.sender);

        TablelandDeployments.get().mutate(
            address(this),
            tableId,
            SQLHelpers.toBatchInsert(
                TABLE_PREFIX,
                tableId,
                "sender,receiver,nft,unlockTime,cid",
                _rows
            )
        );

        emit TimeCapsuleCreated(msg.sender, _receiver, address(nft), _unlockTime);

        return address(nft);
    }

    function setURI(string memory _uri) public onlyOwner {
        uri = _uri;
    }
}
