export default (value) => {
  return new Promise((resolve, reject) => {
    setTimeout( () => resolve(value), 500)
  })
}