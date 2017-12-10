import React, {Component} from 'react'
import Header from '../components/Header'
import SignInScreen from '../components/SignInScreen.js'
import NotificationsTableContainer from './NotificationsTableContainer'
import {connect} from 'react-redux'
// import Footer from './Footer.js'
import '../styles/App.css'
import {setUser, createUserState} from '../actions'
import {fireAuth} from '../fire.js'


class App extends Component {

   // constructor (props){
   //    super (props)
   // }

   componentWillMount(){
      fireAuth.onAuthStateChanged( user => {
         this.props.setUser(user);
         if(user){
            console.log()
            this.props.createUserState(user.uid)
            }
         })
   }

   render () {
      if (this.props.user){
         return (
            <div>
               <Header />
               <main className="inner-w">
                  <NotificationsTableContainer />
               </main>
           </div>
         )
      }
      return <SignInScreen />
   }

}

const mapStateToProps = state => ({user:state.user})

const mapDispatchToProps = dispatch => {
   return {
      setUser:  user => {
         dispatch(setUser(user))
      },
      createUserState: userId => dispatch(createUserState(userId))
   }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)


export default AppContainer
// test   dfg
