import { L } from './L'

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
    return this.message(caller, 'выйти из казарм')
  }

  moveWith(caller = this) {
    return this.message(caller, 'двигаться с ним')
  }

  beCarefulWhenNightFalls(caller = this) {
    return this.message(caller, 'быть осторожными с наступлением ночи')
  }

  payAttentionToSleepingTrolls(caller = this) {
    return this.message(caller, 'обратить внимание на спящих троллей')
  }

  // outOfBarracks = this.getMethod('выйти из казарм')

  // moveWith = this.getMethod('двигаться с ним')

  // beCarefulWhenNightFalls = this.getMethod(
  //   'быть осторожными с наступлением ночи'
  // )

  // payAttentionToSleepingTrolls = this.getMethod(
  //   'обратить внимание на спящих троллей'
  // )
}