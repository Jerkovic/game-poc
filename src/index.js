import Phaser from "phaser";
import logoImg from "./assets/cards/barnkonventionen64.jpg";
import fartSound from "./assets/sound/Fart.mp3";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 375,
  height: 667,
  input: {
    keyboard: {
      target: window
    },
    mouse: {
      target: null,
      capture: true
    },
    activePointers: 1,
    touch: {
      target: null,
      capture: true
    },
    smoothFactor: 0,
    gamepad: false,
    windowEvents: true,
  },
  stage: {
    backgroundColor: "#000",
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};
var sound;
var logo;
const game = new Phaser.Game(config);

function preload() {
  this.input.enabled = true;
  this.load.audio("fart", fartSound);
  this.load.image("logo", logoImg);
}


function create() {
  logo = this.add.image(250, 300, "logo");
  logo.width = 100;
  logo.height = 100;

  sound = this.sound.add("fart");

  this.input.on('touchstart', (pointer) => {
    sound.resume;
    sound.play();
  });

  var tween1 = this.tweens.add({
    targets: logo,
    scaleX: 0.01,
    ease: 'Linear',
    duration: 300,
    repeat: 5,
    yoyo: true
  });



}
function update() {
  this.input.on('pointerdown', function() {
      sound.resume;
      sound.play();
  });
}
