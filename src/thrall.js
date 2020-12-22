import { L } from './L'

export class Thrall extends L {
  constructor(params) {
    params = params || {
      name: 'Тралл',
      color: 'red',
    }
    super(params)
  }

  outOfBarracks(caller = this) {
    return this.message(caller, 'выйти из казарм')
  }

  follow(caller = this) {
    return this.message(caller, 'следовать за ним')
  }

  goToOrcCamp(caller = this) {
    return this.message(caller, 'идти к лагерю орков')
  }

  toOrder(caller = this) {
    return this.message(caller, 'приказывать')
  }

  attackGnollCamp(caller = this) {
    return L.r(0, 100) <= 5
      ? this.message(
          null,
          'потерпел поражение в бою с гноллами',
          false,
          'color: red'
        )
      : this.message(caller, 'атаковать лагерь гноллов')
  }

  payAttentionToMorlocksInRiver(caller = this) {
    return this.message(caller, 'обратить внимание на морлоков в реке')
  }

  fightMorlocksAndCrossRiver(caller = this) {
    return L.r(0, 100) <= 5
      ? this.message(
          null,
          'потерпел поражение в бою с морлоками и не перешел через реку',
          false,
          'color: red'
        )
      : this.message(caller, 'сразиться с морлоками и перейти через реку')
  }

  findHiddenItem(caller = this) {
    return this.message(caller, 'найти спрятанный предмет')
  }

  findGolemShelter(caller = this) {
    return this.message(caller, 'найти пристанище големов')
  }

  fightGolemsAndMoveOn(caller = this) {
    return this.message(caller, 'сразиться с големами и двигаться дальше')
  }

  toDefeatTrolls(caller = this) {
    return this.message(caller, 'победить троллей')
  }

  findProphet(caller = this) {
    return L.r(0, 100) <= 5
      ? this.message(null, 'не нашел Пророка', false, 'color: red')
      : this.message(caller, 'найти Пророка')
  }

  gatherTroopsAndLeaveTheseLands(caller = this) {
    return this.message(caller, 'собирать свои войска и покидать эти земли')
  }

  // outOfBarracks = this.getMethod('выйти из казарм')

  // follow = this.getMethod('следовать за ним')

  // goToOrcCamp = this.getMethod('идти к лагерю орков')

  // toOrder = this.getMethod('приказывать')

  // attackGnollCamp = this.getMethod('атаковать лагерь гноллов', () => {
  //   if (L.r(0, 100) <= 5) {
  //     return this.message(null, 'потерпел поражение в бою с гноллами', false)
  //   }
  //   return true
  // })

  // payAttentionToMorlocksInRiver = this.getMethod(
  //   'обратить внимание на морлоков в реке'
  // )

  // fightMorlocksAndCrossRiver = this.getMethod(
  //   'сразиться с морлоками и перейти через реку',
  //   () => {
  //     if (L.r(0, 100) <= 5) {
  //       this.message(
  //         null,
  //         'потерпел поражение в бою с морлоками и не перешел через реку',
  //         false
  //       )
  //     }
  //     return true
  //   }
  // )

  // findHiddenItem = this.getMethod('найти спрятанный предмет')

  // findGolemShelter = this.getMethod('найти пристанище големов')

  // fightGolemsAndMoveOn = this.getMethod(
  //   'сразиться с големами и двигаться дальше'
  // )

  // toDefeatTrolls = this.getMethod('победить троллей')

  // findProphet = this.getMethod('найти Пророка', () => {
  //   if (L.r(0, 100) <= 5) {
  //     this.message('не нашел Пророка', false)
  //   }
  //   return true
  // })

  // gatherTroopsAndLeaveTheseLands = this.getMethod(
  //   'собирать свои войска и покидать эти земли'
  // )
}
