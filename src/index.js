import { L } from './L'
import { Orcs } from './orcs'
import { Prophet } from './prophet'
import { Thrall } from './thrall'

const thrall = new Thrall()
const prophet = new Prophet()
const orcs = new Orcs()

const begin = () => {
  if (L.isItNodeJS()) {
    console.log('НАЧАЛО')
  } else {
    L.addText('НАЧАЛО', '20px', 'black')
  }
}

const end = () => {
  if (L.isItNodeJS()) {
    console.log('КОНЕЦ')
  } else {
    L.addText('КОНЕЦ', '20px', 'black')
  }
}

const fail = () => {
  if (!L.isItNodeJS()) {
    L.addText('Миссия провалена! ', '20px', 'red')
  }
  end()
}

const start = () => {
  begin()
  thrall.outOfBarracks()
  prophet.flyToThrall()
  thrall.follow(prophet)
  prophet.flyAway()
  thrall.goToOrcCamp()
  orcs.outOfBarracks()
  thrall.toOrder(orcs)
  orcs.moveWith(thrall)
  if (!thrall.attackGnollCamp()) {
    fail()
    return
  }
  thrall.payAttentionToMorlocksInRiver(orcs)
  if (!thrall.fightMorlocksAndCrossRiver()) {
    fail()
    return
  }
  orcs.beCarefulWhenNightFalls(thrall)
  thrall.findHiddenItem()
  thrall.findGolemShelter()
  thrall.fightGolemsAndMoveOn()
  orcs.payAttentionToSleepingTrolls(thrall)
  thrall.toDefeatTrolls()
  if (!thrall.findProphet()) {
    fail()
    return
  }
  prophet.turnIntoHuman()
  prophet.toGreet(thrall)
  thrall.gatherTroopsAndLeaveTheseLands(prophet)
  prophet.turnIntoRaven()
  prophet.flyAway()
  end()
}

start()
