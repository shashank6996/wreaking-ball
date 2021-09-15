class ball{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':2.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.width = 2* radius
        this.height = 2* radius
        this.image = loadImage("sprites/ball.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}
