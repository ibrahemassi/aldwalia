import { withBase } from '@/lib/basePath';

export default function generateStylesheetObject(stylesheets) {
  return stylesheets.map((stylesheet) => ({
    rel: 'stylesheet',
    url: stylesheet.startsWith('http') ? stylesheet : withBase(stylesheet),
    precedence: 'default',
  }));
}
