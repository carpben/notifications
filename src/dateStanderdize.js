export const standerdizeDateToDay = dateObj => {
   // return dateObj.setHours(0,0,0,1)
   const newDateObj = dateObj
   newDateObj.setHours(0,0,0,1)
   return newDateObj
}
