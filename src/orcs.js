import { L } from './L'
import { thrall, Thrall } from './thrall'

export class Orcs extends L {
  constructor(params) {
    params = params || {
      name: 'Орки',
      color: 'orange',
      isPluralForm: true,
    }
    super(params)
  }

  outOfBarracks(caller = this) {
    this.message(caller, 'выйти из казарм')
    thrall.toOrder(this)
  }

  moveWith(caller = this) {
    this.message(caller, 'двигаться с ним')
    thrall.attackGnollCamp()
  }

  beCarefulWhenNightFalls(caller = this) {
    this.message(caller, 'быть осторожными с наступлением ночи')
    thrall.findHiddenItem()
  }

  payAttentionToSleepingTrolls(caller = this) {
    this.message(caller, 'обратить внимание на спящих троллей')
    thrall.toDefeatTrolls()
  }
}

export const orcs = new Orcs()
