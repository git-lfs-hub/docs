import Handlebars from "handlebars";
import vars from "../vars.json" with { type: "json" };

export const plugin = {
  name: "handlebars-preprocessor",
  version: "1.0.0",
  capabilities: ["build"],
};

export function onBeforeParse(src, frontmatter) {
  try {
    return Handlebars.compile(src, {strict: true})(vars);
  } catch (e) {
    const err = e instanceof Error ? e.message : String(e);
    const msg = [err];
    for (const [k, v] of Object.entries(frontmatter ?? {})) {
      msg.push(`  ${k}: ${v}`);
    }
    const match = err.match(/ - (\d+):(\d+)$/);
    if (match) {
      const lines = src.split("\n");
      const lineNo = parseInt(match[1]);
      const colNo = parseInt(match[2]);
      const prefix = `line ${lineNo}: `;
      msg.push(`  ${prefix}${lines[lineNo - 1]}`);
      msg.push(`  ${" ".repeat(prefix.length + colNo - 1)}^`);
    }
    console.error(msg.join("\n"));
    process.exit(1);
  }
}
