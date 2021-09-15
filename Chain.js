class Chain {
    constructor(a,b){
        var information = {
           bodyA:a,
           pointB:b,
           length:320,
       
        }
        this.chain = Constraint.create(information)
        World.add(world, this.chain)

    }

display(){
strokeWeight(5);
stroke("red");

line (this.chain.bodyA.position.x , this.chain.bodyA.position.y , this.chain.pointB.x , this.chain.pointB.y);

}

}

