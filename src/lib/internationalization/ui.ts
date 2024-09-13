export const languages = {
  en: "English",
  ja: "日本語",
} as const;

export type Language = keyof typeof languages;

export const defaultLang = "en";

export const ui = {
  en: {
    "404.desc": "Cannot find the related document.",
    "nav.title": "My Space",
    "nav.writing": "Writing",
    "nav.writing.desc": "A space for storing insights",
    "nav.note": "Note",
    "nav.note.desc": "A space for recording useful knowledge",
    "nav.craft": "Craft",
    "nav.craft.desc": "A space for creating something interesting",
    "index.name": "Danny Bao",
    "index.desc":
      `<p>Passionate about interacting <b>smoothly</b> with users and <b>simplifying</b> complex things into simple and convenient forms.</p>` +
      `<p>Enjoy exploring and reflecting, and aim to record discoveries along the way.</p>`,
    "index.currentWork": `<p>Currently not working.</p>`,
  },
  ja: {
    "404.desc": "このページは存在しない。",
    "nav.title": "私のスペース",
    "nav.writing": "文書",
    "nav.writing.desc": "文書を保存するスペース",
    "nav.note": "ノート",
    "nav.note.desc": "ノートは便利物を書きます",
    "nav.craft": "クラフト",
    "nav.craft.desc": "クラフトを保存するスペース",
    "index.name": "バオ ダニー",
    "index.desc": `<p>いつかデスクリプションを書きます.</p>`,
    "index.currentWork": `<p>私は今無職です</p>`,
  },
} satisfies Record<Language, { [key: string]: string }>;
