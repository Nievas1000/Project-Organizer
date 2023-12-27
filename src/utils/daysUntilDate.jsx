export function daysUntilDate (date) {
  const today = new Date()
  const targetDate = new Date(date)
  const timeDifferenceMs = targetDate - today

  const daysRemaining = Math.floor(timeDifferenceMs / (1000 * 60 * 60 * 24))

  return daysRemaining + 1
}
