import hljs from 'highlight.js';

export const detectLanguage = (code:string) => {
    return hljs.highlightAuto(code).language || "plaintext";
  };
