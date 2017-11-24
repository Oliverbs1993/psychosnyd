export default (value) => {
  const date = new Date(value)
  return date.toLocaleString(['da-DK', 'en-US'], {month: 'short', day: '2-digit', year: 'numeric'})
}
