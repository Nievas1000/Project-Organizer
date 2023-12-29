export function isGmail (email) {
  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/

  return gmailRegex.test(email)
}
