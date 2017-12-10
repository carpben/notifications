import React from 'react';
import {connect} from 'react-redux';
import firebase from 'firebase';
import {fireAuth} from '../fire.js'

const loggingIn = () => {
   var provider = new firebase.auth.GoogleAuthProvider();
   fireAuth.signInWithPopup(provider)
   .then( result => {
      console.log('success')
   }).catch( error => { console.warn('Error logging in:', error) });
};
const loggingOut = () => {
   fireAuth.signOut();
}

const SignButton = ({user}) => {
   const logInButton = (
      <button type="button" className="btn btn-link btn-lg sign-btn" onClick={loggingIn}>LogIn</button>
   )
   const logOutButton = (
         <button type="button" className="btn btn-link sign-btn" onClick={loggingOut}>LogOut</button>
      )
   return (
      <div>
         {user? logOutButton: logInButton}
      </div>
   )
}


const mapStateToProps = (state) => ({
   user : state.user
})

const SignButtonContainer = connect(mapStateToProps)(SignButton)




export default SignButtonContainer
