class Bob {
    constructor(x,y) {
      var options = {
          isStatic:true,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.circle(x,y,40,options);
    
      
      World.add(world,this.body);
    }
    display(){ 
      push();
      fill("pink");
      ellipseMode(RADIUS);
      ellipse(this.body.position.x,this.body.position.y,20,20)
     
      pop();
    }
  }
