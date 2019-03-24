class FlatButton extends Phaser.GameObjects.Container
{
    constructor(config)
    {
        if (!config.scene)
            {
                console.log("missing scene!");
                return;
            }
        if (!config.key)
            {
                console.log("missing key");
                return;
            }
        super(config.scene);
        
        this.scene=config.scene;
        this.back = this.scene.add.image(0,0, config.key);
        
        this.add(this.back);
        
        if (config.text)
            {
                this.text1 = this.scene.add.text(0,0,config.text);
                this.text1.setOrigin(0.5,0.5);
                this.add(this.text1);
            }
        if (config.x)
            {
                this.x = config.x;
            }
        if (config.y)
            {
                this.y = config.y;
            }
        
        this.scene.add.existing(this);
    }
}