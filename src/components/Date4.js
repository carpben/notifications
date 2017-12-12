import React, {Component} from 'react';
import DatePicker from 'material-ui/DatePicker';


class Date4 extends Component {
   constructor (props) {
      super (props)
      this.state = {
         displayDayPicker: false
      }
   }
   showDisplay = () => {
      this.setState({displayDayPicker:true})
      this.dp.openDialog();
   }
   hideDisplay = () => {
      this.setState({displayDayPicker:false})
   }
   changeDate = (notKey, date) => {
      this.setState({displayDayPicker:false})
      this.props.changeDate(notKey, date)
   }

   render () {
      const dayIcon = <span onClick={this.showDisplay}> <i className="fa fa-calendar" aria-hidden="true"></i> </span>


      return (
         <div className="date4">
            {dayIcon}

               <DatePicker  container="inline" ref={ dpInstance => this.dp = dpInstance } />
         </div>)
   }
}

export default Date4
