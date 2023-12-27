export function formattedDate (fechaISO) {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' }
  const formattedDate = new Date(fechaISO).toLocaleDateString('en-US', options)
  return formattedDate
}
