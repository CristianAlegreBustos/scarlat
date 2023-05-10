import hljs from 'highlight.js';

export const detectLanguage = (code: string) => {
  const languages = hljs.listLanguages();
  const result = hljs.highlightAuto(code, languages);
  
  if (result.relevance > 5 && result.language) {
    return result.language;
  }

  return 'plaintext';
};

