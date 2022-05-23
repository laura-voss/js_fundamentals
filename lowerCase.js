const lower = (message) => {
  return message.toLowerCase();
}

const transform = (message, lower_method) => {
  return lower_method(message)
}
