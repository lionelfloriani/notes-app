function formateDate(date) {
  let year = date.getFullYear().toString()
  let month = (date.getMonth() + 1).toString().padStart(2, '0')
  let day = date.getDate().toString().padStart(2, '0')
  let hour = date.getHours().toString().padStart(2, '0')
  let minute = date.getMinutes().toString().padStart(2, '0')

  return `${hour}:${minute} - ${day}/${month}/${year}`
}

module.exports = formateDate
