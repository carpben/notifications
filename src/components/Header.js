import React from 'react'
import './Header.css'
import SignButtonContainer from '../containers/SignButtonContainer.js'


const Header = () => (
        <header>
            <h1>
               Next
               <small>A smart to-do app</small>
            </h1>
            <SignButtonContainer />
        </header>
    )

export default Header
