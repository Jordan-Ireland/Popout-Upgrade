
export function setupSettings() {
  game.settings.register("spellManagement", "verboseLogs", {
    name: "Enable more module logging.",
    hint: "Enables more verbose module logging. This is useful for debugging the module. But otherwise should be left off.",
    scope: "client",
    config: true,
    default: false,
    type: Boolean,
  });
}