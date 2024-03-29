class Dustbinimg {
    constructor(x, y, width, height) {
      var options = {
          'isStatic':true,
          'restitution':0.1,
          'friction':1,
          'density':1
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = width;
      this.height = height;

      this.image = loadImage("dustbingreen.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke("green");
      fill("green");
      imageMode(CENTER);
      image(this.image, 0, 0, this.r, this.r);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };