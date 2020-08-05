import { isLost, calculateFinalPosition, parseAnswers, displayFinalPosition, getMaxGridPosition } from "../src/utils";
import { TRobot, TPosition } from "../src/robot";

describe("Test the utils functions", () => {
  test("Should lost if the robot is out of the grid", () => {
    expect(isLost({ orientation: "E", position: { x: 5, y: 2 }}, {x: 2, y: 2})).toBeTruthy();
    expect(isLost({ orientation: "E", position: { x: 1, y: 2 }}, {x: 2, y: 2})).toBeFalsy();
  });
  test("Should calculate the new robot position", () => {
    const robot: TRobot = { orientation: "E", position: { x: 1, y: 1 }};
    const finalPosition = calculateFinalPosition(robot, 'FRFRFRFR');
    expect(finalPosition.position.x).toBe(1);
    expect(finalPosition.position.y).toBe(1);
    expect(finalPosition.orientation).toBe('E');
  })

  test("Should get answers in a readable way", () => {
    const answers = {
      maxGridInput: '5 3',
      robotInitPosition: '1 1 E',
      movements: 'FEFEFEFE'
    }
    const {maxPosition, newMaxGridSplitted, robotInitSplitted, robotMovementsInput} = parseAnswers(answers, answers.maxGridInput);
    expect(maxPosition).toBe('5 3')
    expect(robotMovementsInput).toBe(answers.movements)
    expect(newMaxGridSplitted[0]).toBe('5');
    expect(newMaxGridSplitted[1]).toBe('3')
    expect(robotInitSplitted.length).toBe(3);
    expect(robotInitSplitted[0]).toBe("1");
    expect(robotInitSplitted[1]).toBe("1");
    expect(robotInitSplitted[2]).toBe("E"); 
  })

  test("Should return lost if the robot position is out of the grid", () => {
    const robot: TRobot = {
      orientation: 'N',
      position: {
        x: 3,
        y: 3
      }
    }
    const maxGridPosition: TPosition = {
      x: 2,
      y: 2,
    }
    expect(displayFinalPosition(robot,maxGridPosition)).toContain('LOSS')
    robot.position.x = 1;
    robot.position.y = 1;
    expect(displayFinalPosition(robot,maxGridPosition)).not.toContain('LOSS')
  })

  test("Should return the max prosition of the grid or undefine in case of error", () => {
    expect(getMaxGridPosition(['1','2','3'])).toBeFalsy()
    expect(getMaxGridPosition([])).toBeFalsy()
    const result = getMaxGridPosition(['1','2']);
    expect(result?.x).toBe(1)
    expect(result?.y).toBe(2)
  })
});