import React, { useState } from 'react'

import Header from 'src/components/header'
import Main from './components/Main'
import Footer from 'src/components/footer'

import welcomeSvg from 'src/assets/welcome.svg'

const sliders = [
  {
    id: 1,
    domElement: (
      <div className='welcome-message'>
        <div id='welcome'>
          <img className='w-[372px]' alt='welcome' src={welcomeSvg} />
        </div>
        <span>
          <p>My name is Ahmed Mohamed, I'm a front-end developer based in Canada. A results-driven Front-End Developer with over 5 years of experience, specializing
            in web development, mobile development, and project management. </p>
          <p>
            A proven track record of collaborating cross-functionally with technical teams and stakeholders across all phases of the software development lifecycle. Adept at performing quality assurance testing for web applications.
          </p>
        </span>
      </div>
    )
  },
  {
    id: 2,
    projectName: 'AutoNinjas.com',
    domElement: (
      <div>
        <h3 className='text-[30px] mt-[60px] mb-[30px]'>AutoLeaseNinjas</h3>
        <div className='welcome-message'>
          <span>
            <p>AutoLeaseninjas is a car-leasing website which has a UI that allows customers to quickly search their best cars and can get services from the autoleaseninjas team. The stack is Node.js, Express.js and MongoDB for the backend/API's and React.js for the front-end. The git repository for this one is private at the moment.</p>
            <button>
              <a target="_blank" rel="noreferrer" href="https://autoninjas.com">View Site</a>
            </button>
          </span>
        </div>
      </div>
    )
  },
  {
    id: 3,
    projectName: 'Myria',
    domElement: (
      <div>
        <h3 className='text-[30px] mt-[60px] mb-[30px]'>Myria</h3>
        <div className='welcome-message'>
          <span>
            <p>Myria provides an npm package along with an SDK so that developers can use the service.
              Customers can create wallets using Metamask and all transactions are done on the L2 layer. Users can withdraw and deposit tokens from the l1 wallet to the l2 wallet and spend the withdrawn tokens on the nft marketplace at myria.com. It uses starkex solution.</p>
            <div className='flex space-x-[20px]'>
              <button>
                <a target="_blank" rel="noreferrer" href="https://myria.com">View Site</a>
              </button>
              <button>
                <a target="_blank" rel="noreferrer" href="https://www.npmjs.com/package/myria-core-sdk">NPM</a>
              </button>
            </div>
          </span>
        </div>
      </div>
    )
  },
  {
    id: 3,
    projectName: 'HI',
    domElement: (
      <div>
        <h3 className='text-[30px] mt-[60px] mb-[30px]'>HI</h3>
        <div className='welcome-message'>
          <span>
            <p>HI is a web3 company. It has its own token and wallet to withdraw and deposit Hi-Token. Available on Coin Marketplace. Users can create multiple premium accounts, each with their own profit. High Wallet has functions such as swap, withdrawal, deposit, token transfer, and staking.</p>
            <div className='flex space-x-[20px]'>
              <button>
                <a target="_blank" rel="noreferrer" href="https://hi.com">View Site</a>
              </button>
              <button>
                <a target="_blank" rel="noreferrer" href="https://web.hi.com">Wallet (Web Version)</a>
              </button>
            </div>
          </span>
        </div>
      </div>
    )
  }
]

export default function HomePage() {
  const [selected, setSelected] = useState(0);
  return (
    <div id='main-container' className='main-container'>
      <div id='main-container-inner' className='main-container-inner'>
        <div>
          <svg
            width="300"
            height="300"
            dataName="corner-top-left"
            xmlns="http://www.w3.org/2000/svg"
            style={{ pointerEvents: 'none' }}
            dataLnlinesvg=".inlineSvgFile-2">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0" stopColor="rgb(106, 75, 149)"></stop>
                <stop offset=".5" stopColor='rgb(98, 181, 98)'></stop>
                <stop offset="1" stopColor='rgb(106, 75, 149)'></stop>
              </linearGradient>
            </defs>
            <path style={{ fill: 'url(#grad1)' }} d="M8 0h292l-20 20H25a5 5 0 0 0-5 5v255L0 300V8a8 8 0 0 1 8-8Z">
            </path>
          </svg>
        </div>
        <div id='inner-container' className='inner-container'>
          <Header />
          <Main content={sliders[selected]} sliders={sliders} setSelected={setSelected} selected={selected} />
          <Footer />
          <div>
            <svg
              width="300"
              height="300"
              dataName="corner-bottom-right"
              xmlns="http://www.w3.org/2000/svg"
              style={{ pointerEvents: "none" }}
              dataInlinesvg=".inlineSvgFile-4"
            >
              <defs>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0" class="gradient1"></stop>
                  <stop offset=".5" class="gradient2"></stop>
                  <stop offset="1" class="gradient1"></stop>
                </linearGradient>
              </defs>
              <path fill="url('#grad2')" d="M292 300H0l20-20h255a5 5 0 0 0 5-5V20l20-20v292a8 8 0 0 1-8 8Z">
              </path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
