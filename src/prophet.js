import { L } from './L'
import { thrall } from './thrall'

export class Prophet extends L {
  constructor(params) {
    params = params || {
      name: 'Пророк',
      color: 'black',
    }
    super(params)
  }

  flyToThrall(caller = this) {
    this.message(caller, 'прилететь к Траллу')
    thrall.follow(this)
  }

  flyAway(caller = this) {
    this.message(caller, 'улететь')
    thrall.goToOrcCamp()
  }

  turnIntoHuman(caller = this) {
    this.message(caller, 'превратиться в человека')
    this.toGreet(this.thrall)
  }

  toGreet(caller = this) {
    this.message(caller, 'приветствовать')
    thrall.gatherTroopsAndLeaveTheseLands(this)
  }

  turnIntoRaven(caller = this) {
    this.message(caller, 'превратиться в ворона и улететь')
    return L.end()
  }
}

export const prophet = new Prophet()
