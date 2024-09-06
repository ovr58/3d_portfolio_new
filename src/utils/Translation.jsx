import English from '../languages/eng';
import Russian from '../languages/rus';
import Kartuli from '../languages/ka';
// === import additional language files here === //

// input: language code in string
// returns an object of translated strings in the language
export const getTranslations = (langCode) => {
  if (langCode === 'en') return English;
  if (langCode === 'ru') return Russian;
  if (langCode === 'ka') return Kartuli;
  // === add conditionals here for additional languages here === //
};

// input: language code in string & phrase key in string
// returns an corresponding phrase value in string
export const localize = (langCode, phraseKey) => {
  const lang = getTranslations(langCode);
  return lang[phraseKey];
};
