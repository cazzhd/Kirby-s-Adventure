const levels = {
    "level": { // Level 1
        next_level: "level1",
        hud: "HUD",
        isDynamic: true
    },

    "level1": {
        next_level: "level2",
        hud: "HUD",
        isDynamic: true
    },

    "level2": {
        next_level: "levelPreBoss",
        hud: "HUD",
    },

    "levelPreBoss": {
        next_level: "levelBoss",
        hud: "HUD",
    },

    "levelBoss": {
        next_level: "level",
        hud: "BOSS",
        isDynamic: false
    }
};