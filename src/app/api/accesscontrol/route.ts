import { NextApiRequest } from 'next';
import lighthouse from '@lighthouse-web3/sdk';
import path from 'path';

// @note folder cannot be empty
const uploadPath = `${path.join(process.cwd(), 'uploadDir')}/basset.jpeg`;

const API_KEY = 'de1443ca.854cd879e421475f935d4e74126035f7';
export async function POST(req: Request) {
  const { signedMessage, publicKey } = await req.json();
  console.log('signedMessage', signedMessage);
  //     // TODO
  //     // 1. get public key from request
  //     // 2. get signed message from request
  //     // 3. use lighthouse  await lighthouse.uploadEncrypted to upload encrypted data
  //     // 4. return response with the file location
  //

  const uploadFile = async () => {
    const path = uploadPath; // Provide the path to the file
    const apiKey = API_KEY;
    // Generate the API key from https://files.lighthouse.storage/
    //or using CLI (lighthouse-web3 api-key --new)

    // Both files and folders are supported by the upload function
    const response = await lighthouse.upload(path, apiKey);

    console.log(response);
    console.log('Visit at: https://gateway.lighthouse.storage/ipfs/' + response.data.Hash);
    return response;
  };

  const uploadFileRes = await uploadFile();
  console.log(uploadFileRes.data.Hash);
  // const deployEncrypted = async (_filePath, _publiKey, _signedMessage) => {
  //   const uploadResponse = await lighthouse.uploadEncrypted(
  //     _filePath,
  //     API_KEY,
  //     _publiKey,
  //     _signedMessage,
  //   );
  //   console.log(uploadResponse);
  // };

  // deployEncrypted(uploadPath, publicKey, signedMessage);

  // console.log(deployEncryptedResponse);
  // // TODO create NFT and get back the NFT address, maybe do this on the frontend? with 1. "Mint TimeCapsule" 2. "Finalize Time Capsule" 3. "See Time Capsule"

  // const getNftAddress = async (_publicKey, _signedMessage) => {}
  // const timeCapsuleNft = getNftAddress(publicKey, signedMessage);

  interface AccessConditions {
    id: number;
    chain: string;
    method: string;
    standardContractType: string;
    returnValueTest: {
      comparator: string;
      value: string;
    };
  }

  //       // NFT based access condition
  const nftAccessConditions = {
    id: 1,
    chain: 'Calibration',
    method: 'balanceOf',
    standardContractType: 'ERC721',
    contractAddress: '0x1a6ceedD39E85668c233a061DBB83125847B8e3A',
    returnValueTest: { comparator: '>=', value: '1' },
    parameters: [':userAddress'],
  };

  //       const timeAccessConditions = { id: 1,
  //         chain: "Optimism",
  //         method: "getBlockNumber",
  //         standardContractType: "",
  //         returnValueTest: {
  //             comparator: ">",
  //                 value: "133493"
  //          },};

  if (uploadFileRes.data.Hash) {
    const cid = uploadFileRes.data.Hash;
    const accessConditionConfigs = {
      publicKey,
      cid,
      signedMessage,
      nftAccessConditions,
      aggregator: '([1])',
    };
    const applyAccessConditions = async (
      _cid: string,
      _accessConditions: AccessConditions,
      _accessConditionConfigs,
    ) => {
      // Only the owner of the file can apply access conditions
      const cid = _cid;
      // Conditions to add
      const conditions = [_accessConditions];
      const aggregator = '([1])';
      const response = await lighthouse.applyAccessCondition(
        publicKey,
        cid,
        signedMessage,
        conditions,
        aggregator,
      );

      return response;
    };

    const applyAccessConditionsResponse = await applyAccessConditions(
      'QmS17GwQX58u2zpH8D415T5ZYXqWjE3Fn25zPAFLNzzYNJ',
      nftAccessConditions,
      accessConditionConfigs,
    );
    console.log(applyAccessConditionsResponse);
  }
  return new Response('Access Control');
}
