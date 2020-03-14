class Menu extends Phaser.Scene {
  constructor(){
    super("menu");
  }
  init(){

  }
  preload() {

  }
  create(){
    // this.add.text(20, 20, "This is the menu", {color: "#fff"});
    this.add.image(this.game.renderer.width / 2, 4 * this.game.renderer.height / 16, "title");
    let playButton = this.add.image(this.game.renderer.width / 2, 8 * this.game.renderer.height / 16, "playButton");

    playButton.setInteractive();

    playButton.on("pointerover", ()=>{
      playButton.setScale(1.5);
    });

    playButton.on("pointerout", ()=>{
      playButton.setScale(1);
    });

    playButton.on("pointerup", ()=>{
      this.scene.start("game");
    });

  }
  update(){

  }
}
