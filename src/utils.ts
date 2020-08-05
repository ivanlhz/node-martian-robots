import { TPosition, TRobot, walk, turnToThe, getTurn } from "./robot";

type answersData = {
  maxGridInput: string;
  robotInitPosition: string,
  movements: string
}

export const isLost = (robot: TRobot, max: TPosition) => {
  return robot.position.x > max.x || robot.position.y > max.y || robot.position.x < 0 || robot.position.y < 0
}

export const calculateFinalPosition = (robot: TRobot, movements: string) => {
  const _robot = { ...robot };
  for (let i = 0; i < movements.length; i++) {
    const currentAction = movements[i];
    if (currentAction === 'F') {
      _robot.position = walk(_robot.orientation, robot.position)
    } else {
      const newOrientation = turnToThe(_robot.orientation, getTurn(currentAction));
      if (newOrientation) _robot.orientation = newOrientation;
    }
  }
  return _robot
}

export const parseAnswers = (answers: answersData, grid: string | undefined) => {
  const maxPosition = grid ? grid : answers.maxGridInput;
  const robotInitInput = answers.robotInitPosition;
  const robotMovementsInput = answers.movements;
  const newMaxGridSplitted = maxPosition.split(' ');
  const robotInitSplitted = robotInitInput.split(' ');

  return { maxPosition, newMaxGridSplitted, robotMovementsInput, robotInitSplitted }
}

export const displayFinalPosition = (robot: TRobot, max: TPosition) => {
  if (isLost(robot, max)) {
    return (`${robot.position.x} ${robot.position.y} ${robot.orientation} LOSS`)
  } else {
    return (`${robot.position.x} ${robot.position.y} ${robot.orientation}`)
  }
}

export const getMaxGridPosition = (maxGridSplitter: string[]) => {
  if (maxGridSplitter.length > 2 || maxGridSplitter.length === 0) {
    return undefined;
  }
  return { x: parseInt(maxGridSplitter[0]), y: parseInt(maxGridSplitter[1]) }
}

export const firstQuestion = {
  name: 'maxGridInput',
  type: 'input',
  message: 'What is the upper-right coordinates of the rectangular world?',
};

export const robotQuestions = [
  {
    name: 'robotInitPosition',
    message: 'What is the initial position of the robot?',
  },
  {
    name: 'movements',
    message: 'and it movements?',
  },
]

export const endQuestion =
{
  name: 'again',
  type: 'confirm',
  message: 'Enter another robot?',
  default: true
};