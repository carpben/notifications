import React from 'react'
import Drawer from 'material-ui/Drawer';
import {connect} from 'react-redux'
import '../styles/AboutDraw.css'
import {toggleAboutDraw, loadTaskExamples} from '../actions'
import {Button} from 'react-bootstrap'

const AboutDraw = (props) => {

   return (
      <Drawer
        docked={false}
        width={450}
        open={true}
        openSecondary={true}
        containerClassName="about-draw"
        onRequestChange={(open) => {
           console.log(51)
           props.toggleAboutDraw()
        }}
      >
         <h2>Welcome To Next!</h2>
         <p>Next is another to-do app, but it's a bit different. It's based on 3 principles:</p>
            <ol>
               <li>Focus on the next step, hence the "next Action" field.</li>
               <li>priority counts. Hence the importance field. The more important tasks show first.</li>
               <li>An important part of handling a task is deciding when it should pop-up again. Managing snooze should be as easy as possible.</li>
            </ol>
         <p>So go ahead give it a go, and start adding tasks and reminders.</p>
         <p>If you just want to check out the app, click the button below to load some task examples.</p>
          <Button bsStyle="primary" onClick={props.loadTaskExamples}>Load Task Examples</Button>
          <p>My name is Ben Carp, and I developed this app out of my own experience and needs.
          Your feedback counts. Seriously. Feel free to provide feedback, request features and report bugs either to this
          <a href="https://github.com/carpben/notifications/issues"> github repository</a>, or directly to
          <a href="mailto:carpben123@gmail.com">my email</a>.
          Cheers!
          </p>
          <footer>
          <p>At persent the app is build to display on computers, and devices more than 1000 pixels wide. </p>

          Created with: React, Create React App, Redux, React-Redux, Firebase, Bootstrap, React-Bootstrap, Material-Ui, Font Awesome and more. </footer>

      </Drawer>
   )
}


const mapDispatchToProps = (dispatch) =>({
   toggleAboutDraw : () =>   dispatch(toggleAboutDraw()),
   loadTaskExamples : () => dispatch(loadTaskExamples())
})

const mapStateToProps = (state) => ({
   showAbout:state.display.showAbout
})

const AboutDrawContainer = connect(mapStateToProps, mapDispatchToProps)(AboutDraw)

export default AboutDrawContainer
