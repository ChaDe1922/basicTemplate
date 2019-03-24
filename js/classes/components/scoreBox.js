class ScoreBox extends Phaser.GameObjects.Container
{
    constructor(config)
    {
        super(config.scene);
        this.scene = config.scene;
         this.text1=this.scene.add.text(0,0,"SCORE:0");
        this.text1.setOrigin(0.5,0.5);     //places text to center of container
        this.add(this.text1);     //adds text to container
        
        this.scene.add.existing(this);  //add scorebox to the visual scene
        
        emitter.on(G.SCORE_UPDATED, this.scoreUpdated, this);
    }
    scoreUpdated()
    {
        this.text1.setText("SCORE:" +model.score);
    }
}