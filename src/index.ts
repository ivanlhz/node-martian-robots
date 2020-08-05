import { getOrientation, TRobot } from './robot';
import { calculateFinalPosition, robotQuestions, firstQuestion, endQuestion, parseAnswers, displayFinalPosition, getMaxGridPosition } from './utils';
import { prompt } from 'inquirer'

export const newRobot = async (maxGridInput: string | undefined = undefined) => {
  console.clear();
  const questions = maxGridInput ? robotQuestions : [firstQuestion, ...robotQuestions]
  const answers = await prompt(questions)
  const { maxPosition, newMaxGridSplitted, robotInitSplitted, robotMovementsInput } = parseAnswers(answers, maxGridInput);

  const robot: TRobot = calculateFinalPosition({
    position: { x: parseInt(robotInitSplitted[0]), y: parseInt(robotInitSplitted[1]) },
    orientation: getOrientation(robotInitSplitted[2]),
  }, robotMovementsInput)

  const max = getMaxGridPosition(newMaxGridSplitted)

  if (max) {
    console.info(displayFinalPosition(robot, max))
  } else {
    console.error('ERROR: Parsing the grid sistem.')
  }

  const repeat = await prompt([endQuestion])
  if (repeat.again) {
    newRobot(maxPosition);
  }
}

newRobot();
