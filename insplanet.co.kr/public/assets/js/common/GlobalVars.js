window.GlobalVars = window.GlobalVars || {};
window.GlobalVars = {
  JSON_URL_PORTFOLIO: "./assets/data/portfolio_data.json",
  URL_BROCHURE_FILE: "brochure/insplanet_brief.pdf",
  DEVICE: {
    pixel_ratio: window.devicePixelRatio,
    isHighDPI: window.devicePixelRatio > 1,
  },

  IS_SIZE_MOBILE: false,
  IS_SIZE_TABLET: false,

  SIZE_MOBILE: 767.98,
  SIZE_PC: 1199.98,

  URL_HASH_NAME: "",
  IS_OPENED_MAIN_GALLERY_POPUP: false,
  IS_COMPLETED_GALLERY_LIST_IMG_LOAD: false,
  CLASS_NAME_OVERFLOW_HIDDEN: "overflow-hidden",
  CLASS_NAME_OVERFLOW_VISIBLE: "overflow-visible",
  ARR_SECTION_OFFSET_TOP: [], // 각 섹션 높이를 저장

  THEME: {
    COLOR_A_WHITE: "white",
    COLOR_A_BLACK: "black",
    CODE: {
      WHITE: "white",
      BLACK: "black",
    },
    CLASS_NAME: {
      WHITE: "theme-white",
      BLACK: "theme-black",
    },
  },

  // 섹션 ID명
  PAGE_SECTION_ID_NAME: {
    WORK: "work",
    COMPANY: "company",
    LIST: "list",
  },
};
