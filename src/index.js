import Phaser from "phaser";
import logoImg from "./assets/logo.png";
import fartSound from "./assets/sound/Fart.ogg";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 375,
  height: 667,
  stage: {
    backgroundColor: "#000",
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image("logo", logoImg);
  this.load.audio("fart", fartSound);
}

var sound;

function click() {
    console.log("test");
}
function create() {
  var logo = this.add.image(100, 100, "logo");
  logo.setInteractive();
  this.input.on('logo',click);

  sound = this.sound.add("fart");
  sound.play();

  this.tweens.add({
    targets: logo,
    y: 450,
    duration: 2000,
    ease: "Power2",
    yoyo: true,
    loop: -1
  });
}

function update() {

}
