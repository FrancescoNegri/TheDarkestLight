/**
 * The plugins namespace.
 * @namespace TDLib.Plugins
 */

/**
 * The global plugins namespace.
 * @namespace TDLib.Plugins.GlobalPlugins
 */

 /**
  * The room plugins namespace.
  * @namespace TDLib.Plugins.RoomPlugins
  */

/**
 * Class representing a plugin which manages a room.
 * @extends Phaser.Plugins.ScenePlugin
 * @memberof TDLib.Plugins
 */
class TDLRoomPlugin extends Phaser.Plugins.ScenePlugin {
    /**
     * Create a TDLRoomPlugin.
     * @param {TDLib.Rooms.Room|Phaser.Scene} room - The room which contains the plugin.
     * @param {Phaser.Plugins.PluginManager} pluginManager - A reference to the plugin manager.
     */
    constructor(room, pluginManager) {
        super(room, pluginManager);

        /**
         * The room containing this plugin.
         * @type {TDLib.Rooms.Room}
         */
        this.room = room;
    }
}