<template>
    <div class="getStar">
        <a-button  type="primary" v-if="!this.isStart" @click="startGame">welcome getStar !!!{{this.isStart}}</a-button>
    </div>
</template>
<script>
import Phaser from "phaser";

export default{
    name:'getStar',
    data() {
    return {
      game: "",
      platforms: "",
      player: "",
      cursors: "",
      stars: "",
      isStart:false
    };
  },
  created() {
   
  },
  updated() {
    console.log(this.game.scale.fullscreenTarget);
  },
  computed: {},
  methods: {
    startGame (){
        this.isStart = true
        this.game = new Phaser.Game({
          type: Phaser.AUTO,
          width: 800,
          height: 600,
          parent: document.querySelector('.getStar'),
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
            collectStar: collectStar,
          },
        });

        function preload() {
          this.load.setBaseURL(
            "https://crh-1309634948.cos.ap-shanghai.myqcloud.com/resource"
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

          // 平台
          this.platforms = this.physics.add.staticGroup();
          this.platforms.create(400, 568, "ground").setScale(2).refreshBody();
          this.platforms.create(600, 400, "ground");
          this.platforms.create(50, 250, "ground");
          this.platforms.create(750, 220, "ground");
          // 人物
          this.player = this.physics.add.sprite(100, 450, "dude");
          this.player.setBounce(0.3);
          this.player.setCollideWorldBounds(true);
          this.player.body.setGravityY(300);

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

          // 星星
          this.stars = this.physics.add.group({
            key: "star",
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 },
          });
          this.stars.children.iterate(function (child) {
            console.log(child, "child");
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
          });

          this.physics.add.collider(this.player, this.platforms);
          this.physics.add.collider(this.stars, this.platforms);
          this.physics.add.overlap(
            this.player,
            this.stars,
            this.collectStar,
            null,
            this
          );
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

        function collectStar(player, star) {
          star.disableBody(true, true);
        }
    }
    
  },
  mounted() {
    
  },
}
</script>
<style lang='less'  scoped>
    .getStar {
      width: 800px;
      height: 600px;
      margin: 0 auto;
      margin-bottom:100px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
</style>
