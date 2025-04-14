import { setupSettings } from "./settings.js";

class SpellManagementModule {
  constructor() {
    this.managedSpells = new Map();
  }

  async init() {
    this.log("Initializing SpellManagementModule");
    setupSettings();
    await registerHooks();
  }

  async registerHooks() {
    Hooks.on("createItem", async (item) => {
      this.log("createItem", item);
    });
  }

  log(msg, ...args) {
    // eslint-disable-next-line no-undef
    if (game && game.settings.get("spellManagement", "verboseLogs")) {
      const color = "background: #6699ff; color: #000; font-size: larger;";
      console.debug(`%c SpellManagementModule: ${msg}`, color, ...args);
    }
  }

  // Public API
  static spellManagement(app) {
    if (SpellManagementModule.singleton) {
      SpellManagementModule.singleton.SpellManagementModule(app);
    }
  }
}

/* eslint-disable no-undef */
Hooks.on("ready", async () => {
  SpellManagementModule.singleton = new SpellManagementModule();
  await SpellManagementModule.singleton.init();
});
/* eslint-enable no-undef */