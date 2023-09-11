import { NextResponse } from "next/server";

// TODO move to types folder
interface HappyNewYearNFT {
  nftTitle: string;
  message: string;
  owner: string;
  receiverAddress: string;
  unlockDate: string;
  senderName?: string;
  senderAddress?: string;
}

const validateTransactionDetails = (txDetails: HappyNewYearNFT) => {}
const createTransactionDetailsToSend = (txDetails: HappyNewYearNFT) => {
  
  // @todo create the transaction

  // @todo return the transaction
return txDetails;
}

export async function POST(request: Request) {
  const { message, owner, unlockDate } = await request.json();
  console.log("message", message);

const txDetails = createTransactionDetailsToSend({ message, owner, unlockDate });

// @todo parse the data
// @todo validate the data

// send the data to contract
//  wait for the transaction to be mined
//  return the transaction hash
//  return the transaction receipt
//  return the transaction status
//  send user success message
return NextResponse.json({ message: "I am working", success: false });
}
