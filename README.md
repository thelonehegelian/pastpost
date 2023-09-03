# Welcome to PastPost - Your Digital Time Capsule App!

PastPost is a groundbreaking application that redefines how we preserve and experience memories. Imagine being able to create audio recordings, capture pictures, write heartfelt notes, and compose letters to your future self, friends, or family members. Now, picture locking these precious moments digitally, with only you holding the key to unlock them. Alternatively, you can entrust the key to someone else, sharing the anticipation and joy of revealing the memories together.

## Why PastPost?

In a world where memories are often confined to traditional photo albums or scattered across various devices, PastPost introduces a novel way to encapsulate your cherished moments. Through the power of blockchain technology and Non-Fungible Tokens (NFTs), we've crafted a platform that enables you to securely store your memories until a designated future date. The experience is designed to evoke a sense of wonder and excitement, reminiscent of opening a time capsule.

## **Key Features:**

- **Create:** Record audio snippets, capture images, and compose heartfelt notes or letters – all within the app.
- **Lock Digitally:** Safeguard your memories by locking them digitally using NFTs on the blockchain.
- **Key Control:** You hold the key to unlock your memories when the time is right, adding an element of anticipation.
- **Share the Key:** Optionally, share the key with trusted individuals, making memory unveiling a shared experience.
- **Blockchain Security:** Benefit from the security and immutability of blockchain, ensuring your memories remain untouched.
- **User-Friendly:** Our intuitive interface makes creating, storing, and unlocking memories a seamless experience.

## **How It Works:**

1. **Create Your Capsule:** Craft your memories by recording audio, snapping pictures, and penning your thoughts. Compile them into a digital time capsule.
   
2. **Lock with NFT:** Convert your capsule into an NFT, locking it securely on the blockchain. Only you have the power to unlock it.
   
3. **Anticipation Builds:** As time passes, the anticipation of unlocking your capsule grows. You might choose to keep it to yourself or share it with a friend.

4. **Unlock and Rejoice:** When the specified time arrives, unlock your capsule and relish the emotions of revisiting moments from the past. Whether it's nostalgia, surprise, or reflection, the experience is uniquely yours.

## **Join the Journey:**

We invite you to be a part of this revolutionary way of preserving memories. Dive into the future of memory preservation, where blockchain meets sentimentality. Your participation can shape the evolution of PastPost and how we connect with our past selves. Contribute, engage, and create lasting memories with PastPost!

🌐 Visit our website: [https://www.pastpostapp.com](https://www.pastpostapp.com)  
📧 Contact us: contact@pastpostapp.com  
🐦 Follow us on Twitter: [@PastPostApp](https://twitter.com/PastPostApp)  

Let's unlock the treasures of time together with PastPost!

---


This is a [Next.js](https://nextjs.org) + [Foundry](https://book.getfoundry.sh/) + [wagmi](https://wagmi.sh) project bootstrapped with [`create-wagmi`](https://github.com/wagmi-dev/wagmi/tree/main/packages/create-wagmi)

# Getting Started

Run `npm run dev` in your terminal, and then open [localhost:3000](http://localhost:3000) in your browser.

Once the webpage has loaded, changes made to files inside the `src/` directory (e.g. `src/pages/index.tsx`) will automatically update the webpage.

# Generating ABIs & React Hooks

This project comes with `@wagmi/cli` built-in, which means you can generate wagmi-compatible (type safe) ABIs & React Hooks straight from the command line.

To generate ABIs & Hooks, follow the steps below.

## Install Foundry

First, you will need to install [Foundry](https://book.getfoundry.sh/getting-started/installation) in order to build your smart contracts. This can be done by running the following command:

```
curl -L https://foundry.paradigm.xyz | bash
```

## Generate code

To generate ABIs & React Hooks from your Foundry project (in `./contracts`), you can run:

```
npm run wagmi
```

This will use the wagmi config (`wagmi.config.ts`) to generate a `src/generated.ts` file which will include your ABIs & Hooks that you can start using in your project.

[Here is an example](./src/components/Counter.tsx) of where Hooks from the generated file is being used.

# Deploying Contracts

To deploy your contracts to a network, you can use Foundry's [Forge](https://book.getfoundry.sh/forge/) – a command-line tool to tests, build, and deploy your smart contracts.

You can read a more in-depth guide on using Forge to deploy a smart contract [here](https://book.getfoundry.sh/forge/deploying), but we have included a simple script in the `package.json` to get you started.

Below are the steps to deploying a smart contract to Ethereum Mainnet using Forge:

## Install Foundry

Make sure you have Foundry installed & set up.

[See the above instructions](#install-foundry).

## Set up environment

You will first need to set up your `.env` to tell Forge where to deploy your contract.

Go ahead and open up your `.env` file, and enter the following env vars:

- `ETHERSCAN_API_KEY`: Your Etherscan API Key.
- `FORGE_RPC_URL`: The RPC URL of the network to deploy to.
- `FORGE_PRIVATE_KEY`: The private key of the wallet you want to deploy from.

## Deploy contract

You can now deploy your contract!

```
npm run deploy
```

# Developing with Anvil (Mainnet Fork)

Let's combine the above sections and use Anvil alongside our development environment to use our contracts (`./contracts`) against an Ethereum Mainnet fork.

## Install Foundry

Make sure you have Foundry installed & set up.

[See the above instructions](#install-foundry).

## Start dev server

Run the command:

```
npm run dev:foundry
```

This will:

- Start a Next.js dev server,
- Start the `@wagmi/cli` in [**watch mode**](https://wagmi.sh/cli/commands/generate#options) to listen to changes in our contracts, and instantly generate code,
- Start an Anvil instance (Mainnet Fork) on an RPC URL.

## Deploy our contract to Anvil

Now that we have an Anvil instance up and running, let's deploy our smart contract to the Anvil network:

```
pnpm run deploy:anvil
```

## Start developing

Now that your contract has been deployed to Anvil, you can start playing around with your contract straight from the web interface!

Head to [localhost:3000](http://localhost:3000) in your browser, connect your wallet, and try increment the counter on the Foundry chain.

> Tip: If you import an Anvil private key into your browser wallet (MetaMask, Coinbase Wallet, etc) – you will have 10,000 ETH to play with 😎. The private key is found in the terminal under "Private Keys" when you start up an Anvil instance with `npm run dev:foundry`.

# Learn more

To learn more about [Next.js](https://nextjs.org), [Foundry](https://book.getfoundry.sh/) or [wagmi](https://wagmi.sh), check out the following resources:

- [Foundry Documentation](https://book.getfoundry.sh/) – learn more about the Foundry stack (Anvil, Forge, etc).
- [wagmi Documentation](https://wagmi.sh) – learn about wagmi Hooks and API.
- [wagmi Examples](https://wagmi.sh/examples/connect-wallet) – a suite of simple examples using wagmi.
- [@wagmi/cli Documentation](https://wagmi.sh/cli) – learn more about the wagmi CLI.
- [Next.js Documentation](https://nextjs.org/docs) learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
