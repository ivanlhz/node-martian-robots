"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.turnToThe = exports.walk = exports.robot = void 0;
var cardinatePoints = ['N', 'E', 'S', 'W'];
exports.robot = {
    position: { x: 0, y: 0 },
    orientation: 'N',
};
function walk(orientation, position) {
    switch (orientation) {
        case 'E':
            position.x += 1;
            break;
        case 'S':
            position.y -= 1;
            break;
        case 'W':
            position.y -= 1;
            break;
        default:
            position.y += 1;
            break;
    }
    return position;
}
exports.walk = walk;
;
function turnToThe(orientation, turn) {
    var currentIndex = cardinatePoints.findIndex(function (cpoint) { return cpoint === orientation; });
    if (currentIndex > -1) {
        var newIndex = turn === 'R' ? currentIndex + 1 : currentIndex - 1;
        return newOrientation(newIndex);
    }
    return undefined;
}
exports.turnToThe = turnToThe;
function newOrientation(newIndex) {
    if (newIndex > (cardinatePoints.length - 1)) {
        return cardinatePoints[0];
    }
    if (newIndex < 0) {
        return cardinatePoints[cardinatePoints.length - 1];
    }
    return cardinatePoints[newIndex];
}
