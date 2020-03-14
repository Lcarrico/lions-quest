class Entity{

  constructor(health=0, speed=0, x=0, y=0, scene=null, heal_speed=0, sprite_name=null, sprite_frame=null){
    this._health = health;
    this._max_health = health;
    this._heal_speed = heal_speed;
    this._speed = speed;
    this._x = x;
    this._y = y;
    this._scene = scene;
    this._sprite = scene.add.sprite(x, y, sprite_name, sprite_frame);
  }

  get health() {
    return this._health;
  }

  heal(value) {
    if (this._health + value >= this._max_health) {
      this._health = this._max_health;
    }
  }

  damage(value) {
    if (this._health - value <= 0) {
      this._health = 0;
    }
  }

  get speed() {
    return this._speed;
  }

  get x() {
    return this._x;
  }

  moveLeft() {
    this._x -= this._speed;
  }

  moveRight() {
    this._x += this._speed;
  }

  get y() {
    return this._y;
  }

  moveUp(){
    this._y -= this._speed;
  }

  moveDown(){
    this._y += this._speed;
  }

  get sprite() {
    return this._sprite;
  }

  set health(value){
    this._health = value;
  }

  set max_health(value){
    this._max_health = value;
  }

  set heal_speed(value){
    this._heal_speed = value;
  }

  set speed(value){
    this._speed = value;
  }

  set x(value){
    this._x = value;
  }

  set y(value){
    this._y = value;
  }

  set scene(value){
    this._scene = value;
  }

  set sprite(value){
    this._sprite = value;
  }
}
