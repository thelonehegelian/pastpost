// NOTE this route is called when user clicks on Mint NFT button
// TODO maybe handle this simply at the frontend?
// NOTE since we need lighthouse response to be sent to the NFT we have a hacky solution for now
import { NextResponse } from 'next/server';
export async function POST(request: Request) {
  // Workflow:
  // 1. get locally saved response from lighthouse
  // 2. send it to the NFT contract
  // 3. mint NFT
  // 4. return NFT to the user
  return new Response('Hello world!');
}
