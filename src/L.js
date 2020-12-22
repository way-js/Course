export class L {
  static r(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  static addText(text, fontSize = '0px', color = 'white') {
    const elem = document.getElementsByTagName('body')[0]
    elem.innerHTML += text
    elem.style.fontSize = fontSize
    elem.style.color = color
  }

  static isItNodeJS() {
    return typeof process !== 'undefined'
    // if (typeof window === 'undefined') return true

    // var backup = window,
    //   window_can_be_deleted = delete window
    // window = backup // Restoring from backup

    // return window_can_be_deleted
  }

  // static defaultCountObjects = 0

  constructor(params) {
    params = params || {
      name: 'Объект №' + toString(++L.defaultCountObjects),
      color: 'white',
      isPluralForm: false,
      style: '',
      fontSize: '0px',
    }
    this.name = params.name
    this.color = params.color
    this.isPluralForm = params.isPluralForm
    this.style = params.style
    this.fontSize = params.fontSize
  }

  handleRequest(caller, message) {
    let callerName = caller.name
    if (this.isPluralForm) {
      if (caller.isPluralForm) {
        message = `попросили нас ${message}`
      } else {
        message = `попросил нас ${message}`
      }
    } else {
      if (caller.isPluralForm) {
        message = `попросили меня ${message}`
      } else {
        message = `попросил меня ${message}`
      }
    }
    if (this.name === callerName) {
      if (this.isPluralForm) {
        callerName = 'Мы'
        message = message.replace('нас', 'себя')
      } else {
        callerName = 'Я'
        message = message.replace('меня', 'себя')
      }
    }
    return {
      callerName: callerName,
      message: message,
    }
  }

  formatMessage(callerName, message, style = '') {
    let styleSpan = ''
    let styleP = ''
    if (style) {
      styleP = ` style = '${style};'`
    }
    styleSpan = `style = 'font-weight:bold; color:${this.color};'`
    message = `<p ${styleP}><span ${styleSpan}>${this.name.toUpperCase()}:</span> ${callerName} ${message}.</p>`
    // console.log(style)
    // console.log(styleP)
    // console.log(message)
    return message
  }

  message(caller, text, withRequest = true, style = '') {
    let callerName = ''
    if (caller) {
      callerName = caller.name
    }
    if (withRequest) {
      const result = this.handleRequest(caller, text)
      callerName = result.callerName
      text = result.message
    }
    if (!L.isItNodeJS()) {
      text = this.formatMessage(callerName, text, style)
      L.addText(text, this.fontSize)
    } else {
      console.log(text)
    }
    return withRequest
  }

  getMethod(text, func = null, withRequest = true) {
    return (caller = this) => {
      if (!func) {
        return this.message(caller, text, withRequest)
      } else {
        this.message(caller, text, withRequest)
        return func(caller)
      }
    }
  }
}
