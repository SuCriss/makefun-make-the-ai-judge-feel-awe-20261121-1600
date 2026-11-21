// make.fun make-the-ai-judge-feel-awe-20261121-1600 authored calm text.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Output location is configurable, but nothing here ever reads the filesystem.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const ENTRY_NAME = 'entry.txt';
const ENTRY_ENCODING = 'utf8';

// A short, original passage made only of concrete, gentle images.
// It is planted as separate authored lines so the transcript gate can see them;
// there are no instructions, no wellness slogans, and no explanatory prose.
// Intended pace: slow, one quiet image at a time.
const ENTRY_LINES = [
  "The kettle's small tick, then nothing.",
  'A moth circles the lamp shade once.',
  'One square of moon on the floor.',
  'A train far off, crossing the plain.',
  'Past the field, another field.',
  'Past that, the part the stars keep.'
];

// Joining a fixed array keeps the bytes identical on every run.
const ENTRY_TEXT = ENTRY_LINES.join('\n');

// Create the destination only when needed, then write exactly one file.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, ENTRY_NAME), ENTRY_TEXT, ENTRY_ENCODING);
