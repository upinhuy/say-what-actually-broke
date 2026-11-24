// Say What Actually Broke — entry program.
//
// Writes one single-line software error message to /output/entry.txt.
// The message names a real failure (out of memory) in plain words,
// tells the user the brutal truth about what broke, and stays funny
// enough to be repeated to a colleague — while still being shippable
// in a real product's error dialog.
//
// Node standard library only. No dependencies, no network access.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line: one concrete failure, one twist, one next step.
// Tightened in revision: dropped the redundant "and try again" so the
// em-dash punchline lands harder, and the line ends on the joke.
const ENTRY =
  "Out of memory. This app tried to hold your whole project in RAM at once and dropped it. Close a few tabs — it juggles better with less.";

// Gate: 1-200 characters, counted in Unicode code points.
const MAX_CHARS = 200;

function charCount(text: string): number {
  return [...text].length;
}

function validate(text: string): void {
  const chars = charCount(text);
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(
      `Entry must be 1-${MAX_CHARS} characters, got ${chars}.`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("Entry must not be only whitespace.");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Entry must be a single line.");
  }
  // No control characters (other than the line breaks already rejected).
  for (const ch of text) {
    const code = ch.codePointAt(0)!;
    if (code < 0x20 || code === 0x7f) {
      throw new Error("Entry must not contain control characters.");
    }
  }
}

function main(): void {
  validate(ENTRY);

  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });

  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY + "\n", "utf8");

  console.log(`Wrote ${charCount(ENTRY)} characters to ${outPath}`);
}

main();
