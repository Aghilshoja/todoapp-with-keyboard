import { keyboard } from "./state-app.js";
import { app } from "./keyboard-structure.js";
import { toggleLangs } from "./toggle-langs.js";
import "./get-characters.js";

export const keyboardManager = new keyboard(app);

const langs = keyboardManager.getCharacters();
toggleLangs(langs.keyboard.en);
