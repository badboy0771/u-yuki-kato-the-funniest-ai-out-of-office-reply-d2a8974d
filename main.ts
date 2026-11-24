import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I'm on vacation. My houseplant is in charge now — it answered your email with 'per my last fern' and filed for my promotion.";

// Mirror the competition gate: entry.txt must be UTF-8 text of 1 to 160
// characters, not only white space. Refuse to write an invalid line.
if (line.length < 1 || line.length > 160 || line.trim().length === 0) {
  throw new Error(`entry line must be 1-160 characters, got ${line.length}`);
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
