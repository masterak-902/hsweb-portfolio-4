export const languages = {
    ja: "English",
    en: '日本語'
  };
  
  export const defaultLang = 'ja';
  
  export const ui = {
    ja: {
      'nav.home': 'ホーム',
      'nav.contact': 'お問い合わせ', 
      'mode.light': 'ライトモード',
      'mode.dark': 'ダークモード',
    },
    en: {
      'nav.home': 'Home',
      'nav.contact': 'Contact',
      'mode.light': 'Light Mode',
      'mode.dark': 'Dark Mode',
    },
  } as const;

// as const について
// リテラル型の推論: プロパティがリテラル型として推論されるため、型安全性が向上します。
// 変更不可能: プロパティがreadonlyとして扱われるため、誤って変更されることを防ぎます。
// as constを使用することで、オブジェクトのプロパティがリテラル型として推論され、変更不可能
// な定数として扱われるため、型安全性が向上します。これにより、コードの信頼性と保守性が向上
// します。