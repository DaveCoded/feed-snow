// module aliases
var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframeBackground: "transparent",
    wireframes: false
  }
});

// create two boxes and a ground
var boxA = Bodies.rectangle(400, 0, 30, 30, {
  render: {
    sprite: {
      texture: "./snowflake.svg"
    }
  }
});
var boxB = Bodies.rectangle(410, 50, 30, 30, {
  render: {
    sprite: {
      texture: "./snowflake.svg"
    }
  }
});
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// add all of the bodies to the world

// get falling continuously
// get random sizes (potentially complex)

// while loop set interval

// setinterval

setInterval(function() {
  let x = Math.random() * 1000;
  let y = Math.random() * 200;
  World.add(
    engine.world,
    Bodies.rectangle(x, 0, 30, 30, {
      render: {
        sprite: {
          texture: "./snowflake.svg"
        }
      }
    })
  );
}, 100);

// for (let i = 0; i < 80; i++) {
//   let x = Math.random() * 1000;
//   let y = Math.random() * 200;
//   World.add(
//     engine.world,
//     Bodies.rectangle(x, y, 30, 30, {
//       render: {
//         sprite: {
//           texture: "./snowflake.svg"
//         }
//       }
//     })
//   );
// }
World.add(engine.world, ground);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);
