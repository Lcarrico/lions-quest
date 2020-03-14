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
    let player = this.add.sprite(100,100,"player", 130);
  }
  update(){

  }
}
