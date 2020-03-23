class Game extends Phaser.Scene {
  constructor(){
    super("game");
  }
  init(){

  }
  preload() {

  }
  create(){
    this.add.text(20, 20, "This is the game");

    this.player = new Player(100, 2, 100, 100, this, 0, "player", 130);

    // let player = this.add.sprite(100,100,"player", 130);
  }
  update(){
    this.player.update();
  }
}
