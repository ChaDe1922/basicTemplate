class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
        //this is where we load our assets, like images and sounds, before they need to be used
        
        this.load.image("road", "images/road.jpg");
        this.load.spritesheet("cars", "images/cars.png", {frameWidth: 60, frameHeight: 126});
        this.load.image("line", "images/line.png");
        this.load.image("pcar1", "images/pcar1.png");
        this.load.image("pcar2", "images/pcar2.png");
        this.load.image("cone", "images/cone.png");
        this.load.image("barrier", "images/barrier.png");
        
        this.load.image("button1", "images/ui/buttons/2/1.png");
        this.load.image("button2", "images/ui/buttons/2/4.png");

     
    	
    }
    create() {
        //this is where we define objects, like sharks and bubbles, to be used in the game
        
        emitter = new Phaser.Events.EventEmitter();  //Communication between game parts
        controller=new Controller();
        this.road = new Road({scene:this});
        this.road.x = game.config.width/2;
        this.road.makeLines();
        
        this.sb = new ScoreBox({scene:this});
        this.sb.x = game.config.width-50;
        this.sb.y = 50;
        model.score = 100;
        
        this.alignGrid = new AlignGrid ({scene:this, rows:5, cols:5});
        this.alignGrid.showNumbers();
        this.alignGrid.placeAtIndex(4, this.sb);
        
        var flatButton = new FlatButton ({scene:this, key:'button1', text:'Press Me!', x:240, y:100, event: 'button_pressed'});
        
        var flatButton2 = new FlatButton ({scene:this, key:'button2', text:'Press Me!', x:240, y:300, event: 'button_pressed'});
       
    }
    update() 
    {
        //this is a constant loop. Place things that need to be checked over and over.
        
        this.road.moveLines();
        this.road.moveObject();
        
        
    }
}