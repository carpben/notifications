import React from 'react'
import '../styles/SignInScreen.css'
import SignButtonContainer from '../containers/SignButtonContainer.js'


const SignInScreen = () => (
        <div className="welcome-screen">
            <div className="centered-box">

               <header>
                  <div className="left-space"></div>
                  <div className="flex-w">
                     <h1>Next</h1>
                     <h3>A smart to-do app</h3>
                     <SignButtonContainer />
                  </div>
               </header>
               <div className="intro">
                  <div className="left-space"></div>
                  <p>Next is another to-do app, but it's a bit different. It helps you focus on what's important.
                  No signup is necessary, and you can simply login with Google</p>
               </div>
               </div>
        </div>
    )

export default SignInScreen
