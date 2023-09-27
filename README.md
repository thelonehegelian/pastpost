# Welcome to PastPost - Your Digital Time Capsule App!

__Important Links__

🌐 Visit our website: https://pastpost0.netlify.app/

🖼 Figma Design: https://www.figma.com/file/5N0HfSTAbYVFucjJGN4wDm/Untitled?type=design&node-id=14%3A901&mode=design&t=bfAor2erVecJbpVY-1

🎬 Presentation: https://www.canva.com/design/DAFuh9N574I/f3-itBd4cG2vO4705cqO3g/edit?utm_content=DAFuh9N574I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

📜 Smart Contracts: https://calibration.filscan.io/en/address/0xB594DA7542DE39E64518673F38BF25a085409249/

---

PastPost is a groundbreaking application that redefines how we preserve and experience memories. Imagine being able to create audio recordings, capture pictures, write heartfelt notes, and compose letters to your future self, friends, or family members. Now, picture locking these precious moments digitally, with only you holding the key to unlock them. Alternatively, you can entrust the key to someone else, sharing the anticipation and joy of revealing the memories together.

## Why PastPost?

In a world where memories are often confined to traditional photo albums or scattered across various devices, PastPost introduces a novel way to encapsulate your cherished moments. Through the power of blockchain technology and Non-Fungible Tokens (NFTs), we've crafted a platform that enables you to securely store your memories until a designated future date. The experience is designed to evoke a sense of wonder and excitement, reminiscent of opening a time capsule.

## Features

- Upload pictures, audios, videos, or text to create your Time Capsule
- Files are securely stored on the Filecoin decentralized storage network
- Each Time Capsule is tokenized using a unique NFT (Non-Fungible Token)
- Set an unlock date for your Time Capsule, allowing it to be opened on a specific future date
- The NFT is transferrable, enabling new and exciting use cases, such as transferring memories to loved ones
- Can support different NFT standards
- Utilizes FEVM for smart contracts, Filecoin storage via Lighthouse SDK/API, and Tableland for Time Capsule data storage

## Demo

__Note to the judges__:
- In the video demo it looks as if there are no transactions happening because there is no Metamask opening. Just to clarify, we had to edit those out as they were interfering with the recording and making it hard for us to record a consistent video. Rest assured, during the live demo at each click (where mentioned) a transaction is being signed and sent to the Filecoin Calibration network. 

To see the app in action, you can access the live version on Netlify. Here's a step-by-step demo:

1. Click on "Create Capsule" to start creating your Time Capsule.
2. Choose the media type (e.g., image) for your Time Capsule.
3. Click "Add Files" to upload your chosen media.
  3a. Uploading files triggers the Lighthouse SDK.
  3b. You will need to sign a message for verification.
4. Once the file is uploaded, proceed to apply Access Control and mint an NFT to the receiver address.
5. In this demo, we'll use the same address for both sender and receiver.
6. Specify a date for unlocking the Time Capsule. The app converts the timestamp into an estimated future block number for time-based access control.
7. Click "Create Capsule" to complete the process. This triggers two transactions:
7a. Minting the NFT and adding relevant data to the Tableland database.
7b. Applying access control via the Lighthouse SDK.
9. Congratulations! Your Time Capsule has been successfully created.

## Dashboard
The dashboard provides an overview of all capsules received and sent. Some key points to note:
- The data displayed includes both actual and dummy data, sourced from Tableland.
- A loading indicator may appear as data is retrieved from Tableland.
- Click on a specific capsule to view its contents
- __Note__: you might not be able to see the files you uploaded on the frontend yet, as some older data is hardcoded in the frontend. But you will be able to see the CID of your uploaded files in the console of the browser as shown in the demo. _That data is coming straight from Tableland_

## **Join the Journey:**

We invite you to be a part of this revolutionary way of preserving memories. Dive into the future of memory preservation, where blockchain meets sentimentality. Your participation can shape the evolution of PastPost and how we connect with our past selves. Contribute, engage, and create lasting memories with PastPost!

🌐 Visit our website: https://pastpost0.netlify.app/

Let's unlock the treasures of time together with PastPost!

---
## Running the App
- The app is deployed at: https://pastpost0.netlify.app/
- To run the app locally use command `pnpm run next dev`
