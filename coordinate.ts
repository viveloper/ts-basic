interface Coordinate {
  x: number;
  y: number;
}

function parseCoordinate(str: string): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(arg1: any, arg2?: any): Coordinate {
  if (typeof arg1 === 'string') {
    const coord = {
      x: 0,
      y: 0,
    };
    arg1.split(',').forEach((str) => {
      const [key, value] = str.split(':');
      coord[key as 'x' | 'y'] = parseInt(value, 10);
    });
    return coord;
  } else if (typeof arg1 === 'object') {
    return {
      ...(arg1 as Coordinate),
    };
  } else {
    return {
      x: arg1 as number,
      y: arg2 as number,
    };
  }
}

console.log(parseCoordinate(1, 2));
console.log(parseCoordinate({ x: 10, y: 20 }));
console.log(parseCoordinate('x:20,y:30'));
