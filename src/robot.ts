const cardinatePoints: TOrientation[] = ['N', 'E', 'S', 'W']

export type TOrientation = 'N' | 'S' | 'E' | 'W';
export type TPosition = {x:number; y: number}
export type TRobot = {position: TPosition; orientation: TOrientation}

export const robot:TRobot = {
  position:  {x:0,y:0},
  orientation: 'N',
}

export function walk(orientation: TOrientation, position: TPosition) {
  switch (orientation) {
    case 'E':
      position.x +=1;
      break;
    case 'S':
      position.y -=1;
      break;
    case 'W':
      position.y -=1;
      break;
  
    default:
      position.y +=1;
      break;
  }

  return position;
};

export function turnToThe (orientation: TOrientation, turn: 'L' | 'R'): TOrientation | undefined {
  const currentIndex = cardinatePoints.findIndex((cpoint) => cpoint === orientation );
  if (currentIndex > -1) {
    const newIndex = turn === 'R' ? currentIndex + 1 : currentIndex - 1;
    return newOrientation(newIndex);
  }
  return undefined;
}

function newOrientation (newIndex: number): TOrientation {
  if (newIndex > (cardinatePoints.length - 1)) {
    return cardinatePoints[0]
  }

  if (newIndex < 0) {
    return cardinatePoints[cardinatePoints.length - 1]
  }

  return cardinatePoints[newIndex]
}