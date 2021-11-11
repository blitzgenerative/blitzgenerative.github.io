---
layout: page
title: About
permalink: /about/
---

Blitz Generative is helping push the boundaries on crypto-native generative artwork.

Generative art has existed since the first years of computing (e.g. the [Minksytron](https://www.masswerk.at/minskytron/)) but has never been in the limelight. This is especially the case for dynamic pieces that evolve over time. People have put up paintings, pictures and sculptures in their homes and museums but even with cheap LCD screens, very rarely displays of generative art.

Things are fundamentally different with NFTs on the block chain. Not only is the code to produce the pieces immutably stored, and the code to run it stored in an [Arctic Vault](https://archiveprogram.github.com/arctic-vault/), but also each minted piece can be one of a kind to the original minter, setting parameters to produce works of art not even the creator has seen or imagined. When combined with the meta-verse, NFTs and generative artwork in particular are a powerful expression of human creativity and aesthetic. And this is just the beginning.

<br>

<div align="center">
  <img width="500"  src="/assets/images/SiliconWafer.png">
  <br>
  <em> A Silicon Wafer, vectorized. </em>  
</div>

<br>

Inspired by the pioneers of crypto-native generative art like [Larva Labs](https://www.larvalabs.com/autoglyphs) and [Deafbeef](https://www.deafbeef.com/), Blitz Generative has its own ERC721 smart contract to mint and sell its token, <em>Blitz</em>.

Our contract can be found [here](https://etherscan.io/address/0x08e8bd2b24ebef3ef407aca9db13436d3fce25c2) and is built off of open source, battle tested code from both [OpenZeppelin](https://openzeppelin.com/) and [Deafbeef](https://etherscan.io/address/0xd754937672300ae6708a51229112de4017810934#code). Having our own contract gives us full ownership of our work, without the fees and centralized control of NFT minting via [marketplaces](https://opensea.io/) -- antithetical to the decentralized dream of Satoshi Nakamoto. It also gives us complete artistic freedom to experiment with new ways of issuing tokens and ways to create art.

50% of all proceeds will be donated to [GiveDirectly](https://www.givedirectly.org/), a [GiveWell](https://www.givewell.org/) top rated charity. In addition, we are interested in helping to further open source the creation of NFTs outside of centralized minting contracts and are happy to help other interested artists in deploying their own work.

## FAQs

- **Who is behind Blitz Generative?**

Blitz Generative is a pseudo-anonymous collective of artificial intelligence researchers. Separate interests in generative art and blockchains met each other, fell in love, and Blitz Generative is their child.

- **How do I obtain a Blitz art piece?**

Mint one yourself by heading to the relevant series, connecting your MetaMask account, and clicking the purchase button. Stay on the screen to see how to generate the work yourself or wait for the results to be uploaded onto the website.

If all pieces are sold out then you may be able to find them on secondary marketplaces.

- **What are the details of the Blitz Generative smart contract?**

The smart contract that can be found at: [https://etherscan.io/address/0x08e8bd2b24ebef3ef407aca9db13436d3fce25c2
](https://etherscan.io/address/0x08e8bd2b24ebef3ef407aca9db13436d3fce25c2
). It is a combination of gold standard safety for NFT ERC721 tokens from [OpenZeppelin](https://openzeppelin.com/) with additional code to manage different art series, prices, and code upload taken from [Deafbeef](https://etherscan.io/address/0xd754937672300ae6708a51229112de4017810934#code) and [ArtBlocks](https://etherscan.io/address/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270#readContract).

Functions in the contract that you may be interested in calling:
<ul class="dashed">
  <li> tokensOfOwner(owner address) - Returns all Blitz tokens owned by a particular address.</li>
  <li> ownerOf(tokenID) - Returns the current owner of a particular token.</li>
  <li> totalSupply() - Returns the total number of tokens that have been minted.</li>
  <li> getTokenParams(tokenID, scriptIndex) - Returns all the details of a specific token including its unique random seed, the series it is part of, the code stored at the "ScriptIndex" location (should normally be 0), the secondary market royalty percentage, and the number of times it has been transacted.</li>
  <li> getSeries(seriesID, scriptIndex) - Returns the code stored at the "ScriptIndex" location (should normally be 0), the number of locations where code is stored, the number of tokens that have been minted, the mint ceiling, the current price per token (in wei), the secondary market royalty percentage, if purchasing is paused, and if the series is locked. Locking the series is irreversible and makes it impossible for anyone (including the contract admin) from changing the code scripts that have been added and the maximum number of tokens in the series that can be minted. This guarantees there is a finite number of artworks.</li>
</ul>

<br>
<br>

- **What code is used to make the generative art pieces?**

For the first "SpikeBall" series, Processing is used. An implementation in p5.js was made to run in the browser but the web rendering is too slow of the number of vertices being displayed. Not wanting to compromise the artwork, information on how to render these pieces is below. Future works may continue to use Processing, or p5.js or whatever other tool needed for the creative output. Processing and p5.js will be libraries that likely exist until the end of time because they are so popular and it have been stored in the GitHub [Arctic Vault](https://archiveprogram.github.com/arctic-vault/).

*"The archive is located in a decommissioned coal mine in the Svalbard archipelago, closer to the North Pole than the Arctic Circle. GitHub captured a snapshot of every active public repository on 02/02/2020 and preserved that data in the Arctic Code Vault."*

<br>

- **How can I generate a SpikeBall? Upon purchasing the piece, if you stay on the page, all the necessary information including the unique seed connected to your artwork will be provided. All you need to do is:**

1. Download Processing version 3.5.4 on a computer: <a href="https://github.com/processing/processing/releases/download/processing-0270-3.5.4/processing-3.5.4-macosx.zip" target="_blank" rel="noopener noreferrer">Mac Download</a>, <a href="https://github.com/processing/processing/releases/download/processing-0270-3.5.4/processing-3.5.4-windows64.zip" target="_blank" rel="noopener noreferrer">Windows Download</a>. <a href="https://processing.org/download" target="_blank" rel="noopener noreferrer"> General Processing download site</a>.

2. Copy and paste the code for this series which is permanently hosted on the blockchain and can be found at the bottom of the series section.

3. Paste at the top line <code>rs=SEED</code> your unique random seed.
