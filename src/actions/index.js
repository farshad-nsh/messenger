export const HELLO_WORLD = 'HELLO_WORLD'
export const RESET = 'RESET'
export const SEND='SEND'

export const helloWorld = () => {
  return {
    type: HELLO_WORLD
  }
}

export const reset = () => {
  return {
    type: RESET
  }
}

export const sendMessage=(some) => {
  return {
    type: SEND,
    payload:some
  }
}