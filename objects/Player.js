class Player extends Entity{
  constructor(health=0, speed=0, x=0, y=0, scene=null, heal_speed=0, sprite_name=null, sprite_frame=null){
    super(health, speed, x, y, scene, heal_speed, sprite_name, sprite_frame);
    this.create();
    this.dir = "down";
  }

  generateAnimations(){
    this._scene.anims.create({
      key: 'moveRight',
      frames: this._scene.anims.generateFrameNames(this._sprite_name, {start: 143, end: 151})
    });
    this._scene.anims.create({
      key: 'moveLeft',
      frames: this._scene.anims.generateFrameNames(this._sprite_name, {start: 117, end: 125})
    });
    this._scene.anims.create({
      key: 'moveDown',
      frames: this._scene.anims.generateFrameNames(this._sprite_name, {start: 130, end: 138})
    });
    this._scene.anims.create({
      key: 'moveUp',
      frames: this._scene.anims.generateFrameNames(this._sprite_name, {start: 104, end: 112})
    });

  }

  create(){
    this.move_keys = this._scene.input.keyboard.addKeys('W,S,A,D');
    this.generateAnimations();
  }

  updateSprite(){
    this._sprite.x = this.x;
    this._sprite.y = this.y;
  }

  move(){
    if (this.move_keys.W.isDown && this.move_keys.D.isDown){
      this.dir = "right";
      this.moveUp();
      this.moveRight();
      this._sprite.play("moveRight", true);
    }
    else if (this.move_keys.S.isDown && this.move_keys.D.isDown){
      this.dir = "right";
      this.moveDown();
      this.moveRight();
      this._sprite.play("moveRight", true);
    }
    else if (this.move_keys.W.isDown && this.move_keys.A.isDown){
      this.dir = "left";
      this.moveUp();
      this.moveLeft();
      this._sprite.play("moveLeft", true);
    }
    else if (this.move_keys.S.isDown && this.move_keys.A.isDown){
      this.dir = "left";
      this.moveDown();
      this.moveLeft();
      this._sprite.play("moveLeft", true);
    }
    else if (this.move_keys.W.isDown === true){
      this.dir = "up";
      this.moveUp();
      this._sprite.play("moveUp", true);
    }
    else if (this.move_keys.A.isDown === true){
      this.dir = "left";
      this.moveLeft();
      this._sprite.play("moveLeft", true);
    }
    else if (this.move_keys.S.isDown === true){
      this.dir = "down"
      this.moveDown();
      this._sprite.play("moveDown", true);
    }
    else if (this.move_keys.D.isDown === true){
      this.dir = "right"
      this.moveRight();
      this._sprite.play("moveRight", true);
    }

    if (this.move_keys.W.isUp && this.move_keys.A.isUp && this.move_keys.S.isUp && this.move_keys.D.isUp){
      if (this.dir == "up"){
        this._sprite.setFrame(104);
      }
      else if (this.dir == "left"){
        this._sprite.setFrame(117);
      }
      else if (this.dir == "down"){
        this._sprite.setFrame(130);
      }
      else if (this.dir == "right"){
        this._sprite.setFrame(143);
      }
    }
  }

  update(){
    this.move();
    this.updateSprite();
  }




}
