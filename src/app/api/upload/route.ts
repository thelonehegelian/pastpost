import { NextResponse } from 'next/server';
export async function POST(request: Request) {

    // TODO 
    // 1. get the file from the request
    // 2. save the file to the file system
    // 3. return the file path and status code 200
  return new Response('Hello world!');
}
