export const dateStrToInt = str => parseInt(str.replace(/-/gi,""),10)
export const momentObjToStr = moment => moment.format("YYYY-MM-DD")
