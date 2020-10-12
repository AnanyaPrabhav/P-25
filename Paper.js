class Paper {
    constructor(x, y, r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:2.0
        }
        this.body = Matter.Bodies.circle(200, 720, 20, options);
        this.radius = r;

        this.image = loadImage("paper.png");

        World.add(world, this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
    }
}