/*
* The ideal solution is to have a single entry smart contract to perform following operation within a single transaction:
* 1. upload the file using lighthouse with Access Control
* 2. mint a capsule (NFT) using lighthouse return data
* 3. create table on Tableland for the user (if does not exist) and update the table with capsule data 
* 
* But here we simulate a single transaction using SDKs for lighthouse and Tableland
* so we will just use a private key from .env file to sign the transactions
* 1. use clicks Create Capsule on the frontend
* 2. frontend will call this API
* 3. this API will call lighthouse to upload the file
* 4. this API will call lighthouse to mint a capsule (NFT)
* 5. this API will call Tableland to create a table for the user (if does not exist) and update the table with capsule data
* 6. this API will return the capsule data to the frontend
* 7. Tableland is queried using the same private keys to display data on the frontend
* */

/* NOTE For on-simulated solution using SDKs see the following routes:
 * 1. uploaddata
*  2. mintcapsule
*  3. createtable
 * */

/*
 * NOTE For single contract implementation see the contracts folder
 * */


import { NextResponse } from 'next/server';
export async function GET(request: Request) {
  console.log(request);
  return new Response('Hello world!');
}
