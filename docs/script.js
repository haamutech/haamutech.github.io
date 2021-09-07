function contactMe(e) {
   e.preventDefault();

   window.location.href = atob("bWFpbHRvOmp1c3NpQGhhYW11LnRlY2g/c3ViamVjdD1IZWxsbyUyMGZyb20lMjAocGxlYXNlJTIwZmlsbCUyMGluKQ==");

   return false;
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
