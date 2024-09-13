export const DEFAULT_LOCALE_SETTING = "en";

export const LOCALES_SETTING: LocaleSetting = {
  en: {
    label: "English",
  },
  ja: {
    label: "日本語",
  },
};

interface LocaleSetting {
  [key: Lowercase<string>]: {
    label: string;
    lang?: string;
    dir?: "rtl" | "ltr";
  };
}
