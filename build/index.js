"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var robot_1 = require("./robot");
var utils_1 = require("./utils");
var newMaxGridInput = '5 3';
var robotInitInput = '1 1 E';
var robotMovementsInput = 'RFRFRFRF';
// const robotInitInput = '0 3 W';
// const robotMovementsInput = 'LLFFFLFLFL';
// const robotInitInput = '3 2 N';
// const robotMovementsInput = 'FRRFLLFFRRFLL'
// Init
var newMaxGridSplitted = newMaxGridInput.split(' ');
var robotInitSplitted = robotInitInput.split(' ');
var robot = utils_1.calculateFinalPosition({
    position: { x: parseInt(robotInitSplitted[0]), y: parseInt(robotInitSplitted[1]) },
    orientation: robot_1.getOrientation(robotInitSplitted[2]),
}, robotMovementsInput);
var max = { x: parseInt(newMaxGridSplitted[0]), y: parseInt(newMaxGridSplitted[1]) };
if (utils_1.isLost(robot, max)) {
    console.log(robot.position.x + " " + robot.position.y + " " + robot.orientation + " LOSS");
}
else {
    console.log(robot.position.x + " " + robot.position.y + " " + robot.orientation);
}
