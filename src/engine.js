export const Engine = (width, height) => (world) => {
  return world.map((row, y) => {
    return row.map((cell, x) => {
      if (cell == true) {
        const neighbour0 = world[y + 1]?.[x];
        const neighbour1 = world[y + 1]?.[x + 1];
        const neighbour2 = world[y]?.[x + 1];
        const neighbour3 = world[y - 1]?.[x];
        const neighbour4 = world[y - 1]?.[x - 1];
        const neighbour5 = world[y]?.[x - 1];
        const neighbour6 = world[y + 1]?.[x - 1];
        const neighbour7 = world[y - 1]?.[x + 1];
        const arrayOfNeigh = [
          neighbour0,
          neighbour1,
          neighbour2,
          neighbour3,
          neighbour4,
          neighbour5,
          neighbour6,
          neighbour7,
        ];
        const livingNeigh = arrayOfNeigh.filter((neigh) => {
          return neigh === true;
        });
        if (livingNeigh.length < 2 || livingNeigh.length > 3) {
          return undefined;
        } else {
          return true;
        }
      }
    });
  });
  // [...Array(3)].map(()=>[...Array(3)]);
};

//     result;
//     isAlive = false;
//     worlds.map(cell => {
//       const neighbour0 = world[y+1,x]
//       const neighbour1 = world[y+1,x+1]
//       const neighbour2 = world[y,x+1]
//       const neighbour3 = world[y-1,x]
//       const neighbour4 = world[y-1,x-1]
//       const neighbour5 = world[y,x-1]
//       const neighbour6 = world[y+1,x-1]
//       const neighbour7 = world[y-1,x+1]
//       const arrayOfNeigh = [neighbour0,neighbour1,neighbour2,neighbour3,neighbour4,neighbour5,neighbour6,neighbour7]
//       const livingNeigh= arrayOfNeigh.filter(neigh => {
//           return neigh === [0,0]
//       })
//       if(livingNeigh < 2 || livingNeigh > 3) {
//           return [0,0]
//       } else if(worlds === 3 ) {
//           return
//       }
//     })
//     for(var i = 0; i<array.length;i++) {
//         neighbours = 0;
//         for(var j=0; j<array.length;j++) {
//            if(array[i][j] !== [0,0]) {
//                neighbours++;
//            }
//         }
//         if(neighbours < 2 || neighbours > 3) {
//             array[i][j] = [0,0]
//         }
//     }
// }
