"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateFinalPosition = exports.isLost = void 0;
var robot_1 = require("./robot");
exports.isLost = function (robot, max) {
    return robot.position.x > max.x || robot.position.y > max.y || robot.position.x < 0 || robot.position.y < 0;
};
exports.calculateFinalPosition = function (robot, movements) {
    var _robot = __assign({}, robot);
    for (var i = 0; i < movements.length; i++) {
        var currentAction = movements[i];
        if (currentAction === 'F') {
            _robot.position = robot_1.walk(_robot.orientation, robot.position);
        }
        else {
            var newOrientation = robot_1.turnToThe(_robot.orientation, robot_1.getTurn(currentAction));
            if (newOrientation)
                _robot.orientation = newOrientation;
        }
    }
    return _robot;
};
