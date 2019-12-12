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
        wireframeBackground: 'transparent',
        wireframes: false
    },
});

// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 30, 30, {
    render: {
        sprite: {
            texture: './snowflake.svg'
        }
    }
});
var boxB = Bodies.rectangle(450, 50, 30, 30, {
    render: {
        sprite: {
            texture: './snowflake.svg'
        }
    }
});
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// add all of the bodies to the world
World.add(engine.world, [boxA, boxB, ground]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);