import React, {Component} from 'react'
import Header from '../components/Header'
import SignInScreen from '../components/SignInScreen.js'
import NotificationsTableContainer from './NotificationsTableContainer'
import {connect} from 'react-redux'
// import Footer from './Footer.js'
import '../styles/App.css'
import {setUser, createUserState} from '../actions'
import {fireAuth} from '../fire.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import {Card} from 'material-ui/Card';
// import Drawer from 'material-ui/Drawer';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';


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
            <MuiThemeProvider >
               <div className="App-w">
                  <Header />
                  <main className="inner-w">
         {/*            <Drawer
                       docked={false}
                       width="200px"
                       open={true}
                       openSecondary={true}
                     >
                        <p>a'sdfk;akdfkl;;saldkf'kl;sadf;lk;'asdklf asdfk;kl;asdf
                        asdfasdfsadfasdfasdf    sdaf;l;'klasd;flk  sadf;lk;kl;klasdf ;lk l;jksadf'l;k;'klasdf ;lksdf'</p>
                     </Drawer>*/}
                        <NotificationsTableContainer />
                  </main>
               </div>
           </MuiThemeProvider>
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
