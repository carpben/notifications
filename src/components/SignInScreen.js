import React from 'react'
import '../styles/SignInScreen.css'
import SignButtonContainer from '../containers/SignButtonContainer.js'


const SignInScreen = () => (
        <div className="sign-in-screen">
            <header>
               <div className="take50"></div>
               <div className="flex-w">
                  <h1>Next</h1>
                  <h3>A smart to-do app</h3>
                  <SignButtonContainer />
               </div>
            </header>
        </div>
    )

export default SignInScreen
