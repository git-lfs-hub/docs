import Handlebars from 'handlebars';

import vars from '../vars.json' with { type: 'json' };

export const plugin = {
  name: 'handlebars-preprocessor',
  version: '1.0.0',
  capabilities: ['build'],
} as const;

export function onBeforeParse(src: string): string {
  try {
    return Handlebars.compile(src, { strict: true })(vars);
  } catch (e) {
    var err: Error;
    if (e instanceof Error) {
      err = e;
      err.message = err.message.replace(/ in undefined/, '');
    } else {
      err = new Error(String(e));
    }
    const msg = [''];
    const match = err.message.match(/ - (\d+):(\d+)$/);
    if (match) {
      const lines = src.split('\n');
      const lineNo = parseInt(match[1]!);
      const colNo = parseInt(match[2]!);
      msg.push(`${lines[lineNo - 1]}`);
      msg.push(`${' '.repeat(colNo - 1)}^`);
    }
    err.message += msg.join('\n');
    throw err;
  }
}
