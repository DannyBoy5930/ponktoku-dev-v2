import { defaultLang, type Language, languages, ui } from "./ui";

// Returns lang from URL
export function getLangFromUrl(url: URL) {
  return getLangFromSlug(url.pathname);
}

// Get lang from given slug, checks if "en" or "ja" is present
export function getLangFromSlug(slug: string) {
  for (const lang in languages) {
    if (slug.includes(`/${lang}/`) || slug.startsWith(`${lang}/`)) {
      return lang as Language;
    }
  }

  return defaultLang;
}

// Returns a function to translate the path based on the selected language
export function useTranslatedPath(lang: Language) {
  return function translatePath(path: string, l: string = lang) {
    return l === defaultLang ? path : `/${l}${path}`;
  };
}

// Returns a function to retrieve translations based on the selected language
export function useTranslationsAlter(lang: Language) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

// Returns an object with language, translated path function, and translations function based on the URL
export function useI18n(url: URL) {
  const lang = getLangFromUrl(url);
  const p = useTranslatedPath(lang);
  const t = useTranslationsAlter(lang);
  return { lang, p, t };
}

/**
 * @example /post/en/slug -> /post/slug
 * @example /en/writing -> /writing
 */
// Replaces language prefix in the URL path with an empty string
export function getDefaultPathname(url: string | URL) {
  let result = typeof url === "string" ? url : url.pathname;

  for (const lang in languages) {
    result = result.replace(`/${lang}/`, "/");
  }

  return result;
}
