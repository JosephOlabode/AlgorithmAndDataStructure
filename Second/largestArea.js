function getLargestArea(height) {
  let largest = 0;
  let output = 0;
  let index = [];

  if (height.length <= 2) {
    if (height.includes(0)) return 0;

    let width = getWidthFromI(0, 1);
    if (height[0] > width) {
      return width;
    } else {
      return height[0];
    }
  }

  if (height.length <= 3) {
    for (let i = 0; i < height.length; i++) {
      for (let j = i + 1; j < height.length; j++) {
        let width = getWidthFromI(i, j);
        if (height[i] > width) {
          output = height[i];
        } else {
          output = width;
        }
      }
    }
  }

  if (height.length > 3) {
    console.log("i am here");
    for (let i = 0; i < height.length; i++) {
      for (let j = i + 1; j < height.length; j++) {
        let width = getWidthFromI(i, j);
        let area = getArea(height[i], width);

        if (area > largest) {
          index = [height[i], width];
          largest = area;

          if (height[i] == 1) {
            output = width;
          } else if (width === 1) {
            output = height[0];
          } else if (height[i] > width) {
            output = width * width;
          } else {
            output = height[i] * height[i];
          }
        }
      }
    }
  }
  console.log(largest);
  console.log(index);
  return output;
}
function getArea(height, width) {
  return height * width;
}

function getWidthFromI(indexI, indexJ) {
  return indexJ - indexI;
}

// [2, 1] => 1
// [1, 2, 1] => 2
// [2, 0] => 0
//[1,0,0,0,0,0,0,2,2] => 8

console.log(getLargestArea([1, 0, 0, 0, 0, 0, 0, 2, 2]));
