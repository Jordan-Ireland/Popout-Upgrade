import { setupSettings } from "./settings.js";

class SpellManagementModule {
  constructor() {
    this.log("SpellManagementModule constructor");
    this.managedSpells = new Map();
  }

  async init() {
    this.log("Initializing SpellManagementModule");
    await registerHooks();
  }

  async registerHooks() {
    Hooks.on("createItem", async (item) => {
      this.log("createItem", item);
    });
  }

  log(msg, ...args) {
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

Hooks.on("init", () => {
  console.log("SpellManagementModule | Initializing");
  setupSettings();
});

Hooks.on("ready", async () => {
  console.log("SpellManagementModule | Ready");
  SpellManagementModule.singleton = new SpellManagementModule();
  await SpellManagementModule.singleton.init();
});