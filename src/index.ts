import { getOrientation, TRobot } from './robot';
import { isLost, calculateFinalPosition, robotQuestions, firstQuestion, endQuestion } from './utils';
import { prompt } from 'inquirer'

const newRobot = async (isRepeat: boolean = false) => {
  const questions = isRepeat ? robotQuestions : [firstQuestion, ...robotQuestions]
  console.clear();
  const answers = await prompt(questions)
  const newMaxGridInput = answers.maxGridInput;
  const robotInitInput = answers.robotInitPosition;
  const robotMovementsInput = answers.movements;
  const newMaxGridSplitted = newMaxGridInput.split(' ');
  const robotInitSplitted = robotInitInput.split(' ');

  const robot: TRobot = calculateFinalPosition({
    position: { x: parseInt(robotInitSplitted[0]), y: parseInt(robotInitSplitted[1]) },
    orientation: getOrientation(robotInitSplitted[2]),
  }, robotMovementsInput)


  const max = { x: parseInt(newMaxGridSplitted[0]), y: parseInt(newMaxGridSplitted[1]) }
  if (isLost(robot, max)) {
    console.info(`${robot.position.x} ${robot.position.y} ${robot.orientation} LOSS`)
  } else {
    console.info(`${robot.position.x} ${robot.position.y} ${robot.orientation}`)
  }

  const repeat = await prompt([endQuestion])
  if (repeat.again) {
    newRobot(true);
  }
}

newRobot();
