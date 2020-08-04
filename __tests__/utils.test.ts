import { isLost, calculateFinalPosition } from "../src/utils";
import { TRobot } from "../src/robot";

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
});