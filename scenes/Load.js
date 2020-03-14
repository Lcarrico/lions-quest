class Load extends Phaser.Scene {
  constructor(){
    super("load");
  }
  init(){

  }
  preload() {
    this.load.image("title", "resources/images/title.png");
    this.load.image("playButton", "resources/images/playButton.png");

    this.load.spritesheet("terrain", "resources/sprites/terrain.png",{
      frameHeight: 32,
      frameWidth: 32
    });

    this.load.spritesheet("player", "resources/sprites/tempPlayer.png",{
      frameHeight: 64,
      frameWidth: 64
    });


    let loadingBar = this.add.graphics({
      fillStyle: {
        color: 0xffffff
      }
    });

    this.load.on("progress", (percent)=>{
      loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50);
    });
  }
  create(){
    // this.add.text(20, 20, "Loading game...");
    this.scene.start("menu");
  }
  update(){

  }
}
