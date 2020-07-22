class Launcher {
    constructor(bdyA,pntB){
        var options = {
            bodyA:bdyA,
           pointB:pntB,
           stiffness:0.2,
           length: 25

        }
        this.launcher = Constraint.create(options);
        World.add(world,this.launcher);
    }
    display(){
        if(this.launcher.bodyA != null){  
        var PointA = this.launcher.bodyA.position;
        var PointB = this.launcher.pointB;
        line(PointA.x,PointA.y,PointB.x,PointB.y)
    }
}
    fly(){
        this.launcher.bodyA = null;
    }
}