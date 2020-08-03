import {getOrientation, TRobot} from './robot';
import {isLost, calculateFinalPosition} from './utils';

const newMaxGridInput = '5 3';
const robotInitInput = '1 1 E';
const robotMovementsInput = 'RFRFRFRF';
// const robotInitInput = '0 3 W';
// const robotMovementsInput = 'LLFFFLFLFL';
// const robotInitInput = '3 2 N';
// const robotMovementsInput = 'FRRFLLFFRRFLL'

// Init
const newMaxGridSplitted = newMaxGridInput.split(' ');
const robotInitSplitted = robotInitInput.split(' ');

const robot: TRobot = calculateFinalPosition({
  position: {x: parseInt(robotInitSplitted[0]), y: parseInt(robotInitSplitted[1])},
  orientation: getOrientation(robotInitSplitted[2]),
}, robotMovementsInput)

const max = {x:parseInt(newMaxGridSplitted[0]), y: parseInt(newMaxGridSplitted[1]) }
if(isLost(robot, max)) {
  console.log(`${robot.position.x} ${robot.position.y} ${robot.orientation} LOSS`)
}  else {
  console.log(`${robot.position.x} ${robot.position.y} ${robot.orientation}`)
}

