import { getOrientation, TRobot } from './robot';
import { isLost, calculateFinalPosition } from './utils';
import {prompt} from 'inquirer'

const newRobot = async (isRepeat:boolean = false) => {
    
    const firstQuestion = [{
      name: 'maxGridInput',
      type: 'input',
      message: 'What is the upper-right coordinates of the rectangular world?',
    }];

    const robotQuestions = [
      {
        name: 'robotInitPosition',
        message: 'What is the initial position of the robot?',
      },
      {
        name: 'movements',
        message: 'and it movements?',
      },
    ]
    const questions = isRepeat ? robotQuestions : [...firstQuestion, ...robotQuestions]

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

      const repeat = await prompt([
        {
          name: 'again',
          type: 'confirm',
          message: 'Enter another robot?',
          default: true
        }])
      if (repeat.again) {
        newRobot(true);
      }
}

newRobot();
