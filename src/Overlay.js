import React, { forwardRef } from "react"

const Overlay = forwardRef(({ caption, scroll }, ref) => (
  <>
  <div
    ref={ref}
    onScroll={(e) => {
      scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
      caption.current.innerText = scroll.current.toFixed(2)
    }}
    class="scroll">
    <div style={{ height: "400vh" }}>
      <div class="dot">
        <h1>GAMIII</h1>
        A blockchain platform for web3 gaming.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>virtual economies</h1>
        Users have true ownership of in-game assets as NFTs. There are also inter- and intra- game markets for NFTs, game mods, games, betting, and more.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>on-chain gaming and decentralized game hosting</h1> Complex on-chain games are made possible thanks to SKALE's filestorage feature. GAMEIII will some on-chain games, including chess, checkers, mao, and card games.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>play to earn</h1>Through tournaments, betting, rewards, staking, and more.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>Game DAOs</h1> Protocol for game-specific DAOs as well as DAOs for genre clusters and special interests.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>zero transaction fees</h1> Thanks to SKALE's zero-gas-fee network.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>stay tuned</h1>This project is in active development. Feel free to <a href="mailto:twizzwrrld@gmail.com">reach out.</a>
      </div>
    </div>
    <span class="caption" ref={caption}>
    <div style={{fontFamily: "Anurati"}}>GAMI I I</div>
    </span>


  </div>
  

  </>
))

export default Overlay
