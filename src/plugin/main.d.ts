export default class AnimatedTiles extends Phaser.Plugins.ScenePlugin {
  init(map: Phaser.Tilemaps.Tilemap, uuid: string);
  pause(layerIndex: number = null, mapIndex: number = null);
  resume(layerIndex: number = null, mapIndex: number = null);
  updateAnimatedTiles(x: number, y: number);
  removeMap(uuid: string);
  postUpdate(time: number, delta: number);
  setRate(rate: number, gid: number = null, map: number = null);
  resetRates(mapIndex: number = null);

  static register(manager: Phaser.Plugins.PluginManager);
}
