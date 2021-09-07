function contactMe(e) {
   e.preventDefault();

   window.location.href = atob("bWFpbHRvOmp1c3NpQGhhYW11LnRlY2g/c3ViamVjdD1IZWxsbyUyMGZyb20lMjAocGxlYXNlJTIwZmlsbCUyMGluKQ==");

   return false;
}

function getMazeCellAt(size, maze, i, j) {
   if (i < 0 || j < 0 || i > size || j > size)
      return undefined;

   return maze[j * size + i];
}

function getRandomMazeCell(size) {
   const i = Math.floor(Math.random() * size);
   const j = Math.floor(Math.random() * size);

   return { i, j };
}

function generateMaze(size) {
   const maze = [];

   // Initialize a size^2 grid.
   for (let j = 0; j < size; ++j)
      for (let i = 0; i < size; ++i)
         maze.push({
            south: j > 0,
            east: i < size - 1,
            north: j < size - 1,
            west: i > 0,
            state: undefined
         });

   const stack = [];
   let { i, j } = getRandomMazeCell(size);
   let visits = 1;

   while (visits < maze.length) {

      // Get the current cell.
      const cell = getMazeCellAt(size, maze, i, j);

      // Get the adjacent cells of current cell.
      const adjacent = {
         south: getMazeCellAt(size, maze, i, j - 1),
         east: getMazeCellAt(size, maze, i + 1, j),
         north: getMazeCellAt(size, maze, i, j + 1),
         west: getMazeCellAt(size, maze, i - 1, j),
      };

      // Get adjacent cells that are not created yet.
      const unvisited = ["south", "east", "north", "west"]
         .filter(x => !!adjacent[x] && adjacent[x].state !== "created");

      // If all the adjacent cells have been visited, pop next cell from stack.
      if (unvisited.length === 0) {
         const storedCell = stack.pop();

         i = storedCell.i;
         j = storedCell.j;

         continue;
      }

      // Pick a random adjacent cell that is visited next.
      const direction = unvisited[Math.floor(Math.random() * unvisited.length)];
      const nextCell = adjacent[direction];

      // Update visit state.
      nextCell.state = "created";
      ++visits;

      // Store current cell to stack.
      stack.push({ i, j });

      // Knock down the cell walls and update cell indices. We need to knock the walls from both directions, that
      // is from the current cell and opposite wall in the next cell.
      switch (direction) {
      case "south":
         j -= 1;
         cell.south = false;
         nextCell.north = false;
         break;

      case "east":
         i += 1;
         cell.east = false;
         nextCell.west = false;
         break;

      case "north":
         j += 1;
         cell.north = false;
         nextCell.south = false;
         break;

      case "west":
         i -= 1;
         cell.west = false;
         nextCell.east = false;
         break;
      }
   }

   return maze;
}

function createLine(x1, y1, x2, y2) {
   const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

   line.setAttribute("x1", x1);
   line.setAttribute("x2", x2);
   line.setAttribute("y1", y1);
   line.setAttribute("y2", y2);

   return line;
}

function createRect(width, height, x, y) {
   const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");

   rect.setAttribute("width", width);
   rect.setAttribute("height", height);
   rect.setAttribute("x", x);
   rect.setAttribute("y", y);
   rect.setAttribute("opacity", "0");
   rect.setAttribute("fill", "#99cf9d");
   rect.setAttribute("stroke", "none");

   return rect;
}

