"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTurn = exports.getOrientation = exports.turnToThe = exports.walk = void 0;
var cardinatePoints = ['N', 'E', 'S', 'W'];
function walk(orientation, position) {
    switch (orientation) {
        case 'E':
            position.x += 1;
            break;
        case 'S':
            position.y -= 1;
            break;
        case 'W':
            position.x -= 1;
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
function getOrientation(orientation) {
    switch (orientation) {
        case 'S':
            return 'S';
        case 'E':
            return 'E';
        case 'W':
            return 'W';
        default:
            return 'N';
    }
}
exports.getOrientation = getOrientation;
function getTurn(turn) {
    if (turn === 'L') {
        return 'L';
    }
    return 'R';
}
exports.getTurn = getTurn;
