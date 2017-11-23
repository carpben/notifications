import React from 'react'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import TextField from 'material-ui/TextField';
import 'react-datepicker/dist/react-datepicker.css'
import ReactStars from 'react-stars'
import { withStyles } from 'material-ui/styles';
import StyledTextField2 from './StyledTextField2'


class NotificationRow extends React.Component {
   constructor (props){
      super (props)
   }

   onStarValueChange = (newRating) => {this.props.changeImportance(this.props.id, newRating)}
   onDatePickerChange = (newDate) => {
      console.log(newDate.format())
      console.log('moment.max returns')
      console.log(moment.max(this.props.date, newDate).format())
      this.props.changeDate(this.props.id, newDate)
   }
   render (){
      const {id, date, importance, title, nextAction, details, completed, toggleComplete, deleteNotification, editField} = this.props

      const notificationDoneclass = completed? 'notificationDone' : '' ;


      return (
         <tr >
           <td  className="date-column">
             <DatePicker selected={date} onChange={this.onDatePickerChange} dateFormat='DD MMM YY'/>
          </td>
           <td className="importance-column">
             <ReactStars count={5} size={19} color2={'#ffd700'} value={importance} onChange={this.onStarValueChange} />

          </td>
           <td className="title-column">
            <StyledTextField2
            txt = {title}
            editField = {editField}
            id={id}
            />
           </td>
           <td className="next-column">
              <StyledTextField2
              txt = {nextAction}
              field = "nextAction"
              editField = {editField}
              id={id}
              />
         {/*    <TextField
                 id="multiline-flexible"
                 multiline
                 rowsMax="10"
                 value={nextAction}
                 onChange={(e)=>editField(id, 'nextAction', e.target.value )}
               className="TextField"
               inputClassName="multiInput"
            />*/}
          </td>
           <td className="details-column">
            {/* <TextField
                  id="multiline-flexible"
                  multiline
                  rowsMax="10"
                  value={details}
                  onChange={(e)=>editField(id, 'details', e.target.value )}
                  inputClassName="multiInput"

                //   className={classes.textField}
                className="TextField"
                  // margin="normal"
             />*/}
             <StyledTextField2
            txt = {details}
            field = "details"
            editField = {editField}
            id={id}
            />
          </td>
           <td><span className={"notification-done glyphicon glyphicon-ok " + notificationDoneclass } onClick={(e)=>toggleComplete(id)} ></span></td>
           <td><span className="notification-remove glyphicon glyphicon-remove" onClick={(e)=>deleteNotification(id)}></span></td>
         </tr>
      )
   }
}


export default NotificationRow
