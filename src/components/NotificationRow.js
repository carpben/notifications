import React from 'react'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import TextField from 'material-ui/TextField';
import 'react-datepicker/dist/react-datepicker.css'
import ReactStars from 'react-stars'

class NotificationRow extends React.Component {
   constructor (props){
      super (props)

   }
   handleChange = (date) => {
      console.log(date)
   //    console.log(typeof date)
   //   this.setState({
   //      date: date
   //   });
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
      // const importanceStrings = ["Very", "", "Somewhat", "", "Marginal"]
      // const importanceOptions = importanceStrings.map( (str, index, arr) => {
      //    const value = arr.length-index
      //    return <option value={value} key={value}> {str? `${value} - ${str}` : value } </option>
      // })
      const notificationDoneclass = completed? 'notificationDone' : '' ;


      return (
         <tr >
           <td  className="date-column">
             <DatePicker selected={date} onChange={this.onDatePickerChange} dateFormat='DD MMM YY'/>
          </td>
           <td className="importance-column">
             <ReactStars count={5} size={19} color2={'#ffd700'} value={importance} onChange={this.onStarValueChange} />
              {/* <select value={importance}>
                 {importanceOptions}
             </select> */}
          </td>
           <td className="title-column">
           {
            //  <input value={title} />
           }
            <TextField
                 id="multiline-flexible"
                 multiline
                 rowsMax="10"
                 value={title}
                 onChange={(e)=>editField(id, 'title', e.target.value )}

               //   onChange={this.handleChange('multiline')}
               //   className={classes.textField}
               className="TextField"
                 // margin="normal"
            />
           </td>
           <td className="next-column">
             <TextField
                 id="multiline-flexible"
                 multiline
                 rowsMax="10"
                 value={nextAction}
                 onChange={(e)=>editField(id, 'nextAction', e.target.value )}
               //   className={classes.textField}
               className="TextField"
               //   margin="normal"
            />

          </td>
           <td className="details-column">
             <TextField
                  id="multiline-flexible"
                  multiline
                  rowsMax="10"
                  value={details}
                  onChange={(e)=>editField(id, 'details', e.target.value )}

                //   onChange={this.handleChange('multiline')}
                //   className={classes.textField}
                className="TextField"
                  // margin="normal"
             />
          </td>
           <td><span className={"notification-done glyphicon glyphicon-ok " + notificationDoneclass } onClick={(e)=>toggleComplete(id)} ></span></td>
           <td><span className="notification-remove glyphicon glyphicon-remove" onClick={(e)=>deleteNotification(id)}></span></td>
         </tr>
      )
   }
}

// const NotificationRow = ({id, date, importance, title, nextAction, details, completed, toggleComplete, notificationDelete}) => {
//    const notificationDoneclass = completed? 'notificationDone' : '' ;
//    return (
//       <tr >
//         <td  className="date-column"><DatePicker /></td>
//         <td className="importance-column">
//            <select>
//              <option>very</option>
//              <option>Not at all</option>
//           </select>
//        </td>
//         <td contentEditable="true" className="title-column">{title}</td>
//         <td contentEditable="true" className="next-column">{nextAction}</td>
//         <td contentEditable="true" className="details-column">{details}</td>
//         <td><span className={"notification-done glyphicon glyphicon-ok " + notificationDoneclass } onClick={(e)=>toggleComplete(id)} ></span></td>
//         <td><span className="notification-remove glyphicon glyphicon-remove" onClick={(e)=>notificationDelete(id)}></span></td>
//       </tr>
//    )
// }

export default NotificationRow
