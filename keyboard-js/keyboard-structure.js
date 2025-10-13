export const app = {
  keyboard: {
    isUpperCase: false,
    en: {
      rows: [
        ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
        ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
        ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
        [" ", "z", "x", "c", "v", "b", "n", "m", ""],
        ["!#1", ",", "English (US)", "space", ".", "Done"],
      ],
      specialKeys: {
        " ": {
          class: "fa-solid fa-arrow-up  virtual-keyboard__container__arrow-key",
        },
        "": {
          class:
            "fa-solid fa-delete-left virtual-keyboard__container__delete-key",
        },
        "!#1": { class: "virtual-keyboard__container__symbol-switcher" },
        "English (US)": { class: "virtual-keyboard__container__english" },
        space: { class: "virtual-keyboard__container__space-button" },
        Done: {
          class: "virtual-keyboard__container__submit-button",
        },
      },
    },
    fa: {
      rows: [
        ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"],
        ["ص", "ث", "ق", "ف", "ع", "ه", "خ", "ح", "ج", "ج"],
        ["ش", "س", "ی", "ب", "ل", "ا", "ت", "ن", "م", "پ"],
        [" ", "ط", "ز", "ر", "د", "و", "ک", "گ", ""],
        ["!#1", ",", "فارسی (Persian)", "space", ".", "Done"],
      ],
      specialKeys: {
        " ": {
          class: "fa-solid fa-arrow-up  virtual-keyboard__container__arrow-key",
        },
        "": {
          class:
            "fa-solid fa-delete-left virtual-keyboard__container__delete-key",
        },
        "!#1": { class: "virtual-keyboard__container__symbol-switcher" },
        "فارسی (Persian)": { class: "virtual-keyboard__container__persian" },
        space: { class: "virtual-keyboard__container__space-button" },
        Done: { class: "virtual-keyboard__container__submit-button" },
      },
    },
    symbols: {
      rows: [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
        ["+", "*", "=", "-", "_", "?", "/", "[", "]", "|"],
        ["'", ":", ";", "$", "@", ")", "(", "}", "{"],
        ["", "`", ">", "<", '"', "~", "&", "^", " "],
        ["ABC", ",", "English (US)", "space", ".", "Done"],
      ],
      specialKeys: {
        "": {
          class: "fa-solid fa-arrow-up virtual-keyboard__container__arrow-key",
        },
        " ": {
          class:
            "fa-solid fa-delete-left virtual-keyboard__container__delete-key",
        },
        ABC: { class: "virtual-keyboard__container__reverse-switcher" },
        "English (US)": { class: "virtual-keyboard__container__english" },
        space: { class: "virtual-keyboard__container__space-button" },
        Done: { class: "virtual-keyboard__container__submit-button" },
      },
    },
  },
};
