import React from 'react';
import {connect} from 'react-redux';
import firebase from 'firebase';


const SignButton = ({user}) => {
   const logInButton = (
      <button onClick={loggingIn}>LogIn</button>
   )
   const logOutButton = (
         <button onClick={loggingOut}>LogIn</button>
      )
   return (
      <div>
         {user}
         {user? logOutButton: logInButton}
      </div>
   )
}


const mapStateToProps = (state) => ({
   user : state.user
})

const SignButtonContainer = connect(mapStateToProps)(SignButton)

const loggingIn = () => {
   var provider = new window.firebase.auth.GoogleAuthProvider();
   firebase.auth.signInWithPopup(provider).then( result => {
      console.log('success')
   }).catch( error => { console.warn('Error logging in:', error) });
}
const loggingOut = () => {
   window.firebase.auth().signOut();
}


export default SignButtonContainer
