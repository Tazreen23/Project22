const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1;
var bob2;
var bob3;
let ropes1;
let ropes2;
let ropes3;
let ropes4;
let ropes5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options = {
		isStatic: true
	}

	roof = Bodies.rectangle(400, 100, 230, 20, roof_options);
	World.add(world, roof);

	Engine.run(engine);


}

function draw() {
	rectMode(CENTER);
	background("#99004d");

	rect(roof.position.x, roof.position.y, 230, 20);


	constructor(body1, body2, pointA, pointB)
	{
		this.pointA = pointA
		this.pointB = pointB


		var options = {
			bodyA: body1,
			bodyB: body2,
			pointB: { x: this.pointA, y: this.pointB }

		}

	}

	//call display() to show ropes here
	display()
	{
		var pointA = this.rope.bodyA.position;
		var pointB = this.rope.bodyB.position;
		stokeWeight(2);

		rope1 = new ropes1(bob1, roof, -80, 0);
		Matter.Body.applyForce(body, position, force)
		ropes2 = new ropes1(bob1, roof, -80, 0);
		Matter.Body.applyForce(body, position, force)
		ropes3 = new ropes1(bob1, roof, -80, 0);
		Matter.Body.applyForce(body, position, force)
		rope4 = new ropes1(bob1, roof, -80, 0);
		Matter.Body.applyForce(body, position, force)
		rope5 = new ropes1(bob1, roof, -80, 0);
		Matter.Body.applyForce(body, position, force)
	}


	//create ellipse shape for multiple bobs here
	bob1 = new ropes1(bob1, roof, -80, 0);
	Matter.Body.applyForce(body, position, force)
	bob2 = new ropes1(bob1, roof, -80, 0);
	Matter.Body.applyForce(body, position, force)
	bob3 = new ropes1(bob1, roof, -80, 0);
	Matter.Body.applyForce(body, position, force)
	

}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
if(keyPressed(bob1)){
	Matter.Body.applyForce(body,position,force);
}