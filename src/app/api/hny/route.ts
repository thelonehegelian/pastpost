import { NextResponse } from 'next/server';
import { INFT } from '../types/interfaces';
import { createNFTTransactionValidate } from '../validators/NFT';

const createTransactionDetailsToSend = (txDetails: INFT) => {
  if (createNFTTransactionValidate(txDetails)) {
    // Data is valid according to the schema
    console.log('Data is valid.');
  } else {
    console.error('Data is invalid:', createNFTTransactionValidate.errors);
  }

  // @todo create the transaction

  // @todo return the transaction
  return txDetails;
};

export async function POST(request: Request) {
  const { message, owner, unlockDate } = await request.json();
  console.log('message', message);

  const txDetails = createTransactionDetailsToSend({ message, owner, unlockDate });

  // @todo parse the data
  // @todo validate the data

  // send the data to contract
  //  wait for the transaction to be mined
  //  return the transaction hash
  //  return the transaction receipt
  //  return the transaction status
  //  send user success message
  return NextResponse.json({ message: 'I am working', success: false });
}
