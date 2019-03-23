class Road extends Phaser.GameObjects.Container //collection of grouped objects that move together
{
    constructor(config)
    {
        super(config.scene);
        this.scene = config.scene;
        this.back= this.scene.add.image(0,0,"road");
        this.add(this.back);
        this.scene.add.existing(this);
        
        //this.back.displayWidth = game.config.width*0.5;
        //this.back.scaleY = this.back.scaleX;
        Align.scaleToGameW(this.back, .5);
        
        this.setSize(this.back.displayWidth, game.config.height);
        
        this.lineGroup = this.scene.add.group();
        //
        //
        this.count = 0;
        
        //add a car
        this.car = this.scene.add.sprite(this.displayWidth/4, game.config.height*.9, "cars");
        this.add(this.car);
        Align.scaleToGameW(this.car, .10);
        //
        //click to switch lanes
        this.back.setInteractive();
        this.back.on('pointerdown', this.changeLanes, this);
        this.addObject();
    }
    
    addObject()
    {
        var objs = [{key:'pcar1', speed:10, scale:10},{key:'pcar2', speed:10,scale:10},{key:'cone', speed:20,scale:5},{key:'barrier', speed:20,scale:8}];
        var index = Math.floor(Math.random()*4);
        var key = objs[index].key;
        var speed = objs[index].speed;
        var scale = objs[index].scale/100;
        
        this.object = this.scene.add.sprite(-this.displayWidth/4,0, key);
        this.object.speed = speed;
        
        this.add(this.object);
        Align.scaleToGameW(this.object, scale);
        
        // randomize obstacle lane
        var lane = Math.random()*100;
        if (lane<50)
            {
                this.object.x = this.displayWidth/4;
            }
    }
    
    changeLanes()
    {
        if (this.car.x > 0)
            {
                this.car.x = -this.displayWidth/4;
            }
        else
            {
               this.car.x = this.displayWidth/4; 
            }
    }
    
    makeLines()
    {
        this.vSpace = this.displayHeight/10;
        for (var i = 0; i < 20; i++) 
            {
                var line = this.scene.add.image(this.x, this.vSpace*i,"line");
                line.oy = line.y;
                this.lineGroup.add(line);
            }
    }
    
    moveLines()
    
    {
        this.lineGroup.children.iterate(function(child){
            child.y += this.vSpace/20;
        }.bind(this));
        this.count++;
        if (this.count==20)
            {
                this.count = 0;
                this.lineGroup.children.iterate(function(child){
            child.y = child.oy;
        }.bind(this));
            }
    }
    
    moveObject()
    {
        this.object.y+=this.vSpace/ this.object.speed;
        if (this.object.y>game.config.height)
            {
                this.object.destroy();
                this.addObject();
            }
    }
       
        
}
    
