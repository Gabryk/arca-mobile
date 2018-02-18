export function trigger(type) {
  return payload => ({ type, payload })
}

export function triggerError(type, message) {
  return error => {
    // console.log(error)
    return trigger(type)(message)
  }
}