function createMazeSvg(pixelSize, size, maze) {
   const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
   const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
   const gTrace = document.createElementNS("http://www.w3.org/2000/svg", "g");
   const cellSize = pixelSize / size;

   svg.setAttribute("width", pixelSize);
   svg.setAttribute("height", pixelSize);
   svg.setAttribute("version", "1.0");
   svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

   g.setAttribute("fill", "none");
   g.setAttribute("stroke", "#97b899");
   g.setAttribute("stroke-width", "2");
   g.setAttribute("stroke-linecap", "square");
   g.setAttribute("shape-rendering", "crispEdges");

   svg.appendChild(gTrace);
   svg.appendChild(g);

   for (let j = 0; j < size; ++j) {
      for (let i = 0; i < size; ++i) {
         const x = Math.max(i * cellSize, 1);
         const y = Math.max(j * cellSize, 1);
         const cell = getMazeCellAt(size, maze, i, j);

         const south = createLine(x, y, x + cellSize, y);
         const east = createLine(x + cellSize, y, x + cellSize, y + cellSize);
         const north = createLine(x + cellSize, y + cellSize, x, y + cellSize);
         const west = createLine(x, y + cellSize, x, y);

         cell.south && g.appendChild(south);
         cell.east && g.appendChild(east);
         cell.north && g.appendChild(north);
         cell.west && g.appendChild(west);
      }
   }

   return svg.outerHTML;
}

window.onload = function() {
   lax.init();

   const t0 = new Date().getTime();

   // Add vertical window scroll driver.
   lax.addDriver("scrollY", function() {
      return window.scrollY;
   });

   // Add time based driver that measures time in seconds from page load.
   lax.addDriver("time", function() {
      return (new Date().getTime() - t0) / 1000.0;
   });

   lax.addElements("#hello", {
      time: {
         opacity: [
            [0.5, 1.5],
            [0, 1],
         ]
      }
   });

   lax.addElements("#name", {
      time: {
         translateY: [
            [2, 2.5],
            ["-elHeight/8", 0]
         ],
         opacity: [
            [2, 3],
            [0, 1],
         ]
      }
   });

   lax.addElements("#line1", {
      time: {
         translateY: [
            [3, 3.5],
            ["-elHeight/2", 0]
         ],
         opacity: [
            [3, 3.5],
            [0, 1],
         ]
      }
   });

   lax.addElements("#line2", {
      time: {
         translateY: [
            [3.5, 4],
            ["-elHeight/2", 0]
         ],
         opacity: [
            [3.5, 4],
            [0, 1],
         ]
      }
   });

   lax.addElements("#line3", {
      time: {
         translateY: [
            [4, 4.5],
            ["-elHeight/2", 0]
         ],
         opacity: [
            [4, 4.5],
            [0, 1],
         ]
      }
   });

   lax.addElements("#line4", {
      time: {
         translateY: [
            [4.5, 5],
            ["-elHeight/2", 0]
         ],
         opacity: [
            [4.5, 5],
            [0, 1],
         ]
      }
   });

   lax.addElements("#line5", {
      time: {
         translateY: [
            [5, 5.5],
            ["-elHeight/2", 0]
         ],
         opacity: [
            [5, 5.5],
            [0, 1],
         ]
      }
   });

   lax.addElements("#hire", {
      time: {
         translateY: [
            [6, 6.5],
            ["elHeight/2", 0]
         ],
         opacity: [
            [6, 6.5],
            [0, 1],
         ]
      }
   });

   lax.addElements("#box1", {
      scrollY: {
         translateY: [
            ["1", "elOutY"],
            [0, "-screenHeight/4*(4/4)"]
         ]
      }
   });

   lax.addElements("#box2", {
      scrollY: {
         translateY: [
            ["1", "elOutY"],
            [0, "-screenHeight/4*(3/4)"]
         ]
      }
   });

   lax.addElements("#box3", {
      scrollY: {
         translateY: [
            ["1", "elOutY"],
            [0, "-screenHeight/4*(2/4)"]
         ]
      }
   });

   lax.addElements("#box4", {
      scrollY: {
         translateY: [
            ["1", "elOutY"],
            [0, "-screenHeight/4*(1/4)"]
         ]
      }
   });

   lax.addElements("#more", {
      scrollY: {
         translateY: [
            ["1", "elOutY"],
            [0, "-screenHeight/4"]
         ]
      }
   });
};
