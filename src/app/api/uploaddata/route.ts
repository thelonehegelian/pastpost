/*
 * The best solution to 1.uploading, 2. minting, 3. tableland table creation
 * is to create a single entry smart contract and let it call all the write functions on lighthouse, nftFactory, and Tableland
 *
 * Here we take the easy but not a user-friendly way out for the Demo app
 * */

import { NextResponse } from 'next/server';
import lighthouse from '@lighthouse-web3/sdk';

// interface LighthouseResponse { }

const api_key = process.env.API_KEY || '';
const uploadFile = async (filePath: string, api_key: string | undefined) => {
  const path = filePath; // Provide the path to the file
  const apiKey = api_key

  // PROBLEM: how can there be access control without the NFT address?
  // SOLUTION: We can ignore this for the demo and just fake it 


  // Generate the API key from https://files.lighthouse.storage/ 
  //or using CLI (lighthouse-web3 api-key --new)

  // Both files and folders are supported by the upload function
  const response = await lighthouse.upload(path, apiKey);

  console.log(response);
  console.log("Visit at: https://gateway.lighthouse.storage/ipfs/" + response.data.Hash);

  const responseObj = { responseFromLightHouse: response, dataUrl: `https://gateway.lighthouse.storage/ipfs/${response.data.Hash}` };
  return responseObj;
}


export async function POST(request: Request) {
  console.log(request);

  // NOTE: file path would be local to the project directory for our demo
  const responseFromLightHouse = uploadFile("path/to/file", process.env.API_KEY);
  // TODO send response that the "data was uploaded to Filecoin" + whatever the response object was
  // TODO save the response in a json locally, we need this to create an NFT
  // NOTE: a hacky solution for now

  // NOTE: this will change the button to "Mint NFT"
  return new Response('Hello world!');
}
