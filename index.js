// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World  = Matter.World,
    Bodies = Matter.Bodies,
		Body   = Matter.Body,
    flake;

// create an engine
var engine = Engine.create();
engine.world.gravity.x = 0.001;
engine.world.gravity.y = 0.06;

// create a renderer
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframeBackground: "transparent",
    wireframes: false,
    width: windowWidth,
    height: windowHeight
  }
});

var ground = Bodies.rectangle(innerWidth, innerHeight, innerWidth * 2, 10, { isStatic: true });

setInterval(function() {
let x = Math.random() * innerWidth;
flake = Bodies.rectangle(x, -30, 13, 13, {
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
  { x: Math.random() * -0.001, y: 0 }
);
Body.applyForce(
  flake,
  { x: flake.position.x + 10, y: flake.position.y + 10 },
  { x: Math.random() * 0.001, y: 0 }
);

}, 200);

World.add(engine.world, ground);
// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);

function reset() {
  World.clear(engine.world);
  Engine.clear(engine);
  World.add(engine.world, ground);
}