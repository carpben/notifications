import React from 'react'
import '../styles/Header.css'
import SignButtonContainer from '../containers/SignButtonContainer.js'
import AboutButton from './AboutButton.js'


const Header = () => (
        <header>
            <div className="inner-w">
               <div className="flex-w">
                  <h1>Next</h1>
                  <h3>A smart to-do app</h3>
                  <SignButtonContainer />
                  <AboutButton />
               </div>
            </div>
        </header>
    )

export default Header
