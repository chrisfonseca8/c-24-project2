class Ball{
    constructor(x,y,raidus){
      
        this.body = Bodies.circle(x,y,raidus);
        this.raidus= raidus

     World.add(world,this.body);
        
    }

    display(){
        var pos = this.body.position;
        fill ("purple");
        rectMode(CENTER);
        ellipse(pos.x,pos.y,this.raidus);
        
    }
}