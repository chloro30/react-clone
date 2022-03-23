import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className='hero'>
        <div className='container'>
            {/* Left Side */}
            <div className='left'>
                <p>Buy & Sell Crypto 24/7 using your retiremen account</p>
                <h1>Invest in Cryptocurrency with Your IRA</h1>
                <p>Buy, Sell, and store hundreds of cryptocurrencies</p>
                <div className='input-container'>
                    <input type='email' placeholder='Enter your email' />
                    <button className='btn'>Learn More</button>
                </div>
            </div>
            {/* Right Side */}
        </div>
    </div>
  )
}

export default Hero