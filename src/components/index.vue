<template>
  <div></div>
</template>

<script>
import Phaser from "phaser";

export default {
  name: "phaser-index",
  data() {
    return {
      game: "",
      platforms: "",
      player: "",
      cursors: "",
    };
  },
  created() {},
  computed: {},
  methods: {},
  mounted() {
    // eslint-disable-next-line no-unused-vars
    this.game = new Phaser.Game({
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 300 },
          debug: false,
        },
      },
      scene: {
        preload: preload,
        create: create,
        update: update,
      },
    });

    function preload() {
      this.load.setBaseURL(
        "https://crh-1309634948.cos.ap-shanghai.myqcloud.com"
      );
      this.load.image("sky", "/sky.png");
      this.load.image("ground", "/platform.png");
      this.load.image("star", "/star.png");
      this.load.image("bomb", "/bomb.png");
      this.load.spritesheet("dude", "/dude.png", {
        frameWidth: 32,
        frameHeight: 48,
      });
    }

    function create() {
      this.cursors = this.input.keyboard.createCursorKeys();
      this.add.image(400, 300, "sky");
      console.log(this, "this");
      this.platforms = this.physics.add.staticGroup();

      this.platforms.create(400, 568, "ground").setScale(2).refreshBody();

      this.platforms.create(600, 400, "ground");
      this.platforms.create(50, 250, "ground");
      this.platforms.create(750, 220, "ground");

      this.player = this.physics.add.sprite(100, 450, "dude");
      this.player.setBounce(0.3);
      this.player.setCollideWorldBounds(true);
      this.player.body.setGravityY(300);
      this.physics.add.collider(this.player, this.platforms);
      this.anims.create({
        key: "left",
        frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1,
      });

      this.anims.create({
        key: "turn",
        frames: [{ key: "dude", frame: 4 }],
        frameRate: 20,
      });

      this.anims.create({
        key: "right",
        frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1,
      });
    }

    function update() {
      if (this.cursors.left.isDown) {
        this.player.setVelocityX(-160);
        this.player.anims.play("left", true);
      } else if (this.cursors.right.isDown) {
        this.player.setVelocityX(160);
        this.player.anims.play("right", true);
      } else {
        this.player.setVelocityX(0);
        this.player.anims.play("turn");
      }

      if (this.cursors.up.isDown && this.player.body.touching.down) {
        this.player.setVelocityY(-530);
      }
    }
  },
};
</script>
<style lang="less" scoped></style>
