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
        

     
    	
    }
    create() {
        //this is where we define objects, like sharks and bubbles, to be used in the game
        
        emitter = new Phaser.Events.EventEmitter();  //Communication between game parts
        
        this.road = new Road({scene:this});
        this.road.x = game.config.width/2;
        this.road.makeLines();
        model.score = 100;
         
       
    }
    update() 
    {
        //this is a constant loop. Place things that need to be checked over and over.
        
        this.road.moveLines();
        this.road.moveObject();
        
        
    }
}