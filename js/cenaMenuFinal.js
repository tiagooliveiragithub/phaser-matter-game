export default class cenaMenuFinal extends Phaser.Scene {
  constructor() {
    super({ key: 'cenaMenuFinal' });
  }

  preload() {
    // Load menu assets
      this.load.image("partes", "assets/images/RPG Nature Tileset.png");
      this.load.tilemapTiledJSON("mapa", "assets/images/mapa.json");
      this.load.image('restart', 'assets/images/restart.png');
  }

  create() {
    // Add menu background image
  const map = this.make.tilemap({key: "mapa"});
  this.map = map;
  const tileset = map.addTilesetImage("RPG Nature Tileset", "partes", 32,32,0,0);
  const camada1 = map.createStaticLayer("Camada de Blocos 1", tileset,0,0);
  
  var cenaPrincipal = this.scene.get("CenaPrincipal");
  this.score = this.time.now - cenaPrincipal.score;
  this.score /= 1000;

  const sobrevivexText = this.add.text(256, 160, 'You won the game!', { fontSize: '20px', fill: '#fff' });
  const score = this.add.text(256, 200, `Time: ${this.score.toFixed(2)} sec`, { fontSize: '32px', fill: '#fff' });
  sobrevivexText.setOrigin(0.5, 1);
  score.setOrigin(0.5, 1);

  var restartButton = this.add.sprite(256, 400, 'restart').setInteractive();
    restartButton.setScale(0.1);
    restartButton.on('pointerdown', () => {
      this.scene.stop();
      this.scene.start("CenaPrincipal");
    });
  }
}