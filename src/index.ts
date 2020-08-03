import {turnToThe, walk, TPosition, getOrientation, TRobot, getTurn} from './robot'

const newMaxGridInput = '5 3';
// const robotInitInput = '1 1 E';
// const robotMovementsInput = 'RFRFRFRF';
const robotInitInput = '0 3 W';
const robotMovementsInput = 'LLFFFLFLFL';

// Init
const newMaxGridSplitted = newMaxGridInput.split(' ');
const robotInitSplitted = robotInitInput.split(' ');


const marsGrid: TPosition = {x: parseInt(newMaxGridSplitted[0]), y: parseInt(newMaxGridSplitted[1])}
const robot: TRobot = {
  position: {x: parseInt(robotInitSplitted[0]), y: parseInt(robotInitSplitted[1])},
  orientation: getOrientation(robotInitSplitted[2]),
}

for (let i = 0 ; i< robotMovementsInput.length ; i ++) {
  const currentAction = robotMovementsInput[i];
  if (currentAction === 'F') {
    robot.position = walk(robot.orientation, robot.position)
  } else {
    const newOrientation = turnToThe(robot.orientation, getTurn(currentAction));
    if (newOrientation) robot.orientation = newOrientation;
  }
}
console.log(robot)

// Check if it is lost
const max = {x:parseInt(newMaxGridSplitted[0]), y: parseInt(newMaxGridSplitted[1]) }
console.log(max)
if(robot.position.x > max.x || robot.position.y > max.y || robot.position.x < 0 || robot.position.y < 0) {
  console.log('LOSS')
} 

