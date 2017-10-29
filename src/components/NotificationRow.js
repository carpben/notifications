import React from 'react'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css'

class NotificationRow extends React.Component {
   constructor (props){
      super (props)
      this.state = {
         date: moment()
      }
   }
   handleChange = (date) => {
     this.setState({
        date: date
     });
   }
   render (){
      const {id, date, importance, title, nextAction, details, completed, toggleComplete, notificationDelete} = this.props
      const notificationDoneclass = completed? 'notificationDone' : '' ;
      return (
         <tr >
           <td  className="date-column">
             <DatePicker selected={this.state.date} onChange={this.handleChange}/>
          </td>
           <td className="importance-column">
              <select>
                <option value={5}>5 - very</option>
                <option value={4}>4</option>
                <option value={3}>3 - Somewhat</option>
                <option value={2}>2</option>
                <option value={1}>1 - Not at all</option>
             </select>
          </td>
           <td contentEditable="true" className="title-column">{title}</td>
           <td contentEditable="true" className="next-column">{nextAction}</td>
           <td contentEditable="true" className="details-column">{details}</td>
           <td><span className={"notification-done glyphicon glyphicon-ok " + notificationDoneclass } onClick={(e)=>toggleComplete(id)} ></span></td>
           <td><span className="notification-remove glyphicon glyphicon-remove" onClick={(e)=>notificationDelete(id)}></span></td>
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
