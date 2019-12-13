// module aliases
var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;
Body = Matter.Body;

// create an engine
var engine = Engine.create();

engine.world.gravity.x = 0.001;
engine.world.gravity.y = 0.1;

// create a renderer
var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframeBackground: "transparent",
    wireframes: false
  }
});
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

setInterval(function() {
  let x = Math.random() * 1000;
  var flake = Bodies.rectangle(x, -50, 30, 30, {
    render: {
      sprite: {
        texture: "./snowflake.svg"
      }
    },
    angle: Math.random() * 9
  });
  World.add(engine.world, flake);
  Body.applyForce(
    flake,
    { x: flake.position.x, y: flake.position.y },
    { x: Math.random() * -0.01, y: 0 }
  );
  Body.applyForce(
    flake,
    { x: flake.position.x + 10, y: flake.position.y + 10 },
    { x: Math.random() * 0.01, y: 0 }
  );
}, 500);

World.add(engine.world, ground);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);
