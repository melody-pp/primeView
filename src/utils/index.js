export const sample = arr => arr[Math.floor(Math.random() * arr.length)]
export const debounce = (func, wait, immediate) => {
  let timeout, args, context, timestamp, result

  const later = function () {
    let last = Date.now - timestamp

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function () {
    context = this
    args = arguments
    timestamp = _.now()
    let callNow = immediate && !timeout
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}

export const throttle = function (func, wait, options = {}) {
  let context, args, result
  let timeout = null
  let previous = 0

  const later = () => {
    previous = options.leading === false ? 0 : Date.now
    timeout = null
    result = func.apply(context, args)
    if (!timeout) context = args = null
  }

  return function () {
    let now = Date.now
    if (!previous && options.leading === false) previous = now
    let remaining = wait - (now - previous)
    context = this
    args = arguments

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      result = func.apply(context, args)
      if (!timeout) context = args = null
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining)
    }

    return result
  }
}
export default {sample, debounce, throttle}
