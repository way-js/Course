import { L } from './L'

export class Prophet extends L {
  constructor(params) {
    params = params || {
      name: 'Пророк',
      color: 'black',
    }
    super(params)
  }

  flyToThrall(caller = this) {
    return this.message(caller, 'прилететь к Траллу')
  }

  flyAway(caller = this) {
    return this.message(caller, 'улететь')
  }

  turnIntoHuman(caller = this) {
    return this.message(caller, 'превратиться в человека')
  }

  toGreet(caller = this) {
    return this.message(caller, 'приветствовать')
  }

  turnIntoRaven(caller = this) {
    return this.message(caller, 'превратиться в ворона')
  }

  // flyToThrall = this.getMethod('прилететь к Траллу')

  // flyAway = this.getMethod('улететь')

  // turnIntoHuman = this.getMethod('превратиться в человека')

  // toGreet = this.getMethod('приветствовать')

  // turnIntoRaven = this.getMethod('превратиться в ворона')
}
