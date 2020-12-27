import { L } from './L'
import { orcs } from './orcs'
import { prophet } from './prophet'

export class Thrall extends L {
  constructor(params) {
    params = params || {
      name: 'Тралл',
      color: 'red',
    }
    super(params)
  }

  outOfBarracks(caller = this) {
    this.message(caller, 'выйти из казарм')
    prophet.flyToThrall()
  }

  follow(caller = this) {
    this.message(caller, 'следовать за ним')
    prophet.flyAway()
  }

  goToOrcCamp(caller = this) {
    this.message(caller, 'идти к лагерю орков')
    orcs.outOfBarracks()
  }

  toOrder(caller = this) {
    this.message(caller, 'приказывать')
    orcs.moveWith(this)
  }

  attackGnollCamp(caller = this) {
    this.message(caller, 'атаковать лагерь гноллов')
    if (L.r(0, 100) <= 5) {
      this.message(
        null,
        'потерпел поражение в бою с гноллами',
        false,
        'color: red'
      )
      return L.fail()
    } else {
      this.payAttentionToMorlocksInRiver(this.orcs)
    }
  }

  payAttentionToMorlocksInRiver(caller = this) {
    this.message(caller, 'обратить внимание на морлоков в реке')
    this.fightMorlocksAndCrossRiver()
  }

  fightMorlocksAndCrossRiver(caller = this) {
    this.message(caller, 'сразиться с морлоками и перейти через реку')
    if (L.r(0, 100) <= 5) {
      this.message(
        null,
        'потерпел поражение в бою с морлоками и не перешел через реку',
        false,
        'color: red'
      )
      return L.fail()
    } else {
      orcs.beCarefulWhenNightFalls(this)
    }
  }

  findHiddenItem(caller = this) {
    this.message(caller, 'найти спрятанный предмет')
    this.findGolemShelter()
  }

  findGolemShelter(caller = this) {
    this.message(caller, 'найти пристанище големов')
    this.fightGolemsAndMoveOn()
  }

  fightGolemsAndMoveOn(caller = this) {
    this.message(caller, 'сразиться с големами и двигаться дальше')
    orcs.payAttentionToSleepingTrolls(this)
  }

  toDefeatTrolls(caller = this) {
    this.message(caller, 'победить троллей')
    this.findProphet()
  }

  findProphet(caller = this) {
    this.message(caller, 'найти Пророка')
    if (L.r(0, 100) <= 5) {
      this.message(null, 'не нашел Пророка', false, 'color: red')
      return L.fail()
    } else {
      prophet.turnIntoHuman()
    }
  }

  gatherTroopsAndLeaveTheseLands(caller = this) {
    this.message(caller, 'собирать свои войска и покидать эти земли')
    prophet.turnIntoRaven()
  }
}

export const thrall = new Thrall()
