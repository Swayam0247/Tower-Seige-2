class Block{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':0.3,
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.visibility = 255
      
      }
      display(){
        if(this.body.speed<3){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        //fill("red");
        rect(0,0, this.width, this.height);
        pop();
        }
        else{
          World.remove(world,this.body)
          push();
          this.visibility = this.visibility-5 
          //tint(255,this.visibility)
          //rect(this.body.position.x,this.body.position.y, this.width, this.height);
          pop();
      }
}
}